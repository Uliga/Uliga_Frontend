import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Login from "./pages/login";
import Main from "./pages/main";
import PATH from "./constants/path";
import Signup from "./pages/signup";
import Social from "./pages/social";
import StyledContainer from "./components/Toast/container";
import Landing from "./pages/landing";
import Write from "./pages/write";
import Schedule from "./pages/schedule";
import Budget from "./pages/budget";
import History from "./pages/history";
import Record from "./pages/record";
import RecordCategory from "./pages/record/category";
import HistoryCategory from "./pages/history/category";
import Income from "./pages/income";
import IncomeCategory from "./pages/income/category";
import Setting from "./pages/setting";
import SettingMe from "./pages/setting/me";
import SettingBook from "./pages/setting/book";
import DateRangeChart from "./pages/chart/dateRangeChart";
import CategoryChart from "./pages/chart/categoryChart";
import NoExist from "./pages/noExist";
import ComingSoon from "./pages/comingSoon";

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
            <Route index element={<Landing />} />
          </Route>
          <Route path={PATH.LOGIN} element={<DefaultLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={PATH.SIGNUP} element={<DefaultLayout />}>
            <Route index element={<Signup />} />
          </Route>
          <Route path={PATH.SOCIAL} element={<DefaultLayout />}>
            <Route index element={<Social />} />
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
          <Route path={PATH.HISTORY} element={<MainLayout />}>
            <Route path=":bookId" element={<History />} />
            <Route path=":bookId/:categoryId" element={<HistoryCategory />} />
          </Route>
          <Route path={PATH.RECORD} element={<MainLayout />}>
            <Route path=":bookId" element={<Record />} />
            <Route path=":bookId/:categoryId" element={<RecordCategory />} />
          </Route>
          <Route path={PATH.INCOME} element={<MainLayout />}>
            <Route path=":bookId" element={<Income />} />
            <Route path=":bookId/:categoryId" element={<IncomeCategory />} />
          </Route>
          <Route path={PATH.DATE_RANGE_CHART} element={<MainLayout />}>
            <Route path=":bookId" element={<DateRangeChart />} />
          </Route>
          <Route path={PATH.CATEGORY_CHART} element={<MainLayout />}>
            <Route path=":bookId" element={<CategoryChart />} />
          </Route>
          <Route path={PATH.SETTING} element={<MainLayout />}>
            <Route element={<Setting />}>
              <Route path="book/:bookId" element={<SettingBook />} />
              <Route path="me/:bookId" element={<SettingMe />} />
            </Route>
          </Route>
          <Route path={PATH.FINANCIAL} element={<MainLayout />}>
            <Route path=":bookId" element={<ComingSoon />} />
          </Route>
          <Route path="*" element={<NoExist />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
