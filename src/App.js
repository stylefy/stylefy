import React from 'react';
import Button from './components/Button';
import GlobalStyle from './styles/global';
import Input from './components/Input';


function App() {
  return (
    <>  
      <div className="container">
        <Button />
      </div>
      <div className="container">
        <Input />
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
