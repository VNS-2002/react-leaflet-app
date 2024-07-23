/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../Layout";
import L from "leaflet";
import 'leaflet-draw';
import parse_georaster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import "leaflet-geometryutil";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import polylabel from "@mapbox/polylabel";
import { useEffect, useState, useRef } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useParams } from "react-router-dom";
import {
  BaseLayerIcon,
  GoogleSateliteMapIcon,
  GoogleStreetMapIcon,
  OpenTopoMapIcon,
} from "../Assets/icons";
import * as turf from "@turf/turf";
const LeafletPage1 = () => {
  const [mapInitialized, setMapInitialized] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState(false);
  const [baseLayer, setBaseLayer] = useState("GoogleStreetMap");
  const toolbarDivRef = useRef(null);
  useEffect(() => {
    const map = L.map("map").setView([40.712216, -74.22655], 13);
    mapRef.current = map;
    googleMapLayer.addTo(mapRef.current);
    setMapInitialized(true);
    setBaseLayer("GoogleStreetMap");
    map.removeControl(map._controlCorners.topleft);
    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);

    var MyCustomMarker = L.Icon.extend({
      options: {
        shadowUrl: null,
        iconAnchor: new L.Point(12, 12),
        iconSize: new L.Point(24, 24),
        iconUrl: "/src/pages/placeholder.png",
      },
    });

    var options = {
      position: "topright",
      draw: {
        polyline: {
          shapeOptions: {
            color: "#f357a1",
            weight: 4,
          },
        },
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: "#e1e100", // Color the shape will turn when intersects
            message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
          },
          shapeOptions: {
            color: "#bada55",
          },
        },
        circle: true, // Turns off this drawing tool
        rectangle: false,
        marker: {
          icon: new MyCustomMarker(),
        },
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!!
      },
    };

    var drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (e) {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A Marker!');
      } else if (type === 'polygon') {
        // Calculate area using Turf.js
        const areaInSquareMeters = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
        layer.bindPopup('Area: ' + areaInSquareMeters.toFixed(2) + ' square meters');
      } else if (type === 'polyline') {
        // Calculate length using Turf.js
        const lengthInMeters = L.GeometryUtil.length(layer);
        layer.bindPopup('Length: ' + lengthInMeters.toFixed(2) + ' meters');
      }

      editableLayers.addLayer(layer);
    });

    // Assuming you have a reference to the toolbar container similar to scaleControlRef
    // Append the toolbar control element to the toolbar div
    // toolbarDivRef.current.appendChild(drawControl.current.getContainer());

    // Style the toolbar control
    const toolbarElement = drawControl.getContainer();

    if (toolbarElement) {
      // Change background color
      // toolbarElement.style.backgroundColor = "black";
      toolbarElement.style.top = "100px";
      toolbarElement.style.right = "5px";

      // Find and style individual toolbar buttons if needed
      const toolbarButtons = toolbarElement.querySelectorAll(".leaflet-draw-toolbar a");
      const toolbarDrawButtons = toolbarElement.querySelectorAll(".leaflet-draw-toolbar a");
      // toolbarDrawButtons.style.backgroundColor = "black";
      if (toolbarButtons) {
        toolbarButtons.forEach(button => {
          button.style.backgroundColor = "white";
        });
      }
    }
    var imageUrl = 'https://www.google.com/maps/vt/data=PhqztSFYKh-PCpYqDP43JrkzxCn0VR97ynY-9SI4tbMiQ7yWEu5v0fo3Eah_QRKY2Ffm5YSLkIjFBJZJKSglO0iJEZqf9btxCOlG_eg3KuN7wpL0QN5Oslkn40GrUKMGNo_cK3Y6FPx8SOqIkU1I_23grsrL7_blMl4qNM-LHQkzy9g2lQP3NDVe934nQKgHE2dAoi3cTV2yyIIL72lAcSIaUg',
      imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    // var imageUrl = 'Aerial Photography (Orthophoto) - 2021.png',
    //   imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
    // L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // const parse_georaster = require("georaster");
    // const GeoRasterLayer = require("georaster-layer-for-leaflet");
    // or: import GeoRasterLayer from "georaster-layer-for-leaflet";

    // initalize leaflet map


    // add OpenStreetMap basemap


    // var url_to_geotiff_file = "Aerial Photography (Orthophoto) - 2021.tiff";

    // fetch(url_to_geotiff_file)
    //   .then(response => response.arrayBuffer())
    //   .then(arrayBuffer => {
    //     parse_georaster(arrayBuffer).then(georaster => {
    //       console.log("georaster:", georaster);

    //       /*
    //           GeoRasterLayer is an extension of GridLayer,
    //           which means can use GridLayer options like opacity.

    //           Just make sure to include the georaster option!

    //           Optionally set the pixelValuesToColorFn function option to customize
    //           how values for a pixel are translated to a color.

    //           https://leafletjs.com/reference.html#gridlayer
    //       */
    //       var layer = new GeoRasterLayer({
    //         georaster: georaster,
    //         opacity: 1,
    //         pixelValuesToColorFn: values => values[0] === 42 ? '#ffffff' : '#000000',
    //         resolution: 64 // optional parameter for adjusting display resolution
    //       });
    //       layer.addTo(map);

    //       map.fitBounds(layer.getBounds());

    //     });
    //   });

    return () => {
      map.remove();
    };
  }, []);

  const mapRef = useRef(null);

  const googleMapLayer = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    {
      maxZoom: 18,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      name: "baselayer",
    }
  );

  const googleSatelliteLayer = L.tileLayer(
    "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
    {
      attribution: "Google Maps Satellite",
      maxNativeZoom: 20,
      maxZoom: 20,
      name: "baselayer",
    }
  );

  const openTopoMapLayer = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      name: "baselayer",
    }
  );

  const openstreetmap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      name: "baselayer",
    }
  );

  const handleBaseLayerChange = (layerName) => {
    // if (layerName === "OpenTopoMap") {
    //   setTheme(false);
    // } else {
    //   setTheme(false);
    // }
    setBaseLayer(layerName);
    let selectedLayer;
    switch (layerName) {
      case "GoogleStreetMap":
        selectedLayer = googleMapLayer;
        break;
      case "GoogleSatellite":
        selectedLayer = googleSatelliteLayer;
        break;
      case "OpenTopoMap":
        selectedLayer = openTopoMapLayer;
        break;
      case "OpenStreetMap":
        selectedLayer = openstreetmap;
        break;
      default:
        selectedLayer = googleMapLayer;
    }

    // Remove existing Baselayer
    mapRef.current.eachLayer((layer) => {
      if (layer.options.name === "baselayer") {
        mapRef.current.removeLayer(layer);
      }
    });
    // Add the selected layer to the map
    selectedLayer.addTo(mapRef.current);
    // Close the expanded options after selecting a layer
    setExpanded(false);
    setExpanded(false); // Close the expanded options after selecting a layer
  };
  const imgStyle = theme ? { filter: "invert(100%)" } : {};

  // var drawControl = new L.Control.Draw({
  //     draw: {
  //         polygon: true,
  //         marker: true
  //     },

  // }).addTo(mapRef.current);
  return (
    <>
      <div className="baselayerPicker absolute  right-2  top-1   z-[500]">
        <div className="relative flex z-[500] ">
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            direction="left"
            sx={{
              "& .MuiSpeedDial-fab": {
                height: 40,
                width: 40,
                boxShadow: "none",
              },
            }}
            icon={
              <img
                style={imgStyle}
                className={`w-10 h-10 rounded-[50%] border-2 border-[#303336] hover:border-[#48b] transition-transform duration-300 ease-in-out transform-gpu hover:scale-110 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                src={
                  baseLayer === "GoogleStreetMap"
                    ? GoogleStreetMapIcon
                    : baseLayer === "GoogleSatellite"
                      ? GoogleSateliteMapIcon
                      : baseLayer === "OpenTopoMap"
                        ? OpenTopoMapIcon
                        : BaseLayerIcon
                }
                alt=""
              />
            }
          >
            <SpeedDialAction
              key="Google Street Map"
              arrow
              tooltipTitle="Google Street Map"
              onClick={() => handleBaseLayerChange("GoogleStreetMap")}
              icon={
                <img
                  className={`w-10 h-10 rounded-[50%] border-2 border-[#303336] hover:border-[#48b] transition-transform duration-300 ease-in-out transform-gpu hover:scale-110 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  src={GoogleStreetMapIcon}
                  alt="Google Street Map"
                />
              }
              sx={{
                boxShadow: "none",
              }}
            ></SpeedDialAction>
            <SpeedDialAction
              key="Google Satellite"
              arrow
              tooltipTitle="Google Satellite"
              onClick={() => handleBaseLayerChange("GoogleSatellite")}
              icon={
                <img
                  className={`w-10 h-10 rounded-[50%] border-2 border-[#303336] hover:border-[#48b] transition-transform duration-300 ease-in-out transform-gpu hover:scale-110`}
                  src={GoogleSateliteMapIcon}
                  alt="Google Satellite"
                />
              }
              sx={{
                boxShadow: "none",
              }}
            ></SpeedDialAction>
            <SpeedDialAction
              key="OpenTopoMap"
              arrow
              tooltipTitle="OpenTopoMap"
              onClick={() => handleBaseLayerChange("OpenTopoMap")}
              icon={
                <img
                  className={`w-10 h-10 rounded-[50%] border-2 border-[#303336] hover:border-[#48b] transition-transform duration-300 ease-in-out transform-gpu hover:scale-110`}
                  src={OpenTopoMapIcon}
                  alt="OpenTopoMap"
                />
              }
              sx={{
                boxShadow: "none",
              }}
            ></SpeedDialAction>
          </SpeedDial>
        </div>
      </div>
      <div id="map" className="h-screen w-full z-0"></div>
      <Layout className="absolute z-[100000]" />
    </>
  );
};

export default LeafletPage1;
