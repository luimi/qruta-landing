import Parse from 'parse';

export const connect = async () => {
  const server = await getServerUrl();
  if (!server) {
    console.error('No server URL found');
    return;
  }
  connectToParse(server);
};

export const getServerUrl = async () => {
  if (import.meta.env.VITE_LOADBALANCER_URL) {
    let result: any = await fetch(import.meta.env.VITE_LOADBALANCER_URL);
    if (result.status === 200) result = await result.json();
    if (result) return result.server;
  }
  if (import.meta.env.VITE_SERVER_URL) {
    return import.meta.env.VITE_SERVER_URL;
  }
  return null;
};

export const connectToParse = async (serverUrl: string) => {
  Parse.serverURL = serverUrl;
  Parse.initialize(import.meta.env.VITE_APPID || '', '');
};

export const getProcessServer = async (city: string) => {
  const server = await Parse.Cloud.run('getServer', { city });
  if (server && server.success) return server.url;
  return null;
};

export const runInprocessServer = async (city: string, call: any) => {
  const current = Parse.serverURL;
  const server = await getProcessServer(city);
  if (!server) return false;
  Parse.serverURL = server;
  await call();
  Parse.serverURL = current;
};
