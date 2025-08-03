import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCoolingTankTunnels() {
  return client.models.CoolingTankTunnel.list();
}

export async function getCoolingTankTunnelById(id: string) {
  return client.models.CoolingTankTunnel.get({ id });
}

export async function createCoolingTankTunnel(data: {
  id?: string;
  tunnel: string;
  description?: string;
  probability: number;
}) {
  const { id, ...toAdd } = data;

  return client.models.CoolingTankTunnel.create(toAdd);
}

export async function updateCoolingTankTunnel(
  id: string,
  data: {
    tunnel?: string;
    description?: string;
    probability?: number;
  },
) {
  return client.models.CoolingTankTunnel.update({ id, ...data });
}

export async function deleteCoolingTankTunnel(id: string) {
  return client.models.CoolingTankTunnel.delete({ id });
}
