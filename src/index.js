import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Game } from "./components";
import { app } from './components';
import './index.css';

const store = createStore(app);

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById("root")
);

