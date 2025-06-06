import {useQuery, useMutation} from "@tanstack/react-query";
import { CreateUsuario, GetUsuario, UpdateUsuario, DeleteUsuario} from "../services/api/endpoints";

export function useCreateUsuario({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: CreateUsuario, onSuccess, onError});
}

export function useGetUsuario({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useQuery({ queryKey: ['usuario'], queryFn: GetUsuario, onSuccess, onError});
} 

export function useUpdateUsuario({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: UpdateUsuario, onSuccess, onError});
}

export function useDeleteUsuario({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: DeleteUsuario, onSuccess, onError});
}