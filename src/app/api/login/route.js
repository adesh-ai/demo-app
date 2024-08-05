import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbName = 'demodb'; // Replace with your database name

export async function POST(request) {
  const { username, password } = await request.json();
  console.log('Received data:', username, password);

  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection('users');

    // Save login details
    await users.insertOne({ username, password });

    console.log('Login details saved');
    return new Response(JSON.stringify({ message: 'Login details saved' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Error saving details' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}
