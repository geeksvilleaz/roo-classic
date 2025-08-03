import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCollectiblesSettings() {
  return client.models.CollectiblesSetting.list();
}

export async function getCollectiblesSettingById(id: string) {
  return client.models.CollectiblesSetting.get({ id });
}

export async function createCollectiblesSetting(data: {
  id?: string;
  loginDays: number;
  indexIntervalDays: number;
  lastIndexDate: string;
}) {
  const { id, ...toAdd } = data;

  return client.models.CollectiblesSetting.create(toAdd);
}

export async function updateCollectiblesSetting(
  id: string,
  data: {
    loginDays?: number;
    indexIntervalDays?: number;
    lastIndexDate?: string;
  },
) {
  return client.models.CollectiblesSetting.update({ id, ...data });
}

export async function deleteCollectiblesSetting(id: string) {
  return client.models.CollectiblesSetting.delete({ id });
}
