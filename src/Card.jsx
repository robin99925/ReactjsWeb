import React from 'react'
import img1 from './pic/img1.jpg';
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.img} class="card-img-top" alt="card_img" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <a href="#" class="btn btn-outline-primary">MoreAbout</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card
