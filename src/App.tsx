import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Login from "./pages/login";
import Main from "./pages/main";
import PATH from "./constants/path";
import Signup from "./pages/signup";
import StyledContainer from "./components/Toast/container";
import LadingPage from "./pages/landing";
import Write from "./pages/write";
import Budget from "./pages/budget";
import Schedule from "./pages/schedule";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer
        className="toast"
        position="top-center"
        closeButton={false}
      />
      <Router>
        <Routes>
          <Route path={PATH.LANDING} element={<DefaultLayout />}>
            <Route index element={<LadingPage />} />
          </Route>
          <Route path={PATH.LOGIN} element={<DefaultLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={PATH.SIGNUP} element={<DefaultLayout />}>
            <Route index element={<Signup />} />
          </Route>
          <Route path={PATH.MAIN} element={<MainLayout />}>
            <Route path=":bookId" element={<Main />} />
          </Route>
          <Route path={PATH.WRITE} element={<MainLayout />}>
            <Route path=":bookId" element={<Write />} />
          </Route>
          <Route path={PATH.SCHEDULE} element={<MainLayout />}>
            <Route path=":bookId" element={<Schedule />} />
          </Route>
          <Route path={PATH.BUDGET} element={<MainLayout />}>
            <Route path=":bookId" element={<Budget />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
