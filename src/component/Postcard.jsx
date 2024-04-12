import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import parse from "html-react-parser";


function Postcard({$id, title,content, featuredImage}) {

  const cardContent = parse(content)
  return (
    <Link to={`/post/${$id}`}>
        <div className='max-w-sm   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className=''>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-t-lg h-64' />
             </div>
             <h2 className='mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white text'> {title}</h2>
            <div className='line-clamp-3 font-normal text-left pl-4'>{cardContent}</div>
            <div className='text-center'>
            <button className="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More 
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
            </button>
           
            </div>
    
        </div>
    </Link>
  )
}

export default Postcard