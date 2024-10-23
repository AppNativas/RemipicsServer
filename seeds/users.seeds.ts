import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const users = Array.from({ length: 10 }).map((__, index) => ({
    correo: index == 0 ? "remipic@gmail.co" : faker.internet.email(),
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    fecha_naci: faker.date.past(),
    sexo: faker.person.gender(),
    contrasena: index == 0 ? "12345" : faker.internet.password(),
    direccion: faker.location.streetAddress().substring(0, 255),
  }));

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
