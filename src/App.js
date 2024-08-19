import { useEffect, useContext } from 'react';

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


function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Choice/>
      <PopularCat/>
      <TopStory/>
      <ListProduct/>

      <Trending/>
      <Order/>
      <BestSeller/>
      <Popular/>
      
    </div>
  );
}

export default App;
