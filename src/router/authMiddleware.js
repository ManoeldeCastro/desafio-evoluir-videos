export default function authMiddleware(to, from, next) {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  if (!isAuthenticated) {
    return next({ name: 'login' });
  }

  return next();
}
