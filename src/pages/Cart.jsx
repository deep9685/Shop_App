import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  
  const {cart} = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className='max-w-6xl mx-auto  flex justify-between gap-x-10 mt-8 p-3' >
            <div className='w-[60%] flex flex-col gap-y-20'>
                {
                  cart.map( (item, index) => {
                   return <CartItem key={item.id} item={item} itemIndex={index}/>
                  })
                }
            </div>

            <div className='w-[40%] h-full flex flex-col gap-y-48 mt-16 ml-6'>
                <div className='flex flex-col gap-y-1'>
                  <div className='text-xl font-semibold text-green-700 uppercase'>Your Cart</div>
                  <div className='text-5xl font-semibold text-green-700 uppercase'>Summary</div>
                  <p className='mt-5'>
                    <span className='text-lg font-semibold text-gray-700 '>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className='text-xl font-semibold text-gray-600 '>Total Amount <span className='text-black'>: ${totalAmount}</span></p>
                  <button className='w-full bg-green-700 p-3 mt-4 border-2 border-green-800 rounded-xl text-white text-xl font-bold'>
                  Checkout Now</button>
                </div>
            </div>
        </div>) :
        (<div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Cart Empty</h1>
            <Link to="/">
                <button className=' bg-green-700 p-2 mt-4 border-1 border-green-800 rounded-md text-white text-xl font-bold'>
                  Shop Now
                </button>
            </Link>
        </div>)
      }
    </div>
  )
}

export default Cart