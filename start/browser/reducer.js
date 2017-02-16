import { GET_PUPPIES, GET_SINGLE_PUPPY } from './action-creators'
import { combineReducers } from 'redux'

// const initialState = {
  //   allPuppies: [],
  //   selectedPuppy: {}
  // }



  // export default (state = initialState, action) => {

  //     const newState = Object.assign({}, state)

  //     switch (action.type) {

  //       case GET_PUPPIES:
  //         newState.allPuppies = action.allPuppies
  //         break;

  //       case GET_SINGLE_PUPPY:
  //         newState.selectedPuppy = action.selectedPuppy
  //         break;

  //       default:
  //         return state

  //     }

  //     return newState
  // }
//

function allPuppiesReducer(state = [], action) {

    // const newState = Object.assign({}, state)
    //don't do all this it returns the object instead of the array

    switch (action.type) {

      case GET_PUPPIES:
        return action.allPuppies;

      default:
        return state;
    }
}

function singlePuppyReducer(state = {}, action) {

    switch (action.type) {

      case GET_SINGLE_PUPPY:
        return action.singlePuppy

      default:
        return state;
    }
}

export default combineReducers({
  allPuppies: allPuppiesReducer,
  singlePuppy: singlePuppyReducer
})
