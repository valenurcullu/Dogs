import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getDogs,getTemperaments,filterByTemperament,filterByCreated,filterByName,filterByWeight} from '../actions';
//import {Link} from 'react-router-dom';
import Card from './Card';
import Paginate from './Paginate';
import SearchBar from './SearchBar';
//import style from './Estilos/Home.module.css'
import './Estilos/Home.css'
import Nav from './Nav';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function Home(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=>state.dogs)
    const allTemperaments = useSelector((state)=>{ return state.temperaments})
    const [orden, setOrden] = useState("")
    // const [currentPage,setCurrentPage] = useState(1);
    // const [dogsPerPage,setDogsPerPage] = useState(8);
    // const indexOfLastDog = currentPage * dogsPerPage;
    // const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    // const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog);
     // const paginado = (pagNumber)=>{
    //     setCurrentPage(pagNumber)
    // }
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogPerPage] = useState(8) 
    const indexLastDog = currentPage * dogsPerPage
    const indexFirstDog = indexLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexFirstDog,indexLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
   


    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
    },[dispatch])//si no depende de nada le pasas el array vacio si depende de temperamets por ejemplo le pasarias [temperaments],pero simepre tiene que ir un array para q no se genere un loop infinito.

    function handleClick(e){
        e.preventDefault();//es preventivo ponemos esto paraque no se recargue toda la pag y se rompan las cosas,porque cada vez que hay un useeffect se recarga la pagina
        dispatch(getDogs())
    }
    function handleFilterTempe(e){
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
        setCurrentPage(1)
    }
   
    function handleFilterByName(e){
        e.preventDefault();
        dispatch(filterByName(e.target.value))
        setCurrentPage(1)
        setOrden(`ordenado ${e.target.value}`)
    }

    function handleFilterByWeight(e){
        e.preventDefault();
        dispatch(filterByWeight(e.target.value))
        setCurrentPage(1)
        setOrden(`ordenado ${e.target.value}`)
    }
    function handleFilterByCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value))
        setCurrentPage(1)
    }

 return (
    <div className="homeContainer">
        <Nav/>
     
        <div className="filters">
            <div className="selectBox">
                <select onChange={e=> handleFilterByName(e)}>
                     <option selected="true" disabled="disabled">Order alphabetically</option>
                     <option value='all'>All</option>
                     <option value='asc'>Ascendente</option>
                     <option value='desc'>Descendente</option>
                 </select>
             </div>

             <div className="selectBox">
             <select onChange={e=>handleFilterByCreated(e)}>
                <option selected="true" disabled="disabled">Order by created</option>
                <option value='all'>All</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
             </select>
             </div>

             <div className="selectBox">
             <select onChange={e=> handleFilterByWeight(e)}>
                <option selected="true" disabled="disabled">Order by weight</option>
                <option value='all'>All</option>
                <option value="max_weight">Max</option>
                <option value="min_weight">Min</option>
             </select>
             </div>


             <div className="selectBox">
             <select onChange={e=> handleFilterTempe(e)} >
                <option selected="true" disabled="disabled">Order by Temperament</option>
                <option value='all'>All</option>
                {allTemperaments?.map(el=>{
                    return(
                        <option value={el.name} key={el.id}>{el.name}</option>
                    )
                })}
             </select>
             </div>

             <div className="searchContainer">
                <SearchBar/>
             </div>
       
        </div>
    
        <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
        
        <div className="cardsContainer">
            <div className="cards">
             {currentDogs?.map(el=>{
                  return(
                    <Link
                    className="Link"
                    to={`/home/${el.id}`}
                    
                >
                    <Card id={el.id} image={el.image} name={el.name} temperament={!el.createdInDb? el.temperament :el.temperaments.map(e=> e.name + (','))} weight_min={el.weight_min} weight_max={el.weight_max}/>
                    </Link>
                        )})}
            </div>
        </div>
        
    </div>
 )
}

{/* <header>
        <div className={style.arreglar}>
            
                <button className={style.logo}>Dogpedia</button>
           
        </div> */}
        {/* <div className="homeContainer"> */}
            {/* <div>
                <button className = {style.btn} onClick={e=>{handleClick(e)}}>Reload Dogs!</button>
                <Link to='/create'>
                        <button className = {style.btn} >Create Dog</button>
                 </Link>
            </div> */}
            
    {/* <div className={style.headerLeft}> */}



    // abajo del div de serach bar
    // {/* </div> */}
    // </div>
    // {/* </div> */}
    //    {/* </header> */}