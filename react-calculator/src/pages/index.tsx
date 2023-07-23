 import { useState } from "react"

 
 export default function Home() {
  let [visor, setVisor] = useState('')
  let Igual: boolean = false
  
  function Numbers(props: string){
    return(setVisor(visor += props))
    
  }
  
  function Equal(props: boolean){
    if (true){

    }
  }

  //Preparar a função das contas

  function Calculate(props: string){
    let numero1: number = Number(visor)
    let numero2: number
    let resultado: string
    setVisor(visor = '')
    if(Igual == true) {
      numero2 = Number(visor)
      setVisor(visor = '')
      if(props == 'x'){
        let resultadoNumero: any = (numero1 * numero2)
        resultado = toString(resultadoNumero)
        setVisor(visor = resultado)
      } 
    }


  }
  return (
    <div className="bg-black w-[355px]  h-screen m-auto">
      <div className="flex flex-col  p-6 ">
      <div id="Visor" className="text-slate-50 text-6xl flex flex-row-reverse font-mono">
        {visor}
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
        <button onClick={() => Numbers('7')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            7
          </button>
          <button onClick={() => Numbers('8')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            8
          </button>
          <button onClick={() => Numbers('9')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            9
          </button>
          <button onClick={() => Calculate('x')} className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          x
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button onClick={() => Numbers('4')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            4
          </button>
          <button onClick={() => Numbers('5')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            5
          </button>
          <button onClick={() => Numbers('6')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            6
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          -
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button onClick={() => Numbers('1')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            1
          </button>
          <button onClick={() => Numbers('2')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            2
          </button>
          <button onClick={() => Numbers('3')} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            3
          </button>
          <button className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          +
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button onClick={() => Numbers('0')} className="bg-neutral-700 rounded-full text-center basis-36 h-16 text-white font-semibold text-xl">
            0
          </button>
 
          <button className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            ,
          </button>
          <button onClick={() => Equal(true)} className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          =
          </button>
        </div>
      </div>
      </div>
    </div>

  )
}
