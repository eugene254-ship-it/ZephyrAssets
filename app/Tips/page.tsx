import React from 'react'

const page = () => {
  return (
    <section
  className="p-[300px] tips-bg"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-blue-300 sm:text-3xl md:text-5xl">
        Tokenizer Guide Center
      </h2>

      <p
        className="max-w-lg mt-2 p-4 text-white/90"
      >
        in this page, you will find below a guide about how can we make your 
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Yours Today
        </a>
      </div>
    </div>
    </div>
  </section>
  )
}

export default page