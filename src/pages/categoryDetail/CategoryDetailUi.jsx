import React from 'react'
import ProductCart from "../../components/Global/ProductCart";
import { productCart } from './datas';
import { Empty } from '../../components';

function CategoryDetailUi({ categoryDetails }) {
    return (
        <div className='w-full'>
            <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-4 gap-2">
                {
                    categoryDetails?.results?.map((item,index) => (
                        <ProductCart key={index} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryDetailUi
