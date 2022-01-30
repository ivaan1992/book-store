import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import store from './redux/configureStore';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route exact path="/" element={<Books />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
