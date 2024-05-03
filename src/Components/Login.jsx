/* eslint-disable no-unused-vars */
import { useState, useContext, } from "react";
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
import { useNavigate } from "react-router-dom";
function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState('');
  const [mapInteractionDisabled, setMapInteractionDisabled] = useState(false);

  const navigate = useNavigate(); // Get the navigate function

  return (
    <>
      {/* component */}
      <section className="">
        <MapContainer
          center={[19.0808, 73.0268]}
          zoom={13}
          className="custom-map-container z-0"
          zoomControls={false}
          dragging={!mapInteractionDisabled} // add this prop to control dragging
          doubleClickZoom={!mapInteractionDisabled}
        >

          <TileLayer
            attribution="Map"
            url={
              "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
            }
            ext="png"
            maxZoom={20}
            minZoom={1}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </MapContainer>

        <div className=" absolute top-20 left-20 right-20 max-w-md w-full bg-white rounded p-6 space-y-4 z-[10000]"
          onMouseEnter={() => setMapInteractionDisabled(true)} // Disable map interaction on mouse enter
          onMouseLeave={() => setMapInteractionDisabled(false)}
        >
          <div className="mb-4">
            <p className="text-gray-600">Sign In</p>
            <h2 className="text-black text-xl font-bold">Join our community</h2>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            // onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="comments"
                className="ml-2 text-sm font-normal text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div>
              <a className="text-sm text-blue-600 hover:underline" href="#">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;
