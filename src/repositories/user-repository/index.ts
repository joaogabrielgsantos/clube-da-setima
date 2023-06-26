import prisma from "../../config/database";
import { Key } from "../../protocols";

async function findAccessKey(key: string): Promise<Key> {
    return prisma.keys.findFirst({
        where: {
            name: key
        }
    })
}

async function findUserByEmail(email: string) {
    return prisma.users.findFirst({
        where: {
            email
        },
        include: {
            types: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

async function createNewUser(email: string, keyId: number, hashPassword: string) {
    return prisma.users.create({
        data: {
            email: email,
            password: hashPassword,
            keyId: keyId,
        }
    })
}

async function createSession(token: string, userId: number) {
    return prisma.sessions.create({
        data: {
            token,
            userId
        }
    })
}

async function findSessionByToken(token: string) {
    return prisma.sessions.findFirst({
        where: {
            token
        }
    })
}

async function findUserById(id: number) {
    return prisma.users.findFirst({
        where: {
            id
        },
        include: {
            types: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

export default { findAccessKey, findUserByEmail, createNewUser, createSession, findSessionByToken, findUserById };