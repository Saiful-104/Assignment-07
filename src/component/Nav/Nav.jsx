import React from 'react';

const Nav = () => {
    return (
        <div className='mt-3 ml-8 mr-8 h-[auto] max-w-[1240px] m-auto flex flex-col md:flex-row justify-between items-center'>
  <div>
    <h1 className="font-bold text-2xl">
      CS — Ticket System
    </h1>
  </div>

  <div className='flex flex-col md:flex-row gap-2 md:gap-3 mt-3 md:mt-0'>
    <a className='p-2 md:p-4' href="">Home</a>
    <a className='p-2 md:p-4' href="">FAQ</a>
    <a className='p-2 md:p-4' href="">Changelog</a>
    <a className='p-2 md:p-4' href="">Blog</a>
    <a className='p-2 md:p-4' href="">Download</a>
    <a className='p-2 md:p-4' href="">Contact</a>
<button className="rounded-2xl text-xl font-semibold  text-white p-3 md:p-4
  bg-gradient-to-r from-purple-800 to-purple-600">
  + New Ticket
</button>

   
  </div>
</div>

    );
};

export default Nav;