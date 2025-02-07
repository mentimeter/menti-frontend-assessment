import type { Entry } from '../../../src/models';
import { readFile as r, writeFile as w } from 'node:fs';
import { promisify } from 'node:util';

const PROJECT_ROOT = process.cwd();

const readFile = promisify(r);
const writeFile = promisify(w);

type Data = {
  entries: Array<Entry>;
};

export const getData = async (): Promise<Data> => {
  const data = await readFile(`${PROJECT_ROOT}/data.json`, 'utf-8');
  if (!data) {
    return { entries: [] };
  }

  return JSON.parse(data);
};

export const writeData = async (data: Data): Promise<void> => {
  await writeFile(`${PROJECT_ROOT}/data.json`, JSON.stringify(data));
};
