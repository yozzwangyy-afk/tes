import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Halo, Saya <span className="highlight">Riyo</span></h1>
            <p>Anime Content Creator dengan passion untuk menciptakan konten anime yang menarik dan menghibur. Saya suka berbagi kecintaan pada anime melalui berbagai platform media.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">Lihat Project Saya</a>
              <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
            </div>
          </div>
          <div className="hero-image">
            <Image 
              src="https://files.catbox.moe/uzee63.jpg" 
              alt="Riyo" 
              width={350}
              height={350}
              className="profile-img"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 150px 0 100px;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        
        .hero-text {
          flex: 1;
        }
        
        .hero-image {
          flex: 1;
          text-align: center;
        }
        
        .profile-img {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          object-fit: cover;
          border: 8px solid var(--secondary-color);
          box-shadow: var(--shadow);
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        .highlight {
          color: var(--accent-color);
        }
        
        .hero-text p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--light-text);
        }
        
        @media (max-width: 992px) {
          .hero-content {
            flex-direction: column;
          }
          
          .hero-text {
            text-align: center;
          }
          
          .profile-img {
            width: 280px;
            height: 280px;
          }
          
          h1 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
          }
          
          .profile-img {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}
