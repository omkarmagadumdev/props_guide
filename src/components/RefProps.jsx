import { useRef,forwardRef } from "react"


//input component to accept  a ref prop

const CustomInput = forwardRef(({label,placeholder,className}, ref)=>{

  return(
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      <input 
      ref={ref} 
      className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder:text-gray-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} 
      type="text"
      placeholder={placeholder}
      />
    </div>
  )

})

CustomInput.displayName = 'CustomInput'


const RefProps = () => {

  const inputRef = useRef(null);
  const secondInputRef  = useRef(null);

  const focusInput = ()=>{
    inputRef.current?.focus();  
  }

  const getInputValue = ()=>{
    if(inputRef.current){
      alert(`Input Value: ${inputRef.current.value}` )
    }

  }

  const clearInput = ()=>{
    if(inputRef){
      inputRef.current.value = ""
      inputRef.current.focus() 
    }
  }

  const focusSecondInput = ()=>{
    secondInputRef.current?.focus();
  }


  return (
    <section className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">RefProps</h2>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias, nisi aut nesciunt laborum numquam.</p>
        <div className="mt-6 rounded-xl bg-slate-100/70 p-4 sm:p-5">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Try it out</h3>
            <CustomInput 
            label="First Input with ref"
            placeholder="Type Something"
            ref={inputRef}
            />
            <CustomInput 
            label="Second Input with ref"
            placeholder="Type Something else..."
            ref={secondInputRef}
            />
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onClick={focusInput}
              >
              Focus first Input
              </button>
              <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onClick={focusSecondInput}
              >
              Focus second Input
              </button>
              <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onClick={getInputValue}
              >
              Get first Input Vlaue
              </button>
              <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onClick={clearInput}
              >
              Clear Input
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4">
          <h4 className="mb-2 font-semibold text-gray-800">When to use refs:</h4>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Managing focus, text selection, or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements (scroll position, element size)</li>
          </ul>
        </div>
    </section>
                
  )
}

export default RefProps