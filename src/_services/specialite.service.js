import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/afficher_liste_Specialite')
}

let deleteSpecialite = (id) =>{
    return Axios.delete(`/api/supprimer_Specialite?id=${id}`)
}

let addSpecialite = (data) => {
    return Axios.post('/api/creer_Specialite', data)
}

let updateSpecialite = (data) => {
    return Axios.post('/api/modifier_Specialite', data)
}

export const SpecialiteService = {
    getAll, deleteSpecialite, addSpecialite, updateSpecialite
}