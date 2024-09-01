import React, { useState } from 'react';
import { Modal, Box, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as turf from '@turf/turf';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import shpwrite from 'shp-write'; // Library for converting GeoJSON to Shapefile

const ExportModal = ({ open, onClose, shapes }) => {
  const [exportType, setExportType] = useState('');

  const handleExport = async () => {
    let data = null;

    // Convert shapes to GeoJSON
    const geojson = {
      type: 'FeatureCollection',
      features: shapes.map((shape) => ({
        type: 'Feature',
        geometry: shape.geometry,
        properties: {
          name: shape.name,
          type: shape.type,
          severity: shape.severity,
        },
      })),
    };

    if (exportType === 'GeoJSON') {
      data = JSON.stringify(geojson);
      FileSaver.saveAs(new Blob([data], { type: 'application/geo+json' }), 'shapes.geojson');
    } else if (exportType === 'KML') {
      // Convert GeoJSON to KML using turf
      const kml = turf.featureCollectionToKML(geojson);
      FileSaver.saveAs(new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' }), 'shapes.kml');
    } else if (exportType === 'Shapefile') {
      // Convert GeoJSON to Shapefile
      const zip = new JSZip();
      const shp = shpwrite.zip(geojson); // Converts GeoJSON to Shapefile format in a zip
      zip.file('shapes.zip', shp);
      data = await zip.generateAsync({ type: 'blob' });
      FileSaver.saveAs(data, 'shapes.zip');
    }

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="export-modal-title"
      aria-describedby="export-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="export-modal-title" variant="h6" component="h2">
          Export Shapes
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="export-select-label">Export as</InputLabel>
          <Select
            labelId="export-select-label"
            id="export-select"
            value={exportType}
            label="Export as"
            onChange={(e) => setExportType(e.target.value)}
          >
            <MenuItem value="GeoJSON">GeoJSON</MenuItem>
            <MenuItem value="KML">KML</MenuItem>
            <MenuItem value="Shapefile">Shapefile</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handleExport} disabled={!exportType}>
            Export
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ExportModal;
