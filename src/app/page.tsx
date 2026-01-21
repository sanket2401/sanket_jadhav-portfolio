// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
//       {/* 1. Background Gradient */}
//       <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

//       {/* 2. Navbar - Mobile Optimized (Scrollable) */}
//       <nav className="fixed top-0 w-full p-4 md:p-6 flex flex-col md:flex-row justify-between items-center backdrop-blur-md z-50 bg-black/30 border-b border-white/5">
//         <h1 className="text-xl md:text-2xl font-bold tracking-tighter mb-3 md:mb-0">Sanket Jadhav.</h1>
        
//         {/* Scrollable Links for Mobile */}
//         <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
//           <div className="flex justify-center md:justify-end space-x-6 text-sm font-medium whitespace-nowrap px-4 md:px-0">
//             <Link href="#about" className="hover:text-purple-400 transition">About</Link>
//             <Link href="#experience" className="hover:text-purple-400 transition">Experience</Link>
//             <Link href="#education" className="hover:text-purple-400 transition">Education</Link>
//             <Link href="#projects" className="hover:text-purple-400 transition">Projects</Link>
//             <Link href="#contact" className="hover:text-purple-400 transition">Contact</Link>
//           </div>
//         </div>
//       </nav>

//       {/* 3. Hero Content */}
//       <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 md:pt-16">
//         <div className="max-w-4xl space-y-6">
//           <h2 className="text-xs md:text-sm font-semibold text-purple-400 tracking-widest uppercase animate-pulse">
//             Software Developer | IoT & Full Stack
//           </h2>
//           {/* Adjusted font size for mobile */}
//           <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
//             Building Scalable APIs & <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//               Device Integration.
//             </span>
//           </h1>
//           <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Developer specializing in Python, Java, and IoT systems. 
//             Bridging the gap between hardware and software with robust Flask APIs and Flutter UIs.
//           </p>
          
//           <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
//             <Link 
//               href="#experience" 
//               className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//             >
//               View Experience
//             </Link>
//             <Link 
//               href="/resume.pdf" 
//               target="_blank"
//               className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition backdrop-blur-md"
//             >
//               Download Resume
//             </Link>
//           </div>

//           {/* Social Links with Real Icons (Hero) */}
//           <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
//             <a 
//               href="https://github.com/sanket2401" 
//               target="_blank" 
//               className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-400 hover:text-white"
//             >
//               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
//               <span className="text-sm font-medium">GitHub</span>
//             </a>

//             <a 
//               href="https://www.linkedin.com/in/sanket-jadhav-s242001" 
//               target="_blank" 
//               className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-400 hover:text-blue-400"
//             >
//               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//               <span className="text-sm font-medium">LinkedIn</span>
//             </a>
//           </div>
//         </div>
//       </main>

//       {/* 4. About Me Section */}
//       <section id="about" className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">About Me</h2>
//         <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
//            <p className="text-gray-300 leading-relaxed mb-6">
//              I build reliable, scalable, and automation-focused software solutions across Python, PostgreSQL, Flutter, Flask, and IoT device systems. 
//              My work spans backend APIs, real-time device communication, UI automation, and full-stack application development.
//            </p>
//            <p className="text-gray-300 leading-relaxed">
//              I am detail-oriented and motivated, with a strong proficiency in Java, Spring Boot, and RESTful APIs. 
//              I enjoy solving complex technical problems, optimizing systems, and building tools that make processes faster, smarter, and more user-friendly.
//            </p>
//         </div>
//       </section>

//       {/* 5. Tech Stack Section */}
//       <section className="py-16 md:py-24 px-4 bg-black/50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-10 md:mb-12 font-semibold">
//             Technical Proficiency
//           </h3>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
//             <div className="p-4 md:p-6 border border-white/10 rounded-xl hover:border-purple-500/50 transition bg-white/5 backdrop-blur-sm">
//               <h4 className="font-bold text-lg md:text-xl mb-2">Languages</h4>
//               <p className="text-gray-400 text-sm">Python, Java, SQL, Solidity</p>
//             </div>
//             <div className="p-4 md:p-6 border border-white/10 rounded-xl hover:border-purple-500/50 transition bg-white/5 backdrop-blur-sm">
//               <h4 className="font-bold text-lg md:text-xl mb-2">Frameworks</h4>
//               <p className="text-gray-400 text-sm">Flask, Spring Boot, Flutter, React.js</p>
//             </div>
//             <div className="p-4 md:p-6 border border-white/10 rounded-xl hover:border-purple-500/50 transition bg-white/5 backdrop-blur-sm">
//               <h4 className="font-bold text-lg md:text-xl mb-2">IoT & Data</h4>
//               <p className="text-gray-400 text-sm">Serial Comm, Modbus, PostgreSQL, Pandas</p>
//             </div>
//             <div className="p-4 md:p-6 border border-white/10 rounded-xl hover:border-purple-500/50 transition bg-white/5 backdrop-blur-sm">
//               <h4 className="font-bold text-lg md:text-xl mb-2">Tools</h4>
//               <p className="text-gray-400 text-sm">Git, Linux, Docker, Postman</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. Experience Section */}
//       <section id="experience" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Professional Experience</h2>
        
