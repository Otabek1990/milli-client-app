import React, { useContext } from 'react'
import { menu } from './data'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../App'

function MenuBar() {
    const navigate = useNavigate()
    const { lang, setShowCatalog, access } = useContext(Context)
    return (
        <div className='md:hidden w-full px-6 flex justify-between items-center fixed bottom-0 bg-white-whites shadow-md z-50 py-3'>
            {menu.map((item, index) =>
                <button
                    onClick={() => {
                        item.to && navigate(`${(access && item.auth) || item.to}`)
                        item.type === "category" && setShowCatalog(p => !p)
                    }}
                    key={index} className='flex cursor-pointer flex-col gap-y-1 items-center text-[10px] font-medium relative'>
                    {/* {item.count &&
                        (<span className='bg-green-Default rounded-full p-2 absolute top-0 w-5 h-5 text-white-Default'>{state.cart.length || 0}</span>)
                    } */}
                    {item.icon}
                    <span className='text-xs font-medium'>
                        {access && item?.to === "/login" ? "Profil" : item[`title_${lang}`]}
                    </span>
                </button >
            )}
        </div>
    )
}

export default MenuBar