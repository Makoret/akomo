import React from 'react';
import '../css/Diplomatic_view.css'

export default function Diplomatic_view() {
    return <div className='diplo_view'>
        <div className="tabs">
            <div className="next_events">next event</div>
            <div className="relations">relations</div>
            <div className="laws">laws</div>
        </div>
        <div className="work_area">
            work area
        </div>
    </div>;
}
