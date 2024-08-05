import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'demodb'; // Replace with your database name

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Connect to the database
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection('users');

    // Insert login details into the database
    await users.insertOne({ username, password });

    return new Response(JSON.stringify({ message: 'Login details saved' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error.message); // Log the error message for debugging
    return new Response(JSON.stringify({ error: 'Error saving details', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Ensure the client is closed
    await client.close();
  }
}
