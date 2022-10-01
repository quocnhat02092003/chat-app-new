import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>QuocNhat chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Quoc Nhat</span>
        <button>Log out</button>
      </div>
    </div>
    
  )
}

export default Navbar