

import React,{ReactNode} from "react"


interface Props{
  children:ReactNode
}
const Layout = ({ children }:Props) => {
  

  return (
   <div>
     <header className="" style={{backgroundColor:"#03254c"}}>
       <div className="flex flex-row justify-between items-center px-32">
         <div>
           <p className="text-white text-2xl text-bold">PROJECT</p>
         </div>
         
         <div className="py-8">
           <p className="text-white ">Sign In or Create an Account</p>
          <button className="text-white">CART</button>
         </div>
       </div>
    
     </header>
     {children}
   </div>
  )
}


export default Layout
