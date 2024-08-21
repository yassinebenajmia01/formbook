import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BooksContext from './context/books';
import Header from './components/header';
import Navbar from './components/navbar';
import Choice from './components/choice';
import PopularCat from './components/categorie';
import TopStory from './components/story';
import Trending from './components/trending';
import Order from './components/order';
import ListProduct from './pages/listproduct';
import BestSeller from './components/bseller';
import Popular from './components/popular';
import Login from './pages/login';
import SignUp from './pages/signup';
import { AuthProvider } from './context/authContext';
import Suggest from './components/suggest';
import Amazon from './components/amazon';
import Landing from './components/landing';
import Final from './components/final';
import Subscribe from './components/subscribe';
import Footerr from './components/footerr';
import Footer from './components/footer';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
    <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<> <Choice /><PopularCat /><TopStory /><ListProduct /><Order /><Trending /><BestSeller /><Popular /><Suggest/><Amazon/><Landing/><Final/></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Subscribe/>
      <Footerr/>
      <Footer/>
    </>
  );
}

export default App;