//         <div className="relative border-l border-gray-800 ml-2 md:ml-0 space-y-12 pl-6 md:pl-0">
          
//           {/* Experience 1: Galleon */}
//           <div className="md:pl-12 relative">
//             {/* Timeline Dot */}
//             <span className="absolute -left-[30px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
            
//             <div className="mb-3">
//                <h3 className="text-xl md:text-2xl font-bold">Software Developer Intern</h3>
//                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-400 text-sm mt-1">
//                  <span className="text-purple-300">Galleon Instru-Tech Pvt Ltd</span>
//                  <span className="hidden md:inline">•</span>
//                  <span>Oct 2025 - Present</span>
//                  <span className="hidden md:inline">•</span>
//                  <span>Pune, India</span>
//                </div>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
//               Working on end-to-end device integration. Developing Flask-based REST APIs and Flutter UI components 
//               for industrial automation and real-time device monitoring.
//             </p>
//             <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm mb-6">
//               <li>Built APIs for device communication, user management, and data retrieval.</li>
//               <li>Developed Flutter UI for device parameters (Baud Rate, Parity, IP Status).</li>
//               <li>Implemented logic for dynamic IP detection and real-time monitoring.</li>
//               <li>Debugged full workflow issues (500-errors, serial communication failures).</li>
//             </ul>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">Python (Flask)</span>
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">Flutter</span>
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">PostgreSQL</span>
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">IoT / Serial</span>
//             </div>
//           </div>

//           {/* Experience 2: AIROBOSOFT */}
//           <div className="md:pl-12 relative">
//             <span className="absolute -left-[30px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-gray-700"></span>
//             <div className="mb-3">
//                <h3 className="text-lg md:text-xl font-bold">Machine Learning Intern</h3>
//                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-400 text-sm mt-1">
//                  <span className="text-purple-300">AIROBOSOFT Products & Services</span>
//                  <span className="hidden md:inline">•</span>
//                  <span>Aug 2022 - Sep 2022</span>
//                </div>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
//               Focused on predictive maintenance models. Improved model accuracy by 20% through 
//               advanced data preprocessing and feature engineering.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">Python</span>
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">Pandas</span>
//               <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">Scikit-Learn</span>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 7. Education Section */}
//       <section id="education" className="py-16 md:py-20 px-4 max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">Education</h2>
        
//         <div className="relative border-l border-gray-800 ml-2 md:ml-0">
//           <div className="pl-6 md:pl-12 relative pb-8">
//              <span className="absolute -left-[29px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-white"></span>
//              <h3 className="text-lg md:text-xl font-bold">VSM's Somashekhar R Kothiwale Institute of Technology</h3>
//              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-400 text-sm mt-1 mb-2">
//                <span className="text-purple-300">Bachelor of Engineering - Computer Science</span>
//                <span className="hidden md:inline">•</span>
//                <span>2019 - 2023</span>
//                <span className="hidden md:inline">•</span>
//                <span>Nipani, Karnataka</span>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 8. Featured Projects */}
//       <section id="projects" className="py-16 md:py-24 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Featured Projects</h2>
        
//         <div className="space-y-16 md:space-y-24">
          
