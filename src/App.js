import React from 'react';
import Card from './components/Card';
import './css/indeex.css';
import './css/scrollbar.css'
export default function App() {
  return (
    <div>
        <Card/>
        {/* <footer className="pagefooter">©&thinsp;<span id="year"></span>&ensp;EliasChen Power By Vercel</footer> */}
    </div>
  )
}
document.getElementById('year').innerHTML=new Date().getFullYear()