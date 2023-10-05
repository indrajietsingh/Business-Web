import React from "react";
import "./Middle.css"
function Middle(){
    return(
        <>
        <div className="nav">
        <div className="medium-text">
            <div className="toggle">
                <h1 className="head">Build a free website in minutes</h1>
                <p className="para">Create your free website with no credit card required. Or, choose premium plans starting at $3/month.</p>
                <h3 className="mass"><a class="content-mass" href="/sign-up/">Make My Own Website Now</a></h3>
            </div>
            <div className="data">
        
            </div>

        </div>
        </div>
        <div className="main">
            pricing
            <span className="top">for</span>
            <span>
                <label className="website" style={{margin: "0px 3px",backgroundColor:"black", color:"white"}}>website</label>
            </span>
            <span>
            <label className="website">
            
                Business & Ecommerce </label>
                </span>
        </div>
        </>
    )
}
export default Middle;