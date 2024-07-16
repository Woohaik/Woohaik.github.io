import React from "react";
import Layout from "./components/_Layout";
import Routes from "./Routes";
import "./styles/styles.scss";
import "./config/i18n";

const App: React.FC = () => {
    return (
        <Layout>
            <Routes />
        </Layout>
    );
};

export default App;
