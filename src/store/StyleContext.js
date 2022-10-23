import { createContext } from "react";

const StyleData = createContext({
    mainColor1 : "color",
    logoTextColor : "color",
    navWordColor : "color"
});

export const StyleContextProvider = (props) => {

    const context = {
        mainColor1 : "#EA291B",
        logoTextColor : "white",
        navWordColor : "white"
    }

    return (
        <StyleData.Provider value={context}>
            {props.children}
        </StyleData.Provider>
    );
};

export default StyleData;