import dotenv from "dotenv";
import prisma from "../src/config/database";

dotenv.config();
const hashPassAdmin = process.env.HASH_PASSWORD_ADMIN
const emailAdmin = process.env.ADMIN_EMAIL

export async function main() {
    const type = await prisma.types.findFirst();
    if (!type) {
        await prisma.types.createMany({
            data: [
                { name: 'regular' },
                { name: 'admin' }
            ]
        });
    }
    const userAdmin = await prisma.users.findFirst({
        where: { email: `${emailAdmin}` }
    });
    if (!userAdmin) {
        const adminType = await prisma.types.findFirst({
            where:{
                name: 'admin'
            }
        })

       const firstUser = await prisma.users.create({
            data: {
                email: `${emailAdmin}`,
                password: `${hashPassAdmin}`,
                typeId: adminType.id,
                keyId: null,
            }
        })
        await prisma.keys.create({
            data: {
                name: 'PRIMEIRACHAVE',
                isValid: true,
                userId: firstUser.id
            }
        })
        await prisma.enrollments.create({
            data: {
              name: 'John Doe',
              nickname: 'johndoe',
              birthday: new Date(),
              userId: firstUser.id,
              addresses: {
                create: {
                  cep: '12345-678',
                  street: 'Example Street',
                  city: 'Example City',
                  state: 'Example State',
                  number: '42',
                  neighbourhood: 'Example Neighbourhood',
                  addressDetail: 'Example Address Detail'
                }
              }
            }
          })
    }
}

main()
    .then(() => {
        console.log("Registros realizados com sucesso");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });