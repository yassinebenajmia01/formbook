import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as BooksProvider } from './context/books';
import { AuthProvider } from './context/authContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </AuthProvider>
  </React.StrictMode>
);
