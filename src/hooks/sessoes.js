import {useQuery, useMutation} from "@tanstack/react-query";
import { CreateSessoes, GetSessoes, DeleteSessoes } from "../services/api/endpoints";

export function useCreateSessoes({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: CreateSessoes, onSuccess, onError});
}

export function useGetessoes({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useQuery({ queryKey: ['sessoes'], queryFn: GetSessoes, onSuccess, onError});
} 

export function useDeleteSessoes({onSuccess = () => {}, onError = () => {}} = {}) { 
    return useMutation({mutationFn: DeleteSessoes, onSuccess, onError});
}