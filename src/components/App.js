import React from 'react';
import Reactor from './Reactor';
import Setter from './Setter';
import Bio from './GetBio';
import Styling from './GetStyling';
import "../styles/styles.scss";
import photo from './../img/nadya.jpg'

function App() {
    return (      
        <div className="container justify-content-center">  
            <h2 className="h2 my-text-primary justify-content-center">Career pitch</h2>
         <Styling>
                <Bio>            
                    <Reactor>
                        <div className="row">
                            <div className="col reactor">
                                <img src={photo} alt="nadya" className="img" />
                            </div>
                               </div> 
                        <div className="col"> </div>
                    </Reactor>                                    
                    <Setter />
                </Bio>
            </Styling>
            </div>
    

    );
}

export default App;
