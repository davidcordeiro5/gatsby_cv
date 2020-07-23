import React from 'react'

import "./Title.scss";

const Title = ({children, underline}) => {
  return (
    <h3 className={`title ${underline && "-underline"}`}>
      {children}
    </h3>
  )
}

export default Title
