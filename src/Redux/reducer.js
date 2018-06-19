// INITIAL STATE
let initialState = {
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imgUrl: '',
    loan: 0,
    mortgage: 0,
    rent: 0
  }
  
  // CONST VARIABLES
  const ADD_PROPERTY_INFO = 'ADD_PROPERTY_INFO';
  const RESET_STORE = 'RESET_STORE';
  
  // REDUCER FUNCTION
  export default function reducer(state = initialState, action){
    switch(action.type) {
      case ADD_PROPERTY_INFO:
        return Object.assign({}, state, action.payload)
      case RESET_STORE:
        return initialState;
  
      default: 
        return state;  
    }
  }
  
  // ACTION BUILDERS/CREATORS
  export function addPropertyInfo(propertyVal){
    //  the return of an action creator is the action in the reducer
    return {
      type: ADD_PROPERTY_INFO, 
      payload: propertyVal
    }
  }
  
  export function delPropertyInfo(){
    return {
      type: RESET_STORE 
    }
  }