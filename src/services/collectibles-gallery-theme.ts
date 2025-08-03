import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCollectiblesGalleryThemes() {
  return client.models.CollectiblesGalleryTheme.list();
}

export async function getCollectiblesGalleryThemeById(id: string) {
  return client.models.CollectiblesGalleryTheme.get({ id });
}

export async function createCollectiblesGalleryTheme(data: {
  id?: string;
  name: string;
}) {
  const { id, ...toAdd } = data;

  return client.models.CollectiblesGalleryTheme.create(toAdd);
}

export async function updateCollectiblesGalleryTheme(
  id: string,
  data: {
    name?: string;
  },
) {
  return client.models.CollectiblesGalleryTheme.update({ id, ...data });
}

export async function deleteCollectiblesGalleryTheme(id: string) {
  return client.models.CollectiblesGalleryTheme.delete({ id });
}
