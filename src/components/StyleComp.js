import React from 'react'
import './mystyle.css'
function StyleComp(props) {
  let classname = !props.primary ? 'primary' : ''
  return (
    <div>
      <span className={`${classname} secondary`}>Stylesheets</span>
    </div>
  )
}

export default StyleComp
