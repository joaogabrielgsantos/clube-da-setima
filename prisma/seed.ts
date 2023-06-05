import dotenv from "dotenv";
import prisma from "../src/config/database";

dotenv.config();
const hashPassAdmin = process.env.HASH_PASSWORD_ADMIN
const emailAdmin = process.env.ADMIN_EMAIL

async function main() {
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
       const firstUser = await prisma.users.create({
            data: {
                email: `${emailAdmin}`,
                password: `${hashPassAdmin}`,
                typeId: 2,
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