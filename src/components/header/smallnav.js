import React, { useState } from 'react';
import { NavComponent } from './nav.js';
import { Fade } from 'hamburger-react';

const SmallScreensNavbar = () =>{
    let [translate, setTranslate ] = useState(false);
    return(
        <div className="nav-mobile"> 
            <button className={ translate ? "circle-burguer-colored" : "circle-burguer-grey" }>
                <Fade duration={0.8} color="#FFF" size={24} toggled={translate} toggle={setTranslate} />
            </button>
             <div id="sidebar-list" className={`${!translate? "addTransiton": "removeTransition"}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName = "nav-small-link"
                    onClick = {()=>setTranslate(true)}
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar;