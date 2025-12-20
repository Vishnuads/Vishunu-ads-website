import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react'
import Button from './Button'

const ArrowTrack = ({ direction = 'right' }) => {
  const isRight = direction === 'right'

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-2 w-max ${isRight ? 'animate-arrow-right' : 'animate-arrow-left'
          }`}
      >
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) =>
              isRight ? (
                <ChevronRight
                  key={`${groupIndex}-${i}`}
                  className={i % 2 ? 'opacity-20' : 'opacity-60'}
                  size={100}
                />
              ) : (
                <ChevronLeft
                  key={`${groupIndex}-${i}`}
                  className={i % 2 ? 'opacity-20' : 'opacity-60'}
                  size={100}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


const MovingArrowCTA = ({ label = 'Get in touch', onClick }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="md:absolute inset-0 bg-linear-to-r from-[#fffefa] via-transparent to-[#fffefa] z-10"></div>
        <ArrowTrack direction="right" />
      </div>

      {/* <button
        onClick={onClick}
        className="flex items-center justify-center w-50 gap-3 border border-black/20 rounded-full px-3 py-2 uppercase tracking-wide transition"
      >
        {label}
        <span className="bg-black text-white rounded-full p-2">
          <ArrowUpRight size={16} />
        </span>
      </button> */}
      <div className="w-50">
      <Button name={label}/></div>

      <div className="relative">
        <div className="md:absolute inset-0 bg-linear-to-r from-[#fffefa] via-transparent to-[#fffefa] z-10 "></div>
        <ArrowTrack direction="left" />
      </div>
    </div>
  )
}

export default MovingArrowCTA
