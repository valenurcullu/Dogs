import { Link } from 'react-router-dom';
import './Estilos/LandingPage.css';
import image from './Estilos/dogLogo.webp';



export default function LandingPage() {
    return (
        <div className="landingContainer">
           
            <div className="landing">
                <div className="landingInfo">
                    <span>Welcome to the</span>
                    <h1>DOG APP</h1>
                    <Link to="/home">
                        <button className="landingButton">Let's go!</button>
                    </Link>
                </div>
                <div className="landingImage">
                    <img src={image} alt="xd" />
                </div>
            </div>
           
        </div>
    );
}








// import React from 'react'
// import {Link} from 'react-router-dom'
// import style from './Estilos/LandingPage.module.css'


// export default function LandingPage(){
//     return(
//         <div className={style.backround}>
//         <div className={style.divStyle}>
//             <h1 className={style.h1}>Welcome To My Dogs Page!!</h1>
//             <Link to = '/home'>
//                 <button className={style.button}>ingresar</button>
//             </Link>
//         </div>
//         </div>
//     )
// }