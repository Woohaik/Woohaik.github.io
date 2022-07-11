import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import TranslationsProvider from "./components/TranslationsProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <TranslationsProvider>
                <App />
            </TranslationsProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
