import { createContext } from "react";

const StyleData = createContext({
    mainColor1 : "color"
});

export const StyleContextProvider = (props) => {

    const context = {
        mainColor1 : "yellow"
    }

    return (
        <StyleData.Provider value={context}>
            {props.children}
        </StyleData.Provider>
    );
};

export default StyleData;