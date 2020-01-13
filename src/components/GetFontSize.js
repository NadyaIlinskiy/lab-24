import React, { useState } from 'react';

export const FontSizeContext = React.createContext();

const GetFontSize = (props) => {
    const [state, setState] = useState({
        fontSize: '16px',
        updateFontSize: size => {
            setState({ ...state, fontSize: size });
        }      
    });

    return (
        <FontSizeContext.Provider value={state}>
            <div>
                {props.children}
            </div>
        </FontSizeContext.Provider>
    );
}

export default GetFontSize;
