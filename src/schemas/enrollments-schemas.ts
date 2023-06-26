import { isValidCEP } from '@brazilian-utils/brazilian-utils';
import Joi from 'joi';
import { CreateOrUpdateEnrollmentWithAddress } from '../protocols/Enrollment';


const cepValidationSchema = Joi.string().length(9).custom(JoiCepValidation).required();



export const createEnrollmentSchema = Joi.object<CreateOrUpdateEnrollmentWithAddress>({
    name: Joi.string().min(3).required(),
    nickname: Joi.string().min(3).required(),
    birthday: Joi.string().isoDate().required(),
    addresses: Joi.object({
        cep: cepValidationSchema,
        street: Joi.string().required(),
        city: Joi.string().required(),
        number: Joi.string().required(),
        state: Joi.string().length(2).required(),
        neighbourhood: Joi.string().required(),
        addressDetail: Joi.string().allow(null, ''),
    }).required(),
});



function JoiCepValidation(value: string, helpers: Joi.CustomHelpers<string>) {
    if (!value) return value;

    if (!isValidCEP(value)) {
        return helpers.error('any.invalid');
    }

    return value;
}
