import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc';
import {useDispatch} from 'react-redux';
import {toast} from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

 const removeFromCart = () => {
  dispatch(remove(item.id));
  toast.error("Item removed");
 }

  return (
    <div className='w-full flex flex-col gap-y-6'>
        <div className='flex gap-x-9 w-full'>
            <div className='h-[240px] w-1/3'>
              <img className='w-[80%] h-full bg-cover' src={item.image} alt='hello'/>
            </div>

            <div className='w-2/3 flex flex-col gap-y-6'>
              <h1 className='text-gray-700 text-xl font-semibold text-left w-full mt-1'>{item.title}</h1>
              <h1 className='w-full text-gray-700 font-normal text-base'
              >{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
              <div className='flex justify-between mr-8'>
                <p className='text-green-600 font-bold'>${item.price}</p>
                <div className='w-[35px] h-[35px] rounded-full bg-red-300 flex justify-center items-center cursor-pointer hover:bg-red-400 '
                 onClick={removeFromCart}>
                  <FcDeleteDatabase className='text-red-600'/>
                </div>
              </div>
            </div>

        </div>
        <div className='w-full h-[2px] bg-gray-600'></div>
    </div>
  )
}

export default CartItem