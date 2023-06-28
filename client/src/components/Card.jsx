import React from "react";
import { Link } from "react-router-dom";
import style from './Estilos/Card.module.css'

export default function Card({image,name,temperament,weight_min,weight_max,id}){
return (

<div className={style.div}>
        <div >
            <Link to={`/home/${id}`}>
            <img src={image?image:image='https://www.shutterstock.com/image-vector/little-white-cartoon-dog-sitting-260nw-220770199.jpg'} className={style.img} alt={`imagen de: ${name}`} height= '250px' width='200px'/>
            </Link>
        </div>
        <div>
            <div >
                
                <h3 className={style.h}>Nombre:{name}</h3>
                 
                <h4 className={style.h}>{temperament}</h4>
                 <h4 className={style.h} >weight min:{weight_min}kg/weight max:{weight_max}kg</h4>
            </div>
            
        </div>
    </div>














    // <div className={style.card}>
    //     <div className={style.img}>
    //         <Link to={`/home/${id}`}>
    //         <img src={image} className={style.img} alt={`imagen de: ${name}`} height= '250px' width='200px'/>
    //         </Link>
    //     </div>
    //     <div className={style.cardInfo}>
    //         <div className={style.titleStyle}>
    //             <Link to={`/home/${id}`}>
    //             <h3 className={style.h}>Nombre:{name}</h3>
    //              </Link>
    //             <h4 className={style.h}>{temperament}</h4>
    //              <h4 className={style.h}>weight min:{weight_min}kg/weight max:{weight_max}kg</h4>
    //         </div>
    //     </div>
    // </div>
)
}
