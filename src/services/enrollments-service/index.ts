import { CreateEnrollment, CreateOrUpdateAddress, CreateOrUpdateEnrollmentWithAddress, UpdateEnrollment } from "../../protocols/Enrollment";
import { notFoundError, unauthorizedError } from "../../errors";
import enrollmentRepository from "../../repositories/enrollment-repository";

async function getEnrollmentWithAddressByUserId(userId: number) {
    const enrollmentWithAddress = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollmentWithAddress) throw notFoundError();
    return enrollmentWithAddress
}

async function createOrUpdateEnrollmentWithAddress(userId: number, newEnrollment: CreateOrUpdateEnrollmentWithAddress) {
    const { name, nickname, birthday, addresses } = newEnrollment
    const cEnrollment: CreateEnrollment = {userId, name, nickname, birthday};
    const uEnrollment: UpdateEnrollment = {name, nickname, birthday};
    const address: CreateOrUpdateAddress = {...addresses};

    const upEnrollment = await enrollmentRepository.upsertEnrollment(userId, cEnrollment, uEnrollment);
    if (!upEnrollment) throw unauthorizedError()
    
    const upAddress = await enrollmentRepository.upsertAddress(upEnrollment.id, address, address);
    if (!upAddress) throw unauthorizedError()

}


const enrollmentsService = {
    getEnrollmentWithAddressByUserId, createOrUpdateEnrollmentWithAddress
};

export default enrollmentsService;