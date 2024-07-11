'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | string;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: 'Guest',
  setUser: () => {},
});


export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const contextValue: AuthContextType = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}


export function useAuthContext() {
   return useContext(AuthContext)
}

