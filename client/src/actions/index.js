import axios from 'axios'

  export function deleteState(){
    return function(dispatch){
    return dispatch({
      type:'DELETE_DOGS',
      payload: []
    })}
  }


  export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("/dogs/")
       
        return dispatch({
            type:'GET_ALL_DOGS',
            payload:json.data
        })
        
    };
  }

  export function getDetail(id){
    return async function(dispatch){
      var json= await axios.get(`/dogs/${id}`)
      return dispatch({
        type: 'GET_DETAILS',
        payload: json.data
      })
    }
  }

  export function getTemperaments(){
    return async function(dispatch){
       try{ var json = await axios.get("/temperaments/")
        
        return dispatch({
            type:'GET_ALL_TEMPERAMENTS',
            payload:json.data
        })}catch(error){
          console.log(error)
        }
        
    };
  }

  export function getName(name){
    return async function(dispatch){
        try{var json = await axios.get(`/dogs/?name=${name}`)
        console.log(json.data)
        return dispatch({
            type:'GET_NAME',
            payload:json.data
        })}
        catch(error){
          alert('The dog could not be found')
      }
        
    };
  }

  export function postDog(payload){
    try{
      return async function(){
        var response = await axios.post("/dogs/",payload);
        return response}
      }catch(error){
        alert('the dog could not be created')
      }
  }



  export function filterByTemperament(payload){
      return{
        type:'FILTER_BY_TEMPERAMENT',
        payload
    } 
    };
  
    export function filterByCreated(payload){
      return{
        type:'FILTER_BY_CREATED',
        payload
    } 
    };

    export function filterByName(payload){
      return{
        type:'FILTER_BY_NAME',
        payload
    } 
    };

    export function filterByWeight(payload){
      return{
        type:'FILTER_BY_WEIGHT',
        payload
    } 
    };
  
  