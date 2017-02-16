'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import AllPuppiesContainer from './AllPuppiesContainer'
import SinglePuppyContainer from './SinglePuppyContainer'

import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { onLoadPuppies, loadSinglePuppy } from './action-creators'

const onAllPuppiesEnter = () => store.dispatch(onLoadPuppies())

const onSinglePuppyEnter = function(routerState) {
  let puppyId = routerState.params.puppyId
  store.dispatch(loadSinglePuppy(puppyId))
}

ReactDOM.render(
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path='/' onEnter={onAllPuppiesEnter}>
              <Route path='/puppies' component={AllPuppiesContainer} />
              <Route path='/puppies/:puppyId' component={SinglePuppyContainer} onEnter={onSinglePuppyEnter} />
              <IndexRedirect to='/puppies' />
            </Route>
          </Router>
        </Provider>
      </div>
    </div>,
  document.getElementById('app')
);

