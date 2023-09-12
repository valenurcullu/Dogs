import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog,getTemperaments } from "../actions";
import { Link,useHistory } from "react-router-dom"
import { useEffect,useState } from "react";
import style from './Estilos/DogCreate.module.css';
import Nav from './Nav.jsx';

function validate(input){
    let errors = {}
    if(!input.name){
        errors.name = 'Must be a name'
    }
    // !/^[a-zA-Z]*$/
    if(input.name && !/^[a-z]*$/i.test(input.name)){
        errors.name = 'The name can not contain numbers or special caracters'
    }
    if(parseInt(input.height_min) >= parseInt(input.height_max)){
        errors.height_min = 'The height min can not be bigger or equal than the max height'
    }

    if(parseInt(input.weight_min) >= parseInt(input.weight_max)){
        errors.weight_min = 'The weight min can not be bigger or equal than the max weight'
    }
    return errors
}



export default function DogCreate(){
const dispatch = useDispatch()
const temperament = useSelector((state)=> state.temperaments )
const history = useHistory()

const [errors,setErrors]= useState({})
    
const [input,setInput]= useState({
    name:'',
    height_min:'',
    height_max:'',
    weight_min:'',
    weight_max:'',
    lifeTime:'',
    image:'',
    temperament: []
    })
    
    useEffect(()=>{
        dispatch(getTemperaments)
        },[dispatch])

    

    function handleInput(e){
      e.preventDefault()
      setInput({
        ...input,
        [e.target.name] : e.target.value 
    }) 
    setErrors(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
    console.log(e.target.value)
}

    function handleSelect(e){
        
        if(!input.temperament.includes(e.target.value)){
            setInput({
                ...input,
                temperament : [...input.temperament, e.target.value]
            })
        }
    }
    console.log(handleSelect)

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postDog(input))

        alert('Personaje Creado Exitosamente')
        setInput({
            name:'',
            height_min:'',
            height_max:'',
            weight_min:'',
            weight_max:'',
            lifeTime:'',
            image:'',
            temperament: []
        })
        history.push('/home')
    }
 

    

    return(
        <div className={style.background}>
            <Nav/>
            <div>
            <Link to='/home'>
            <button className={style.btn}>Back</button>
            </Link>
            <h2 className={style.titulo}>CREATE YOUR DOGS</h2>
            </div>
            
            <form className= {style.formStyle} onSubmit={e => handleSubmit(e)}>
                <div  className = {style.items}>
                    <label className={style.label}>Name:</label>
                    <input className={style.numInput} name="name" type="text" value={input.name}  onChange={e=>handleInput(e)}/>
                    <span className={style.error}>{errors.name? errors.name : ''}</span>
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Altura Min:</label>
                    <input className={style.numInput}  name="height_min" type="number" min='0' value={input.height_min}  onChange={e=>handleInput(e)}/>
                    <span className={style.error}>{errors.height_min? errors.height_min : ''}</span>
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Altura Max:</label>
                    <input className={style.numInput} name="height_max" type="number" min='0' value={input.height_max} onChange={e=>handleInput(e)}/>
                    
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Peso Min:</label>
                    <input className={style.numInput} name="weight_min" type="number" min='0' value={input.weight_min}  onChange={e=>handleInput(e)}/>
                    <span className={style.error}>{errors.weight_min? errors.weight_min : ''}</span>
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Peso Max:</label>
                    <input className={style.numInput} name="weight_max" type="number" min='0' value={input.weight_max} onChange={e=>handleInput(e)}/>
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Promedio De Vida:</label>
                    <input className={style.numInput} name="lifeTime" type="text" value={input.lifeTime} onChange={e=>handleInput(e)}/>
                </div>
                <div  className = {style.items}>
                    <label className={style.label}>Imagen:</label>
                    <input className={style.numInput} name="image" type="text" value={input.image} onChange={e=>handleInput(e)}/>
                </div>
                <div  className = {style.items}>
                    <select className={style.numInput} onChange={e=>handleSelect(e)} >
                    <option className={style.label} value='all'>Temperamentos</option>
                    {temperament?.map(el=>{
                        return (
                            <option value={el.name} key={el.id}>{el.name}</option>
                        )
                    })}
                    </select>
                    <ul>
                        <li>{input.temperament.map(el=> el + ',')}</li>
                    </ul>
                    <button className={style.btn} type="submit" >Create Dog</button>
                </div>
            </form>
        </div>
    )


}