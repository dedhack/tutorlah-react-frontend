import { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser_id] = useState("");

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        username,
        setUsername,
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
