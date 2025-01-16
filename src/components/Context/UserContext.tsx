import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type UserContextType = {
  user: {
    number1: number;
    number2: number;
    number3: number;
    number4: number;
  };
  setUser: Dispatch<
    SetStateAction<{
      number1: number;
      number2: number;
      number3: number;
      number4: number;
    }>
  >;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    number1: 12,
    number2: 11,
    number3: 1,
    number4: 8,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
