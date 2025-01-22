'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { use, useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar darkStatus={isDarkMode} setDarkMode={setIsDarkMode} />
      <Header darkStatus={isDarkMode} setDarkMode={setIsDarkMode} />
      <Profile darkStatus={isDarkMode}  setDarkMode={setIsDarkMode} />
      <Works darkStatus={isDarkMode} setDarkMode={setIsDarkMode} />
      <Contact darkStatus={isDarkMode} setDarkMode={setIsDarkMode} />
      <Footer darkStatus={isDarkMode} setDarkMode={setIsDarkMode} />
    </>
  );
}
