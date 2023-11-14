import React from 'react'

const Tips = () => {
  return (
        <section className=" bg-white bg-opacity-80 p-[250px]">
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-6 md:py-16 lg:px-8 shadow-lg bg-white ring-2 ring-black rounded-lg">
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by eCommerce Businesses
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
            laborum labore provident impedit esse recusandae facere libero harum
            sequi.
        </p>
        </div>

        <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
            className="flex flex-col rounded-lg ring-1 ring-black px-4 py-8 text-center"
            >
            <dt className="order-last mt-5 text-lg font-medium text-gray-500">
                Market Growth
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            $2 trillion
            </dd>
            </div>

            <div
            className="flex flex-col rounded-lg ring-1 ring-black px-4 py-8 text-center"
            >
            <dt className="order-last text-lg font-medium text-gray-500">
            of valuable art and collectibles have been tokenized
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">less than 10%</dd>
            </div>

            <div
            className="flex flex-col rounded-lg ring-1 ring-black px-4 py-8 text-center"
            >
            <dt className="order-last mt-2 text-lg font-medium text-gray-500">
            Blockchain technology reduces transaction costs 
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 mt-2 md:text-5xl">up to 80%</dd>
            </div>
        </dl>
        </div>
    </div>
    
    
    </section>
  )
}

export default Tips