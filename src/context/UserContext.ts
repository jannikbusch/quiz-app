import {createContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface UserStoreI {
  username: string,
  setUsername: (username: string) => void
}

const defaultUserStore : UserStoreI = {
  username: "",
  setUsername: (username : string) => {}
}

export const UserContext = createContext(defaultUserStore);

export function useUserStore() : UserStoreI {
  const [username, setUsername] = useState<string>("");
  
  return {
    username,
    setUsername
  }
}