import React, { useState } from 'react';
import { Chip, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ExportModal from './ExportModal'; // Import the new component

const ShapeDrawer = () => {
  const shapes = useSelector((state) => state.shapes.shapes); // Get shapes from Redux store
  const [filterType, setFilterType] = useState('');
  const [openExportModal, setOpenExportModal] = useState(false);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredShapes = filterType
    ? shapes.filter((shape) => shape.type === filterType)
    : shapes;

  return (
    <div className="w-80 p-4 bg-gray-100 h-full fixed left-0 top-0 z-50 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Shapes Info</h2>

      <FormControl fullWidth className="mb-4">
        <InputLabel>Filter by Type</InputLabel>
        <Select
          value={filterType}
          label="Filter by Type"
          onChange={handleFilterChange}
        >
          <MenuItem value="">All Types</MenuItem>
          <MenuItem value="Tree">Tree</MenuItem>
          <MenuItem value="Building">Building</MenuItem>
          <MenuItem value="Waterbody">Waterbody</MenuItem>
          <MenuItem value="Park">Park</MenuItem>
          <MenuItem value="Road">Road</MenuItem>
        </Select>
      </FormControl>

      {filteredShapes.map((shape, index) => (
        <div key={shape.id} className="mb-4 p-2 border-b border-gray-300">
          <p className="text-sm text-gray-700 mb-1">Index: {index + 1}</p>
          <p className="text-sm text-gray-700 mb-1">Name: {shape.name}</p>
          <p className="text-sm text-gray-700 mb-1">Type: {shape.type}</p>
          <Chip
            label={shape.severity}
            sx={{
              textTransform: 'capitalize',
              px: 2,
              py: 1,
              borderRadius: '9999px',
              backgroundColor: 
                shape.severity === 'High'
                  ? 'red'
                  : shape.severity === 'Medium'
                  ? 'orange'
                  : shape.severity === 'Low'
                  ? 'yellow'
                  : 'gray',
              color:
                shape.severity === 'High' || shape.severity === 'Medium'
                  ? 'white'
                  : 'black',
            }}
          />
        </div>
      ))}

      {/* <Button
        variant="contained"
        color="primary"
        className="mt-4"
        onClick={() => setOpenExportModal(true)}
      >
        Export
      </Button>

      <ExportModal
        open={openExportModal}
        onClose={() => setOpenExportModal(false)}
        shapes={shapes}
      /> */}
    </div>
  );
};

export default ShapeDrawer;
