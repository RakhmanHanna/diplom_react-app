import React from 'react';
import { createContext } from 'react';

interface IProps {
  children: JSX.Element;
}

interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      Ing: number;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

interface IUserContext {
  user: IUser | null;
}

export const UserContext = createContext<IUserContext>({
  user: null,
});

export const UserContextProvider = (props: IProps) => {
  const userInfo = localStorage.getItem('user');
  const user = userInfo !== null ? JSON.parse(userInfo) : null;
  return (
    <UserContext.Provider value={{ user: user }}>
      {props.children}
    </UserContext.Provider>
  );
};
