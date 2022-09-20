import React from 'react';

import MainPage from './components/MainPage/MainPage';

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  alignItems: 'center',
};

function App() {
  return (
    <div
      className="App"
      style={cardStyle}
    >
      <MainPage />
    </div>
  );
}

export default App;
