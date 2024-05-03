/* eslint-disable no-unused-vars */
import { useState ,useContext, } from "react";

import { useNavigate } from "react-router-dom"; 
function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState('');


  const navigate = useNavigate(); // Get the navigate function
 
  return (
    <>
      {/* component */}
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">Sign In</p>
            <h2 className="text-black text-xl font-bold">Join our community</h2>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              value={userName}
              onChange={(e)=>setuserName(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
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
