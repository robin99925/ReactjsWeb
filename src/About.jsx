import React from "react"
import Common from './Common'
import pic from './pic/pic.png';
const About = () => {
    return (
        <>
            <Common
                hname="Welcome to about page"
                name="We are the team of talented Developers"
                img={pic}
                btn="Contact Now"

            />
        </>
    );
}
export default About;