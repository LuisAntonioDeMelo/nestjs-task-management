/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus} from './tasks.model';
import {CreateTaskDto} from '../tasks/dto/createTaskDto'
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipes';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}

    @Get()
    getAllServiceTasks(@Query(ValidationPipe)filterDto:GetTaskFilterDto ):Task[] {
        if(Object.keys(filterDto).length){
            return this.taskService.getTaskWithFilter(filterDto)
        }
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string):Task {
        return this.taskService.getTaskById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto:CreateTaskDto ){
       return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id:string) {
        return this.taskService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTask(
        @Param('id') id:string, 
        @Body('status',TaskStatusValidationPipe) status:TaskStatus):Task {
        return this.taskService.updateTask(id,status);
    }

}
