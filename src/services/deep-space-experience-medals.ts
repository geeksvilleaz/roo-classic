import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCrystalDropOdds() {
  return client.models.CrystalDropOdds.list();
}

export async function getCrystalDropOddById(id: string) {
  return client.models.CrystalDropOdds.get({ id });
}

export async function createCrystalDropOdd(data: {
  id?: string;
  crystal: string;
  probability: number;
  match2: number;
  match3: number;
  match4: number;
  currentProbability: number;
  dynamic: boolean;
}) {
  const { id, ...toAdd } = data;

  return client.models.CrystalDropOdds.create(toAdd);
}

export async function updateCrystalDropOdd(
  id: string,
  data: {
    crystal?: string;
    probability?: number;
    match2?: number;
    match3?: number;
    match4?: number;
    currentProbability?: number;
    dynamic?: boolean;
  },
) {
  return client.models.CrystalDropOdds.update({ id, ...data });
}

export async function deleteCrystalDropOdd(id: string) {
  return client.models.CrystalDropOdds.delete({ id });
}
