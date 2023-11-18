import React from 'react'

const CustomButton = ({className,text}:{className?:string,text:string}) => {
  return (
    <button className={className}>
        {text}
        
    </button>
  )
}

export default CustomButton