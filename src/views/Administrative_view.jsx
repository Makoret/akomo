import React from 'react';
import '../css/Administrative_view.css'

export default function Administrative_view() {
    return <div className='admin_view'>
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
