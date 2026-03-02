import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [PostsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
