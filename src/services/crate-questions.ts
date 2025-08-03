import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export async function getCrateQuestions() {
  return client.models.CrateQuestion.list();
}

export async function getCrateQuestionById(id: string) {
  return client.models.CrateQuestion.get({ id });
}

export async function createCrateQuestion(data: {
  id?: string;
  question: string;
  questionCode: string;
  answer: string;
}) {
  const { id, ...toAdd } = data;

  return client.models.CrateQuestion.create(toAdd);
}

export async function updateCrateQuestion(
  id: string,
  data: {
    question?: string;
    questionCode?: string;
    answer?: string;
  },
) {
  return client.models.CrateQuestion.update({ id, ...data });
}

export async function deleteCrateQuestion(id: string) {
  return client.models.CrateQuestion.delete({ id });
}
