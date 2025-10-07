import axios from 'axios';
import type { User } from '../types/user';

const API_USER = "https://rimac-front-end-challenge.netlify.app/api/user.json";

export async function getUser(): Promise<User> {
  const { data } = await axios.get<User>(API_USER);
  return data;
}