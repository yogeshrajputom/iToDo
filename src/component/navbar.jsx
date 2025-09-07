import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-gray-700 text-white p-4 py-2'>
                <div className='logo'>
                    <span className='font-bold text-2xl text-green-400 mx8 font-size-xl'> <span className='text-blue-400'>i</span>ToDo</span>
                </div>
                <ul className='flex gap-8'>
                    <li className='cursor-pointer hover:font-bold transition-all transition-duration:500 '>Home</li>
                    <li className='cursor-pointer hover:font-bold transition-all transition-duration:500 '>About</li>
                    <li className='cursor-pointer hover:font-bold transition-all transition-duration:500 '>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;