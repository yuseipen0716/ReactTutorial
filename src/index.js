import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Game } from "./components/Game";
import { app } from './reducers';
import { GameContainer } from './containers'
import './index.css';
// コンフリクトのテスト1

const store = createStore(app);

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById("root")
);

