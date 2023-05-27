import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/afficher_liste_Mention')
}

let deleteMention = (id) =>{
    return Axios.delete(`/api/supprimer_Mention?id=${id}`)
}

let addMention = (data) => {
    return Axios.post('/api/creer_Mention', data)
}

let updateMention = (data) => {
    return Axios.post('/api/modifier_Mention', data)
}

export const MentionService = {
    getAll, deleteMention, addMention, updateMention
}