import React, { useContext } from 'react';
import { BioContext } from './GetBio';
import { StylingContext } from './GetStyling';


const Reactor = (props) => {
    const bio = useContext(BioContext);
    const style = useContext(StylingContext)
    return (
        <div
            style={{
                color: style.color,
                fontSize: style.fontSize,
                backgroundColor: style.backgroundColor
            }}
        >  
            {props.children}
        </div>
    );
}

export default Reactor;
