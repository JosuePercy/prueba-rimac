import type { PlanResponse } from '../types/plan';
import axios from 'axios';


const API_PLANS = "https://rimac-front-end-challenge.netlify.app/api/plans.json"

export async function getPlans(): Promise<PlanResponse> {
  const { data } = await axios.get<PlanResponse>(API_PLANS);
  return data;
}