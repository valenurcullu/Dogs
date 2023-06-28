import React from 'react'
import {Link} from 'react-router-dom'
import style from './Estilos/LandingPage.module.css'


export default function LandingPage(){
    return(
        <div className={style.backround}>
        <div className={style.divStyle}>
            <h1 className={style.h1}>Welcome To My Dogs Page!!</h1>
            <Link to = '/home'>
                <button className={style.button}>ingresar</button>
            </Link>
        </div>
        </div>
    )
}