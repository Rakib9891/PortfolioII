import { h1 } from 'motion/react-client';
import React from 'react'


function ProjectModal({select, onClose}) {
  
  return (

<div className={`fixed inset-0 bg-white -translate-x-[50%] left-[50%] top-[10vh] w-[80vw] h-[80vh] border border-gray-500 p-10 transition-opacity duration-300 ease-in-out z-50 
   ${select ? 'opacity-100 translate-y-0 pointer-events-auto popup' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className='border h-full border-gray-500'>
        <div className=''>{select?.title}</div>
        <div className='w-full '><img className='w-fit object-cover' src={select?.imageUrl} alt={`s${select?.title}`} /></div>
        <span
            className='relative bg-red-500 text-white p-2 left-[95%] bottom-[7%]'
            onClick={onClose}
            >Close</span>
        <div className=''>{select?.description}</div>

        </div>
    </div>
  )
}

export default ProjectModal;