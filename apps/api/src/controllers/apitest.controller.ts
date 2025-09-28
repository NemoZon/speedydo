import { Request, Response } from 'express';
import { TestService } from '../services/test.service';
import { UserService } from '../services/user.service';
import { ChapterService } from '../services/chapter.service';
import { LevelService } from '../services/level.service';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';

export class ApiTestController {
  static async log(req: Request, res: Response) {
    res.status(200).json({ test: 'it works' });
  }

  static async checkModels(req: Request, res: Response) {
    const { users } = await UserService.get();
    const { chapters } = await ChapterService.get();
    const { levels } = await LevelService.get();
    const { answers } = await AnswerService.get();
    const { questions } = await QuestionService.get();
    const { tests } = await TestService.get();
    console.log('users', users);

    res.status(200).json({ users, chapters, tests, levels, answers, questions });
  }
}
