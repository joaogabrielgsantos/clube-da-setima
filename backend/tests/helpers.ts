import prisma from "../src/config/database";

export async function cleanDb() {
    await prisma.addresses.deleteMany({});
    await prisma.keys.deleteMany({}); 
    await prisma.enrollments.deleteMany({});
    await prisma.sessions.deleteMany({});
    await prisma.users.deleteMany({});
    await prisma.types.deleteMany({});
}