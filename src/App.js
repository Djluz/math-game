import React from 'react'
import './style.css'
import Logo from './assets/logo_mathgame.png'
import Nav from './components/Nav'

export default function App() {
  
  return (
    <div className="box bg-white mx-auto">
      <nav className='pt-10 px-20 flex flex-row items-center mx-auto'>
        <img src={Logo} alt='' />
        <h3 className='text-center text-2xl font-extrabold mx-auto'>Play our Math Game!</h3>
      </nav>
      <Nav />
    </div>
  );
}