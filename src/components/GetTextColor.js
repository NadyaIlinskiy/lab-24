import React, { useState } from 'react';

export const TextColorContext = React.createContext();

const GetTextColor = (props) => {
    const [state, setState] = useState({
        color: '#f3dc9165',
        updateColor: color => {
            setState({ ...state, color: color });
        }
    });

    return (
        <TextColorContext.Provider value={state}>
            <div>
                {props.children}
            </div>
        </TextColorContext.Provider>
    );
}

export default GetTextColor;