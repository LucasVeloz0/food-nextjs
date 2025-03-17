import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // Em desenvolvimento, use uma variável global para preservar o cliente entre recarregamentos de módulo
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, crie um novo cliente
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;