import React from "react";
import Layout from "./components/Layout";

const App: React.FC = () => {
    return (
        <div className='lg:flex place-items-center justify-center h-[100vh] dark:text-white' id="app">
            <Layout />
        </div>
    );
};

export default App;
