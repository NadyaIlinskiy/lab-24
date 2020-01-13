import React, { useContext } from 'react';
import { TextColorContext } from './GetTextColor';
import { FontSizeContext } from './GetFontSize';
import { BgColorContext } from './GetBgColor';
import bio from './GetBio';

const Setter = (props) => {
    const textColor = useContext(TextColorContext);
    const fontSize = useContext(FontSizeContext);
    const bgColor = useContext(BgColorContext);

    return (

        <div className=" container my-text-primary">
            <form>
             <div className="form-group row">   
               <label htmlFor="textColor" className="col-form-label ">Change Text Color</label>
               <div className="col-sm-10">
                    <input className="form-control" id="textColor"
                     type='text'
                     value={textColor.color}
                     onChange={e => {
                    textColor.updateColor(e.target.value);
                    }}/>
                </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="fontSize" className="col-form-label" >Change Font Size</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="fontSize"
                    type='text'
                        value={fontSize.fontSize}
                        onChange={e => {
                    fontSize.updateFontSize(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="bgColor" className="col-form-label" >Change Background Color</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="bgColor"
                    type='text'
                    value={bgColor.backgroundColor}
                    onChange={e => {
                        bgColor.updateColor(e.target.value);
                    }}
                />
                </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lang" className="col-form-label" >Change Language</label>
                    <div className="col-sm-10">
                        <select className="custom-select mr-sm-2" id="lang"
                    onChange={e => {
                        bio.updateLang(e);
                    }}>
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                </div>
                </form>
        </div>
    );
}

export default Setter;
