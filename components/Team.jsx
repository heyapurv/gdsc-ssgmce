import team from '../public/Data/data'


export default () => {

   

    return (
        <>
        
        <section className="py-14">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h3 className="text-gray-600 text-3xl font-semibold sm:text-6xl">
                        Meet our Team
                    </h3>
                    <p className="text-gray-600 mt-3">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic earum tempora animi corrupti expedita quos doloremque dignissimos eaque, est quam.
                    </p>
                </div>
                <section className="py-5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                
                <div className="mt-12">
                    <ul className="grid gap-16 lg:grid-cols-2 place-items-center ">
                      
                               
                                <li  className="gap-8 sm:flex ">
                                    <div className="w-full  ">
                                        <img
                                            src="../public/Data/members/drmanekar.jpg"
                                            className="w-56 object-cover object-center shadow-xl hover:scale-105 duration-200 rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold truncate">Dr. A. S. Manekar</h4>
                                        <p className="text-indigo-600">Faculty Advisor, HOD - IT, SSGMCE</p>
                                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident rerum laborum deserunt exercitationem totam doloremque atque itaque dolor velit.</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                           
                                           
                                            <a href=''>
                                                <svg className="w-5 h-5 duration-150 text-blue-600 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li  className="gap-8 sm:flex">
                                    <div className="">
                                        <img
                                            src="../public/Data/members/saurabhWankhede.jpg"
                                            className=" sm:w-[450px] w-52 object-cover object-center shadow-xl hover:scale-105 duration-200 rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold truncate">Saurabh Wankhede</h4>
                                        <p className="text-indigo-600">GDSC LEAD</p>
                                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident rerum laborum deserunt exercitationem totam doloremque atque itaque dolor velit.</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                           
                                           
                                            <a href=''>
                                                <svg className="w-5 h-5 duration-150 text-blue-600 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                       
                    </ul>
                </div>
            </div>
                  </section>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center">
                                    <div className="flex-none w-24 h-24 rounded-lg  shadow-2xl">
                                        <img
                                            src={item.profile}
                                            className="w-full hover:scale-110 duration-200  h-full rounded-lg shadow-2xl"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                            <a href={item.twitter} target='_blank'> 
                                            <svg xmlns="http://www.w3.org/2000/svg"  className="w-6 h-6 duration-150 hover:text-gray-500" fill="currentColor" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" fill-rule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/></svg>
                                            </a>
                                            
                                            <a href={item.linkedin} target='_blank'>
                                                <svg className="w-6 h-6 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}