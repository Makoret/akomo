import React from 'react';
import '../css/Map_view.css'

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
        <div className="center_view"></div>
        <div className="bottom_banner">
            <div className="r_administrative">A</div>
            <div className="r_diplomatic">D</div>
            <div className="r_military">M</div>
        </div>
    </div>);
}
