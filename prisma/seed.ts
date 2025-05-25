import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10; // Define the salt rounds for bcrypt

  // Hash the passwords before inserting into the database
  const hashedPasswordTestPlayerAndAdmin = await bcrypt.hash('1234', saltRounds);
  const hashedPasswordDeveloper = await bcrypt.hash('joshyy', saltRounds);
  // Optional: Delete existing users to avoid the unique constraint error
  await prisma.user.deleteMany({});

  await prisma.user.createMany({
    data: [
      {
        username: 'test_player1',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player2',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player3',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player4',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player5',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player6',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player7',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player8',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player9',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'test_player10',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'test_player',
        status: 'active',
      },
      {
        username: 'admin',
        password: hashedPasswordTestPlayerAndAdmin,
        roles: 'admin',
        status: 'active',
      },
      {
        username: 'joshyy',
        password: hashedPasswordDeveloper,
        roles: 'developer',
        status: 'active',

      },
    ],
  });

  console.log('Seeded users with hashed passwords.');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
