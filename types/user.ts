export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserPayload {
  email: string;
  name: string;
  password: string;
  role?: 'admin' | 'user' | 'guest';
}

export interface UpdateUserPayload {
  name?: string;
  avatar?: string;
}
