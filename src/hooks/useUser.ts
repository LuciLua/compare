import axios from "axios";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const [page, setPage] = useState(1);
  const [type, setType] = useState("followers");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [impostor, setImpostor] = useState([]);

  const linkFinal = `https://api.github.com/users/${user}/${type}?page=${page}`;

  const allFollowers = [];
  const allFollowings = [];

  function novoUsuario(e: any) {
    setUser(e.target.value);
  }

  function novaPagina(e: any) {
    setPage(e.target);
    console.log(page);
  }

  async function filter() {
    console.log(user);

    const resp = await axios.get(linkFinal);
    const data = await resp.data;

    if (type === "followers") {
      setFollowers(data);
    }
    if (type === "following") {
      setFollowing(data);
    }

    // limpa impostores
    setImpostor([])
  }
  
  function getImpostor(){

    function puxa(f: any){
      impostor.find(i => i === f.login) ? null : impostor.push(f.login)
    }

    // para cada pessoa que eu sigo
    following.map(f=> {
      // veja se essa pessoa se encontra na listas de quem me segue
      // se não: coloque seu nome no array impostor
        followers.find( fw => fw.login === f.login) ? null :  puxa(f)
    })
  
    setImpostor(impostor)
      console.log(impostor)
  }

  return {
    user,
    setUser,
    novoUsuario,
    filter,
    novaPagina,
    setPage,
    page,
    type,
    setType,
    linkFinal,
    followers,
    following,
    allFollowers,
    allFollowings,
    impostor,
    getImpostor
  };
}
