import {useMutation} from "@tanstack/react-query";
import {loginUsuario} from "../services/api/endpoints";

export function uselogin({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: loginUsuario, onSuccess, onError});
}
