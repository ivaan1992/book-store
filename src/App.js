import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/books" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
