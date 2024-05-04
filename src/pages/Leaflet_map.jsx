/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// import React from 'react'
import * as turf from "@turf/turf";
import { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css"; // v imp
import "./Leaflet_style.css";
// import "leaflet-kml";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { EditToolbar, map } from "leaflet";
// import "leaflet-ajax";
// import 'leaflet-ajax/dist/leaflet.ajax.min';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  ZoomControl,
  useMapEvents,
  useMap,
  GeoJSON,
} from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import placeholderIcon from "./placeholder.png";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import Form from "./Form";
import { saveAs } from "file-saver";
import mapUtils from "./mapUtils";
import { shape } from "prop-types";


// create custom iconD:\DOWNLOADS\GeojsonFile.geojson
const customIcon = new Icon({
  // eslint-disable-next-line no-undef
  iconUrl: placeholderIcon,
  iconSize: [38, 38], // size of the icon
});

function Leaflet_map() {
  const [markers, setMarkers] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState("googleStreets");
  const [mousePosition, setMousePosition] = useState({ lat: 0, lng: 0 });
  const [drawnShapes, setDrawnShapes] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [state, setState] = useState(false);
  const mapRef = useRef(null);

  // useEffect(() => {
  //   const map = L.map("map").setView([19.259314789, 73.142241885], 13);
  //   mapRef.current = map;    
  //   return () => {
  //     map.remove();
  //   };
  // }, []);
  

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleLayerChange = (layer) => {
    setSelectedLayer(layer);
  };

  // useEffect(() => {
  //   mapRef.current.removeControl(map._controlCorners.topleft);
  //   let zoomControl = null;
  //   return () => {
  //     if (zoomControl !== null) {
  //       mapRef.current.removeControl(zoomControl);
  //       zoomControl = null;
  //     }
  //   };
  // }, []);

  // Use useMapEvents within the MapContainer
  function MousePosition({ onPositionChange }) {
    // Use useMapEvents to handle mousemove event and update mouse position
    useMapEvents({
      mousemove: (e) => {
        const lat = e.latlng.lat.toFixed(6);
        const lng = e.latlng.lng.toFixed(6);
        onPositionChange({ lat, lng });
      },
    });

    return null; // This component doesn't render anything
  }
  const handleMousePositionChange = (position) => {
    setMousePosition(position);
  };

  const handleShapeCreated = (event) => {
    const layer = event.layer;
    
    console.log("event.layer: " + event.layer);
    var type = event.layerType;
    if (type === "circle") {
      const radius = layer.getRadius();
      const circleGeoJSON = layer.toGeoJSON();
      // console.log(radius, "radius: " + circleGeoJSON);
      console.log("circle type", circleGeoJSON.type);
      circleGeoJSON.properties = {
        ...circleGeoJSON.properties,
        radius: radius,
        stroke: "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        fill: "#555555",
        "fill-opacity": 0.5,
      };

      setDrawnShapes((prevShapes) => [...prevShapes, circleGeoJSON]);
      setShapes((prevShapes) => [...prevShapes, circleGeoJSON]); // Update shapes with circle data
    } else {
      const layerGeojson = layer.toGeoJSON();
      layerGeojson.properties = {
        stroke: "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        fill: "#555555",
        "fill-opacity": 0.5,
      };
      setDrawnShapes((prevShapes) => [...prevShapes, layerGeojson]);
      setShapes((prevShapes) => [...prevShapes, layerGeojson]);
    }
  };
  // Function to handle checkbox change in the form
  const handleCheckboxChange = (index, shape) => {
    console.log("handleCheckboxChange called", index, shape);
    setSelectedShapes((prevSelectedShapes) => {
      if (prevSelectedShapes.includes(shape)) {
        // Shape is already selected, unselect it
        return prevSelectedShapes.filter((s) => s !== shape);
      } else {
        // Shape is not selected, select it
        return [...prevSelectedShapes, shape];
      }
    });
    toggleShapeVisibility(shape); // Toggle visibility immediately on checkbox change
  };
  // Function to toggle shape visibility
  // Function to toggle shape visibility
  const toggleShapeVisibility = (shape) => {
    console.log("inside toggleShapeVisibility");
    console.log("shape.type", shape.type);
    console.log("seleted SHape a", selectedShapes);
    console.log("shape", shape);
    const isVisible = selectedShapes.includes(shape);
    console.log(isVisible, " val of isVisible");
    // if (isVisible) {
    //   // shape.style({
    //     // stroke: "#555555",
    //     // "stroke-width": 2,
    //     // "stroke-opacity": 1,
    //     // fill: "#555555",
    //     // "fill-opacity": 0,
    //   });
    // } else {
    //   // shape.style({
    //   //   stroke: "#555555",
    //   //   "stroke-width": 2,
    //   //   "stroke-opacity": 1,
    //   //   fill: "#555555",
    //   //   "fill-opacity": 0.5,
    //   // });
    // }
    // drawnShapes[0].setStyle({"fill-opacity": 0})
    setState((prevState)=>!prevState);
  };
  const convertShapesToGeoJson = (shapes) => {
    return JSON.stringify({
      type: "FeatureCollection",
      features: shapes.map((shape, index) => {
        if (
          shape.geometry.type === "Point" &&
          shape.properties.radius !== undefined
        ) {
          return {
            ...shape,
            properties: {
              ...shape.properties,
              radius: shape.properties.radius,
            },
          };
        } else {
          return shape;
        }
      }),
    });
  };
  const onDownloadGeoJson = () => {
    const geoJsonData = convertShapesToGeoJson(shapes);
    console.log(geoJsonData, "data ");
    const blob = new Blob([geoJsonData], { type: "application/json" });
    saveAs(blob, "drawn_shapes.geojson");
  };
  // mapUtils.funNameLog("abc");
  mapUtils.logLinesLength(shapes);
  mapUtils.calculateTotalAreaAndPerimeter(shapes);
  return (
    <>
      <div className={`form-container ${formVisible ? "expanded" : ""}`}>
        <button onClick={toggleFormVisibility} className="expand-button">
          {formVisible ? "Close Form" : "Open Form"}
        </button>
        {formVisible && (
          <Form
            drawnShapes={drawnShapes}
            onCheckboxChange={handleCheckboxChange}
            onLayerChange={handleLayerChange}
            onDownloadGeoJson={onDownloadGeoJson}
          />
        )}
      </div>
      <MapContainer
        center={[19.0808, 73.0268]}
        zoom={13}   
        ref={mapRef}  
        zoomControl={false}      
      >
        <MousePosition onPositionChange={handleMousePositionChange} />
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer        
         
          url={
            selectedLayer === "osm"
              ? "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              : selectedLayer === "Stadia.AlidadeSmoothDark"
              ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
              : selectedLayer === "googleStreets"
              ? "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
              : ""
          }
          ext="png"
          maxZoom={20}
          minZoom={1}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          zoomControl={false} 
        />
        {/* <GeoJSON data={data} /> */}
        {/* <GeoJSON data={data}/> */}
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: true,
              marker: true,
              circle: true,
              circlemarker: true,
              polyline: true,
              polygon: true,
            }}
            onCreated={handleShapeCreated}
          />
        </FeatureGroup>
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={
                marker.latlng ? [marker.latlng.lat, marker.latlng.lng] : [0, 0]
              }
              icon={customIcon}
            >
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        {/* Use the useMapEvents hook to handle map click events */}
        {drawnShapes.map((shape, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={selectedShapes.includes(shape)}
              onChange={() => {
                handleCheckboxChange(shape);
                toggleShapeVisibility(shape);
              }}
            />
            <label>{`Shape ${index + 1}`}</label>
          </div>
        ))}
        <div className="mouse-position">
          <p>
            {" "}
            Latitude: {mousePosition.lat}, Longitude: {mousePosition.lng}{" "}
          </p>
        </div>
      </MapContainer>
    </>
  );
}

export default Leaflet_map;
