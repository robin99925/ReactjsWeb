import React from "react"
import img from "./pic/1.png"

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                    {/* <div className="text-center"><h1>{props.hname}</h1></div> */}
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-5 order-lg-1 order-2 d-flex justify-content-center flex-column">
                                    <h1>{props.hname} <strong className="brand">Rtechnical</strong></h1>
                                    <p>{props.name}</p>
                                    <div className="mt-3">
                                        <a href="" className="btn btn-outline-primary">{props.btn}</a>
                                
                                    </div>
                                   
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-5 order-lg-1 order-2 d-flex justify-content-center">
                                    <img className="img-fluid animated" src={props.img} alt="" />
                                </div>
                                </div>
                              
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Common;