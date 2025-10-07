import axios from 'axios';
import type { User } from '../types/user';

export async function getUser(): Promise<User> {
  const { data } = await axios.get<User>('https://rimac-front-end-challenge.netlify.app/api/user.json');
  return data;
}