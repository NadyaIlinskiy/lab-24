import React, { useState } from 'react';

export const StylingContext = React.createContext();

const GetStyling = (props) => {
    const [state, setState] = useState({
        fontSize: '16px',
        updateFontSize: size => {
            setState({ ...state, fontSize: size });
        }, 
        backgroundColor: '#241b0c',
        updateColor: color => {
            setState({ ...state, backgroundColor: color });
        },
        color: '#f3dc9165',
        updateColor: color => {
            setState({ ...state, color: color });
        }
    });

    return (
        <StylingContext.Provider value={state}>
            <div>
                {props.children}
            </div>
        </StylingContext.Provider>
    );
}

export default GetStyling;
