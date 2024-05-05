/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const Layout = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>

      {/* <div className="flex  relative  flex-col">
        <div className="flex h-screen">
          <Sidebar collapsed={collapsed}>
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <button
          className="absolute"
          onClick={() => setCollapsed(!collapsed)}
        >
          Collapse
        </button>
      </div> */}
      <div className="flex flex-col relative h-screen">
        <div className="absolute flex h-screen m-0">
          <Sidebar
            collapsed={collapsed}
            collapsedWidth="0px"
            width="300px"
            backgroundColor="rgb(20,26,34)"
            rootStyles={{
              color: 'white',
              boxSizing: 'content-box',
            }}
          >
            <Menu
            rootStyles={{            
                backgroundColor: '#f5d9ff',
                color: 'blue',             
            }}
              menuItemStyles={{
                button: ({ level, active, disabled }) => ({
                  color: 'white',
                  backgroundColor: 'rgb(20,26,34)',
                  '&:hover': {
                    backgroundColor: 'rgba(20,26,34,.725)',
                  },
                }),
              }}
              hoverColor="rgba(20,26,34,.725)"
            >
              <SubMenu label="Charts" hoverColor="rgba(20,26,34,.725)" >
                <MenuItem> <div>
                Pie charts  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem facere atque reprehenderit deleniti unde recusandae eaque, vel accusamus eveniet explicabo! Doloremque molestias inventore corrupti commodi rerum fuga illum quam explicabo?
                  
                  </div></MenuItem>
               
              </SubMenu>
              <MenuItem hoverColor="rgba(20,26,34,.725)"> Documentation </MenuItem>
              <MenuItem hoverColor="rgba(20,26,34,.725)"> Calendar </MenuItem>
            </Menu>
            <div className='p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate id non labore sint aliquid vero consectetur in, sunt cupiditate doloribus, molestias rem cum veritatis modi reprehenderit tempora provident quibusdam porro.</div>
          </Sidebar>
        </div>
        <button
          id="icon button"
          className={`bg-[rgb(20,26,34)] rounded-l-[0px] rounded-r-[50%] absolute p-3 !m-0 transition-all duration-300 ${collapsed ? 'left-0 border-[rgb(20,26,34)]' : 'left-[299px]'}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>


      </div>

    </>
  );
};

export default Layout;
