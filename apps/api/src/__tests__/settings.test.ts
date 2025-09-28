type SettingsModule = typeof import('../consts/settings');

const loadSettings = async (): Promise<SettingsModule> => {
  jest.resetModules();
  return await import('../consts/settings');
};

describe('settings constants', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it('uses fallback values when env vars are missing', async () => {
    delete process.env.HOST;
    delete process.env.API_PORT;
    delete process.env.MODE;
    delete process.env.API_KEY;

    const settings = await loadSettings();

    expect(settings.BASE_URL).toBe('http://localhost:3000');
    expect(settings.API_URL).toBe('http://localhost:3000/api');
    expect(settings.SWAGGER_URL).toBe('http://localhost:3000/docs');
    expect(settings.API_KEY).toBe('123');
  });

  it('derives urls from provided environment variables', async () => {
    process.env.HOST = 'api.example.com';
    process.env.API_PORT = '443';
    process.env.MODE = 'prod';
    process.env.API_KEY = 'secret';

    const settings = await loadSettings();

    expect(settings.BASE_URL).toBe('https://api.example.com:443');
    expect(settings.API_URL).toBe('https://api.example.com:443/api');
    expect(settings.SWAGGER_URL).toBe('https://api.example.com:443/docs');
    expect(settings.API_KEY).toBe('secret');
  });
});
