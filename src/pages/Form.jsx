/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form_style.css";

function Form({
  drawnShapes,
  onLayerChange,
  onCheckboxChange,
  onDownloadGeoJson,
}) {
  const [selectedLayer, setSelectedLayer] = useState("googleStreets");
  // eslint-disable-next-line no-unused-vars
  const [shapeStates, setShapeStates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLayerChange(selectedLayer);
  };
  const handleDownload = () => {
    // Trigger the download of GeoJSON data
    onDownloadGeoJson();
  };
  // useEffect(() => {
  //   // Additional side-effects on drawnShapes change, if needed
  // }, [drawnShapes]);
  ////////////////////////////////////////////////////////////////
  return (
    <form>
      <label className="form-label" htmlFor="layerControl">
        Select Map Layer:
      </label>
      <select
        id="layerControl"
        value={selectedLayer}
        onChange={(e) => setSelectedLayer(e.target.value)}
        className="custom-dropdown"
      >
        <option value="osm">OpenStreetMap</option>
        <option value="Stadia.AlidadeSmoothDark">
          Stadia.AlidadeSmoothDark
        </option>
        <option value="googleStreets">Google Streets</option>
        {/* Add more options as needed */}
      </select>

      <button type="button" onClick={handleSubmit}>
        Layer change
      </button>
      <br></br>
      <br></br>

      <label className="form-label">Drawn Shapes:</label>

      {drawnShapes.map((shape, index) => (
        <div key={index} className="checkbox-container">
          <input
            type="checkbox"
            onChange={() => {
              console.log("Checkbox changed",shape,"index",index);
              onCheckboxChange(index, shape);
            }}
          />

          <label
            htmlFor={`shape-${index + 1}`}
            className="checkbox-label"
          >{`Shape  ${index + 1}`}</label>
        </div>
      ))}
      <button type="button" onClick={handleDownload}>
        Download GeoJSON
      </button>
      <br></br>
      <br></br>
    </form>
  );
}

export default Form;
