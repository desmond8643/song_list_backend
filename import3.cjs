const { MongoClient, ObjectId } = require("mongodb")
require("dotenv").config({ path: "./config.env" })

async function main() {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)

  try {
    await client.connect()
    const database = client.db("maimai")
    const chartsCollection = database.collection("charts")
    const buddiesCollection = database.collection("Buddies")

    const sharedId = new ObjectId();

    const chartDocuments = [
      {
        _id: sharedId,
        chart_id: "65928ca0f3bd6c46a1252b0d",
        version_released: 'Festival',
        chart: 'd',
        //youtube: ['', '', '', 'https://youtu.be/aAfeeF5luwY', '']
      }
    ]

    const buddiesDocuments = [
      {
        _id: sharedId,
        chart_id: "65928ca0f3bd6c46a1252b0d",
        level: [2, 6, 9.7, 13.3, 0],
      }
    ]

    const chartResult = await chartsCollection.insertMany(chartDocuments)
    console.log(`${chartResult.insertedCount} documents inserted into "charts" collection.`)

    const buddiesResult = await buddiesCollection.insertMany(buddiesDocuments)
    console.log(`${buddiesResult.insertedCount} documents inserted into "Buddies" collection.`)

    // Additional operations with the inserted documents or other operations...

  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main()