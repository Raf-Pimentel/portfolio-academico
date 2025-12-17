import { Linkedin, Mail, GraduationCap, Briefcase, Code, Brain } from 'lucide-react'

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
            Graduando em Engenharia Mecatrônica na Unicamp, pesquisador em Computer Vision e Machine Learning, e Presidente da Liga de Empreendedorismo da Unicamp
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
              E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Experiência e Educação */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experiência e Educação</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Educação */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Educação</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Engenharia Mecatrônica</h4>
                  <p className="text-slate-400">Universidade Estadual de Campinas (Unicamp)</p>
                  <p className="text-slate-500 text-sm mt-1">GPA: 3.7/4.0</p>
                </div>
              </div>
            </div>

            {/* Experiência */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-semibold">Experiência</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Pesquisador - Computer Vision</h4>
                  <p className="text-slate-400">LIDS - Laboratório de Inteligência e Decisão em Sistemas</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Pesquisador - Machine Learning</h4>
                  <p className="text-slate-400">LAMAR - Machine Learning em Mancais</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-200">Presidente</h4>
                  <p className="text-slate-400">Liga de Empreendedorismo da Unicamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Principais */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projetos Principais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Projeto 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Iniciação Científica (FEM-Unicamp)</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Modelagem numérica e Machine Learning para coeficientes dinâmicos de mancais.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Modelagem Numérica</span>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <h3 className="text-2xl font-semibold">App 'Ifome'</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Réplica do iFood desenvolvida em Java com conceitos avançados de POO (MC322).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Java</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">POO</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Algoritmos</span>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Percepção Autônoma (E-racing)</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Detecção de cones com YOLO, LiDAR e ROS2 para carro de corrida autônomo.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">ROS2</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">YOLO</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">LiDAR</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Computer Vision</span>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                <h3 className="text-2xl font-semibold">Solucionador de Cubo Mágico</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Algoritmo de resolução gráfica e gamificada.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Algoritmos</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">Game Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Linguagens */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Linguagens de Programação</h3>
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

            {/* Tecnologias */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Tecnologias e Ferramentas</h3>
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
          <p>© 2024 Rafael Melo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}

