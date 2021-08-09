import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialVale => {
    const [darkMode, setDarkmode] = useLocalStorage(false);
    return [darkMode, setDarkmode];
}
export default useDarkMode;
