import { Link } from 'react-router-dom'
import img1 from '../public/gdsc_full.png'
import Select from './Select'
import Select2 from './Select2'
export default () => {

    const footerNavs = [
        {
            label: "Events",
            items: [
                {
                    href: '/study_jams',
                    name: 'Study Jams'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: ''
                },
                {
                    href: 'javascript:void()',
                    name: ''
                },
            ],
        },
        {
            label: "Workshops",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'AI & ML'
                },
                {
                    href: 'javascript:void()',
                    name: 'Android'
                },
                {
                    href: 'javascript:void()',
                },
                {
                    href: 'javascript:void()',
                    name: ''
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Connect Us'
                },
                {
                    href: 'javascript:void()',
                    name: ''
                },
                {
                    href: 'javascript:void()',
                    name: ''
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4  shadow-gray-700 shadow-2xl mx-auto md:px-8 sm:rounded-t-[40px]  ">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1 ">
                    <div className="sm:max-w-xs max-w-xs ">
                        <img src={img1} className="w-full ml-3  sm:ml-0 " />
                        
                    </div>
                    
                </div>
                <div className="sm:flex-1 mt-10  sm:space-y-6 items-center justify-between  sm:flex md:space-y-0 md:mt-0">
                   <Select/>
                   <Select2/>
                   <div className=''>
                     <h1 className='mt-5 sm:mt-12  text-black'>Contact</h1>
                        <Link><p className='hover:underline mt-2'>About Us</p></Link> 
                        <Link> <p className='hover:underline mt-2'>Contact Us</p></Link>
                   </div>
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between text-center  sm:flex">
            <div className='block sm:hidden'>

                    <div className="mt-4 sm:mt-0 flex justify-center ">
                        Made With <span className="mx-2">
                    <svg class="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                    </svg></span> by  <a href="" className="ml-[5px] text-blue-700 ">Apurv Gore</a>
                      </div>
              </div>
                <div className="mt-4 sm:mt-0 text-center">
                    &copy; 2023-2024 
                    <span className="text-red-600 ml-2">G</span>
                    <span className="text-blue-600 ">D</span>
                    <span className="text-green-600 ">S</span>
                    <span className="text-yellow-600 mr-2">C</span>
                     SSGMCE 
                </div>
                <div className='hidden sm:block'>

                <div className="mt-4 sm:mt-0 flex justify-center ">
                    Made With <span className="mx-2"><svg class="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
	</svg></span> by  <a href="" className="ml-[5px] text-blue-700 ">Apurv Gore</a>
                </div>
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center justify-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex bg-red-600 items-center justify-center">
                            <a href="javascript:void()">
                            <svg className='w-6 h-6 svg-icon text-white' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex bg-green-600 items-center justify-center">
                            <a href="javascript:void()">
                            
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex  bg-blue-600 items-center justify-center">
                            <a href="javascript:void()">
                                
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full  bg-yellow-600 flex items-center justify-center">
                            <a href="javascript:void()">
                                
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
