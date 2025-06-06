import api from "./api";

//user
export async function CreateUsuario (body) {
    const { data } = api.post(`./usuarios`, body);
    return data;
}

export async function GetUsuario () {
    const { data } = api.get(`./usuarios`);
    return data;
}

export async function UpdateUsuario (id, body) {
    const { data } = api.put(`./usuarios:${id}`, body);
    return data;
}
export async function DeleteUsuario (id) {
    const { data } = api.get(`./usuarios:${id}`);
    return data;
}

//sessoes
export async function CreateSessoes (body) {
    const { data } = api.post(`./sessoes`, body);
    return data;
}

export async function GetSessoes () {
    const { data } = api.get(`./sessoes`);
    return data;
}

export async function DeleteSessoes (id) {
    const { data } = api.get(`./sessoes:${id}`);
    return data;
}

//login
/*
export async function login(params) {
    
}
*/