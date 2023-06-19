import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#1f2123] text-white'>
      <div>
        <a href=''>Tokenize</a>
        <ul>
            <li>
                <a>What is Tokenize?</a>
            </li>
            <li>
                <a>Platform</a>
            </li>
            <li>
                <a>Solutions</a>
            </li>
            <li>
                <a>Reference</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
      </div>
      <div>
        <a></a>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default Navbar
