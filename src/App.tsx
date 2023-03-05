import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DefaultLayout from "./components/layout/DefaultLayout";
import Login from "./pages/login";
import Main from "./pages/main";
import PATH from "./constants/path";
import Signup from "./pages/signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={PATH.LOGIN} element={<DefaultLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={PATH.SIGNUP} element={<DefaultLayout />}>
            <Route index element={<Signup />} />
          </Route>
          <Route path={PATH.MAIN} element={<MainLayout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
