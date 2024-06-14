/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.create({
    data: {
      name: 'admin',
      email: 'admin@gmail.com',
      password: '12345',
    },
  });

  const brownie = await prisma.recipes.create({
    data: {
      users_id: user.id,
      name: 'Brownies',
      type: 1,
      category: 'Sobremesa',
      time: 60,
      portions: 4,
    },
  });

  const boloDeRolo = await prisma.recipes.create({
    data: {
      users_id: user.id,
      name: 'Bolo de Rolo',
      type: 1,
      category: 'Sobremesa',
      time: 45,
      portions: 3,
    },
  });

  const ingredients = await prisma.ingredients.createMany({
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
      {
        recipes_id: brownie.id,
        name: '2 tabletes de chocolate meio-amargo',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de fermento',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de nozes picadas',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de essência de baunilha',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '2 ovos',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de farinha de trigo, peneirada',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 colher (chá) de sal',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1/2 xícara de manteiga (temperatura ambiente)',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        name: '1 xícara de açúcar',
        type: 'normal',
      },
    ],
  });

  const steps = await prisma.steps.createMany({
    data: [
      {
        recipes_id: brownie.id,
        step: 'Derreta o chocolate no microndas ou banho maria e reserve.',
        type: 'normal',
      },
      {
        recipes_id: brownie.id,
        step: 'Junte as nozes e os outros ingredientes secos e reserve.',
        type: 'normal'
      },
      {
        recipes_id: brownie.id,
        step: 'Bata a manteiga com a baunilha até obter um creme, adicione e açúcar e continue a bater juntando os ovos 1 a 1.',
        type: 'normal'
      },
      {
        recipes_id: brownie.id,
        step: 'Acrescente o chocolate e por fim os ingredientes secos.',
        type: 'normal'
      },
      {
        recipes_id: brownie.id,
        step: 'Coloque numa forma untada e polvilhada com farinha e leve ao forno médio.',
        type: 'normal'
      },
      {
        recipes_id: brownie.id,
        step: 'Depois de assado, ainda quente, corte em quadradinhos e deixe esfriar.',
        type: 'normal'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'bata na batedeira a manteiga com o açucar até formar um creme coloque as gemas e continue batendo até ficar cremoso.',
        type: 'massa',
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Junte a farinha de trigo, por último as claras em neve..',
        type: 'massa'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'leve ao fogo a goiabada com a água e deixer amolecer, fica como uma geleia mole.',
        type: 'recheio'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Coloque de 5 a 6 colheres sopa de massa para assar cada bolo em uma forma retangular de 30x40cm untada com margarina e enfarinhada, leve ao forno pré aquecido 5 minutos aproximadamente.',
        type: 'montagem'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Vire o bolo sobre um pano úmido polvilhado com açúcar, passe uma camada bem fina da goiabada e enrole.',
        type: 'montagem'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Asse o segundo bolo passe o receheio e enrole com o primeiro bolo, faça o mesmo procedimento com toda massa dá mais ou menos 5 bolos.',
        type: 'montagem'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'por último povilhe com açúcar.',
        type: 'montagem'
      },
      {
        recipes_id: boloDeRolo.id,
        step: 'Espalhe bem fina a massa na forma.',
        type: 'montagem'
      },
    ],
  });
}

main()
