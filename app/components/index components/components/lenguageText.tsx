import React from "react";

const LanguageTexts:any = {
  es: {
    navbar: {
      a1: 'Inicio',
      a2: 'Acerca',
      a3: 'Proyectos',
      a4: 'Contacto',
    },
    main: {
      span1: ', mi nombre es ',
      span2: ' y soy un ...'
    },
    about: {
      h2: 'Estas son mis habilidades de código por el momento',
      tittle: 'Sobre mi', 
      span1: 'Hola, mi nombre es Benjamín Córdoba, tengo 19 años. He estado estudiando desarrollo web durante 2 años. Y en el último año comencé a ser estudiante de ingeniería en informática.',
      span2: ' (Por ahora casi todo es lógica y matemáticas)',
      span3: 'He participado en conferencias/cursos/charlas y en general aprendiendo de diferentes profesionales aquí en Argentina.',
      span4: '(Detallaré esto más adelante.)',
    },
    learning_card: {
      title: '¿Dónde Aprendo?',
      span1: 'La mayor parte de mis conocimientos provienen de cursos como',
      span2: 'CoderHouse, Devtalles o Codo a Codo,',
      span3: 'ingeniería en informática,',
      span4: 'formas de aprendizaje autodidactas como cursos web, Stack Overflow, MDN, prácticas con colegas y proyectos, etc... y sobre todo,',
      span5: 'tiempo, mucho tiempo',
    },
    help_card: {
      title: '¿Cómo Puedo Ayudarte?',
      span1: 'Para mí, es importante conocer todos los aspectos del proceso de desarrollo web; aprenderé cualquier tecnología que me ayude a crear aplicaciones. Por ahora me estoy enfocando en frontend,',
      span2: 'y ... ',
    },
    why_me_card: {
      title: '¿Por Qué Yo?',
      span1: 'Una de mis',
      span2: 'principales cualidades',
      span3: 'es ser resolutivo.',
      span4: 'Una de las cosas que más me llama la atención en mi carrera universitaria es',
      span5: 'cómo te preparan para resolver problemas usando lógica.',
      span6: 'Es por eso que sé que,',
      span7: 'podré resolver cualquier problema que surja.'
    },
    login_project: {
      title1: 'Proyectos',
      title2: 'Principales',
      h2: 'Proyecto de Inicio de Sesion',
      span1: 'Proyecto de página de inicio de sesión desarrollado con',
      span2: 'Next.js, React Hook Form ',
      span3: 'estilizado usando',
      span4: 'Tailwind CSS.',
      span5: 'La aplicación también implementa encriptación',
      span6: 'AES (Estándar de Encriptación Avanzada),',
      span7: 'para asegurar los datos almacenados localmente usando',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      ah2: 'Proyecto de Comercio electronico',
      aspan1: 'Aplicación de comercio electrónico',
      aspan2: ' Transpilada a TSX',
      aspan3: 'desde un antiguo proyecto basado en JavaScript,',
      aspan4: 'para un código más ',
      aspan5: 'y',
      aspan6: 'Limpio',
      aspan7: 'Está creado en ',
      aspan8: 'Next.js',
      aspan9: 'y está estilizado con ',
      aspan10: 'CSS3 Puro',
    },
    game_project: {
      bh2: 'Proyecto de Juego',
      bspan1: 'Proyecto de juego Hangman en TypeScript, creado con',
      bspan2: 'CSS Puro',
      bspan3: ' y',
      bspan4: 'Webpack',
      bspan5: ', aunque el proyecto no es extenso, fue un desafío trabajar en',
      bspan6: 'la lógica de las funciones en ',
      bspan7: 'TypeScript.',
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
      a1: 'Home',
      a2: 'About',
      a3: 'Projects',
      a4: 'Contact',
    },
    main: {
      span1: ', my name is ',
      span2: 'and I am a ...'
    },
    about: {
      h2: 'These are my Code Skills for the moment',
      title: 'About', 
      span1: 'Hello, My name is Benjamín Córdoba, I am 19 years old. I have been studying web development for 2 years. And in the last year I started to be a computer engineering student.',
      span2: '(Also for now almost everything is logic and mathematics)',
      span3: 'I participated in conferences/courses/talks and in general learning from different professionals here in Argentina.',
      span4: '(I will detail this later.)',
      span5: '(Also for now almost everything is logic and mathematics)',
    },
    learning_card: {
      title: 'Where, I Learning?',
      span1: 'Most of my knowledge is a mix between courses such as',
      span2: 'CoderHouse, Devtalles or Codo a Codo,',
      span3: 'computer science engineering,',
      span4: 'self-taught forms of learning such as. web courses, Stack Overflow, MDN, practices with colleagues and projects etc... and above all things,',
      span5: 'time, a lot of time',
    },
    help_card: {
      title: 'How I can help you?',
      span1: 'For me, it is important to know all aspects of the web development process; I will learn any technology that helps me create applications. For now I am focusing on front end,',
      span2: 'and ... ',
    },
    why_me_card: {
      title: 'Why me?',
      span1: 'One of my',
      span2: 'Main qualities',
      span3: 'is being resolutive.',
      span4: 'One of the things that most attracts my attention in my university career is',
      span5: 'How they prepare you to solve problems using logic.',
      span6: 'That&apos;s why I know that ,',
      span7: 'I`ll be able to solve any problem that arises.'
    },
    login_project: {
      title1: 'Main',
      title2: 'Projects',
      h2: 'Sign Up Project',
      span1: 'Login page project developed with',
      span2: 'Next.js, React Hook Form',
      span3: 'stylized using',
      span4: 'Tailwind CSS.',
      span5: 'The app also implements encryption',
      span6: 'AES (Advanced Encryption Standard),',
      span7: 'to secure locally stored data using',
      span8: 'CryptoJS.'
    },
    ecommerce_project: {
      h2: 'Ecommerce Project',
      span1: 'Ecommerce application',
      span2: ' Transpiled to TSX',
      span3: 'from an old javascript-based project,',
      span4: 'for greater ',
      span5: 'and',
      span6: 'Clean',
      span7: 'code. It is created in ',
      span8: 'Next.js',
      span9: 'and is styled with ',
      span10: 'Pure CSS3 ',
    },
    game_project: {
      h2: 'Game Project',
      span1: 'TypeScript ',
      span2: ' Hangman game project, was created with  ',
      span3: 'Pure CSS',
      span4: ' and   ',
      span5: 'Webpack',
      span6: ', Although the project is not extensive, it was a challenge to work on',
      span7: 'The logic of functions',
      span8: 'in ',
      span9: 'TypeScript ',
    },
    contact: {
      title: 'Contact',
      span1: ' Need to get in touch with me? Please see my contact information in the card below.',
      span2: ' Email Contact',
      span3: 'Phone or Whatsapp',
    }
  }
};

export default LanguageTexts;
