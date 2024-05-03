import React  from "react";
import DashboardContext from "./DashboardContext";
// eslint-disable-next-line react/prop-types
const DashContextProvider = ({children}) => {
  const [userData, setuserData] = React.useState("Default name ","pass");
 
  return (
    <DashboardContext.Provider value={{userData,setuserData}}>
      {children}
    </DashboardContext.Provider>
  )
}

export default DashContextProvider