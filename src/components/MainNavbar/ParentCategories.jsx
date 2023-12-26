import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../Assets/Icons/arrow-right.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ParentCategories({ categories, chooseCategories, setShowCatalog }) {
    
    return (
        <div className="bg-white-whites">
            {categories.map((category) => (
                <NavLink
                    onClick={() => setShowCatalog(false)}
                    to={`/category/${category.id}`}
                    key={category.id}
                    onMouseOver={() => chooseCategories(category.id)}
                    className="p-4 w-full flex items-center justify-between px-7 rounded hover:bg-green-Default hover:text-white-whites text-black-topBlack"
                >
                    <span className="text-base font-bold font-raleway">
                        {category.title}
                    </span>
                    <MdOutlineKeyboardArrowRight className="text-3xl" />
                    {/* <ArrowRightIcon className="text-gray-lightGray" /> */}
                </NavLink>
            ))}
        </div>
    )
}

export default ParentCategories;
