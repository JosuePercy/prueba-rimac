import type { PlanResponse } from '../types/plan';
import axios from 'axios';

export async function getPlans(): Promise<PlanResponse> {
  const { data } = await axios.get<PlanResponse>('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  return data;
}