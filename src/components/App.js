import React from 'react';
import GetTextColor from './GetTextColor';
import FontSize from './GetFontSize';
import Reactor from './Reactor';
import Setter from './Setter';
import GetBgColor from './GetBgColor';
import Bio from './GetBio';
import "../styles/styles.scss";
import photo from './../img/nadya.jpg'

function App() {
    return (      
        <div className="container justify-content-center">  
            <h2 className="h2 my-text-primary justify-content-center">Career pitch</h2>
         
            <GetBgColor>
                <GetTextColor>
                    <FontSize>  
                        <div className="row">
                            <div className="col reactor">
                                
                    <Reactor>
                            <img src={photo} alt="nadya" className="img" />
                         <Bio />
                   
                    </Reactor>
                        </div> 
                     <div className="col">
                    <Setter />
                     </div>
                     </div>
                    </FontSize>
                </GetTextColor>
            </GetBgColor>
            </div>
    

    );
}

export default App;
