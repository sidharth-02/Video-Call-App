// import React from "react";
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import './style.css';

// ReactDOM.render(<App/>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { ContextProvider } from './SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
    // </React.StrictMode>
);