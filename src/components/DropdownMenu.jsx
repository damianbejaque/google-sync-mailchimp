import React, { useState } from 'react';
import './DropdownMenu.scss'
const DropdownMenu = (props) => {

  const { contacts } = props;
  console.log(contacts)
  const [active, setActive] = useState(false);

  const showData = () => {
    if (contacts)
      return (
        contacts.map((el, i) => {
          return <label><input key={i} type='checkbox' value={el.value} /> {el.label} </label >
        })
      )
  }
  return <div className='DropdownMenu'>
    <p onClick={() => setActive(!active)}>All contacts</p>
    {active && showData()}
  </div>;
}

export default DropdownMenu;
