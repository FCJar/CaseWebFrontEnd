import api from "./api";

//user
export async function CreateUsuario (body) {
    const { data } = await api.post(`./usuarios`, body);
    return data;
}

export async function GetUsuario () {
    const { data } = await api.get(`./usuarios`);
    return data;
}

export async function UpdateUsuario (id, body) {
    const { data } = await api.put(`./usuarios:${id}`, body);
    return data;
}
export async function DeleteUsuario (id) {
    const { data } = await api.get(`./usuarios:${id}`);
    return data;
}

//sessoes
export async function CreateSessoes (body) {
    const { data } = await api.post(`./sessoes`, body);
    return data;
}

export async function GetSessoes () {
    const   {data}  = await api.get(`/sessoes`);
    return data;
}

export async function DeleteSessoes (id) {
    const { data } = await api.get(`./sessoes:${id}`);
    return data;
}

//login

export async function loginUsuario(body){
    const  data   = await api.post(`./login`, body);
    return data.data;
}