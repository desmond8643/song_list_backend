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

    const sharedIds = {}

    const chartDocuments = [
      {
        chart_id: "65928ca0f3bd6c46a1252aaa",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aab",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aac",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "658d2a95139837b24d4ef892",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aad",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aae",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aaf",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ab9",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b84",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b85",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b8a",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b8f",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b90",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b94",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b95",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252bc5",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252bc9",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ce9",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cea",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ceb",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfa",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d01",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8b",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8c",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8d",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8e",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d91",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d92",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d96",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d97",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ced",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cf2",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfb",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfc",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfd",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ccd",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cd2",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cd3",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cdf",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ce0",
        version_released: "Maimai",
        chart: "s",
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cf1",
        version_released: "Maimai",
        chart: "s",
      },
    ]
    const buddiesDocuments = [
      {
        chart_id: "65928ca0f3bd6c46a1252aaa",
        level: [5, 6, 9, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aab",
        level: [5, 8, 9, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aac",
        level: [6, 7, 9, 10.7, 0],
      },
      {
        chart_id: "658d2a95139837b24d4ef892",
        level: [6, 6, 9, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aad",
        level: [5, 7.2, 10, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aae",
        level: [7, 7.7, 9, 10.7, 12.7],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252aaf",
        level: [7, 8, 10, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ab9",
        level: [6, 8, 9.7, 13.4, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b84",
        level: [6, 7.7, 9.7, 12.4, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b85",
        level: [6, 8, 9.7, 11.7, 13.2],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b8a",
        level: [7, 8, 9.7, 12.8, 13.3],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b8f",
        level: [7, 7.7, 9, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b90",
        level: [7, 7.7, 9, 11, 12],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b94",
        level: [6, 7, 9, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252b95",
        level: [7, 7.7, 8.7, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252bc5",
        level: [7, 8, 9.7, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252bc9",
        level: [5, 7, 9, 12.5, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ce9",
        level: [4, 7, 9, 11, 13.7],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cea",
        level: [4, 7, 8.7, 11, 13.9],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ceb",
        level: [6, 9, 12.7, 12, 14.2],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfa",
        level: [6, 8, 10.7, 12.7, 14.5],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d01",
        level: [5, 7, 9, 10.7, 13.1],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8b",
        level: [6, 7, 9, 11, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8c",
        level: [6, 8, 11, 12.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8d",
        level: [4, 7, 9.7, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d8e",
        level: [5, 7, 10, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d91",
        level: [5, 7, 10.7, 13.3, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d92",
        level: [6, 7.7, 8.7, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d96",
        level: [6, 8, 12, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252d97",
        level: [6, 7, 10, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ced",
        level: [4, 7, 11, 13.7, 13.9],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cf2",
        level: [4, 7, 10, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfb",
        level: [5, 7.7, 10, 12.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfc",
        level: [5, 7, 8.7, 11.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cfd",
        level: [5, 6, 8.7, 12, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ccd",
        level: [5, 8, 10.7, 13.9, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cd2",
        level: [5, 6, 9.7, 12.7, 12.7],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cd3",
        level: [5, 7, 11.7, 12, 13.2],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cdf",
        level: [6, 9, 12.7, 13.4, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252ce0",
        level: [6, 8.7, 10.7, 12.7, 0],
      },
      {
        chart_id: "65928ca0f3bd6c46a1252cf1",
        level: [5, 8, 10, 13.4, 0],
      },
    ]

    for (const chartDoc of chartDocuments) {
      const chartId = chartDoc.chart_id

      if (!sharedIds[chartId]) {
        // Generate a new shared _id for the chart_id
        sharedIds[chartId] = new ObjectId()
      }

      // Assign the shared _id to the chart document
      chartDoc._id = sharedIds[chartId]
    }
    for (const buddiesDoc of buddiesDocuments) {
      const chartId = buddiesDoc.chart_id

      // Assign the shared _id to the chart document
      buddiesDoc._id = sharedIds[chartId]
    }

    const chartResult = await chartsCollection.insertMany(chartDocuments)
    console.log(
      `${chartResult.insertedCount} documents inserted into "charts" collection.`
    )

    const buddiesResult = await buddiesCollection.insertMany(buddiesDocuments)
    console.log(
      `${buddiesResult.insertedCount} documents inserted into "Buddies" collection.`
    )

    // Additional operations with the inserted documents or other operations...
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main()
