import React from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";

const ContextComponent = () => {
  return (
    <UserProvider>
      <ComponentA />
    </UserProvider>
  );
};

export default ContextComponent;
