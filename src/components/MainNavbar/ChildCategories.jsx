import React from 'react'
import ChildCategoryCard from './ChildCategoryCard'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'


function ChildCategories({ chosenCategory, setShowCatalog }) {
    
    return (
        <div className="col-span-3 py-5 px-10 overflow-x-scroll">
            <Link
                onClick={() => setShowCatalog(false)}
                to={`/category/${chosenCategory?.id}`}
                className="mb-7 hover:underline flex gap-2 items-center text-2xl font-semibold  whitespace-nowrap font-raleway text-black-topBlack"
            >
                <span>{chosenCategory?.title}</span>
                <IoIosArrowForward className="text-black-topBlack" />
            </Link>
            <div className=" col-span-3 grid grid-cols-3 mt-5 content-start  items-start  gap-10 h-full">
                {chosenCategory?.children?.map((item) => (
                    <ChildCategoryCard
                        setShowCatalog={setShowCatalog}
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChildCategories;
