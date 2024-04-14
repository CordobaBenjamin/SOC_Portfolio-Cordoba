import React from "react";

const LanguageTexts:any = {
  es: {
    navbar: {
      a1: 'Acerca de mi',
      a2: 'Proyectos',
      a3: 'Contacto',
    },
    main: {
      span1: ', mi nombre es ',
      span2: ' y soy un ...'
    },
    about: {
      h2: 'Estas son mis principales Conocimientos. ',
      tittle: 'Acerca de mi', 
      span1: 'Hola, mi nombre es Benjamín Córdoba, tengo 19 años. He estado estudiando desarrollo web durante 2 años. Y en el último año comencé a ser estudiante de ingeniería en informática.',
      span2: ' (Por ahora casi todo es lógica y matemáticas)',
      span3: 'He participado en conferencias/cursos/charlas y en general aprendiendo de diferentes profesionales aquí en Argentina.',
      span4: '(Detallaré esto más adelante.)',
    },
    learning_card: {
      title: '¿Dónde Aprendi?',
      span1: 'La mayor parte de mis conocimientos provienen de cursos',
      span2: '(CoderHouse, Devtalles o Codo a Codo),',
      span3: ' Mi carrera universitaria,',
      span4: 'Formas de aprendizaje autodidactas  (Cursos web, Stack Overflow, MDN), Prácticas con compañeros, Proyectos, etc... y sobre todo,',
      span5: '',
      span6: 'tiempo, mucho tiempo',
    },
    help_card: {
      title: '¿Cómo Puedo Ayudarte?',
      span1: 'Para mí, es importante conocer todos los aspectos del proceso de desarrollo web, aprenderé cualquier tecnología necesaria que me ayude a cumplir mis objetivos. Por ahora me estoy especializando unicamente en Front End.',
      span2: 'y ... ',
    },
    why_me_card: {
      title: '¿Por qué Elegirme?',
      span1: 'Una de mis',
      span2: 'Principales Cualidades',
      span3: 'es ser resolutivo.',
      span4: ' Una de las cosas que más me llama la atención en mi carrera universitaria es ',
      span5: 'como te preparan para resolver problemas usando la lógica.',
      span6: ' Es por esto que se que, ',
      span7: 'podré resolver cualquier desafio que tenga por delante.'
    },
    login_project: {
      title1: 'Proyectos',
      title2: 'Principales',
      h2: 'Proyecto Inicio de Sesion',
      span1: 'Proyecto sobre una página de inicio de sesión, Desarrollada con',
      span2: 'Next.js y React Hook Form, ',
      span3: 'estilizada usando',
      span4: 'Tailwind CSS. ',
      span5: 'La aplicación también implementa encriptación',
      span6: ' AES (Estándar de Encriptación Avanzada),',
      span7: 'para asegurar los datos almacenados localmente. Esto es posible gracias a ',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      ah2: 'Proyecto de Comercio electronico',
      aspan1: 'Aplicación de comercio electrónico',
      aspan2: ' Transpilada a TSX',
      aspan3: 'desde un antiguo proyecto basado en JavaScript',
      aspan4: 'para un código más Estable',
      aspan5: 'y',
      aspan6: 'Limpio',
      aspan7: 'El proyecto fue creado en ',
      aspan8: 'Next.js',
      aspan9: 'y está estilizado con ',
      aspan10: 'CSS Puro',
    },
    game_project: {
      bh2: 'Proyecto de Juego',
      bspan1: 'Proyecto de Ahorcado en TypeScript',
      bspan10: ', creado con',
      bspan2: 'CSS Puro',
      bspan3: ' y',
      bspan4: 'Webpack',
      bspan5: ', aunque el proyecto no es extenso, fue un desafío trabajar en',
      bspan6: 'la lógica de las funciones',
      bspan7: 'en un juego que depende de tantos tipos de datos, en un lenguaje fuertemente tipado como es  ',
      bspan9: 'TypeScript.',
    },
    contact: {
      title: 'Contacto',
      span1: '¿Necesitas ponerte en contacto conmigo? Por favor, consulta mi información de contacto en la tarjeta a continuación.',
      span2: 'Contacto por Email',
      span3: 'Teléfono o Whatsapp',
    }
  },
  en: {
    navbar: {
      a1: 'About Me',
      a2: 'Projects',
      a3: 'Contact',
    },
    main: {
      span1: ', my name is ',
      span2: ' and I am a ...'
    },
    about: {
      h2: 'Here are my main skills.',
      tittle: 'About Me', 
      span1: 'Hello, my name is Benjamín Córdoba, I am 19 years old. I have been studying web development for 2 years. In the past year, I started studying computer engineering.',
      span2: ' (So far, it’s mostly logic and mathematics)',
      span3: 'I have attended conferences/courses/talks and generally learned from different professionals here in Argentina.',
      span4: '(I will detail this later.)',
    },
    learning_card: {
      title: 'Where Did I Learn?',
      span1: 'Most of my knowledge comes from courses such as',
      span2: 'CoderHouse, Devtalles, or Codo a Codo,',
      span3: ' my university studies,',
      span4: 'Self-taught learning methods like online courses, Stack Overflow, MDN, practice with peers, projects, etc... and above all,',
      span5: '',
      span6: 'time, a lot of time',
    },
    help_card: {
      title: 'How Can I Help You?',
      span1: 'For me, it is important to understand all aspects of the web development process, I’ll learn any necessary technology to achieve my goals. Currently, I am specializing solely in Front End.',
      span2: 'and ... ',
    },
    why_me_card: {
      title: 'Why Choose Me?',
      span1: 'One of my',
      span2: 'Main Qualities',
      span3: 'is being solution-oriented.',
      span4: 'One of the things that strikes me the most in my university career is ',
      span5: 'how it prepares you to solve problems using logic.',
      span6: ' This is why I know',
      span7: 'I can tackle any challenge that comes my way.'
    },
    login_project: {
      title1: 'Projects',
      title2: 'Main',
      h2: 'Login Project',
      span1: 'Project about a login page, developed with',
      span2: 'Next.js and React Hook Form,',
      span3: 'styled using',
      span4: 'Tailwind CSS.',
      span5: 'The application also implements encryption',
      span6: ' AES (Advanced Encryption Standard),',
      span7: 'to secure data stored locally. This is possible thanks to ',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      ah2: 'E-commerce Project',
      aspan1: 'E-commerce application',
      aspan2: ' Transpiled to TSX',
      aspan3: 'from an old project based on JavaScript',
      aspan4: 'for more stable',
      aspan5: 'and',
      aspan6: 'clean',
      aspan7: 'code. The project was created using ',
      aspan8: 'Next.js',
      aspan9: 'and is styled with ',
      aspan10: 'Pure CSS',
    },
    game_project: {
      bh2: 'Game Project',
      bspan1: 'Hangman project in TypeScript',
      bspan10: ', created with',
      bspan2: 'Pure CSS',
      bspan3: ' and',
      bspan4: 'Webpack',
      bspan5: ', although the project is not extensive, it was a challenge to work on',
      bspan6: 'the logic of the functions',
      bspan7: 'in a game that depends on so many types of data, in a strongly-typed language like ',
      bspan9: 'TypeScript.',
    },
    contact: {
      title: 'Contact',
      span1: 'Need to get in touch with me? Please see my contact information on the card below.',
      span2: 'Contact by Email',
      span3: 'Phone or Whatsapp',
    }
  }
};

export default LanguageTexts;
