import React, { useState } from 'react';
import logo from '../assets/lnrarrows.png';
import './ButtonSync.scss'
function ButtonSync() {

    const [syncContacts, setSyncContacts] = useState(false);

    const toggleClick = () => {
        setSyncContacts(!syncContacts)
        document.getElementsByClassName('button-image')[0].classList.add("button-logo1");
    }

    return <div className='ButtonSync' onClick={() => toggleClick()}>
        <div className="button-logo">
            <img src={logo} className="button-image" alt="logo" />
        </div>
        <p>
            {syncContacts ? 'All Done!' : 'Sync Contacts'}
        </p>

    </div>;
}

export default ButtonSync;
