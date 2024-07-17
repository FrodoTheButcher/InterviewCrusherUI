import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { DESCRIPTION } from "../Constants/AlgoritmPage";
import { UNFOCUSED } from "../pages/RoadMapPage/constants";

const CustomContext = createContext();

export const useNavbar =() => useContext(CustomContext);

export const ContextProvider = ({ children }) => {
    const [navbarClicked,setNavbarClicked]  = useState(false)
    const [projectViewScreen,setProjectViewScreen] = useState(DESCRIPTION)
    const [mainPageContainerProvenience, setMainPageContainerProvenience] = useState(UNFOCUSED)
    const [chattingClicked, setChattingClicked] = useState(false)
    const value={
        navbarClicked:navbarClicked,
        setNavbarClicked:setNavbarClicked,
        setProjectViewScreen: setProjectViewScreen,
        projectViewScreen:projectViewScreen,
        mainPageContainerProvenience: mainPageContainerProvenience,
        setMainPageContainerProvenience:setMainPageContainerProvenience,
        chattingClicked: chattingClicked,
        setChattingClicked: setChattingClicked
    }

    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};


export default CustomContext