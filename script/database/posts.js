//Posts dos usuários
const posts = [
  {
    id_post: 1, //id único de cada post
    user: 2, //id do usuário que fez o post, você pode acessa-lo no array users
    //título do post
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    //texto do post
    text: "A Generic Digital, empresa natalence especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 10 e 28 de agosto. <br><br> O programa é conhecido como Generic Wars, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força. <br><br> A empresa explica que este princípio também é aplicado na empresa, em que a ideia é desenvolver talentos na área de tecnologia que vão aprender, desde cedo, a colocar a mão na massa, atuando diretamente com clientes nacionais e internacionais.",
  },
  {
    id_post: 2,
    user: 4,
    title:
      "Como criar um interface simples e agradável utilizando boas práticas de design",
    text: "Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design. Antes de iniciar a criação de qualquer projeto, busque referências de aplicações que tenham a ver com o nicho que você está desenvolvendo.<br><br> Por exemplo, quando quero criar um e-commerce de roupas, vou reservar um momento para buscar por aplicações do gênero, tanto acessando ou baixando apps e vendo o que se repete de informações em cada um dos aplicativos e sites referentes a compra de roupas, e também, observar cores que normalmente você enxerga em cada um dos apps.",
  },
  {
    id_post: 3,
    user: 5,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada.<br><br> Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
  },
];
