import React from "react"; //importacion de react
import ReactDOM from 'react-dom/client'// usamos reactdom para renderizar 
import { FirstApp } from "./FirstApp";
import './style.css'
import { CounterApp } from "./CounterApp";
// import {App} from "./HelloWordAppp";




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title={'React JS'} intentos={ 5 }/> */}
        <CounterApp value = { 10 }/>
    </React.StrictMode>
)