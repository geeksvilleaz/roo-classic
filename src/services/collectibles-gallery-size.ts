import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCollectiblesGallerySizes() {
  return client.models.CollectiblesGallerySize.list();
}

export async function getCollectiblesGallerySizeById(id: string) {
  return client.models.CollectiblesGallerySize.get({ id });
}

export async function createCollectiblesGallerySize(data: {
  id?: string;
  capacity: number;
  cost: number;
}) {
  const { id, ...toAdd } = data;

  return client.models.CollectiblesGallerySize.create(toAdd);
}

export async function updateCollectiblesGallerySize(
  id: string,
  data: {
    capacity?: number;
    cost?: number;
  },
) {
  return client.models.CollectiblesGallerySize.update({ id, ...data });
}

export async function deleteCollectiblesGallerySize(id: string) {
  return client.models.CollectiblesGallerySize.delete({ id });
}
