

const initialState = {
    dogs: [],
    temperaments: [],
    allDogs:[],
    detail:[]
}

function rootReducer(state= initialState,action){
    switch(action.type){
        case 'DELETE_DOGS':
            return{
                ...state,
                detail : []
            }
        case 'GET_ALL_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'GET_ALL_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDogs1 = state.allDogs
            const filteredTempe = action.payload === 'all' ? allDogs1 : allDogs1.filter(el=>{
                return el.temperament?.includes(action.payload)
            })
        
            return{
                    ...state,
                    dogs:filteredTempe
                }
        case 'FILTER_BY_CREATED':
            const allDogs2 = state.allDogs
            const filteredCreate = action.payload === 'created'? allDogs2.filter(el=> el.createdInDb) : allDogs2.filter(el=> !el.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'all'? allDogs2 : filteredCreate
            }
        case 'FILTER_BY_NAME':
            let sortedArr = action.payload === 'asc'?
            state.dogs.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0
            }): state.dogs.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                return 0
            })
            return{
                ...state,
                dogs: sortedArr
            }
        case 'FILTER_BY_WEIGHT':
            const allDogWeight = state.allDogs.filter(el => el.weight_min)
             const filterWeight = action.payload === 'min_weight' ? allDogWeight.sort((a, b) => {
             return a.weight_min - b.weight_min
             })  :
             allDogWeight.sort((a,b) =>{
              return a.weight_min - b.weight_min
             }).reverse()
            return {
              ...state,
              dogs: filterWeight,
               }
        case 'GET_NAME':
            return{
                ...state,
                dogs: action.payload
            }
        case 'POST_DOG':
            return{
                ...state
            }
        case 'GET_DETAILS':
            return{
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}


export default rootReducer;