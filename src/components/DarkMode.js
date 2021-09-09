import React from 'react';
import '../styles/DarkMode.css';

const DarkMode = () => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;

  // Setting value for either light or dark in local storage
  if (localStorage) {
    theme = localStorage.getq('theme');
  }
  // Whichever theme is chosen would be apply the css class to the body
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    // If no theme is chosen by default the light class will be applied
    body.classLight.add(lightTheme);
  }

  // Checks which them is currently active
  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classLight.replace(darkTheme, lightTheme);
    }
  };

  return (
    <button
      className={theme === 'dark' ? clickedClass : ''}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;
