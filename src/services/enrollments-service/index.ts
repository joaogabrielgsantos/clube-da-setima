import { notFoundError } from "../../errors";
import { Enrollment } from "../../protocols/Enrollment";
import enrollmentRepository from "../../repositories/enrollment-repository";

type GetEnrollmentWithAddressByUserIdResult = Omit<Enrollment, 'userId' | 'createdAt' | 'updatedAt'>;

async function getEnrollmentWithAddressByUserId(userId: number): Promise<GetEnrollmentWithAddressByUserIdResult> {
    const enrollmentWithAddress = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollmentWithAddress) throw notFoundError();
    
    return enrollmentWithAddress
  }

  const enrollmentsService = {
    getEnrollmentWithAddressByUserId,
  };

  export default enrollmentsService;