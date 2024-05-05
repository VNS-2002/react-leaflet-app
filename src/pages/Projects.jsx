/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <>
      <div className="flex flex-row relative h-screen gap-2">
        <div className="absolute flex h-screen m-0">
          <Sidebar
            width="300px"
            backgroundColor="rgb(20,26,34)"
            rootStyles={{
              color: "white",
              boxSizing: "content-box",
            }}
          >
            <Menu
              rootStyles={{
                backgroundColor: "#f5d9ff",
                color: "blue",
              }}
              menuItemStyles={{
                button: ({ level, active, disabled }) => ({
                  color: "white",
                  backgroundColor: "rgb(20,26,34)",
                  "&:hover": {
                    backgroundColor: "rgba(20,26,34,.725)",
                  },
                }),
              }}
              hoverColor="rgba(20,26,34,.725)"
            >
              <SubMenu label="Charts" hoverColor="rgba(20,26,34,.725)">
                <MenuItem>
                  {" "}
                  <div>
                    Pie charts Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Dolorem facere atque reprehenderit
                    deleniti unde recusandae eaque, vel accusamus eveniet
                    explicabo! Doloremque molestias inventore corrupti commodi
                    rerum fuga illum quam explicabo?
                  </div>
                </MenuItem>
              </SubMenu>
              <MenuItem hoverColor="rgba(20,26,34,.725)"> doc </MenuItem>
              <MenuItem
                component={<Link to="/" />}
                hoverColor="rgba(20,26,34,.725)"
              >
                {" "}
                Login{" "}
              </MenuItem>
            </Menu>
            <div className="p-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate id non labore sint aliquid vero consectetur in, sunt
              cupiditate doloribus, molestias rem cum veritatis modi
              reprehenderit tempora provident quibusdam porro.
            </div>
          </Sidebar>
        </div>
        <div className="p-3 mt-6 absolute left-[300px] flex flex-row gap-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-20"
              src="/src/indrones_black.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            </div>
            <div className="px-6 pt-0 pb-2 flex justify-end">
              <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </button>
              <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                #winter
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-20"
              src="/src/indrones_black.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            </div>
            <div className="px-6 pt-0 pb-2 flex justify-end">
              <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </button>
              <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                #winter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
