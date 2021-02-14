import React, { useState } from "react"
const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: ""
    })
    const inputData = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            }

        })

    }
    const submitData=(e)=>{
        e.preventDefault();
        alert(`Dear ${data.fullName} your phone No is ${data.phone} and email ${data.email}and your message are successfully sent.`)
    }

    return (
        <>
            <div className="text-center my-4">
                <h1>Let's get started!</h1>

            </div>
            <div className="container-fluid justify-content-center">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <form onSubmit={submitData}>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                        <input type="text" onChange={inputData} class="form-control" autoComplete="off" name="fullName" value={data.fullName} id="exampleFormControlInput1" placeholder="Enter your name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Phone Number</label>
                                        <input type="text" onChange={inputData} class="form-control" autoComplete="off" name="phone" value={data.phone} id="exampleFormControlInput1" placeholder="Enter your name" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" onChange={inputData} class="form-control" autoComplete="off" name="email" value={data.email} id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" onChange={inputData} id="exampleFormControlTextarea1" name="msg" value={data.msg} rows="3"></textarea>
                                    </div>
                                    <button className="btn btn-outline-primary">ContactNow</button>
                                </form>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;