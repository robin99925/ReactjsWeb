import React from "react";
import Card from "./Card"
import SData from './SData'
const Service = () => {
    return (
        <>
            <div className="text-center my-5">
                <h1>Our Services</h1>

            </div>
            <div className="container-fluid justify-content-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row g-5">
                            {
                                SData.map((val,ind)=>{
                                    return  (<Card
                                    img={val.imgsrc}
                                    title={val.title}
                                    desc={val.desc}
                                    />)
                                    
                                    
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>    </>
    );
}
export default Service;