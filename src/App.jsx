import React from 'react';

import MainPage from './components/MainPage/MainPage';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '50px',
  flexWrap: 'wrap',
  alignItems: 'center',
};

function App() {
  return (
    <div
      className="App"
      style={appStyle}
    >
      <MainPage />
    </div>
  );
}

export default App;
