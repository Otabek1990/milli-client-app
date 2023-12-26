import React, { useState } from "react";
import ParentCategories from "./ParentCategories";
import ChildCategories from "./ChildCategories";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function CatalogContainerUi({ categories, setShowCatalog }) {
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const chooseCategories = (categoryId) => {
    const chosen = categories.find((item) => item.id === categoryId);
    setChosenCategory(chosen);
  };

  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };
  return (
    <>
      <div className="w-full h-full hidden md:grid md:grid-cols-4 grid-cols-1">
        <ParentCategories
          setShowCatalog={setShowCatalog}
          chooseCategories={chooseCategories}
          categories={categories}
        />
        <ChildCategories
          setShowCatalog={setShowCatalog}
          chosenCategory={chosenCategory}
        />
      </div>
      <div className="md:hidden block max-w-md mx-auto">
        {categories.map((parentItem,index) => (
          <div key={index} className="mb-2">
            <div
              className={`p-4 cursor-pointer ${openItems.includes(parentItem.id) ? 'bg-green-Default  text-white-whites' : 'bg-white-Default text-black-topBlack'
                } p-2 w-full flex items-center justify-between rounded`}
            >
              <NavLink
                onClick={() => setShowCatalog(false)}
                to={`/category/${parentItem.id}`}
                className=""
              >
                <span className="text-lg font-bold font-raleway">
                  {parentItem.title}
                </span>
              </NavLink>
              <button onClick={() => handleToggle(parentItem.id)}>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </button>
            </div>

            <div className={`px-4 pb-4 ${openItems.includes(parentItem.id) ? 'block' : 'hidden'}`}>
              {parentItem.children.map((childItem,index) => (
                <div key={index} className="mb-2">
                  <span
                    className="cursor-pointer font-semibold text-sm"
                  >
                    <Link
                      onClick={() => setShowCatalog(false)}
                      to={`/category/${childItem.id}`}
                      className="font-raleway hover:underline text-base font-bold text-black-topBlack mb-4"
                    >
                      {childItem.title}
                    </Link>
                  </span>

                  {childItem.children && childItem.children.length > 0 && (
                    <div className={`pl-4`}>
                      {childItem.children.map((grandchildItem,index) => (
                        <div key={index} className="py-1">
                          <NavLink
                            onClick={() => setShowCatalog(false)}
                            to={`/category/${grandchildItem.id}`}
                            className={
                              "hover:underline font-raleway text-base font-normal text-black-topBlack"
                            }
                            key={grandchildItem.id}
                          >

                            {grandchildItem.title}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogContainerUi;
