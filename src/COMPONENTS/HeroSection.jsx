import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-[calc(100vh-48px)] w-screen px-4 bg-[url("https://images.unsplash.com/photo-1615412704911-55d589229864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D")] bg-no-repeat bg-cover bg-center grid place-content-center'>
      <h1 className='text-2xl text-center text-fuchsia-500 font-bold bg-blue-500/20 p-6 rounded-full -translate-y-[100%] md:-translate-y-[200%] shadow-inner shadow-current border-2 border-fuchsia-500'>Responsiv Navbar</h1>
    </div>
  )
}

export default HeroSection
