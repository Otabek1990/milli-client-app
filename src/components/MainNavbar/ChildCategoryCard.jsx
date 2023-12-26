import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function ChildCategoryCard({ id, title, children, setShowCatalog }) {
    const [showMoreBtn, setShowMoreBtn] = useState(true)
    const [itemCount, setItemCount] = useState(4)
    
    return (
        children[0].title && (
            <div className="flex flex-col items-start">
                <Link
                    onClick={() => setShowCatalog(false)}
                    to={`/category/${id}`}
                    className="whitespace-nowrap font-raleway hover:underline text-base font-bold text-black-topBlack mb-4"
                >
                    {title}
                </Link>
                <div className="flex flex-col items-start gap-2">
                    {children.slice(0, itemCount).map((element,index) => (
                        <NavLink
                            onClick={() => setShowCatalog(false)}
                            to={`/category/${element.id}`}
                            className={
                                "hover:underline font-raleway text-base font-normal text-black-topBlack"
                            }
                            key={index}
                        >
                            {element.title}
                        </NavLink>
                    ))}
                    <button
                        onClick={() => {
                            setItemCount(children.length);
                            setShowMoreBtn(false);
                        }}
                        className={`${showMoreBtn ? "inline-block" : "hidden"
                            } font-bold p-2`}
                    >
                        ...more
                    </button>
                    {/* <button onClick={()=>{
                              setItemCount(4)
                              setShowMoreBtn(true)
                          }
                          }
                           className={`${!showMoreBtn ? "inline-block":"hidden"} font-bold p-2`}>
                              ...less
                           </button> */}
                </div>
            </div>
        )
    );
}

export default ChildCategoryCard;
