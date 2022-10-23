import { createContext } from "react";

const StyleData = createContext({
    mainColor1 : "color"
});

export const StyleContextProvider = (props) => {

    const context = {
        mainColor1 : "#EA291B"
    }

    return (
        <StyleData.Provider value={context}>
            {props.children}
        </StyleData.Provider>
    );
};

export default StyleData;