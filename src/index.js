import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { playerReducer, backgroundReducer, obstacleReducer, gameReducer } from './reducers/index'


const rootReducer = combineReducers({
    player: playerReducer,
    background: backgroundReducer,
    obstacles: obstacleReducer,
    game: gameReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);
