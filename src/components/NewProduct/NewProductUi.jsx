import React from 'react'
import ProductCart from '../Global/ProductCart'

function NewProductUi({ products }) {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-start lg:gap-5 md:gap-4 gap-3">
            {products?.map((item,ind) => (
                <ProductCart key={ind} product={item} />
            ))}
        </div>
    )
}

export default NewProductUi
