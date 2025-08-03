import type { Schema } from '@/../amplify/data/resource';
import { formatDateForDB } from '@/utils/date-utils';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getBlackMarkets() {
  return client.models.BlackMarket.list();
}

export async function getBlackMarketById(id: string) {
  return client.models.BlackMarket.get({ id });
}

export async function createBlackMarket(data: {
  id?: string;
  alien: string;
  name: string;
  introduction: string;
  barterScreen: string;
  bargainScreen: string;
  saleScreen: string;
  nextRestock: string | Date;
}) {
  const { id, ...toAdd } = {
    ...data,
    nextRestock: formatDateForDB(data.nextRestock),
  };

  return client.models.BlackMarket.create(toAdd);
}

export async function updateBlackMarket(
  id: string,
  data: Partial<{
    alien: string;
    name: string;
    introduction: string;
    barterScreen: string;
    bargainScreen: string;
    saleScreen: string;
    nextRestock: Date | string;
  }>,
) {
  return client.models.BlackMarket.update({
    id,
    ...data,
    nextRestock: formatDateForDB(String(data.nextRestock)),
  });
}

export async function deleteBlackMarket(id: string) {
  return client.models.BlackMarket.delete({ id });
}
