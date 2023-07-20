 export default function Home() {
  return (
    <div className="bg-black w-[355px]  h-screen m-auto">
      <div className="flex flex-col  p-6 ">
      <div id="Visor" className="text-slate-50 text-6xl flex flex-row-reverse font-mono">
        0
      </div>
      <div className="">
        <div className="flex justify-between my-4">
          <button className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            AC
          </button>
          <button className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            +/-
          </button>
          <button className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            %
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          ÷
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            7
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            8
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            9
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          x
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            4
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            5
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            6
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          -
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            1
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            2
          </button>
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            3
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          +
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button className="bg-neutral-700 rounded-full text-center basis-36 h-16 text-white font-semibold text-xl">
            0
          </button>
 
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            ,
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          =
          </button>
        </div>
      </div>
      </div>
    </div>

  )
}
