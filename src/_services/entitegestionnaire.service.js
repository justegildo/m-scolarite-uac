import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/afficher_liste_entite_gestionnaire')
}

let deleteEntiteGestionnaire = (id) =>{
    return Axios.delete(`/api/supprimer__entite_gestionnaire?id=${id}`)
}

let addEntiteGestionnaire = (data) => {
    return Axios.post('/api/creer_entite_gestionnaire', data)
}

let updateEntiteGestionnaire = (data) => {
    return Axios.post('/api/modifier__entite_gestionnaire', data)
}

export const EntiteGestionnaireService = {
    getAll, deleteEntiteGestionnaire, addEntiteGestionnaire, updateEntiteGestionnaire
}