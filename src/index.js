import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as BooksProvider } from './context/books';
import { AuthProvider } from './context/authContext';
import { ApiProvider } from './context/apiContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <ApiProvider>
  <React.StrictMode>
    <AuthProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </AuthProvider>
  </React.StrictMode>
  </ApiProvider>
);
