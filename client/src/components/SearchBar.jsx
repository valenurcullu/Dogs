import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { getName } from "../actions";
import style from './Estilos/SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [findDog,setFindDog] = useState('')

    function handleInput (e){
        e.preventDefault()
        setFindDog(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault()
        dispatch(getName(findDog))
        setFindDog('')
    }
    return(
        <div className={style.searchbar_container}>
            <form className={style.form}>
                <input className={style.searchbar} type="text" placeholder="buscar..." onChange={e=>handleInput(e)} value={findDog}/>
                <button className={style.searchbar_button} type="submit" onClick={e=>handleSubmit(e)}>Find</button>
            </form>
        </div>
    )
    
}