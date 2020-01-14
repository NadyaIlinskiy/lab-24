import React from 'react';
import Reactor from './Reactor';
import Setter from './Setter';
import Bio from './GetBio';
import Styling from './GetStyling';
import photo from './../img/nadya.jpg'

import "../styles/styles.scss";

function App() {
    return (      
        <div className="container justify-content-center">  
            <h2 className="h2 my-text-primary justify-content-center">Career pitch</h2>
         <Styling>
                <Bio>   
                    <div className="row">
                        <div className="col" >
                            <img src={photo} alt="nadya" className="img" />         
                                <Reactor>         
                                </Reactor>                                    
                        </div>
                    
                        <div className="col">  
                            <Setter /> 
                        </div>
                    </div>
                </Bio>
            </Styling>
            </div>
    );
}

export default App;
