import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className=''>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-t-lg '/>
             </div>
             <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> {title}</h2>
        </div>
    </Link>
  )
}

export default Postcard