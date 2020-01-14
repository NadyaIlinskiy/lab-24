import React, { useState } from 'react';

export const BgColorContext = React.createContext();

const GetBgColor = (props) => {
    const [state, setState] = useState({
        backgroundColor: '#241b0c',
        updateColor: color => {
            setState({ ...state, backgroundColor: color });
        }
    });

    return (
        <BgColorContext.Provider value={state}>
            <div>
                {props.children}
            </div>
        </BgColorContext.Provider>
    );
}

export default GetBgColor;
