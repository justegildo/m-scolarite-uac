import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/afficher_liste_commission')
}

let deleteCommission = (id) =>{
    return Axios.delete(`/api/supprimer_commission?id=${id}`)
}

let addCommission = (data) => {
    return Axios.post('/api/creer_commission', data)
}

let updateCommission = (data) => {
    return Axios.post('/api/modifier_commission', data)
}

export const CommisionService = {
    getAll, deleteCommission, addCommission, updateCommission
}