import React, { useContext } from "react";
import { BioContext } from "./GetBio";
import { StylingContext } from "./GetStyling";

const Setter = props => {
    const bio = useContext(BioContext);
    const styling = useContext(StylingContext);

    return (
        <div className=" container my-text-primary">
            <form>
                <div className="form-group row">
                    <label htmlFor="textColor" className="col-form-label ">
                        Change Text Color
          </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            id="textColor"
                            type="text"
                            value={styling.color}
                            onChange={e => {
                                styling.updateColor(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="fontSize" className="col-form-label">
                        Change Font Size
          </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            id="fontSize"
                            type="text"
                            value={styling.fontSize}
                            onChange={e => {
                                styling.updateFontSize(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="bgColor" className="col-form-label">
                        Change Background Color
          </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            id="bgColor"
                            type="text"
                            value={styling.backgroundColor}
                            onChange={e => {
                                styling.updateBgColor(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lang" className="col-form-label">
                        Change Language
          </label>
                    <div className="col-sm-10">
                        <select
                            className="custom-select mr-sm-2"
                            id="lang"
                            onChange={e => {
                                bio.updateLang(e);
                            }}
                        >
                            <option value="English">English</option>
                            <option value="Russian">Russian</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Setter;
