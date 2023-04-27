import { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        user_id,
        setUser_id,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
