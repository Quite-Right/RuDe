import React from 'react'

interface Props {

}

const AlertTemplate = ({ style, message, close }: Props) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

export default AlertTemplate
