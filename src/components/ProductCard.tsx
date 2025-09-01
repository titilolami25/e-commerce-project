 import type {FC} from 'react'
import type {Product} from '../types/Product'


const ProductCard: FC<{product: Product}> = ({product}) => {
  return (
    <div className='bg-white rounded-lg shadow p-8 flex flex-col'>
      <img 
      src={product.image} 
      alt={product.title}
      className='h-40 object-contain mb-4'
       />
       <h3 className='font-semibold text-lg text-gray mb-1'>
       {product.title}
       </h3>
       <p className='text-sm text-gray mb-2'>{product.description.slice(0, 80)}</p>
       <p className='font-bold text-accent mb-2'>${product.price}</p>
       <button className='bg-gray text-white px-4 py-2 rounded
        hover:bg-accent transition'>
          Add to cart
       </button>
    </div>
  )
}

export default ProductCard