import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./view/layout";
import Dataset from "./view/datasetPage";
import WelcomePage from "./view/welcomePage";
import Page from "./view/previousWork"
import LoginPage from "./view/loginPage";

export let currentAccount = null;


function App(props) {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dataset" element={<Dataset />} />
          <Route path="view" element={<Page />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

// ========================================

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
