import React, {useState} from 'react'

import ModalBackground from '../modal-background'

import './select.scss'

const SelectInput = ({ text, isOpen}) => {
    return (
      <div className="select__input">
        <span>{text}</span>
        <i className={"fa fa-chevron-" + (isOpen ? 'up':'down')} ></i>
      </div>
  )
}

const SelectDropdown = ({data = [], selectedId, setCurrent}) => {

  const items = data.map(item => {
    let cls = ''
    if (item.id === selectedId) {
      cls='selected'
    }
    
    return (
      <li 
        onClick={() => setCurrent(item.id)} 
        key={item.id} 
        className={"select__item "+ cls} 
      > 
        {item.city}
      </li>
    )
  })

  return (
    <div className="select__dropdown ">
      <ul className="select__list">
        {items}
      </ul>
    </div>
  )
}

const Select = ({data, setCity, city}) => {

  const [isOpen, setIsOpen] = useState(false)

  const currentItem = data.find(item => {return item.id === city })
  
  return (
    <div className={"select " + (isOpen ? 'open' : '')} onClick={()=>setIsOpen(!isOpen)}>
      <ModalBackground isHidden={!isOpen} />
      <SelectInput isOpen={isOpen} text={currentItem.city} />
      <SelectDropdown 
        setCurrent={setCity}
        data={data} 
        selectedId={city} 
      />
    </div>
  )
}

export default Select
