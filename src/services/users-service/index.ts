import bcrypt from 'bcrypt'
import { invalidEmailOrPassword } from '../../errors/invalid-email-or-password-error';
import { v4 as uuidV4 } from 'uuid';
import { conflictError } from '../../errors/conflict-error';
import { invalidAccessKey } from '../../errors/invalid-access-key';
import { notAccessKey } from '../../errors/not-access-key';
import userRepositories from "../../repositories/user-repository"

async function createUser(email: string, password: string, key: string) {
    const findKey = await userRepositories.findAccessKey(key)

    if (!findKey) throw notAccessKey();
    if (findKey.isValid === false) throw invalidAccessKey();

    const user = await userRepositories.findUserByEmail(email)
    if (user) throw conflictError("User already exists")

    const hashPassword = await bcrypt.hash(password, 10)
    const keyId = findKey.id
    await userRepositories.createNewUser(email, keyId, hashPassword)

}

async function loginUser(email: string, pass: string) {
    const userReturned = await userRepositories.findUserByEmail(email);
    if (userReturned === null) throw invalidEmailOrPassword()
    const validPassword = await bcrypt.compare(pass, userReturned.password)
    if (!validPassword) throw invalidEmailOrPassword()
    const userId = userReturned.id

    const {password,keyId,typeId, ...user} = userReturned
    const token = uuidV4();
    await userRepositories.createSession(token, userId)

    return {user, token}
}

export default {
    createUser,
    loginUser
}