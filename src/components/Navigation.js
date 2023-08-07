import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
      <Link to={'/'}>HOME</Link>
      {/* link to는 a태그 href와 같은 기능 */}
      <Link to={'/about'}>ABOUT</Link>
    </div>
  )
}

export default Navigation