import axios from "axios";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();

  const [page, setPage] = useState(1);

  const [type, setType] = useState("followers");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [impostor, setImpostor] = useState([]);
  // --

  const linkFinal = `https://api.github.com/users/${user}/${type}?page=${page}`;
  const linkTotalFollowers = `https://api.github.com/users/${user}`;

  const allFollowers = [];
  const allFollowings = [];

  function novoUsuario(e: any) {
    setUser(e.target.value);
  }

  function novaPagina(e: any) {
    setPage(e.target);
    console.log(page);
  }

  async function totalFollowers() {
    const resp = await axios.get(linkTotalFollowers);
    const data = await resp.data;
    const totalFollowersNumber = data.followers;
    return totalFollowersNumber;
  }

  async function filter() {
    const TOTAL_FOLLOWERS: any = totalFollowers();
    const EACH_PAGE_FOLLOWERS = 30;

    // Logic
    var div_int = await TOTAL_FOLLOWERS / EACH_PAGE_FOLLOWERS;
    var div_rest = await TOTAL_FOLLOWERS % EACH_PAGE_FOLLOWERS;
    var reqs = Math.floor(div_int);

    if (await TOTAL_FOLLOWERS > 0 && await TOTAL_FOLLOWERS < 30) {
      reqs = 1;
    } else {
      if (div_rest > 0) {
        reqs += 1;
      }
    }

    console.log("-------------------------");
    console.log("Numero de requisicoes: ", reqs);
    console.log("-------------------------");


    for (let i = 0; i < reqs; i++ ){
      console.log("req...", i+1)
      let pags = i+1
      setPage(pags)
      console.log(page)
      // console.log(linkFinal)
    }
    


    const resp = await axios.get(linkFinal);
    const data = await resp.data;

    if (type === "followers") {
      setFollowers(await data);
    }
    if (type === "following") {
      setFollowing(await data);
    }

    // limpa impostores
    setImpostor([]);
  }

  function getImpostor() {
    function puxa(f: any) {
      impostor.find((i) => i === f.login) ? null : impostor.push(f.login);
    }

    // para cada pessoa que eu sigo
    following.map((f) => {
      // veja se essa pessoa se encontra na listas de quem me segue
      // se não: coloque seu nome no array impostor
      followers.find((fw) => fw.login === f.login) ? null : puxa(f);
    });

    setImpostor(impostor);
    console.log(impostor);
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
    getImpostor,
  };
}
