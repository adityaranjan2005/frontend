import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const currentTheme = localStorage.getItem('current_theme'); // corrected variable name
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    
  );
};

export default App;
