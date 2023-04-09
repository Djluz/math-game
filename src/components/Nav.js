import React from 'react'
import MathQuiz1 from '../pages/MathQuiz1'
import MathQuiz2 from '../pages/MathQuiz2'
import MathQuiz3 from '../pages/MathQuiz3'
import MathQuiz4 from '../pages/MathQuiz4'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <BrowserRouter>
        <nav className='pb-10 px-10'>
            <p className='text-3xl pt-10 text-black'>Choose a Category below:</p>
            <ul className='flex flex-row px-10 max-w-sm gap-5 text-xl justify-around mx-auto font-semibold '>
                <li className='py-1 px-5 rounded-full bg-slate-300 hover:cursor-pointer hover:bg-blue-400'>
                    <Link to='/MathQuiz1'>
                        Addition
                    </Link>
                </li>
                <li className='py-1 px-5 rounded-full bg-slate-300 hover:cursor-pointer hover:bg-blue-400'>
                    <Link to='/MathQuiz2'>
                        Subtraction
                    </Link>
                </li>
                <li className='py-1 px-5 rounded-full bg-slate-300 hover:cursor-pointer hover:bg-blue-400'>
                    <Link to='/MathQuiz3'>
                        Multiplication
                    </Link>
                </li>
                <li className='py-1 px-5 rounded-full bg-slate-300 hover:cursor-pointer hover:bg-blue-400'>
                    <Link to='/MathQuiz4'>
                        Division
                    </Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/MathQuiz1' exact element={<MathQuiz1 />}></Route>
        
            <Route path='/MathQuiz2' exact element={<MathQuiz2 />}></Route>

            <Route path='/MathQuiz3' exact element={<MathQuiz3 />}></Route>

            <Route path='/MathQuiz4' exact element={<MathQuiz4 />}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Nav