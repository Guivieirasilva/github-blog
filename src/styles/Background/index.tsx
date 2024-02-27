import React from 'react'

const Background: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-base-background">
      <img src="/cover.png" alt="" className="h-72 w-full" />
      <img
        src="/Logo.svg"
        alt=""
        className="absolute left-0 right-0 top-0 mx-auto mt-10 max-w-40"
      />{' '}
    </div>
  )
}

export default Background
