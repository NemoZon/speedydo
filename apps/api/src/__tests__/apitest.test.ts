import express from 'express';
import request from 'supertest';

const mockUserGet = jest.fn();
const mockChapterGet = jest.fn();
const mockLevelGet = jest.fn();
const mockAnswerGet = jest.fn();
const mockQuestionGet = jest.fn();
const mockTestGet = jest.fn();

jest.mock('../services/user.service', () => ({
  UserService: { get: mockUserGet },
}));

jest.mock('../services/chapter.service', () => ({
  ChapterService: { get: mockChapterGet },
}));

jest.mock('../services/level.service', () => ({
  LevelService: { get: mockLevelGet },
}));

jest.mock('../services/answer.service', () => ({
  AnswerService: { get: mockAnswerGet },
}));

jest.mock('../services/question.service', () => ({
  QuestionService: { get: mockQuestionGet },
}));

jest.mock('../services/test.service', () => ({
  TestService: { get: mockTestGet },
}));

const buildApp = async () => {
  jest.resetModules();
  process.env.API_KEY = 'test-api-key';

  const { ApiTestRouter } = await import('../routers/apitest.router');
  const app = express();
  app.use('/api/apitest', ApiTestRouter);

  return app;
};

describe('ApiTest router', () => {
  let app: express.Express;
  let consoleSpy: jest.SpyInstance;

  beforeAll(async () => {
    app = await buildApp();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
  });

  beforeEach(() => {
    mockUserGet.mockResolvedValue({ users: [] });
    mockChapterGet.mockResolvedValue({ chapters: [] });
    mockLevelGet.mockResolvedValue({ levels: [] });
    mockAnswerGet.mockResolvedValue({ answers: [] });
    mockQuestionGet.mockResolvedValue({ questions: [] });
    mockTestGet.mockResolvedValue({ tests: [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('returns readiness payload from GET /api/apitest', async () => {
    const res = await request(app).get('/api/apitest/');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ test: 'it works' });
  });

  it('rejects GET /api/apitest/apikey when API key missing', async () => {
    const res = await request(app).get('/api/apitest/apikey');

    expect(res.status).toBe(401);
    expect(res.body.error).toContain('Api Key is required');
  });

  it('accepts GET /api/apitest/apikey when API key provided', async () => {
    const res = await request(app).get('/api/apitest/apikey').set('x-api-key', 'test-api-key');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ test: 'it works' });
  });

  it('aggregates model data in GET /api/apitest/models', async () => {
    mockUserGet.mockResolvedValueOnce({ users: [{ id: 'user-1' }] });
    mockChapterGet.mockResolvedValueOnce({ chapters: [{ id: 'chapter-1' }] });
    mockLevelGet.mockResolvedValueOnce({ levels: [{ id: 'level-1' }] });
    mockAnswerGet.mockResolvedValueOnce({ answers: [{ id: 'answer-1' }] });
    mockQuestionGet.mockResolvedValueOnce({ questions: [{ id: 'question-1' }] });
    mockTestGet.mockResolvedValueOnce({ tests: [{ id: 'test-1' }] });

    const res = await request(app).get('/api/apitest/models').set('x-api-key', 'test-api-key');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      users: [{ id: 'user-1' }],
      chapters: [{ id: 'chapter-1' }],
      tests: [{ id: 'test-1' }],
      levels: [{ id: 'level-1' }],
      answers: [{ id: 'answer-1' }],
      questions: [{ id: 'question-1' }],
    });
  });
});
