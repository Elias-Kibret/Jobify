import {StatusCodes} from 'http-status-codes'
import { CustomAPIError } from './customAPI.js'
export class BadRequestError
 extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
}