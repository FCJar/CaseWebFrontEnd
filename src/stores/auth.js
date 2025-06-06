import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import  {jwtDecode}  from 'jwt-decode';
import { use } from 'react';

const useAuthStore = create()(
  persist(
    (set, get) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const {usuario} = jwtDecode(token);
        set({token, usuario});
      },
      setUsuario: (usuario) => set({ usuario }),
      clearAuth: () =>set({token:null, usuario: null}),
    }),
    {
      name: "auth",
    },
  ),
)

export default useAuthStore;