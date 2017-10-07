export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const hasRaven = !!process.env.REACT_APP_RAVEN_URL;
export const storageKeyPrefix = process.env.REACT_APP_STORAGE_KEY_PREFIX;
export const apiBase = process.env.REACT_APP_API_BASE;
export const promiseTypeSuffixes = ['REQUEST', 'SUCCESS', 'FAILURE'];
export const screenBreakpoints = {
  lg: 1170,
  md: 992,
  sm: 768,
  xs: 376,
};
