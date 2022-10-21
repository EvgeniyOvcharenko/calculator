import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Header from "./containers/header/header";
import SideBar from "./containers/aside/sideBar";
import CalculatorPage from "./containers/article/calculatorPage/calculatorPage";
import TodoPage from "./containers/article/todoPage/todoPage";
import TestPage from "./containers/article/testPage/testPage";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="main">
          <SideBar />
          <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="/calc" element={<CalculatorPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route
              path="*"
              element={
                <aside style={{ padding: "1rem" }}>
                  <p>There&apos;s nothing here!</p>
                </aside>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);
