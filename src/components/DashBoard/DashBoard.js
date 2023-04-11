import React, { useEffect, useState } from 'react';
import Me from "../../images/Me.jpg";
import "./DashBoard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { addtoDb, getStoredData } from './localDb';
const DashBoard = () => {
    const [breaks, setBreaks] = useState(0);
    const [reads, setReads] = useState(0);
    // const [buttonColor, setButtonColor] = useState("azure");
    useEffect(()=>{
        const storedBreakTime = getStoredData("break-time");
        const storedReadTime = getStoredData("reading-time");
        setBreaks(storedBreakTime);
        setReads(storedReadTime);
        addtoDb(reads,"reading-time")
        },[breaks,reads])
    const addBreak = (duration)=>{
        setBreaks(duration);
        addtoDb(duration,"break-time");
        // setButtonColor("cadetblue");
    }
    return (
        <div className='dashboard'>
            <div className='personal-info'>
                <img src={Me} alt="" />
                <div>
                    <h4>Kawsar Ahmed</h4>
                    <FontAwesomeIcon style={{"color":"cadetblue"}}icon={faLocationDot} /><small> Chittagong, Bangladesh</small>
                </div>
            </div>
            <div className='physical-info' >
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <h4>64</h4>
                        <small>kg</small>
                    </div>
                    <h6>Weight</h6>
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                            <h4>6.5</h4>

                    </div>
                    <h6>Height</h6>
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                            <h4>25</h4>
                            <small>yrs</small>
                    </div>
                    <h6>Age</h6>
                </div>
            </div>
            <h5 style={{marginTop:"30px",marginBottom:"20px"}}>Add a Break</h5>
            <div className='add-break'>
                <button onClick={()=>addBreak(10)}>10s</button>
                <button onClick={()=>addBreak(20)}>20s</button>
                <button onClick={()=>addBreak(30)}>30s</button>
                <button onClick={()=>addBreak(40)}>40s</button>
            </div>
            <div className='reading-details-field'>
                <h5>Reading Details</h5>
                <div className='reading-details-info'>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h6>Reading Time </h6>
                        <h6 style={{color:"gray"}}>{reads} mins</h6>
                    </div>
                </div>
                <div className='reading-details-info'>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h6>Break Time </h6>
                        <h6 style={{color:"gray"}}>{breaks} seconds</h6>
                    </div>
                </div>
            </div>
            <button className='btn' style={{background:"cadetblue",color:"azure",width:"100%"}}>
                    <h6>Activity Completed</h6>
                </button>
        </div>
    );
};

export default DashBoard;