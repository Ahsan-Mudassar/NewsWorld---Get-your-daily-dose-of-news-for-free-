import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function NavBar({setQuery}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = ()=>{
    setQuery(input);
  }
  return (
    <>
      <nav className='flex justify-evenly items-center gap-9 p-3 font-200 bg-blue-900 text-white font-semibold fixed min-w-full h-18'>
        <div>
          <h1 className='text-2xl'>NewsWorld </h1>
        </div>
        <div>
          <ul className={`
        absolute top-16 left-0 z-20 w-full bg-blue-800 flex flex-col justify-center items-center gap-4 p-4 
        md:static md:flex md:flex-row md:bg-transparent md:w-auto md:ml-6
        ${menuOpen ? 'block' : 'hidden'}
        `}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/business" onClick={() => setMenuOpen(false)}>Business</Link></li>
            <li><Link to="/entertainment" onClick={() => setMenuOpen(false)}>Entertainment</Link></li>
            <li><Link to="/general" onClick={() => setMenuOpen(false)}>General</Link></li>
            <li><Link to="/health" onClick={() => setMenuOpen(false)}>Health</Link></li>
            <li><Link to="/science" onClick={() => setMenuOpen(false)}>Science</Link></li>
            <li><Link to="/sports" onClick={() => setMenuOpen(false)}>Sports</Link></li>
            <li><Link to="/technology" onClick={() => setMenuOpen(false)}>Technology</Link></li>
          </ul>
        </div>
        <div className='hidden cursor-pointer max-sm:block ml-auto' onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g id="menu_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z' /><path fill='#ffff' d='M20 18a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.117-1.993L4 18zm0-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z' /></g></svg>
        </div>
        <div className='absolute top-20 left-20 w-full md:static md:flex md:flex-row md:bg-transparent md:w-auto '>
          <input className='text-white px-2 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-500 max-sm:text-black' type="text" placeholder='Enter news...' value={input} onChange={(e) =>setInput(e.target.value)}  />
          <button className=' bg-indigo-500 ml-2 px-3 py-2 text-white text-[14px] rounded-sm  font-medium cursor-pointer hover:bg-indigo-600' onClick={handleSearch}>Search</button>
        </div>
      </nav>
    </>
  )
}