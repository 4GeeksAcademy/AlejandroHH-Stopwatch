import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons"; 
//create your first component



const Stopwatch = ({seconds, seconds2, minutes, minutes2, hours, hours2}) => {
	return (
		<div className="row  counter-box mt-5 center">
            <div className="boxer center">
                <div className="col-12 center ">

                    <div className="counter2 center ms-2">
                        <FontAwesomeIcon className="tamaño" icon={faClock} size="2x" />
                    </div>


                    <div className="counter2 center ms-2">
                        <h1 className="">{hours2}</h1>
                    </div>
                    <div className="counter2 center ms-2">
                        <h1 className="">{hours}</h1>
                    </div>

                    <h1 className="mb-3 ms-2">:</h1>

                    <div className="counter2 center ms-2">
                        <h1 className="counter">{minutes2}</h1>
                    </div>

                    <div className="counter2 center ms-2">
                        <h1 className="counter">{minutes}</h1>
                    </div>

                    <h1 className="mb-3 ms-2">:</h1>

                    <div className="counter2 center ms-2">
                        <h1 className="counter">{seconds2}</h1>
                    </div>
                    
                    <div className="counter2 center ms-2">
                        <h1 className="counter">{seconds}</h1>
                    </div>  
                </div>
                
                
            </div>
            <div className="row">
                <div className="col-12 center mt-2">
                    <button className="btn btn-danger me-3">Stop</button>
                    <button className="btn btn-info me-3">Resume</button>
                    <button className="btn btn-warning me-3">Restart</button>
                </div>
            </div>

        </div>
	);
};

export default Stopwatch;
