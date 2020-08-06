/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ] 

    transform(value:any,metadata:ArgumentMetadata){
        value = value.toUperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value}" is a status invalid!`)
        }
    
        return value;
    }

    private isStatusValid(status:any){
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}