import { Address, CreateEnrollment, CreateOrUpdateAddress, UpdateEnrollment } from "../../protocols/Enrollment";
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

async function upsertEnrollment(
    userId: number,
    createdEnrollment: CreateEnrollment,
    updatedEnrollment: UpdateEnrollment,
) {
    return prisma.enrollments.upsert({
        where: {
            userId,
        },
        create: createdEnrollment,
        update: updatedEnrollment,
    });
}

async function upsertAddress(enrollmentId: number, createdAddress: CreateOrUpdateAddress, updatedAddress: CreateOrUpdateAddress) {
    return prisma.addresses.upsert({
      where: {
        enrollmentId,
      },
      create: {
        ...createdAddress,
        enrollments: { connect: { id: enrollmentId } },
      },
      update: updatedAddress,
    });
  }




export default { findWithAddressByUserId, upsertEnrollment, upsertAddress };