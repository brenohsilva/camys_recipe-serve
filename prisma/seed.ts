/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { encodePassword } from '../src/utils/bcrypt';

const prisma = new PrismaClient();
const password = encodePassword('12345');

async function main() {
  const user = await prisma.users.create({
    data: {
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@gmail.com',
      username: 'admin',
      password: password,
    },
  });

  const brownie = await prisma.recipes.create({
    data: {
      users_id: user.id,
      name: 'Brownies',
      image: 'https://static.itdg.com.br/images/640-440/c1226272352626b2ed1b0a103bf6443f/shutterstock-1938293728.jpg',
      description: 'Que tal experimentar um clássico feito na sua própria casa? Veja como preparar um brownie simples e rápido. Esta receita oferece uma maneira prática de criar esses deliciosos quadrados de chocolate, com ingredientes básicos como manteiga, ovos, achocolatado, açúcar e farinha de trigo. Você poderá saborear um lanche ou sobremesa irresistível em pouco tempo: ao seguir este processo rápido de preparo, você estará a apenas 30 minutos de distância de brownies deliciosos, com uma textura macia por dentro e uma casquinha crocante por fora. Esta receita é perfeita para aqueles momentos em que se deseja algo doce e caseiro sem demorar muito na cozinha. Pré-aqueça o forno, reúna os ingredientes e em pouco tempo estará apreciando a maravilha do chocolate recém-assado. Siga estas instruções simples e desfrute de um brownie simples, rápido, fresco e irresistível em pouquíssimo tempo!',
      type: 1,
      time: 60,
      portions: 4,
    },
  });

  const brownieIngredients = await prisma.ingredients.createMany({
    data: [
      {
        recipes_id: brownie.id,
        name: '2 tabletes de chocolate meio-amargo',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de fermento',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de nozes picadas',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de essência de baunilha',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '2 ovos',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de farinha de trigo, peneirada',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de sal',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 xícara de manteiga (temperatura ambiente)',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de açúcar',
        type: 'massa',
      },
    ],
  })

  const brownieSteps = await prisma.steps.createMany({
    data: [
      {
        recipes_id: brownie.id,
        step: 'Derreta o chocolate no microndas ou banho maria e reserve.',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        step: 'Junte as nozes e os outros ingredientes secos e reserve.',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        step: 'Bata a manteiga com a baunilha até obter um creme, adicione e açúcar e continue a bater juntando os ovos 1 a 1.',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        step: 'Acrescente o chocolate e por fim os ingredientes secos.',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        step: 'Coloque numa forma untada e polvilhada com farinha e leve ao forno médio.',
        type: 'massa',
      },
      {
        recipes_id: brownie.id,
        step: 'Depois de assado, ainda quente, corte em quadradinhos e deixe esfriar.',
        type: 'massa',
      }
    ],
  })

  const browieCategories = await prisma.categories_selected.createMany({
    data: [
      {
        recipes_id: brownie.id,
        categories_id: 1
      },
      {
        recipes_id: brownie.id,
        categories_id: 3
      },
      {
        recipes_id: brownie.id,
        categories_id: 5
      },
    ]
  })

  const boloDeRolo = await prisma.recipes.create({
    data: {
      users_id: user.id,
      name: 'Bolo de Rolo',
      image: 'https://s2-receitas.glbimg.com/cQZPmQ6LMFJI_Q72RExDfRXSaUs=/0x0:260x160/984x0/smart/filters:strip_icc()/g.glbimg.com/og/gs/gsat5/f/thumbs/materia/2014/04/30/_260Bolo-de-rolo-Casa-dos-Fr_1090713715762932101.jpg',
      description: '',
      type: 1,
      time: 45,
      portions: 3,
    },
  });

  const boloDeRoloIngredients = await prisma.ingredients.createMany({
    data: [
      {
        recipes_id: boloDeRolo.id,
        name: '200g de manteiga',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '6 gemas',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '6 clara em neve',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '200g de açúcar',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '200 g de farinha de trigo',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '500g de goiabada',
        type: 'recheio',
      },
      {
        recipes_id: boloDeRolo.id,
        name: '1/2 xícara de água',
        type: 'recheio',
      },
      {
        recipes_id: boloDeRolo.id,
        name: 'Açúcar p/ povilhar',
        type: 'montagem',
      },
    ],
  });

  const boloDeRoloSteps = await prisma.steps.createMany({
    data: [
      {
        recipes_id: boloDeRolo.id,
        step: 'bata na batedeira a manteiga com o açucar até formar um creme coloque as gemas e continue batendo até ficar cremoso.',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Junte a farinha de trigo, por último as claras em neve..',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'leve ao fogo a goiabada com a água e deixer amolecer, fica como uma geleia mole.',
        type: 'recheio',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Coloque de 5 a 6 colheres sopa de massa para assar cada bolo em uma forma retangular de 30x40cm untada com margarina e enfarinhada, leve ao forno pré aquecido 5 minutos aproximadamente.',
        type: 'montagem',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Vire o bolo sobre um pano úmido polvilhado com açúcar, passe uma camada bem fina da goiabada e enrole.',
        type: 'montagem',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Asse o segundo bolo passe o receheio e enrole com o primeiro bolo, faça o mesmo procedimento com toda massa dá mais ou menos 5 bolos.',
        type: 'montagem',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'por último povilhe com açúcar.',
        type: 'montagem',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Espalhe bem fina a massa na forma.',
        type: 'montagem',
      },
    ],
  });

  const boloDeRoloCategories = await prisma.categories_selected.createMany({
    data: [
      {
        recipes_id: boloDeRolo.id,
        categories_id: 1
      },
      {
        recipes_id: boloDeRolo.id,
        categories_id: 4
      },
      {
        recipes_id: boloDeRolo.id,
        categories_id: 2
      },
    ]
  })

  // Receita 1: Pudim de Leite Condensado
const pudim = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Pudim de Leite Condensado',
    image: 'https://s2-receitas.glbimg.com/jK-kMTPr3Yzex9P93zqt4DSsFXo=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/z/0/RsipkzTEu0Y1PGiavCpA/pudim-de-leite-condensado.jpg',
    description: 'Clássico pudim de leite condensado com calda de caramelo.',
    type: 2,
    time: 120,
    portions: 8,
  },
});

const pudimIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: pudim.id, name: '1 lata de leite condensado', type: 'massa' },
    { recipes_id: pudim.id, name: '2 latas de leite (use a lata de leite condensado como medida)', type: 'massa' },
    { recipes_id: pudim.id, name: '3 ovos', type: 'massa' },
    { recipes_id: pudim.id, name: '1 xícara de açúcar', type: 'calda' },
    { recipes_id: pudim.id, name: '1/2 xícara de água', type: 'calda' },
  ],
});

const pudimSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: pudim.id, step: 'Bata o leite condensado, o leite e os ovos no liquidificador.', type: 'massa' },
    { recipes_id: pudim.id, step: 'Derreta o açúcar até formar um caramelo e adicione a água.', type: 'calda' },
    { recipes_id: pudim.id, step: 'Despeje a calda em uma forma de pudim.', type: 'calda' },
    { recipes_id: pudim.id, step: 'Adicione a mistura do pudim sobre a calda.', type: 'montagem' },
    { recipes_id: pudim.id, step: 'Asse em banho-maria por 1 hora e deixe esfriar.', type: 'montagem' },
  ],
});

const pudimCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: pudim.id,
      categories_id: 4
    },
    {
      recipes_id: pudim.id,
      categories_id: 3
    },
    {
      recipes_id: pudim.id,
      categories_id: 2
    },
  ]
})

// Receita 2: Lasanha à Bolonhesa
const lasanha = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Lasanha à Bolonhesa',
    image: 'https://renata.com.br/images/receitas/141/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg',
    description: 'Lasanha recheada com molho à bolonhesa e queijo.',
    type: 1,
    time: 90,
    portions: 6,
  },
});

const lasanhaIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: lasanha.id, name: '500g de carne moída', type: 'recheio' },
    { recipes_id: lasanha.id, name: '1 pacote de massa de lasanha', type: 'massa' },
    { recipes_id: lasanha.id, name: '500g de queijo mussarela', type: 'recheio' },
    { recipes_id: lasanha.id, name: '1 lata de molho de tomate', type: 'recheio' },
    { recipes_id: lasanha.id, name: '1 cebola picada', type: 'recheio' },
  ],
});

const lasanhaSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: lasanha.id, step: 'Refogue a carne moída com cebola e adicione o molho de tomate.', type: 'recheio' },
    { recipes_id: lasanha.id, step: 'Cozinhe a massa da lasanha conforme instruções da embalagem.', type: 'massa' },
    { recipes_id: lasanha.id, step: 'Monte a lasanha alternando camadas de massa, carne e queijo.', type: 'montagem' },
    { recipes_id: lasanha.id, step: 'Leve ao forno para gratinar por 30 minutos.', type: 'montagem' },
  ],
});

const lasanhaCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: lasanha.id,
      categories_id: 1
    },
    {
      recipes_id: lasanha.id,
      categories_id: 3
    },
    {
      recipes_id: lasanha.id,
      categories_id: 5
    },
  ]
})

// Receita 3: Torta de Limão
const tortaLimao = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Torta de Limão',
    image: 'https://cooknenjoy.com/wp-content/uploads/2021/10/torta-de-limao-01-1800x1286.jpg',
    description: 'Torta deliciosa de limão com cobertura de merengue.',
    type: 2,
    time: 60,
    portions: 8,
  },
});

const tortaLimaoIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: tortaLimao.id, name: '200g de bolacha maisena', type: 'massa' },
    { recipes_id: tortaLimao.id, name: '100g de manteiga derretida', type: 'massa' },
    { recipes_id: tortaLimao.id, name: '1 lata de leite condensado', type: 'recheio' },
    { recipes_id: tortaLimao.id, name: '1/2 xícara de suco de limão', type: 'recheio' },
    { recipes_id: tortaLimao.id, name: '3 claras em neve', type: 'cobertura' },
    { recipes_id: tortaLimao.id, name: '3 colheres de açúcar', type: 'cobertura' },
  ],
});

const tortaLimaoSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: tortaLimao.id, step: 'Misture a bolacha triturada com a manteiga e forre uma forma.', type: 'massa' },
    { recipes_id: tortaLimao.id, step: 'Bata o leite condensado com o suco de limão e coloque sobre a massa.', type: 'recheio' },
    { recipes_id: tortaLimao.id, step: 'Bata as claras em neve com açúcar e coloque sobre a torta.', type: 'cobertura' },
    { recipes_id: tortaLimao.id, step: 'Leve ao forno para dourar o merengue.', type: 'montagem' },
  ],
});

const tortaLimaoCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: tortaLimao.id,
      categories_id: 1
    },
    {
      recipes_id: tortaLimao.id,
      categories_id: 2
    },
    {
      recipes_id: tortaLimao.id,
      categories_id: 6
    },
  ]
})

// Receita 4: Panqueca Americana
const panqueca = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Panqueca Americana',
    image: 'https://guiadacozinha.com.br/wp-content/uploads/2020/07/panqueca-sem-gluten-e-leite-53989-1024x768.jpg',
    description: 'Panquecas fofinhas servidas com mel ou frutas.',
    type: 1,
    time: 30,
    portions: 4,
  },
});

const panquecaIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: panqueca.id, name: '1 xícara de farinha de trigo', type: 'massa' },
    { recipes_id: panqueca.id, name: '2 colheres de açúcar', type: 'massa' },
    { recipes_id: panqueca.id, name: '1 colher de fermento', type: 'massa' },
    { recipes_id: panqueca.id, name: '1 ovo', type: 'massa' },
    { recipes_id: panqueca.id, name: '1 xícara de leite', type: 'massa' },
    { recipes_id: panqueca.id, name: '2 colheres de manteiga', type: 'massa' },
  ],
});

const panquecaSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: panqueca.id, step: 'Misture os ingredientes secos.', type: 'massa' },
    { recipes_id: panqueca.id, step: 'Adicione o ovo, leite e manteiga derretida e misture bem.', type: 'massa' },
    { recipes_id: panqueca.id, step: 'Despeje porções da massa em uma frigideira quente e doure dos dois lados.', type: 'montagem' },
  ],
});

const panquecaCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: panqueca.id,
      categories_id: 4
    },
    {
      recipes_id: panqueca.id,
      categories_id: 2
    },
    {
      recipes_id: panqueca.id,
      categories_id: 6
    },
  ]
})

// Receita 5: Quiche de Queijo
const quiche = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Quiche de Queijo',
    image: 'https://static.itdg.com.br/images/1200-630/9db794736f36701947ea9e8612f94411/324059-original.jpg',
    description: 'Deliciosa quiche de queijo com massa crocante.',
    type: 2,
    time: 70,
    portions: 6,
  },
});

const quicheIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: quiche.id, name: '2 xícaras de farinha de trigo', type: 'massa' },
    { recipes_id: quiche.id, name: '100g de manteiga gelada', type: 'massa' },
    { recipes_id: quiche.id, name: '1 ovo', type: 'massa' },
    { recipes_id: quiche.id, name: '200g de queijo mussarela', type: 'recheio' },
    { recipes_id: quiche.id, name: '200g de queijo parmesão', type: 'recheio' },
    { recipes_id: quiche.id, name: '1 lata de creme de leite', type: 'recheio' },
  ],
});

const quicheSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: quiche.id, step: 'Misture a farinha com a manteiga e o ovo até formar uma massa.', type: 'massa' },
    { recipes_id: quiche.id, step: 'Forre uma forma com a massa e reserve.', type: 'montagem' },
    { recipes_id: quiche.id, step: 'Misture os queijos e o creme de leite e despeje sobre a massa.', type: 'recheio' },
    { recipes_id: quiche.id, step: 'Asse em forno preaquecido a 180ºC por 40 minutos.', type: 'montagem' },
  ],
});

const quicheCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: quiche.id,
      categories_id: 5
    },
    {
      recipes_id: quiche.id,
      categories_id: 2
    },
    {
      recipes_id: quiche.id,
      categories_id: 3
    },
  ]
})

// Receita 6: Estrogonofe de Frango
const estrogonofe = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Estrogonofe de Frango',
    image: 'https://www.minhareceita.com.br/app/uploads/2022/03/estrogonofe-de-frango-seara-2.jpg',
    description: 'Clássico estrogonofe de frango com molho cremoso.',
    type: 1,
    time: 45,
    portions: 4,
  },
});

const estrogonofeIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: estrogonofe.id, name: '500g de peito de frango em cubos', type: 'recheio' },
    { recipes_id: estrogonofe.id, name: '1 cebola picada', type: 'recheio' },
    { recipes_id: estrogonofe.id, name: '1 lata de creme de leite', type: 'recheio' },
    { recipes_id: estrogonofe.id, name: '2 colheres de ketchup', type: 'recheio' },
    { recipes_id: estrogonofe.id, name: '1 colher de mostarda', type: 'recheio' },
  ],
});

const estrogonofeSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: estrogonofe.id, step: 'Refogue o frango com a cebola até dourar.', type: 'recheio' },
    { recipes_id: estrogonofe.id, step: 'Adicione o ketchup, mostarda e misture bem.', type: 'recheio' },
    { recipes_id: estrogonofe.id, step: 'Despeje o creme de leite e mexa até ficar cremoso.', type: 'montagem' },
  ],
});

const estrogonofeCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: estrogonofe.id,
      categories_id: 4
    },
    {
      recipes_id: estrogonofe.id,
      categories_id: 5
    },
    {
      recipes_id: estrogonofe.id,
      categories_id: 3
    },
  ]
})
// Receita 7: Brigadeiro
const brigadeiro = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Brigadeiro',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJVu2prVXch7gBfqTZUnfA0098KTr9CW93g&s',
    description: 'Clássico docinho brasileiro feito com leite condensado e chocolate.',
    type: 2,
    time: 30,
    portions: 20,
  },
});

const brigadeiroIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: brigadeiro.id, name: '1 lata de leite condensado', type: 'massa' },
    { recipes_id: brigadeiro.id, name: '2 colheres de achocolatado', type: 'massa' },
    { recipes_id: brigadeiro.id, name: '1 colher de manteiga', type: 'massa' },
    { recipes_id: brigadeiro.id, name: 'Chocolate granulado para enrolar', type: 'cobertura' },
  ],
});

const brigadeiroSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: brigadeiro.id, step: 'Misture o leite condensado, o achocolatado e a manteiga em uma panela.', type: 'massa' },
    { recipes_id: brigadeiro.id, step: 'Cozinhe em fogo baixo, mexendo até desgrudar do fundo.', type: 'massa' },
    { recipes_id: brigadeiro.id, step: 'Deixe esfriar, faça bolinhas e passe no granulado.', type: 'montagem' },
  ],
});

const brigadeiroCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: brigadeiro.id,
      categories_id: 3
    },
    {
      recipes_id: brigadeiro.id,
      categories_id: 2
    },
    {
      recipes_id: brigadeiro.id,
      categories_id: 4
    },
  ]
})

// Receita 8: Bolo de Cenoura
const boloCenoura = await prisma.recipes.create({
  data: {
    users_id: user.id,
    name: 'Bolo de Cenoura',
    image: 'https://s2-receitas.glbimg.com/vGqO-xbCN2RQQO13DP1Z9-pV0N4=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/9/N/bmnJNgR5G0K2QmEYFkPQ/bolo-de-cenoura-receita.jpg',
    description: 'Bolo de cenoura fofinho com cobertura de chocolate.',
    type: 1,
    time: 50,
    portions: 10,
  },
});

const boloCenouraIngredients = await prisma.ingredients.createMany({
  data: [
    { recipes_id: boloCenoura.id, name: '3 cenouras médias', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '3 ovos', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '2 xícaras de açúcar', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '1 xícara de óleo', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '2 xícaras de farinha de trigo', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '1 colher de fermento', type: 'massa' },
    { recipes_id: boloCenoura.id, name: '1 xícara de chocolate em pó', type: 'cobertura' },
    { recipes_id: boloCenoura.id, name: '1 colher de manteiga', type: 'cobertura' },
    { recipes_id: boloCenoura.id, name: '1 lata de creme de leite', type: 'cobertura' },
  ],
});

const boloCenouraSteps = await prisma.steps.createMany({
  data: [
    { recipes_id: boloCenoura.id, step: 'Bata a cenoura, ovos, açúcar e óleo no liquidificador.', type: 'massa' },
    { recipes_id: boloCenoura.id, step: 'Misture a farinha e o fermento e despeje a massa em uma forma untada.', type: 'massa' },
    { recipes_id: boloCenoura.id, step: 'Asse em forno preaquecido a 180ºC por 40 minutos.', type: 'montagem' },
    { recipes_id: boloCenoura.id, step: 'Misture os ingredientes da cobertura e cozinhe até engrossar.', type: 'cobertura' },
    { recipes_id: boloCenoura.id, step: 'Despeje a cobertura sobre o bolo já assado.', type: 'montagem' },
  ],
});

const boloCenouraCategories = await prisma.categories_selected.createMany({
  data: [
    {
      recipes_id: boloCenoura.id,
      categories_id: 4
    },
    {
      recipes_id: boloCenoura.id,
      categories_id: 2
    },
    {
      recipes_id: boloCenoura.id,
      categories_id: 5
    },
  ]
})

}

main();
