// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const downloadCV = () => {
    // Replace with actual CV file link
    alert('CV download functionality - replace with actual CV file link');
    // Example: window.open('/path/to/cv.pdf', '_blank');
  };
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="fixed w-full bg-white shadow z-10">
        <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
          <div className="text-xl font-bold">My Portfolio</div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>
          <p className="text-lg">Discover my projects and experience.</p>
        </section>

        <section id="projects" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://source.unsplash.com/300x200/?project" alt="Project 1" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-gray-600 mt-2">Description of your first project.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://source.unsplash.com/300x200/?development" alt="Project 2" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-gray-600 mt-2">Description of your second project.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://source.unsplash.com/300x200/?technology" alt="Project 3" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-gray-600 mt-2">Description of your third project.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-4">Pau Badia Villanueva</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Game Developer & Graphics Programmer passionate about creating innovative interactive experiences.
              </p>
              <div className="flex items-center mb-8">
                <span className="text-red-500 mr-4 text-xl">✉</span>
                <a href="mailto:paubadi15@gmail.com" className="text-white text-lg hover:text-gray-300 transition-colors">
                  paubadi15@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Do you have an interesting project or job opportunity? Don't hesitate to contact me!
              </p>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://github.com/Prauerss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/pau-badia-675b83365/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <button 
                onClick={downloadCV}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded transition-colors font-bold"
              >
                Download CV ⬇
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Pau Badia Villanueva. All rights reserved.</p>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-400 hover:bg-green-500 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}