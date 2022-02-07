import React, { useState } from 'react';
import './Dropdown.scss'
const DropdownMenu = (props) => {

  const { contacts } = props;
  const [active, setActive] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(contacts.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const showData = () => {
    if (contacts)
      return (
        contacts.map((el, i) => {
          return <label className='Dropdown-label'>
            <input className='Dropdown-checkbox' key={i} type='checkbox' value={el.value} checked={checkedState[i]} onChange={() => handleOnChange(i)} />
            {el.label}
          </label>
        })
      )
  }
  return <div className='Dropdown'>
    <div className={`Title ${active ? 'Title1' : ''}`} onClick={() => setActive(!active)}>
      <p>All contacts</p>
    </div>
    <div className={`DropdownMenu ${active ? 'DropdownMenu1' : ''}`}>
      {active && showData()}
    </div>
  </div>;
}

export default DropdownMenu;
