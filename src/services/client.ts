// @ts-ignore
import { Client } from "podcast-api";

const client = Client({
  apiKey: import.meta.env.VITE_CLIENT_TOKEN,
});

export default client;
