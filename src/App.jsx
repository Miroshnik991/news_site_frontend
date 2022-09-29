import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="users/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
