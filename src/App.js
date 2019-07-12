import React from 'react';
import BookContextProvider from './Contexts/BookContext';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';


function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar/>
      <BookList/>
      <BookForm/>
      </BookContextProvider>    
    </div>
  );
}

export default App;
