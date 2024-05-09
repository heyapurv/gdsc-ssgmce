const items = [
   
    {
      name: "Apurv",
      title: "FSD",
      body: "Lorem ispum dollar",
    },
    {
      name: "Apurv",
      title: "FSD",
      body: "Lorem ispum dollar",
    },
    {
      name: "Apurv",
      title: "FSD",
      body: "Lorem ispum dollar",
    },
    {
      name: "Apurv",
      title: "FSD",
      body: "Lorem ispum dollar",
    },
    {
      name: "Apurv",
      title: "FSD",
      body: "Lorem ispum dollar",
    },
  ]
  
  export default function Page() {
    return (
     <>
      <div class="flex items-center gap-12  sm:mx-10 rounded-lg py-5 mx-5">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white border-l-2 border-indigo-500 pl-2">Community Feedback</h2>
                
                <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                 Explore insights from our community! Dive into feedback on our events, workshops, and GDSC experience, helping us grow together.
                </p>
            </div>
      <div className="relative flex  items-center mx-10">
         
        <div className="relative flex max-w-[100vw] overflow-hidden py-5 t">
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused] ">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[28rem] rounded-2xl border border-black/5 bg-black/5 px-8 py-6">
                  <div className="pb-4 font-light text-gray-800">"{item.body}"</div>
  
                  <div className="mt-auto flex items-center gap-4">
                   
  
                    <div className="flex flex-col ">
                      <div className="text-gray-500 text-md">{item.name}</div>
  
                      <div className="text-indigo-600 text-xs">{item.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     </>
    )
  }
  