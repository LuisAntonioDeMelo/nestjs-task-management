/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task} from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}

    @Get()
    getAllServiceTasks():Task[] {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body('title') title,@Body('description') description){
       return this.taskService.createTask(title,description);
    }


}
