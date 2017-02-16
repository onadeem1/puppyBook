import SinglePuppy from './SinglePuppy';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  singlePuppy: state.singlePuppy
})

const SinglePuppyContainer = connect(mapStateToProps)(SinglePuppy)

export default SinglePuppyContainer
