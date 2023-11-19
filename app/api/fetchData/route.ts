import { client } from "@/lib/db-config";

export async function GET() {

    try {

        await client.connect()

        console.log("Connected to MongoDb Atlas");

        const databaseName = 'New_Data'
        const collectionName = 'Content'

        const database = client.db(databaseName)
        const collection = database.collection(collectionName)

        const data = await collection.find({}).toArray()

        return new Response(JSON.stringify(data), {
            status: 200
        })
        

    } catch (error) {
        console.log('Error retrieving data: ', error);
        return new Response('Failed', {
            status: 200
        })
    } finally {
        await client.close()
    }
}