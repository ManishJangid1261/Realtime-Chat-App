import { Account, Client , Databases } from 'appwrite';

export const PROJECT_ID = '65f7b0db4ff9a7c5ce93'
export const DATABASE_ID = '65f7b201f3fbb9655096'
export const COLLECTION_ID_MESSAGES = '65f7b2130ed078492228'


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f7b0db4ff9a7c5ce93');

    export const databases = new Databases(client);
    export const account = new Account(client)
    export default client;