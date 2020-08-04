import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TasksModule],
  providers:[TasksService],
  controllers:[TasksController],
  exports:[]
})
export class AppModule {}
