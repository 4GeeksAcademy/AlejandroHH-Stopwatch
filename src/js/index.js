//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Stopwatch from "./component/stopwatch.jsx";

let secs = -1;
let sc2 = 0;
let mins = 0;
let mt2 = 0;
let hours = 0;
let hr2 = 0;





setInterval(() => {
    secs++;
    if(secs > 9) {
        secs = 0;
        sc2++;
        if(sc2 > 5) {
            sc2 = 0;
            mins++;

            }if(mins > 9) {
            mins = 0
            mt2++;
                }if(mt2 > 5) {
                    mt2 = 0;
                    hours++
                    }if(hours > 9) {
                        hours = 0
                        hr2++;
                    }   
    }
    ReactDOM.render(<Stopwatch seconds={secs} seconds2={sc2} minutes={mins} minutes2={mt2} hours={hours} hours2={hr2}  />, document.querySelector("#app"));
}, 1000);



//render your react application
