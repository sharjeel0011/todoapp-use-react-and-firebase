import React from 'react'
import { Link } from 'react-router-dom'
import  '../../../src/index.css'

const Navbar = () => {
    return (
        <>
        <nav className='nav' >
           
               <div>  <h2>Todo App</h2></div>
              <div className='hadingFor'>  
               <h4 > <Link className='Link' to='/'>Home</Link></h4>
                  <h4 > <Link className='Link' to='Profile'>Profile</Link></h4></div>
         </nav>
        </>
      )
}

export default Navbar