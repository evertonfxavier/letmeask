import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const values = useContext(AuthContext);

  return values;
}
