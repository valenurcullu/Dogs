import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
//import style from './Estilos/Detail.module.css'
import { deleteState } from "../actions";
import './Estilos/Detail.css';
import Nav from './Nav';



export default function Detail(props){
    const dispatch = useDispatch()
    const myDog = useSelector((state)=> state.detail)
    
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
        return ()=> dispatch(deleteState())
    },[dispatch])
    
    


    return(
        <div className='background'>
            <Nav/>

             <Link to="/home">
                <button className='btn'>Back</button>
            </Link>
            {
                Object.keys(myDog).length ? 
                <div className='general'>

                    <div className='cardImg'>
                    <img src={myDog[0].image? myDog[0].image:myDog[0].image='https://www.shutterstock.com/image-vector/little-white-cartoon-dog-sitting-260nw-220770199.jpg'}  /> 
                    </div>
                    <div className='dogdetail'>
                        <h1 className='h'>Name:{myDog[0].name}</h1>
                        <h2 className='h'> Weight :{myDog[0].weight_min} - {myDog[0].weight_max} KG</h2>
                        <h2 className='h'> Height :{myDog[0].height_min} - {myDog[0].height_max} CM</h2>
                        <h2 className='h'>Lifetime:{myDog[0].lifeTime}</h2>
                        <div>
                             <h2 className='h'>Temperaments:</h2>
                             <h3 className='h'>{!myDog[0].createdInDb? myDog[0].temperament + '' :myDog[0].temperaments.map(el=> el.name + (','))}</h3>
                        </div>
                    </div>
                </div>: <h3>Loading...</h3>

            }
        </div>
    )



}
//width="400" height="400"
// myDog[0].temperaments.name

// myDog[0].temperaments.map(el=> el.name + ',')

{/* <img src={myDog[0].image? myDog[0].image:myDog[0].image='https://www.shutterstock.com/image-vector/little-white-cartoon-dog-sitting-260nw-220770199.jpg'} width="400" height="400" /> */}