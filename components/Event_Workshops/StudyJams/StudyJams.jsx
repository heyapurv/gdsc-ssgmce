import  Timeline  from "./Timeline"
import StudyJams_Gallary from "./StudyJams_Gallary"
import StudyJams_Gallary2 from "./StudyJams_Gallary2"
import StudyJams_Gallary3 from "./StudyJams_Gallary3"
import img1 from '../../../public/googlecloud.png'
import img2 from '../../../public/anim1.gif'
import ResourcePerson from "./ResourcePerson"

export default () => {

   
    return (
       <>
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex">
                <span >
                    <img src={img1} className="sm:w-28 w-8 sm:animate-bounce mr-5 mt-5" alt="" />
                </span>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-600  text-2xl font-semibold sm:text-6xl">
                         
                            <span className="underline decoration-red-600 underline-offset-[15px] bg-gradient-to-r from-cyan-600 via-cyan-500  to-cyan-400 text-transparent bg-clip-text">Google </span>   
                            <span className="underline decoration-blue-600 underline-offset-[15px] bg-gradient-to-r from-cyan-300 via-cyan-200  to-cyan-200 text-transparent bg-clip-text">Cloud </span> 
                            <span className="underline decoration-green-600 underline-offset-[15px] bg-gradient-to-r from-cyan-200 via-cyan-200  to-cyan-300 text-transparent bg-clip-text">Study </span> 
                            <span className="underline decoration-yellow-600 underline-offset-[15px] bg-gradient-to-r from-cyan-400 via-cyan-500  to-cyan-600 text-transparent bg-clip-text">Jams </span> 
                        </h3>
                        <p className="mt-4 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
            </div>
        </section>
        
        <section className=" sm:mx-40  sm:grid sm:grid-cols-2 ">
             <div className="mt-10">
             <Timeline/>
             </div>
            <div className="hidden md:block">
            <StudyJams_Gallary/>
            <StudyJams_Gallary2/>
            <StudyJams_Gallary3/>
                <span className="grid place-items-end" >
                    <img src={img2} className="sm:w-24 w-8 items-end" alt="" />
                </span>
            </div>
            
        </section>
        <section>
            <ResourcePerson/>
        </section>
       </>
    )
}