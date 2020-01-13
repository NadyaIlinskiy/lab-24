import React, { useContext } from 'react';
import { TextColorContext } from './GetTextColor';
import { BgColorContext } from './GetBgColor';
import { FontSizeContext } from './GetFontSize';
import { bioContext } from './GetBio';


const Reactor = (props) => {
    const textColor = useContext(TextColorContext);
    const fontSize = useContext(FontSizeContext);
    const bgColor = useContext(BgColorContext);
    const bio = useContext(bioContext);
    return (
        <div
            style={{
                color: textColor.color,
                fontSize: fontSize.fontSize,
                backgroundColor: bgColor.backgroundColor
            }}
        > 
            {props.children}
        </div>
    );
}

export default Reactor;
