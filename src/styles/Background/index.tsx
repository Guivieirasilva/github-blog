import React from 'react'

const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-base-background">
      <img src="/cover.png" alt="" className="h-72 w-full" />
      <img
        src="/Logo.svg"
        alt=""
        className="absolute top-0 left-0 right-0 mx-auto mt-10 max-w-40"
      />{' '}
    </div>
  )
}

export default Background
