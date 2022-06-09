import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Game } from "./components";
import { app } from './components';
import './index.css';

const store = createStore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

