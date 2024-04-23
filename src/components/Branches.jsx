import React from "react";

const Bracnhes = () => {
  return (
    <div className="mb-16">
      <span className="text-[#9b7b32]  flex justify-center font-mono font-bold sm:text-5xl text-4xl mt-9">
        Branches
      </span>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-20 lg:py-14 mx-auto">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-14 flex flex-col justify-center items-center bg-red- rounded-t-xl">
            
          </div>
          <div className="mb-10">
            
            <h3 className="text-3xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Florida
            </h3>
            <p className="mt-3 text-center text-gray-500 dark:text-neutral-500">
              27th Avenue, Miami
            </p>
          </div>
          <div className="mt-auto text-[#3b4f34] text-center p-7 border-t border-gray-200  dark:border-neutral-700 dark:divide-neutral-700">
            999-888-652-1254
          </div>
        </div>
        {/* End Card */}
        
        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-14 flex flex-col justify-center items-center bg-red- rounded-t-xl">
            
          </div>
          <div className="">
            
            <h3 className="text-3xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Florida
            </h3>
            <p className="mt-3 text-center text-gray-500 dark:text-neutral-500">
              Pemroke Road 
            </p>
          </div>
          <div className="mt-auto text-[#3b4f34] text-center p-7 border-t border-gray-200  dark:border-neutral-700 dark:divide-neutral-700">
            929-808-652-1554
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-14 flex flex-col justify-center items-center bg-red- rounded-t-xl">
            
          </div>
          <div className="">
            
            <h3 className="text-3xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Georgia
            </h3>
            <p className="mt-3 text-center text-gray-500 dark:text-neutral-500">
             Atlanta
            </p>
          </div>
          <div className="mt-auto text-[#3b4f34] text-center p-7 border-t border-gray-200  dark:border-neutral-700 dark:divide-neutral-700">
            929-810-352-1254
          </div>
        </div>
        {/* End Card */}
        {/* Continue with other cards... */}
      </div>
      {/* End Grid */}

    </div>
    </div>
  );
};

export default Bracnhes;
