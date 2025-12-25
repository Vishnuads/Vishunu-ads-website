import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ name, className, link }) => {
  return (
    <>
      <Link to={`${link}`}>
        <button
          className={`group border px-3 py-2 flex w-fit cursor-pointer items-center justify-center gap-2 uppercase rounded-full overflow-hidden ${className}`}>
          <span className="relative flex flex-col justify-center overflow-hidden">

            <span className="block transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-100">
              {name}
            </span>

            <span className=" absolute inset-0 transform transition-transform duration-500  translate-y-6 group-hover:translate-y-0">
              {name}
            </span>
          </span>

          <span className="bg-black relative rounded-full p-1 text-white flex items-center justify-center overflow-hidden">
            <ArrowUpRight className="transform transition-transform duration-500 group-hover:-translate-y-6 group-hover:translate-x-4 translate-y-0 translate-x-0" />
            <ArrowUpRight className="transform absolute inset-0 transition-transform duration-500 translate-y-6 -translate-x-4 group-hover:translate-y-1 group-hover:translate-x-1" />
          </span>
        </button>
      </Link>
    </>

  )
}

export default Button
