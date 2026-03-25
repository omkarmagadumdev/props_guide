import React, { useState } from 'react'


function Button({text,color,size,onClick,disabled}){
  return(
    <button
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer
          px-6 py-2 rounded-xl font-semibold shadow-sm transition-all duration-200
          ${size === "small" ? "text-sm px-1 py-1" : ""}
          ${size === "large" ? "text-lg px-10 py-2" : ""}
          ${color === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
          ${color === "secondary" ? "bg-slate-600 text-white hover:bg-slate-700" : ""}
          ${color === "danger" ? "bg-red-600 text-white hover:bg-red-700" : ""}
          ${color === "sucess" ? "bg-emerald-600 text-white hover:bg-emerald-700" : ""}
          ${disabled  ? "opacity-50 cursor-not-allowed" : ""}`  }
    >{text}</button>
  )
}

const BasicProps = () => {
  const [clickCount,setClickCount ] =   useState(0);

  return <section className='rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100'>
  <h3 className='text-3xl font-bold mb-4 text-gray-800'>Basic Props</h3>
  <p className='text-gray-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut soluta quo veritatis mollitia molestiae ipsum porro debitis architecto nesciunt.</p>
  
  <div className='space-y-4'>
    <h3 className='text-lg font-semibold text-gray-800'>Different colors</h3>
    <div className='flex flex-wrap gap-3'>
      <Button  
      text="Primary button"
      color="primary"
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      <Button  
      text="secondary button"
      color="secondary"
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      <Button  
      text="Danger button"
      color="danger"
      onClick={()=>setClickCount( clickCount + 1 )}
      /> 
      <Button  
      text="Sucess button"
      color="sucess"
      onClick={()=>setClickCount( clickCount + 1 )}
      />
    </div>
  </div>
  
  <div className='space-y-4 mt-6'>
    <h3 className='text-lg font-semibold text-gray-800'>Different sizes</h3>
    <div className='flex flex-wrap gap-3 m-2'>
      <Button  
      text="Small"
      color="primary"
      size="small"
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      <Button  
      text="large"
      color="secondary"
      size="large"
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      <Button  
      text="Enabled button"
      color="primary"
      disabled={false}
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      <Button  
      text="Disabled button"
      color="primary"
      disabled={true}
      onClick={()=>setClickCount( clickCount + 1 )}
      />
      
    </div>
    <div>

    </div>
  </div>
  

  <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
    <p className='text-lg font-medium text-grey-700'>
      Click Count:{" "}
      <span className='text-blue-600 font-bold'>{clickCount}</span>
    </p>
     
  </div>
  
  </section>
 }

export default BasicProps 