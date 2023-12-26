import React from 'react'
import { response } from '../../components/Global/Response'
import None from "../../Assets/Images/EmptyImg.jpg"

function Aksiya() {
  return (
    <div className={`${response.containerBoxPadding} flex py-40 justify-center items-center`}>
        <img className='md:w-2/5 w-full ' src={None} alt="" />
    </div>
  )
}

export default Aksiya