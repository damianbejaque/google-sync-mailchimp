import React, { useState } from 'react';
import logo from '../assets/lnrarrows.png';
import './ButtonSync.scss'
function ButtonSync() {

    const [syncContacts, setSyncContacts] = useState(false);

    const toggleClick = () => {
        setSyncContacts(!syncContacts)
    }

    return <div className='ButtonSync' onClick={() => toggleClick()}>
        <div className={`button-logo ${syncContacts ? '' : 'button-logo1'}`}>
            <img src={logo} className="button-image" alt="logo" />
        </div>
        <p>
            {syncContacts ? 'All Done!' : 'Sync Contacts'}
        </p>

    </div>;
}

export default ButtonSync;
