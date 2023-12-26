import React from 'react'
import {  useNavigate } from 'react-router-dom'

function BreadCrumbs({categoryCrumbs}) {
  const navigate=useNavigate()

  return (
    <div className='py-3 md:flex hidden items-center gap-5'>
      {categoryCrumbs?.map((item,index)=>(
        <button
        onClick={()=>navigate(`/category/${item?.id}`)}
         className={'hover:underline font-normal text-gray-lightGray text-base last:font-bold last:text-black-topBlack'}  key={item.id}>
          {item?.title_ln && `${item?.title_ln} /`} 
        </button>
      ))}
    </div>
  )
}

export default BreadCrumbs
