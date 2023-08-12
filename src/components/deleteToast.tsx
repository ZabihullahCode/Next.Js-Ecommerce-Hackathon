import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import { delItem } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';


const DeleteToast = ({ item } : any) => {
    const dispatch = useAppDispatch();
    const notify = () =>
    toast.error('Product Deleted Successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  return (
    <div className='w-fit' onClick={() => dispatch(delItem(item.uuid))} >
         <FaTrash
              onClick={notify}
                className="text-base font-semibold tracking-tight cursor-pointer
        leading-none line-clamp-1 text-red-600"
              />
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default DeleteToast
