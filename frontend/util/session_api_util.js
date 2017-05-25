export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const updateUser = (userId, userData) => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users',
    data: { userData }
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
