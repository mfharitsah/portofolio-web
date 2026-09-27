'use client';

import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Works from './components/Works';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Profile />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
