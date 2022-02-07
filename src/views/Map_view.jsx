import React from 'react';
import '../css/Map_view.css'
import { Link } from "react-router-dom";
import Administrative_view from './Administrative_view.jsx';
import Diplomatic_view from './Diplomatic_view.jsx';
import Military_view from './Military_view.jsx';

const realm_name = "My realm"
let currentDate = new Date();
let date = currentDate.getDate() + "-" + currentDate.getMonth() + 1 + "-" + currentDate.getFullYear()
let money = "100000"
let population = "250000"

export default function Map_view() {
    return (<div className='main_view'>
        <div className="top_banner">
            <div className="date">{date}</div>
            <div className="r_coffers">{money}</div>
            <div className="realm_name">{realm_name}</div>
            <div className="r_population">{population}</div>
        </div>
        <div className="center_view">
            Map view
        </div>
        <div className="bottom_banner">
            <Link className="r_administrative" to='/administration' >A</Link>
            <Link className="r_diplomatic" to="/diplomacy" >D</Link>
            <Link className="r_military" to="/military">M</Link>
        </div>
    </div>);
}
