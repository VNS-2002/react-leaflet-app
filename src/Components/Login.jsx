/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/base";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import indronesLogo from '../indrones_black.png';
import toast, { Toaster } from "react-hot-toast";
function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mapInteractionDisabled, setMapInteractionDisabled] = useState(false);
  const navigate = useNavigate();
  const mapContainerRef = useRef(null);
  const [MailAlertMge, setMailAlertMge] = React.useState("");
  const [PassAlertMge, setPassAlertMge] = React.useState("");
  useEffect(() => {
    const map = L.map(mapContainerRef.current, {
      center: [19.0808, 73.0268], // Set initial center
      zoom: 1, // Start at minimum zoom level
      zoomControl: false,
    });

    L.tileLayer(
      "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      {
        maxNativeZoom: 20,
        maxZoom: 20,
        name: "baselayer",
      }
    ).addTo(map);

    map.flyTo([19.0808, 73.0268], 9, { duration: 3.5 }); // Fly to the specified lat lng with a zoom level of 13 in 3 seconds

    return () => {
      map.remove();
    };
  }, []);

  const handlePasswordChange = (e) => {
    setPassAlertMge("");
    setPassword(e.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleEmailChange = (e) => {
    setMailAlertMge("");
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login started");
    // Check if entered credentials match any predefined user
    const user = predefinedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (email === "" && password === "") {
      toast.error("Please enter your email and password");
    } else  if (password === "") {
      toast.error("Please enter your password");
    }else if (email === "") {
      toast.error("Please enter your email");
    } else {
      if (user) {
        // Redirect to dashboard or home page upon successful login
        console.log("Login successful");
        console.log("Welcome,", user.firstName, user.lastName);
        console.log("Role:", user.role);
        dispatch(setUser(user));
        navigate("/home");
        toast.success("Login successful");
      } else if (!predefinedUsers.some((user) => user.email === email)) {
        // If email is incorrect
        toast.error("Invalid email");
      } else if (predefinedUsers.some((user) => user.email === email && user.password !== password)) {
        // If email is correct but password is incorrect
        toast.error("Invalid password");
      } else {
        // All other possible combinations     
        toast.error("Invalid email or password");
      }
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login started");
  //   // Check if entered credentials match any predefined user
  //   const user = predefinedUsers.find(
  //     (user) => user.email === email && user.password === password
  //   );

  //   if (user) {
  //     // Redirect to dashboard or home page upon successful login
  //     console.log("Login successful");
  //     console.log("Welcome,", user.firstName, user.lastName);
  //     console.log("Role:", user.role);
  //     dispatch(setUser(user));
  //     navigate("/home");
  //   } else {
  //     // setError("Invalid email or password");
  //   }
  // };
  const predefinedUsers = [
    {
      email: "vinayak12528@gmail.com",
      password: "abc",
      firstName: "vinayak",
      lastName: "sanvake",
      role: "R&D Intern",
    },
    {
      email: "user2@example.com",
      password: "password2",
      firstName: "Jane",
      lastName: "Smith",
      role: "user",
    },
    // Add more predefined users as needed
  ];

  return (
    <>
      <section>
        <div
          ref={mapContainerRef}
          className="custom-map-container z-0"
        ></div>
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            duration: 1000,
            style: {
              background: "#fff",
              color: "#4a4844",
              border: "1px solid #fff",
            },
          }}
        />

        <div className="glass-container flex flex-col justify-center items-center h-auto min-w-[25vw]  pb-20 pt-12 rounded-lg absolute top-1/2 left-[10%] transform -translate-y-1/2 bg-white shadow-lg z-50">
          <div className="flex justify-center items-end my-2  ">
            <img className=" h-16 w-[200px]" src={indronesLogo} alt="indrones logo" />{" "}
          </div>
          {/* <h2 className="my-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2> */}
          <form className="mt-8 w-4/5 "
            onSubmit={handleSubmit}
          >
            <div className="mb-6 relative">
              <TextField
                id="outlined-Email-input"
                name="email"
                className="w-full !bg-white"
                variant="outlined"
                label="Email"
                autoComplete="email"
                value={email}
                type="text"
                size="small"
                onChange={handleEmailChange}
                style={{ fontSize: "17px", background: "white" }}
              />
              <div
                className={`text-[#ff0000] text-[11px] font-500 mt-[2px] absolute left-0`}
              >
                {MailAlertMge}
              </div>
              <div className="loginpage">
                {<AlternateEmailRoundedIcon sx={{ fontSize: 18 }} />}
              </div>
            </div>
            <div className="mb-2 relative">
              <FormControl fullWidth size="small">
                <TextField
                  id="outlined-password-input"
                  className="w-full"
                  variant="outlined"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  size="small"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ fontSize: "17px" }}
                />
              </FormControl>
              <div
                className={`text-[#ff0000] text-[11px] mt-[2px] font-500 absolute left-0`}
              >
                {PassAlertMge}
              </div>

              <div className="loginpage" onClick={handleClickShowPassword}>
                {showPassword ? (
                  <VisibilityRoundedIcon
                    className="cursor-pointer"
                    sx={{ fontSize: 18 }}
                  />
                ) : (
                  <VisibilityOffRoundedIcon
                    className="cursor-pointer"
                    sx={{ fontSize: 18 }}
                  />
                )}
              </div>
            </div>
            {/* <div className="text-[#4a4844] font-[600] text-[12px] text-right cursor-pointer">
              Forgot Password
            </div> */}
            <div className="mt-8  mx-auto">
              <button
                className="padding-[13px] items-center h-[42px] flex w-full justify-center rounded-[3px] bg-[#4a4844] px-3 py-1.5 text-[16px] font-semibold leading-6 text-white shadow-sm hover:bg-[#808787] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center  absolute bottom-2">
            <span className=" text-sm">Intership Demo</span>
            {/* <img
              src={indronesNameLogoBlack}
              className="h-4"
              alt="indrones name logo black"
              srcSet=""
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
