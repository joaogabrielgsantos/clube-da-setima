import prisma from "../../config/database";



async function findWithAddressByUserId(userId: number) {
    return prisma.enrollments.findFirst({
        where: {
            userId
        },
        include: {
            addresses: true,
        }
    })
}

export default { findWithAddressByUserId };