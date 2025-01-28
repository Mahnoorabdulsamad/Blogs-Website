import React from 'react'

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl font-bold">Bloger</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-pink-900 text-pink-600">Home</a>
      <a className="mr-5 hover:text-pink-900 text-pink-600">About</a>
      <a className="mr-5 hover:text-pink-900 text-pink-600">Blog</a>
    </nav>
    
  </div>
</header>

    </div>
  )
}
