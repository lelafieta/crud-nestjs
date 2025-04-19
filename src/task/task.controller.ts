import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskSevice: TaskService) {}

  @Post()
  create(@Body() task: TaskDto) {
    this.taskSevice.create(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto {
    return this.taskSevice.findById(id);
  }

  @Put()
  update(@Body() task: TaskDto): TaskDto {
    return this.taskSevice.update(task);
  }
}
