import React, { useState } from 'react';
import '../../styles/TrafficLight.css';


const TrafficLight= () => {
    const [color, setColor] = useState("");

    return (
        <>
            <div className="stem"></div>
            <div className="traffic-light-body">
                <div className={
                    color === 'red' ? "red selected" : "red"
                }
                    onClick={() => {
                        setColor("red")
                    }}
                ></div>
                <div className={
                    color === 'yellow' ? "yellow selected" : "yellow"
                }
                    onClick={() => {
                        setColor("yellow")
                    }}
                ></div>
                <div className={
                    color === 'green' ? "green selected" : "green"
                }
                    onClick={() => {
                        setColor("green")
                    }}
                ></div>
            </div>
        </>
    );
}

export default TrafficLight;