//           {/* Project 1 */}
//           <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
//             <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition">
//               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black">
//                  <span className="text-blue-200 font-mono text-center px-4">Blockchain System</span>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl md:text-2xl font-bold mb-2">Medical Data Assistant</h3>
//               <span className="inline-block px-2 py-1 mb-4 text-[10px] font-bold uppercase tracking-wider text-green-400 border border-green-900 bg-green-900/20 rounded">
//                 Funded by KSCST
//               </span>
//               <p className="text-gray-400 mb-6 text-sm md:text-base">
//                 A decentralized platform ensuring 100% tamper-proof medical records using Solidity Smart Contracts.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded border border-blue-800">Solidity</span>
//                 <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded border border-blue-800">ReactJS</span>
//                 <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded border border-blue-800">Web3.js</span>
//               </div>
//               <a href="https://github.com/sanket2401" target="_blank" className="text-gray-400 hover:text-white transition text-sm">View on GitHub &rarr;</a>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
//             {/* On Mobile, image comes first */}
//             <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition md:order-2">
//                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900 to-black">
//                  <span className="text-orange-200 font-mono text-center px-4">Spring Boot Backend</span>
//               </div>
//             </div>
//             <div className="md:order-1">
//               <h3 className="text-xl md:text-2xl font-bold mb-4">Online Food Order System</h3>
//               <p className="text-gray-400 mb-6 text-sm md:text-base">
//                 Robust backend for restaurant management with Menu CRUD, billing, and secure REST APIs.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs rounded border border-orange-800">Spring Boot</span>
//                 <span className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs rounded border border-orange-800">Hibernate</span>
//                 <span className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs rounded border border-orange-800">MySQL</span>
//               </div>
//               <a href="https://github.com/sanket2401" target="_blank" className="text-gray-400 hover:text-white transition text-sm">View on GitHub &rarr;</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 9. Contact / Footer Section (Updated with Icons) */}
//       <footer id="contact" className="py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-900/10 blur-[100px] -z-10"></div>

//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Connect</h2>
//           <p className="text-gray-400 mb-10 max-w-lg mx-auto text-sm md:text-base">
//             Open to opportunities in Software Development, Backend Engineering, or IoT.
//           </p>
          
//           <a 
//             href="mailto:sanket24.jadhav@gmail.com" 
//             className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-50 transition transform hover:-translate-y-1 shadow-lg"
//           >
//             sanket24.jadhav@gmail.com
//           </a>

//           {/* New Footer Icons: GitHub, LinkedIn, X, Instagram */}
//           <div className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-8">
//             {/* GitHub */}
//             <a href="https://github.com/sanket2401" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white">
//                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
//             </a>
//             {/* LinkedIn */}
//             <a href="https://www.linkedin.com/in/sanket-jadhav-s242001" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white">
//                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//             </a>
//             {/* X (Twitter) */}
//             <a href="https://x.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white">
//               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//             </a>
//             {/* Instagram */}
//             <a href="https://instagram.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white">
//                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//             </a>
            
//           </div>
          
