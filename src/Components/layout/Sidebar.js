import React from 'react'
import { Sidebardata } from './Sidebardata'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div  id='Sidebar'  className='bg-[#18181D] w-[20%] h-[100vh] relative  z-10'>
      {Sidebardata.map((val,key)=>{
        return (
            <NavLink activeClassName="active" className='row' key={key} to={val.link}><div className='icon'>{val.icon}</div><li id='title'> {val.titulo}</li></NavLink>
        )
      }

      )}
    </div>
  )
}
