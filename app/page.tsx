import Image from 'next/image'
import { Linkedin, Mail, Download, GraduationCap, Briefcase, Code, Brain, Users, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Rafael Melo
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Mechatronics Engineering student at Unicamp, researcher in Computer Vision and Machine Learning, and President of Unicamp's Entrepreneurship League
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
      </section>

      {/* Experience and Education */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience and Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-semibold text-slate-200">Mechatronics Engineering</h4>
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-bold rounded-full border border-amber-400">
                      Top 3%
                    </span>
                  </div>
                  <p className="text-slate-400">State University of Campinas (Unicamp)</p>
                  <p className="text-slate-500 text-sm mt-1 mb-3">GPA: 3.7/4.0</p>
                  <div className="mt-3 pt-3 border-t border-slate-800">
                    <p className="text-slate-300 text-sm font-semibold mb-2">Perfect grade in:</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• <span className="font-semibold text-slate-300">Algorithms and Programming</span> (Python)</li>
                      <li>• <span className="font-semibold text-slate-300">Data Structures</span> (C)</li>
                      <li>• <span className="font-semibold text-slate-300">Calculus I, II and III</span></li>
                      <li>• <span className="font-semibold text-slate-300">Analytic Geometry</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Researcher - Computer Vision</h4>
                  <p className="text-slate-400">LIDS - Laboratory of Information and Decision Systems</p>
                  <p className="text-slate-500 text-sm mt-1">Advisor: Prof. Dr. Alexandre Xavier Falcão</p>
                  <p className="text-slate-500 text-sm mt-1 italic">Selected on merit after achieving the highest grade in Data Structures</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Researcher - Machine Learning</h4>
                  <p className="text-slate-400">LAMAR - Machine Learning in Bearings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and Communication */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Leadership and Communication</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Entrepreneurship League */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                {/* Logo placeholder - Add your logo as /entrepreneurship-league-logo.png or .jpg in the public folder */}
                <div className="relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden flex-shrink-0">
                  <Image
                    src="/entrepreneurship-league-logo.png"
                    alt="Entrepreneurship League Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <h3 className="text-2xl font-semibold">Entrepreneurship League</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Presidency and leadership of a 15-person team, developing entrepreneurial projects and promoting innovation at Unicamp.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                <span>15 members</span>
              </div>
            </div>

            {/* Writer */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Writing Career</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Co-author of 3 books, coordinating teams of over 100 people in editorial projects, demonstrating organization, communication, and leadership skills in complex projects.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>3 published books</span>
                <span className="mx-2">•</span>
                <Users className="w-4 h-4" />
                <span>100+ people coordinated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="container mx-auto px-4 py-20">
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

      {/* Skills */}
      <section className="container mx-auto px-4 py-20">
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

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2024 Rafael Melo. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

