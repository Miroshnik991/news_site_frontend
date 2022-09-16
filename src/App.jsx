/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center',
      }}
    >
      <MainPage />
    </div>
  );
}

export default App;
