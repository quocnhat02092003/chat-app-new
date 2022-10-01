import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search' />
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userchatInfo">
          <span>Quoc Nhat</span>
        </div>
      </div>
    </div>
  )
}

export default Search