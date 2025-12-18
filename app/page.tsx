'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Linkedin, Mail, Download, GraduationCap, Briefcase, Code, Brain, Users, BookOpen, Award, Menu, X } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#about" className="text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Rafael Melo
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">About Me</a>
              <a href="#experience" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Experience</a>
              <a href="#education" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Education</a>
              <a href="#projects" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Skills</a>
              <a href="#awards" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Awards</a>
              <a href="#contact" className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Contact</a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">About Me</a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Experience</a>
                <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Education</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Projects</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Skills</a>
                <a href="#awards" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Awards</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-slate-100 transition-colors text-sm">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Photo */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl">
                <Image
                  src="/profile-photo.jpg"
                  alt="Rafael Melo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Rafael Melo
                </h1>
                {/* Unicamp Logo */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/unicamp-logo.png"
                    alt="Unicamp Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Description Text */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
                <p className="text-slate-300 leading-relaxed">
                  {/* Add your personal description here */}
                  Mechatronics Engineering student at Unicamp, researcher in Computer Vision and Machine Learning, and President of Unicamp's Entrepreneurship League. Building the most of myself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Researcher - Computer Vision</h3>
              </div>
              <p className="text-slate-400 mb-2">LIDS - Laboratory of Information and Decision Systems</p>
              <p className="text-slate-500 text-sm mt-1">Advisor: Prof. Dr. Alexandre Xavier Falcão</p>
              <p className="text-slate-500 text-sm mt-1 italic">Selected on merit after achieving the highest grade in Data Structures</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Researcher - Machine Learning</h3>
              </div>
              <p className="text-slate-400 mb-2">LAMAR - Machine Learning in Bearings</p>
              <p className="text-slate-500 text-sm mt-1">Advisor: Prof. Dr. Thales de Freitas Peixoto</p>
              <p className="text-slate-500 text-sm mt-1 italic">Selected on merit after achieving the second highest grade in Statics</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Autonomous Vehicles Engineer</h3>
              </div>
              <p className="text-slate-400 mb-2">E-racing - Unicamp</p>
              <p className="text-slate-500 text-sm mt-2">
                Developed and implemented a fully autonomous (driverless) Formula electric car. Progressed from basic to advanced proficiency in Python, Linux, Git, ROS2, Computer Vision, and Image Processing over six months.
              </p>
              <p className="text-slate-500 text-sm mt-2 italic">
                Project secured 3rd place in Brazil's National Autonomous Vehicles Competition, competing against the top 20 universities in the country.
              </p>
            </div>
            {/* Leadership positions can be here or in a separate section */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">President</h3>
              </div>
              <p className="text-slate-400">Entrepreneurship League - Unicamp</p>
              <p className="text-slate-500 text-sm mt-2">Leading a 15-person team, developing entrepreneurial projects and promoting innovation at Unicamp.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Co-Author & Coordinator</h3>
              </div>
              <p className="text-slate-400 mb-2">Published 3 books</p>
              <p className="text-slate-500 text-sm mt-2">Coordinated teams of over 100 people in editorial projects, demonstrating organization, communication, and leadership skills in complex projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold">Mechatronics Engineering</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-bold rounded-full border border-amber-400">
                  Top 3%
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg mb-2">State University of Campinas (Unicamp)</p>
            <p className="text-slate-500 text-sm mb-4">GPA: 3.7/4.0</p>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-slate-300 text-sm font-semibold mb-3">Perfect grade in:</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="font-semibold text-slate-300">Algorithms and Programming</span> (Python)</li>
                <li>• <span className="font-semibold text-slate-300">Data Structures</span> (C)</li>
                <li>• <span className="font-semibold text-slate-300">Calculus I, II and III</span></li>
                <li>• <span className="font-semibold text-slate-300">Analytic Geometry</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Main Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Scientific Initiation (FEM-Unicamp)</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Numerical modeling and Machine Learning for dynamic bearing coefficients.
              </p>
              
              {/* Project Images Gallery - Add your images to /public/projects/scientific-initiation/ */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/scientific-initiation/image1.jpg"
                    alt="Scientific Initiation Project Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/scientific-initiation/image2.jpg"
                    alt="Scientific Initiation Project Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Add more images by duplicating the div above and changing the image number */}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Numerical Modeling</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <h3 className="text-2xl font-semibold">'Ifome' App</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                iFood replica developed in Java with advanced OOP concepts (MC322).
              </p>
              
              {/* Project Images Gallery - Add your images to /public/projects/ifome/ */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/ifome/image1.jpg"
                    alt="Ifome App Project Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/ifome/image2.jpg"
                    alt="Ifome App Project Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Add more images by duplicating the div above and changing the image number */}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Java</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">OOP</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Algorithms</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Autonomous Perception (E-racing)</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Cone detection with YOLO, LiDAR, and ROS2 for an autonomous racing car.
              </p>
              
              {/* Project Images Gallery - Add your images to /public/projects/autonomous-perception/ */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/autonomous-perception/image1.jpg"
                    alt="Autonomous Perception Project Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/autonomous-perception/image2.jpg"
                    alt="Autonomous Perception Project Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Add more images by duplicating the div above and changing the image number */}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">ROS2</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">YOLO</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">LiDAR</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Computer Vision</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Rubik's Cube Solver</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Graphical and gamified solving algorithm.
              </p>
              
              {/* Project Images Gallery - Add your images to /public/projects/rubiks-cube/ */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/rubiks-cube/image1.jpg"
                    alt="Rubik's Cube Solver Project Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src="/projects/rubiks-cube/image2.jpg"
                    alt="Rubik's Cube Solver Project Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Add more images by duplicating the div above and changing the image number */}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Algorithms</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Game Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200">Python</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200">C</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200">Java</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-200">VHDL</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Technologies and Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200">ROS2</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200">Git</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200">Linux</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200">Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-200">Computer Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Awards & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-semibold">Top 3% Academic Performance</h3>
              </div>
              <p className="text-slate-400">Ranked in the top 3% of Mechatronics Engineering students at Unicamp</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-semibold">Merit-Based Research Selection</h3>
              </div>
              <p className="text-slate-400">Selected for research position at LIDS after achieving the highest grade in Data Structures</p>
            </div>
            
            {/* Super Liga X Competition */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-semibold">Super Liga X - 1st Place</h3>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4 bg-slate-800 border border-slate-700">
                <Image
                  src="/awards/super-liga-x.jpg"
                  alt="Super Liga X Competition"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-slate-400 mb-2">
                Entrepreneurship competition involving over 60 university teams from across Brazil, with more than 280 participants.
              </p>
              <p className="text-slate-300 font-semibold">
                My 4-person team received the 1st Place National Award.
              </p>
              <p className="text-slate-500 text-sm mt-3 italic">
                {/* Add your personal journey description here */}
                This competition was a transformative experience that challenged our team to develop innovative solutions and demonstrate strong leadership and teamwork skills.
              </p>
            </div>

            {/* Robocar Race Competition */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-semibold">Robocar Race - 3rd Place</h3>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4 bg-slate-800 border border-slate-700">
                <Image
                  src="/awards/robocar-race.jpg"
                  alt="Robocar Race Competition"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-slate-400 mb-2">
                Autonomous vehicle competition at scale, involving robotics, autonomous navigation with artificial intelligence and computer vision.
              </p>
              <p className="text-slate-400 mb-2">
                The 20 best universities in Brazil were registered in the competition.
              </p>
              <p className="text-slate-300 font-semibold">
                My team received the 3rd Place National Award.
              </p>
              <p className="text-slate-500 text-sm mt-3 italic">
                {/* Add your personal journey description here */}
                This competition allowed me to apply my knowledge in computer vision, machine learning, and autonomous systems in a real-world competitive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <p className="text-slate-300 text-center mb-8 text-lg">
              Feel free to reach out if you'd like to collaborate or have any questions!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/rafael-pimentel-9588a02b3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors duration-200 border border-slate-700 hover:border-slate-600"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:rafaelrpm10@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors duration-200 border border-slate-700 hover:border-slate-600"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors duration-200 border border-slate-700 hover:border-slate-600"
              >
                <Download className="w-5 h-5" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2024 Rafael Melo. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

