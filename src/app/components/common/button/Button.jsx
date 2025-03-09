'use client'

const Button=({title,handleButton,icon})=>{
    return (
        <div className="border-[0.063rem] border-gray-400/30 rounded-full px-4 py-3 cursor-pointer font-medium text-base flex gap-2 items-center justify-center hover:bg-gray-50 hover:font-semibold"
        onClick={handleButton}>
            {icon}
       <h1>{title}</h1>
        </div>
    )
}

export default Button;