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
    theme = localStorage.getItem('theme');
  }
  // Whichever theme is chosen would be apply the css class to the body
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    // If no theme is chosen by default the light class will be applied
    body.classList.add(lightTheme);
  }

  // Checks which theme is currently active
  const switchTheme = (e) => {
    // If dark theme is active it will be replaced with light theme
    // Removes the click class from the dark button
    // Changes theme property to light
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    } else {
      // IF the dark theme was off it will turn it on
      // Remove click class
      // Set theme property to dark
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('teme', 'dark');
      theme = darkTheme;
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
