 import { useState } from "react"

 
 export default function Home() {
  let [visor, setVisor]:any  = useState('0')
  let [operator, setOperator]:any = useState('')
  let [number1, setnumber1]:any = useState(null)
  let [number2, setnumber2]:any = useState(null)
  let [virgula, setVirgula]:any = useState(0)
  
  function Numbers(props: string){
    if(visor == '0'){
      setVisor(visor = '')
      return(setVisor(visor += props))
    }
    else{
      if(visor.length <= 17){
        return(setVisor(visor += props))
      }
    }
  }
  
  function Operator(props: string) {
    setnumber1(number1 = parseFloat(visor))
    setVisor(visor = '0')
    return (setOperator(operator = props))
  }

  function Virgula() {
    if(virgula == 0){
      setVirgula(virgula =+ 1)
      setVisor(visor += '.')
    }
  }

  function MaisMenos(){
    setVisor(visor = visor * -1)
  }

  function Porcentagem(){
    setVisor(visor = visor / 100)
  }

  function Calculate(){
    setnumber2(number2 = parseFloat(visor))
    if (operator == 'x'){
      setVisor(visor = number1 * number2)
    }
    else if (operator == '+'){
      setVisor(visor = number1 + number2)
    }
    else if (operator == '/'){
      if(number2 == 0){
        setVisor(visor = 'Dividir por zero, parça??')
      }
      else{
        setVisor(visor = number1 / number2)
      }
    }
    else if (operator == '-'){
      setVisor(visor = number1 - number2)
    }
  }

  function CleanAll(){
    setVisor(visor = '0')
    setOperator(operator = '')
    setnumber1(number1 = null)
    setnumber2(number2 = null)
    setVirgula(virgula = 0)
  }



  
  return (
    <div className="bg-black w-[355px] h-screen m-auto ">
      <div className="flex flex-col p-7 my-5">
      <div id="Visor" className="text-slate-50 text-5xl flex flex-row-reverse font-mono ">
        {visor}
      </div>
      <div className="">
        <div className="flex justify-between my-4">
          <button onClick={() => CleanAll()} className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            AC
          </button>
          <button onClick={() => MaisMenos()} className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            +/-
          </button>
          <button onClick={() => Porcentagem()} className="bg-slate-200 rounded-full text-center w-16 h-16 text-black font-semibold text-xl">
            %
          </button>
          <button onClick={() => Operator('/')} id="dividir" className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
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
          <button onClick={() => Operator('x')} id='multi' className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
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
          <button onClick={() => Operator('-')} id='menos' className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
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
          <button onClick={() => Operator('+')} id='mais' className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          +
          </button>
        </div>
        <div className="flex justify-between my-4">
        <button onClick={() => Numbers('0')} className="bg-neutral-700 rounded-full text-center basis-36 h-16 text-white font-semibold text-xl">
            0
          </button>
 
          <button onClick={() => Virgula()} className="bg-neutral-700 rounded-full text-center w-16 h-16 text-white font-semibold text-xl">
            ,
          </button>
          <button onClick={() => Calculate()} className="bg-orange-500 text-white rounded-full text-center w-16 h-16 font-semibold text-xl">
          =
          </button>
        </div>
      </div>
      </div>
    </div>

  )
}
