// @ts-ignore
const platformBackend = Environment.getPlatformBackend();
export const environment = {
  SERVER_URL: `./`,
  production: false,
  useHash: true,
  hmr: false,
  platformUrl: platformBackend,
};
