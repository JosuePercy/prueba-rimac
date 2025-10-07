import type { PlanResponse } from '../types/plan';
import axios from 'axios';


const API_PLANS = import.meta.env.VITE_API_PLANS; 

export async function getPlans(): Promise<PlanResponse> {
  const { data } = await axios.get<PlanResponse>(API_PLANS);
  return data;
}