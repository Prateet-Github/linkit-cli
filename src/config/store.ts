import fs from 'fs';
import path from 'path';
import os from 'os';

const CONFIG_PATH = path.join(os.homedir(), '.linkit.json');

export type LinkitConfig = {
  apiUrl?: string;
  token?: string;
};

export function getConfig(): LinkitConfig {
  if(!fs.existsSync(CONFIG_PATH)) {
    return {};
  }

  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
};

export function setConfig(config: LinkitConfig) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

export function updateConfig(partial: LinkitConfig) {
  const current = getConfig();
  const next = { ...current, ...partial };
  setConfig(next);
}