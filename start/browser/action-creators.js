import axios from 'axios';

export const GET_PUPPIES = 'GET_PUPPIES'
export const GET_SINGLE_PUPPY = 'GET_SINGLE_PUPPY'

//sync returns objects
export const getPuppies = allPuppies => ({
  type: GET_PUPPIES,
  allPuppies
})

export const getSinglePuppy = (singlePuppy) => ({
  type: GET_SINGLE_PUPPY,
  singlePuppy
})

//async returns functions
export const onLoadPuppies = () => (dispatch) => {
  axios.get('/api/puppies')
  .then(res => res.data) //return the data array off of the entire object
  .then(puppies => dispatch(getPuppies(puppies)))
  .catch(err => console.error(err))
}

export const loadSinglePuppy = (id) => (dispatch) => {
  axios.get(`/api/puppies/${id}`)
  .then(res => res.data)
  .then(puppy => dispatch(getSinglePuppy(puppy)))
  .catch(err => console.error(err))
}

