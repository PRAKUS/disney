import React, { useEffect, useState } from 'react';
import "./css/landing.css"

const Landing = () => {
    const navbarheight = 0;
    const [height, setHeight] = useState((window.screen.height-navbarheight));

    useEffect(() => {
        window.addEventListener("resize", () => { setHeight(window.screen.height-navbarheight ) })
    },)
      window.addEventListener("resize", () => { setHeight(window.screen.height-navbarheight ) })
   

    return (
        
        <div style={{height:`${height}px`,overflow:"hidden"}} className='landingContainer'>
            {console.log(window.screen.height,height)}
            <div className='landingOverlay'>
                <div className="landingContent">
                    <img src="assets/images/cta-logo-one.svg" alt="landing" />
                    <button className='landingButton'>Get All There</button>
                    <p className='landingtext'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.<br/> As of 03/26/21,the price of Disney+ and The Disney Bundle wiil increase by $1 </p>
                    <img style={{width:"100%"}} src="assets/images/cta-logo-two.png" alt="landing"/>
                </div>
              
            </div>
            <div  >
                 <img style={{height:"100%"}} src="/assets/images/login-background.jpg" alt="landing"/>
            </div>
           
        </div>
    );
};

export default Landing;