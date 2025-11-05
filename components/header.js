'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <i className="fas fa-star"></i>
            <span>Riyo</span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>Tentang</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Project</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Kontak</Link></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: var(--shadow);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-color);
          display: flex;
          align-items: center;
        }
        
        .logo i {
          margin-right: 10px;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--text-color);
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: var(--accent-color);
        }
        
        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: var(--shadow);
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links li {
            margin: 10px 0;
          }
          
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}
