import axios from 'axios';
import type { User } from '../types/user';

const API_USER = import.meta.env.VITE_API_USER; 

export async function getUser(): Promise<User> {
  const { data } = await axios.get<User>(API_USER);
  return data;
}