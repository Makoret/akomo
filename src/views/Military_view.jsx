import React from 'react';
import '../css/Military_view.css'

export default function Military_view() {
    return <div className='mil_view'>
        <div className="tabs">
            <div className="manpower">manpower</div>
            <div className="army">army</div>
            <div className="defence">production</div>
            <div className="dummy">imports</div>
            <div className="offense"></div>
            <div className="dummy">exports</div>
        </div>
        <div className="work_area">
            work area
        </div>
    </div>;
}
