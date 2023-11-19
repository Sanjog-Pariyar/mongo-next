import { client } from "@/lib/db-config"

export async function POST(request: Request) {
    const { heading, content } = await request.json()

    try {
        await client.connect()
        const databaseName = client.db('New_Data')
        const collectionName = databaseName.collection('Content')

        let newData = {
            "heading": heading,
            "content": content
        }

        await collectionName.insertOne(newData)

        return new Response('Document Created successfully!')
    } catch(error) {
        console.log("Error creating a new Document: ", error);
        return new Response("Failed to connect", {
            status: 500
        })
    } finally {
        await client.close()
    }
}