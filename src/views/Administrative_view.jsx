import React from 'react';
import '../css/Administrative_view.css'

export default function Administrative_view() {
    return <div className='admin_view'>
        <div className="tabs">
            <div className="taxes">taxes</div>
            <div className="army_maintenance">maintenance</div>
            <div className="production">production</div>
            <div className="imports">imports</div>
            <div className="dummy"></div>
            <div className="exports">exports</div>
        </div>
        <div className="work_area">
            work area
        </div>
    </div>;
}
