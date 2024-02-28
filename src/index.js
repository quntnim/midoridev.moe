import React from 'react';
import './styles/index.css';
import App from './App';
import {render} from "react-dom";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    rootElement
);

reportWebVitals();
