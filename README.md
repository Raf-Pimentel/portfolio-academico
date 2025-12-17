# Portfólio Acadêmico - Rafael Melo

Portfólio acadêmico desenvolvido com Next.js, Tailwind CSS e Lucide React, apresentando o perfil de estudante de Engenharia Mecatrônica na Unicamp.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones moderna
- **TypeScript** - Tipagem estática para JavaScript

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

ou

```bash
yarn install
```

Este comando instalará todas as dependências necessárias, incluindo:
- Next.js
- React e React DOM
- Tailwind CSS e suas dependências (PostCSS, Autoprefixer)
- Lucide React
- TypeScript e tipos

### 2. Executar o Projeto em Modo de Desenvolvimento

Após instalar as dependências, execute:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

### 3. Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

E para executar a versão de produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
Portfolio1/
├── app/
│   ├── layout.tsx       # Layout principal da aplicação
│   ├── page.tsx         # Página principal (portfólio)
│   └── globals.css      # Estilos globais com Tailwind
├── public/              # Arquivos estáticos (se necessário)
├── package.json         # Dependências do projeto
├── tailwind.config.js   # Configuração do Tailwind CSS
├── postcss.config.js    # Configuração do PostCSS
├── tsconfig.json        # Configuração do TypeScript
└── next.config.js       # Configuração do Next.js
```

## 🎨 Personalização

### Cores e Tema

O tema dark elegante utiliza a paleta Slate do Tailwind. Para personalizar as cores, edite o arquivo `app/page.tsx` e altere as classes do Tailwind CSS.

### Conteúdo

O conteúdo principal está localizado no arquivo `app/page.tsx`. Você pode editar:
- Informações pessoais na seção Hero
- Links de contato (LinkedIn e E-mail)
- Experiências e educação
- Projetos e suas descrições
- Habilidades e tecnologias

## 📱 Responsividade

O design é totalmente responsivo e otimizado para:
- Dispositivos móveis (smartphones)
- Tablets
- Desktops

## 🔧 Configuração do Tailwind CSS

O Tailwind CSS já está configurado e funcionando. A configuração está em `tailwind.config.js` e os estilos globais estão em `app/globals.css`.

Se você precisar adicionar novas classes ou personalizar ainda mais, consulte a [documentação do Tailwind CSS](https://tailwindcss.com/docs).

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter do ESLint

## 🌐 Deploy

Este projeto pode ser facilmente implantado em plataformas como:
- [Vercel](https://vercel.com/) (recomendado para Next.js)
- [Netlify](https://www.netlify.com/)
- Qualquer servidor que suporte Node.js

## 📄 Licença

Este projeto é pessoal e acadêmico.

## 👤 Autor

**Rafael Melo**
- E-mail: rafaelrpm10@gmail.com
- LinkedIn: [Rafael Melo](https://www.linkedin.com/in/rafael-pimentel-9588a02b3)

---

Desenvolvido com ❤️ usando Next.js e Tailwind CSS

