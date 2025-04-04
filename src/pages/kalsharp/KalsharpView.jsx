import React from 'react'

const KalsharpView = () => {
  return (
    <div>
        <div className="min-h-screen   bg-white">
     
      <div
        className="relative  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://kalsarppoojainujjain.com/assets/images/PageTitle/Banner-trimbak.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative  text-start   mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl text-white font-bold sm:text-xl md:text-3xl">
            About Guruji
          </h1>
          <div className="flex place-items-start gap-x-3  mt-3">
            <span className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </span>
            <span className="flex items-center  ">
              <Link
                to="/"
                className="text-lg font-semibold no-underline  hover:primary-col text-white "
              >
                Home
              </Link>
            </span>
          </div>
          <button className="primary-col  rounded-md  p-2 w-44 mt-3   text-white ">
            +917067771773
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default KalsharpView
