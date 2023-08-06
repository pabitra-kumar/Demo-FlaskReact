import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className=' h-[100vh] w-[100vw] justify-center items-center flex flex-col gap-4'>
                <h1 className=' text-blue-700 text-4xl'> Welcome!</h1>
                <Link to='/input' className=' py-4 px-2 bg-violet-700 text-white max-w-fit rounded-lg'> Fill up the Form</Link>
            </div>
        </>
    )
}