//           <p className="mt-8 text-xs text-gray-600">
//             &copy; {new Date().getFullYear()} Sanket Jadhav. Built with Next.js & Tailwind.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////// ////////////////////////////////////////////////////////////////////////////

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- HIGH-END GRAPHICS BACKGROUND --- */}
      {/* 1. Cyberpunk Grid Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#030014] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* 2. Ambient Lighting Orbs */}
      <div className="fixed top-0 left-0 -z-10 h-[500px] w-[500px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 -z-10 h-[500px] w-[500px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen"></div>

      {/* --- NAVBAR (Mobile Optimized & Glass) --- */}
      <nav className="fixed top-0 w-full p-4 md:px-8 md:py-5 flex flex-col md:flex-row justify-between items-center backdrop-blur-lg bg-[#030014]/50 z-50 border-b border-white/10 supports-[backdrop-filter]:bg-[#030014]/20">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter mb-3 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Sanket Jadhav.
        </h1>
        
        {/* Scrollable Links for Mobile */}
        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <div className="flex justify-center md:justify-end space-x-8 text-sm font-medium whitespace-nowrap px-4 md:px-0 text-gray-300">
            <Link href="#about" className="hover:text-white hover:scale-105 transition duration-300">About</Link>
            <Link href="#experience" className="hover:text-white hover:scale-105 transition duration-300">Experience</Link>
            <Link href="#education" className="hover:text-white hover:scale-105 transition duration-300">Education</Link>
            <Link href="#projects" className="hover:text-white hover:scale-105 transition duration-300">Projects</Link>
            <Link href="#contact" className="hover:text-white hover:scale-105 transition duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32 md:pt-20 relative">
        
        {/* PROFILE PHOTO (Updated: Bigger & Clearer) */}
        <div className="relative mb-10 group">
            {/* Animated Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Container - Increased Size to 250px on desktop */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 bg-black shadow-2xl z-10">
                <Image 
                  src="/profile.jpg" 
                  alt="Sanket Jadhav" 
                  fill
                  className="object-cover"
                  priority
                />
            </div>
        </div>

        <div className="max-w-5xl space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <h2 className="text-xs md:text-sm font-semibold text-purple-300 tracking-wider uppercase">
              Software Developer | IoT & Full Stack
            </h2>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
            Building Scalable APIs & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 drop-shadow-2xl">
              Device Integration.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Developer specializing in Python, Java, and IoT systems. 
            Bridging the gap between hardware and software with robust Flask APIs and Flutter UIs.
          </p>
          
          <div className="flex flex-col md:flex-row gap-5 justify-center pt-8">
            <Link 
              href="#experience" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Experience
            </Link>
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-4 border border-white/20 bg-white/5 rounded-full hover:bg-white/10 transition backdrop-blur-md flex items-center justify-center gap-2 group"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </Link>
          </div>

          {/* Social Icons (Hero) */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a href="https://github.com/sanket2401" target="_blank" className="text-gray-400 hover:text-white transition transform hover:scale-110"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            <a href="https://www.linkedin.com/in/sanket-jadhav-s242001" target="_blank" className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          </div>
        </div>
      </main>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
          About Me
        </h2>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl hover:border-purple-500/30 transition duration-500 shadow-2xl">
           <p className="text-gray-300 leading-relaxed mb-6 text-lg">
             I build reliable, scalable, and automation-focused software solutions across <span className="text-white font-semibold">Python, PostgreSQL, Flutter, and Flask</span>. 
             My work spans backend APIs, real-time device communication, UI automation, and full-stack application development.
           </p>
           <p className="text-gray-300 leading-relaxed text-lg">
             I am detail-oriented and motivated, with a strong proficiency in <span className="text-white font-semibold">Java & Spring Boot</span>. 
             I enjoy solving complex technical problems, optimizing systems, and building tools that make processes faster, smarter, and more user-friendly.
           </p>
        </div>
      </section>

      {/* --- TECH STACK SECTION (Grid Design) --- */}
      <section className="py-24 px-4 bg-[#0a0a0a]/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-gray-400 uppercase tracking-widest text-sm mb-16 font-semibold">
            Technical Arsenal
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Languages", tech: "Python, Java, SQL, Solidity", color: "hover:border-blue-500/50 hover:shadow-blue-500/20" },
              { title: "Frameworks", tech: "Flask, Spring Boot, Flutter, React", color: "hover:border-green-500/50 hover:shadow-green-500/20" },
              { title: "IoT & Data", tech: "Serial Comm, Modbus, Postgres, Pandas", color: "hover:border-yellow-500/50 hover:shadow-yellow-500/20" },
              { title: "Tools", tech: "Git, Linux, Docker, Postman", color: "hover:border-pink-500/50 hover:shadow-pink-500/20" }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition duration-300 group ${item.color} hover:-translate-y-1 shadow-lg`}>
                <h4 className="font-bold text-xl mb-2 group-hover:text-white transition">{item.title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-200">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional Experience</h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16 pl-8 md:pl-12">
          
          {/* Experience 1 */}
          <div className="relative group">
            <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-black border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></span>
            
            <div className="mb-4">
               <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">Software Developer Intern</h3>
               <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-400 text-sm mt-1">
                 <span className="text-purple-300 font-semibold">Galleon Instru-Tech Pvt Ltd</span>
                 <span className="hidden md:inline">•</span>
                 <span>Oct 2025 - Present</span>
                 <span className="hidden md:inline">•</span>
                 <span>Pune, India</span>
               </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition duration-300">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Working on end-to-end device integration. Developing Flask-based REST APIs and Flutter UI components 
                  for industrial automation and real-time device monitoring.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm mb-6 marker:text-purple-500">
                  <li>Built APIs for device communication, user management, and data retrieval.</li>
                  <li>Developed Flutter UI for device parameters (Baud Rate, Parity, IP Status).</li>
                  <li>Implemented logic for dynamic IP detection and real-time monitoring.</li>
                  <li>Debugged full workflow issues (500-errors, serial communication failures).</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['Python (Flask)', 'Flutter', 'PostgreSQL', 'IoT'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-black/40 rounded-full text-xs text-gray-300 border border-white/10">{tag}</span>
                  ))}
                </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative group">
            <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-black border-4 border-gray-600"></span>
            <div className="mb-4">
               <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition">Machine Learning Intern</h3>
               <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-400 text-sm mt-1">
                 <span className="text-gray-300 font-semibold">AIROBOSOFT Products & Services</span>
                 <span className="hidden md:inline">•</span>
                 <span>Aug 2022 - Sep 2022</span>
               </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gray-500/30 transition duration-300">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Focused on predictive maintenance models. Improved model accuracy by 20% through 
                  advanced data preprocessing and feature engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'Scikit-Learn'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-black/40 rounded-full text-xs text-gray-300 border border-white/10">{tag}</span>
                  ))}
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10">
          <div className="pl-8 md:pl-12 relative pb-8">
             <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white ring-4 ring-black"></span>
             
             <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition duration-300 shadow-lg">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-white">Bachelor of Engineering</h3>
                   <p className="text-purple-300 text-sm mt-1">Computer Science & Engineering</p>
                 </div>
                 <span className="mt-2 md:mt-0 px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/10">2019 - 2023</span>
               </div>
               <p className="text-gray-400 text-sm">VSM's Somashekhar R Kothiwale Institute of Technology</p>
               <p className="text-gray-500 text-xs mt-1">Nipani, Karnataka</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="space-y-16">
          
          {/* Project 1 */}
          <div className="group relative grid md:grid-cols-2 gap-8 items-center bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition duration-500 hover:bg-white/[0.07]">
            <div className="aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/5 group-hover:scale-[1.02] transition duration-500 relative">
              {/* Abstract Graphic Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
              <div className="w-full h-full flex items-center justify-center relative z-10">
                 <span className="text-blue-200 font-mono text-center px-4 font-bold text-lg">Blockchain<br/>System Architecture</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">Medical Data Assistant</h3>
              </div>
              <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-wider text-green-300 border border-green-500/30 bg-green-900/20 rounded-full">
                Funded by KSCST
              </span>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                A decentralized platform ensuring 100% tamper-proof medical records using Solidity Smart Contracts.
                Optimized for privacy and access control.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Solidity', 'ReactJS', 'Web3.js'].map(tag => (
                   <span key={tag} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded border border-blue-500/20">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/sanket2401" target="_blank" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition text-sm font-medium border-b border-transparent hover:border-white pb-0.5">
                View Source Code &rarr;
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative grid md:grid-cols-2 gap-8 items-center bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition duration-500 hover:bg-white/[0.07]">
            {/* Mobile: Image First */}
            <div className="aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/5 group-hover:scale-[1.02] transition duration-500 md:order-2 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-red-900/40"></div>
               <div className="w-full h-full flex items-center justify-center relative z-10">
                 <span className="text-orange-200 font-mono text-center px-4 font-bold text-lg">Spring Boot<br/>Backend System</span>
              </div>
            </div>
            
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition">Online Food Order System</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Robust backend for restaurant management with Menu CRUD, billing, and secure REST APIs.
                Architected for high scalability.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Spring Boot', 'Hibernate', 'MySQL'].map(tag => (
                   <span key={tag} className="px-2 py-1 bg-orange-500/10 text-orange-300 text-xs rounded border border-orange-500/20">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/sanket2401" target="_blank" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition text-sm font-medium border-b border-transparent hover:border-white pb-0.5">
                View Source Code &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER (Social Icons) --- */}
      <footer id="contact" className="py-20 border-t border-white/10 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-900/10 blur-[120px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Let's Build Something Amazing.</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Open to opportunities in Software Development, Backend Engineering, or IoT.
          </p>
          
          <a 
            href="mailto:sanket24.jadhav@gmail.com" 
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-50 transition transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            sanket24.jadhav@gmail.com
          </a>

          {/* Social Icons */}
          <div className="mt-16 flex justify-center gap-8">
            <a href="https://github.com/sanket2401" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white hover:scale-110 duration-300 border border-white/5">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sanket-jadhav-s242001" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-blue-600/20 transition text-gray-400 hover:text-blue-500 hover:scale-110 duration-300 border border-white/5">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition text-gray-400 hover:text-white hover:scale-110 duration-300 border border-white/5">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-pink-600/20 transition text-gray-400 hover:text-pink-500 hover:scale-110 duration-300 border border-white/5">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
          
          <p className="mt-8 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Sanket Jadhav. Built with Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}