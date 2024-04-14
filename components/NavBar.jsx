import { useState } from 'react'
import img1 from '../public/gdsc_logo.png'
import img2 from '../public/gdsc_name.png'
import { Link } from 'react-router-dom'


export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/", color:"red" },
        { title: "Workshops & Events", path: "/eventandworkshops",color:"blue" },
        { title: "Team", path: "/team", color:"green" },
        { title: "Blogs", path: "javascript:void(0)", color:"yellow" },

    ]
    return (
        <nav className="bg-white border-b w-full md:static md:text-sm md:border-none sm:shadow-md rounded-2xl">
            <div className="items-center  max-w-screen-2xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block mx-2">
                       <div  className='flex sm:items-center '> 
                       <div className='flex'>
                            <img
                                src={img1}
                                alt="GDSC Logo"
                                className='w-16 sm:mt-[8px] sm:w-20'
                            />
                              <img
                                src={img2}
                                alt="GDSC Logo"
                                className='sm:w-64 w-60  sm:hidden '
                            />
                        </div>
                       <div className='text-left sm:text-center  text-sm hidden text-gray-600 sm:block ml-2
                       '>
                        <h1 className='text-2xl font-bold'>Google Developer Student Clubs </h1>
                        <p >Shri Sant Gajanan Maharaj College of Engineering, Shegaon</p>
                      
                        </div>
                        
                        
                        </div>
                        
                       
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-blue-600"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end  md:items-center space-y-6 md:flex md:space-x-10 md:space-y-0 ml-10 sm:ml-24">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className={`text-lg text-gray-700 ${ 
                                    item.color === 'blue' ? 'hover:text-blue-600' :
                                    item.color === 'red' ? 'hover:text-red-600' :
                                    item.color === 'green' ? 'hover:text-green-600':
                                    item.color === 'yellow' ? 'hover:text-yellow-600': 
                                    'hover:text-gray-800'}
                                     text-left hover:scale-110 duration-200 hover hover:underline`}>
                                        <Link to={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    
                    
                   
                    </ul>
                </div>
            </div>
        </nav>
    )
}