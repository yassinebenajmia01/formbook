import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import Header from './components/header';
import Navbar from './components/navbar';
import Choice from './components/choice';
import PopularCat from './components/categorie';
import TopStory from './components/story';
import Trending from './components/trending';
import Order from './components/order';


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
      <Trending/>
      <Order/>
      
    </div>
  );
}

export default App;
