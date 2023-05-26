  import Axios from "./caller.service"

let login =(credentials) =>{
  return Axios.post('/api/login', credentials)
}

let saveToken = (token) =>{
  localStorage.setItem('token', token)
}


let saveUilisateur =(user) =>{
  localStorage.setItem('user', user)
}


let logout = () =>{
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

let isLogged = ()=>{
  let token = localStorage.getItem('token')

  return token
}

export const accountService = {
  login, saveToken, saveUilisateur, logout, isLogged

}