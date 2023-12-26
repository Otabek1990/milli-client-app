import React from 'react'
import ProductCart from '../Global/ProductCart'

function RecommendUi({ products }) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-start lg:gap-5 md:gap-4 gap-3">
      {products.map((item) => (
        <ProductCart key={item.id} product={item} />
      ))}
    </div>
  )
}

export default RecommendUi
