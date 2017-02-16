import AllPuppies from './AllPuppies';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  allPuppies: state.allPuppies
})

const AllPuppiesContainer = connect(mapStateToProps)(AllPuppies)

export default AllPuppiesContainer

//this action is now running in the onEnter in our router
  // const mapDispatchToProps = (dispatch) => ({
  //   onLoadPuppies: () => dispatch(onLoadPuppies())
  // })

//dispatching object not function
  // const mapDispatchToProps = function (dispatch) {
  //   return {
  //     onLoadPuppies: function () {
  //       dispatch(getPuppies(hardcodedPuppies));
  //     }
  //   };
  // };


