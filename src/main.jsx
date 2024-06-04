import './index.css'

import { applyMiddleware, createStore } from 'redux' //, createStore is deprecated, you should use the configureStore method from our official Redux Toolkit package
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
import { thunk } from 'redux-thunk'
import { createRouterMiddleware , ReduxRouter  } from '@lagunovsky/redux-react-router'
import { composeWithDevTools } from '@redux-devtools/extension'
import { Provider } from 'react-redux'

import createRootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css'
import { routes } from './routes'

const history = createBrowserHistory()
const middlewares = [thunk, createRouterMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares)) //????
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ReduxRouter history={history}> 
        {routes}
      </ReduxRouter>
  </Provider>
)

