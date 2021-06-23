import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/rooms/new">
            <NewRoom />
          </Route>

          <Route path="/rooms/:id">
            <Room />
          </Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
