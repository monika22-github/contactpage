import React from "react";  


const Hero = () => {
    return (
        <div className="Hero mt-45 p-45 flex  space-x-10">


    <img className="w-full h-full rounded-full" src="src\assets\girl.avif" alt="" />
<div className="content">
            <h1 className="text-8xl font-bold">Hello</h1>
            <h2 className="text-2xl mt-10 font-bold">A Bit about me</h2>
            <p>I'm a paragraph. Click here to add your own text <br />and edit me. I’m a great place for you to tell a story <br /> and let your users know a little more about you.</p>
<div className="Links flex mt-10 space-x-10">
<div className="box-border size-32 border-2 pt-12 rounded-full bg-orange-400 font-bold text-center">Resume</div>
<div className="box-border size-32 border-2 pt-12 rounded-full bg-red-500 font-bold text-center">Project </div>
<div className="box-border size-32 border-2 pt-12 rounded-full bg-cyan-300 font-bold text-center">Contact</div></div></div>






            </div>
    )
}

export default Hero;