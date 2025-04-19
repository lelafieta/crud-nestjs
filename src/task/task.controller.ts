import { Body, Controller, Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskSevice: TaskService) {}

  @Post()
  create(@Body() task: TaskDto) {
    this.taskSevice.create(task);
  }
}
