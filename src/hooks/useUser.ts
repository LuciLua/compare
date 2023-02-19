import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export default function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useNome must be used withim an nomeProvider");
  }
}
