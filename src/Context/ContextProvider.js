import { useState } from "react";
import React from "react";
import { createContext } from "react";
import { DESCRIPTION } from "../Constants/AlgoritmPage";
import { UNFOCUSED } from "../pages/RoadMapPage/constants";
const CustomContext = React.createContext();

export const ContextProvider = ({ children }) => {

  
    const [navbarClicked,setNavbarClicked]  = useState(false)

    const [projectViewScreen,setProjectViewScreen] = useState(DESCRIPTION)


    const [mainPageContainerProvenience, setMainPageContainerProvenience] = useState(UNFOCUSED)
    const value={
        navbarClicked:navbarClicked,
        setNavbarClicked:setNavbarClicked,
        setProjectViewScreen: setProjectViewScreen,
        projectViewScreen:projectViewScreen,
        mainPageContainerProvenience: mainPageContainerProvenience,
        setMainPageContainerProvenience:setMainPageContainerProvenience,
    }

    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};


export default CustomContext