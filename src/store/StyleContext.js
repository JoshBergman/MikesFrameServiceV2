import { createContext } from "react";

const StyleData = createContext({
    mainColor1 : "color",
    mutedMainColor1 : "color",
    logoTextColor : "color",
    navWordColor : "color",
    pageColor : "color",
});

export const StyleContextProvider = (props) => {

    const context = {
        mainColor1 : "#EA291B",
        mutedMainColor1 : "#A61F15",
        logoTextColor : "white",
        navWordColor : "white",
        pageColor : "white"
    }

    return (
        <StyleData.Provider value={context}>
            {props.children}
        </StyleData.Provider>
    );
};

export default StyleData;