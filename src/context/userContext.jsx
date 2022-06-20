import React,{createContext,Component} from "react"
import { useState } from "react"
import { useContext } from "react"
export const AuthContext=createContext(null)


export function useAuth(){
  return useContext(AuthContext)
}
 
export function AuthProvider({childrcen}){
//   const [currentUser,serCurrentUser]=useState
//   const value={
//     currentUser
//   }
//   return(
//     <AuthContext.Provider value={value}>
// {childrcen}
//     </AuthContext.Provider>
//   )
}