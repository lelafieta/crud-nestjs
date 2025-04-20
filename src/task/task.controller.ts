import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
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

  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[] {
    return this.taskSevice.findAll(params);
  }

  @Put()
  update(@Body() task: TaskDto): TaskDto {
    return this.taskSevice.update(task);
  }

  @Delete('/:id')
  delete(@Param(':id') id: string) {
    return this.taskSevice.remove(id);
  }
}
