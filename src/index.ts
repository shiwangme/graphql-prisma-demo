import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';

new GraphQLServer({ schema, context: createContext }).start(() =>
  console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api`)
);
// import { PrismaClient } from '@prisma/client';
// // or const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: 'Alice',

//       email: 'alice@prisma.io',

//       posts: {
//         create: { title: 'Hello World' }
//       },

//       profile: {
//         create: { bio: 'I like turtles' }
//       }
//     }
//   });

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,

//       profile: true
//     }
//   });

//   console.dir(allUsers, { depth: null });
// }

// main()
//   .catch((e) => {
//     throw e;
//   })

//   .finally(async () => {
//     await prisma.$disconnect();
//   });
