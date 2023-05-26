import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/afficher_liste_domaine')
}

let deleteDomaine = (id) =>{
    return Axios.delete(`/api/supprimer_domaine?id=${id}`)
}

let addDomaine = (data) => {
    return Axios.post('/api/creer_domaine', data)
}

let updateDomaine = (data) => {
    return Axios.post('/api/modifier_domaine', data)
}

export const DomaineService = {
    getAll, deleteDomaine, addDomaine, updateDomaine
}