import api from "./api";

const login = async(e) =>{
    e.preventDefault();
    setCarregando(true);
    try{
        const res = await api.post("/login",{email, senha});
        const { token } = res.data;

        setToken(token);
        console.log(token);

        toast.success("usuarios Logado");
        navigate("/");
    }catch(error){
        console.error(erro);
        alert(erro.response.data.message);
    } finally{
        setCarregando(false);
        }
    };