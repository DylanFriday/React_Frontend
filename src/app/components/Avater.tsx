import React from 'react'

const toUpper = (msg : string)  =>{
    return msg.toUpperCase()
}
const Avater = () => {
    const img = 'https://i.imgur.com/MK3eW3As.jpg'
    const description = 'Katherine Johnson'
  return (
    <div>
        <img src={img} alt={toUpper(description)} />
    </div>
  )
}

export default Avater