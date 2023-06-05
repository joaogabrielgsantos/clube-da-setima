import bcrypt from 'bcrypt'
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

export default {
    createUser
}