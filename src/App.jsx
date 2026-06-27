import React from 'react';
import './index.css';

function App() {
  return (
    <>
      {/* Liquid Background */}
      <div className="liquid-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navbar */}
      <nav>
        <div className="container">
          <div className="logo">Portofolio.</div>
          <div className="links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="about" style={{ alignItems: 'center', textAlign: 'center', paddingTop: '9rem', paddingBottom: '3rem' }}>
          <div className="fade-in-up">
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1.25rem', 
              borderRadius: '99px', 
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '2rem',
              color: '#93c5fd',
              fontSize: '0.875rem',
              backdropFilter: 'blur(10px)'
            }}>
              ✨ Halo, saya Muhamad Arya Fabrian
            </div>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Building <span style={{ background: 'linear-gradient(to right, #60a5fa, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Digital</span><br/>Experiences
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Saya adalah seorang pengembang yang bersemangat menciptakan website interaktif yang tidak hanya berfungsi dengan baik, tetapi juga memanjakan mata dengan estetika modern.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#projects" className="btn btn-primary">Lihat Proyek Saya</a>
              <a href="#contact" className="btn btn-outline glass">Hubungi Saya</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="fade-in-up delay-1">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Pengalaman</h2>
            <div className="grid-cols-2">
              <div className="glass glass-card">
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(192, 132, 252, 0.1)', color: '#c084fc', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: '600' }}>Terbaru</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Network Engineer</h3>
                <p style={{ color: '#e2e8f0', fontWeight: '500', marginBottom: '1rem' }}>PT THRIVENI INDO MINING</p>
                <p>Bertanggung jawab dalam merancang, mengelola, dan memelihara infrastruktur jaringan perusahaan. Memastikan konektivitas yang stabil, aman, dan berkinerja tinggi untuk mendukung kelancaran operasional.</p>
              </div>
              <div className="glass glass-card">
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: '600' }}>Sebelumnya</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>IT Support</h3>
                <p style={{ color: '#e2e8f0', fontWeight: '500', marginBottom: '1rem' }}>PT THRIVENI INDO MINING</p>
                <p>Memberikan dukungan teknis yang komprehensif, menangani pemeliharaan perangkat keras dan lunak, serta melakukan *troubleshooting* untuk menyelesaikan kendala TI sehari-hari dengan efisien.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="fade-in-up delay-2">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Proyek Pilihan</h2>
            <div className="grid-cols-3">
              {[
                {
                  id: 1,
                  title: 'AI Integration',
                  desc: 'Integrasi solusi Artificial Intelligence ke dalam sistem yang sudah ada untuk analisis data dan otomatisasi cerdas.',
                  icon: '🤖',
                  tags: ['AI', 'Python', 'API']
                },
                {
                  id: 2,
                  title: 'Bot WhatsApp',
                  desc: 'Pembuatan Chatbot WhatsApp interaktif untuk pelayanan otomatis, notifikasi real-time, dan efisiensi komunikasi.',
                  icon: '💬',
                  tags: ['Node.js', 'WhatsApp API', 'Bot']
                },
                {
                  id: 3,
                  title: 'Web Development',
                  desc: 'Membangun aplikasi website modern yang responsif, berkinerja tinggi, dan disesuaikan dengan kebutuhan spesifik klien.',
                  icon: '🌐',
                  tags: ['React', 'Frontend', 'Web']
                }
              ].map((item, idx) => (
                <div key={item.id} className="glass glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '220px', 
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0)), linear-gradient(${(idx + 1) * 70}deg, #3b82f644, #8b5cf644, #ec489944)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ position: 'absolute', width: '100px', height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                    <span style={{ fontSize: '3rem', zIndex: 1 }}>{item.icon}</span>
                  </div>
                  <div style={{ padding: '1.5rem 2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', minHeight: '60px' }}>{item.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '99px', color: '#93c5fd' }}>{tag}</span>
                      ))}
                    </div>
                    <a href="#" className="btn-outline glass" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '12px', fontSize: '0.875rem', fontWeight: '600', textDecoration: 'none' }}>Lihat Detail →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ textAlign: 'center', paddingBottom: '3rem' }}>
          <div className="glass glass-card fade-in-up delay-3" style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: '4rem 2rem' }}>
            
            {/* Foto Profil (Mengambil dari avatar GitHub secara otomatis) */}
            <div style={{ 
              width: '120px', 
              height: '120px', 
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: '#1e293b url("https://github.com/Allenn1132.png") center/cover no-repeat',
              border: '2px solid rgba(139, 92, 246, 0.8)',
              boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.6)'
            }}></div>
            
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Muhamad Arya Fabrian</h2>
            <p style={{ marginBottom: '2.5rem', color: '#cbd5e1' }}>Mari terhubung dan berkolaborasi bersama!</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://github.com/Allenn1132" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.instagram.com/allnless?igsh=ZDhteWtuYXE1aHNm&utm_source=qr" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/6283155617283" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M16.5 16c-1.5 0-3-1.5-4.5-3s-3-3-3-4.5.5-1.5 1-1.5c1 0 1.5 1.5 1.5 2 0 1-.5 1-1 2 .5 1.5 1.5 2.5 3 3 1 .5 2 0 3-1 .5 0 2 .5 2 1.5s-1.5 1.5-1.5 1.5z"/></svg>
              </a>
            </div>
            
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0 3rem', color: '#64748b', fontSize: '0.875rem', position: 'relative', zIndex: 1 }}>
        <p>&copy; {new Date().getFullYear()} Muhamad Arya Fabrian. Dibuat dengan React.</p>
      </footer>
    </>
  );
}

export default App;
