const submitFormData = async (formData) => {
  try {
    const response = await fetch(
      "https://song-list-backend.vercel.app/api/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )

    if (response.ok) {
      console.log("Form data sent successfully")
      const responseData = await response.json()
      console.log("Response from backend:", responseData)
    } else {
      throw new Error("Failed to send form data")
    }
  } catch (error) {
    console.error("An error occurred while sending form data:", error)
    throw error
  }
}

const fetchAndProcessData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.text()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

const parseMasterData = (masterData) => {
  // ...existing code for parsing master data...
}

fetchAndProcessData("https://maimaidx-eng.com/maimai-mobile/home/")
  .then((data) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, "text/html")

    const element = doc.querySelector(".name_block")
    const name = element ? element.textContent : ""

    const formData = {}

    return fetchAndProcessData(
      "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"
    ).then((masterData) => {
      const doc1 = parser.parseFromString(masterData, "text/html")

      const elements1 = doc1.getElementsByClassName("f_10")
      const stats1 = []
      const attributes = [
        "Clear",
        "S",
        "S+",
        "SS",
        "SS+",
        "SSS",
        "SSS+",
        "FC",
        "FC+",
        "AP",
        "AP+",
        "sync play",
        "FS",
        "FS+",
        "FDX",
        "FDX+",
        "1",
        "2",
        "3",
        "4",
        "5",
      ]

      for (let i = 0; i < elements1.length; i++) {
        const value = elements1[i].textContent
        const attribute = attributes[i]
        stats1.push({ value, attribute })
      }

      const musicDivs = doc1.querySelectorAll(".w_450")

      const songs = []

      musicDivs.forEach((musicDiv) => {
        const nameElement = musicDiv.querySelector(
          ".music_master_score_back .music_name_block"
        )
        const name = nameElement ? nameElement.textContent.trim() : ""

        const scoreBlockElements = musicDiv.querySelectorAll(
          ".music_master_score_back .music_score_block"
        )
        const achievement = scoreBlockElements[0]
          ? scoreBlockElements[0].textContent
          : ""
        let deluxeScore = scoreBlockElements[1]
          ? scoreBlockElements[1].textContent
          : ""
        deluxeScore = deluxeScore.replace(/[ ,\n\t]/g, "")

        const isDXChart =
          musicDiv.querySelector(".music_kind_icon_dx.music_master_btn_on") !==
          null
        const isStdChart =
          musicDiv.querySelector(
            ".music_kind_icon_standard.music_master_btn_on"
          ) !== null

        // songs.push({name, achievement, deluxeScore})

        if (isDXChart) {
          // If both standard and DX icons are present, prefer DX chart
          songs.push({ name, achievement, deluxeScore, chart: "dx" })
        } else if (isStdChart) {
          songs.push({ name, achievement, deluxeScore, chart: "std" })
        } else {
          const imgElement = musicDiv.querySelector(".music_kind_icon")
          const src = imgElement ? imgElement.getAttribute("src") : ""
          if (src.includes("standard")) {
            songs.push({ name, achievement, deluxeScore, chart: "std" })
          } else if (src.includes("dx")) {
            songs.push({ name, achievement, deluxeScore, chart: "dx" })
          }
        }
      })

      stats1.push(songs)

      // Combine the data from all sources
      const formData = {
        name: name,
        masterData: stats1,
      }

      // Splitting the form data into smaller chunks
      const chunkSize = 500 // Number of entries per chunk
      const entries = Object.entries(formData)
      const chunks = []

      for (let i = 0; i < entries.length; i += chunkSize) {
        const chunk = Object.fromEntries(entries.slice(i, i + chunkSize))
        chunks.push(chunk)
      }

      // Submitting each chunk of form data
      const submitPromises = chunks.map((chunk) => submitFormData(chunk))
      return Promise.all(submitPromises)
    })
  })
  .then(() => {
    console.log("Form data submitted successfully")
  })
  .catch((error) => {
    console.error("Error:", error)
  })

  // fetch("https://maimaidx-eng.com/maimai-mobile/home/")
//   .then((response) => response.text())
//   .then((data) => {
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(data, "text/html")

//     const element = doc.querySelector(".name_block")
//     const name = element.textContent

//     // Fetch master data
//     fetch(
//       "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"
//     )
//       .then((response) => response.text())
//       .then((masterData) => {
//         const doc1 = parser.parseFromString(masterData, "text/html")

//         const elements1 = doc1.getElementsByClassName("f_10")
//         const stats1 = []
//         const attributes = [
//           "Clear",
//           "S",
//           "S+",
//           "SS",
//           "SS+",
//           "SSS",
//           "SSS+",
//           "FC",
//           "FC+",
//           "AP",
//           "AP+",
//           "sync play",
//           "FS",
//           "FS+",
//           "FDX",
//           "FDX+",
//           "1",
//           "2",
//           "3",
//           "4",
//           "5",
//         ]

//         for (let i = 0; i < elements1.length; i++) {
//           const value = elements1[i].textContent
//           const attribute = attributes[i]
//           stats1.push({ value, attribute })
//         }

//         const musicDivs = doc1.querySelectorAll(".w_450")

//         const songs = []

//         musicDivs.forEach((musicDiv) => {
//           const nameElement = musicDiv.querySelector(
//             ".music_master_score_back .music_name_block"
//           )
//           const name = nameElement ? nameElement.textContent.trim() : ""

//           const scoreBlockElements = musicDiv.querySelectorAll(
//             ".music_master_score_back .music_score_block"
//           )
//           const achievement = scoreBlockElements[0]
//             ? scoreBlockElements[0].textContent
//             : ""
//           let deluxeScore = scoreBlockElements[1]
//             ? scoreBlockElements[1].textContent
//             : ""
//           deluxeScore = deluxeScore.replace(/[ ,\n\t]/g, "")

//           const isDXChart =
//             musicDiv.querySelector(
//               ".music_kind_icon_dx.music_master_btn_on"
//             ) !== null
//           const isStdChart =
//             musicDiv.querySelector(
//               ".music_kind_icon_standard.music_master_btn_on"
//             ) !== null

//           // songs.push({name, achievement, deluxeScore})

//           if (isDXChart) {
//             // If both standard and DX icons are present, prefer DX chart
//             songs.push({ name, achievement, deluxeScore, chart: "dx" })
//           } else if (isStdChart) {
//             songs.push({ name, achievement, deluxeScore, chart: "std" })
//           } else {
//             const imgElement = musicDiv.querySelector(".music_kind_icon")
//             const src = imgElement ? imgElement.getAttribute("src") : ""
//             if (src.includes("standard")) {
//               songs.push({ name, achievement, deluxeScore, chart: "std" })
//             } else if (src.includes("dx")) {
//               songs.push({ name, achievement, deluxeScore, chart: "dx" })
//             }
//           }
//         })

//         stats1.push(songs)

//         // Combine the data from all sources
//         const formData = {
//           name: name,
//           masterData: stats1,
//         }

//         // Send the form data to your backend API endpoint
//         fetch("https://song-list-backend.vercel.app/api/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         })
//           .then((response) => {
//             if (response.ok) {
//               console.log("Form data sent successfully")
//               return response.json() // Parse the response JSON
//             } else {
//               throw new Error("Failed to send form data")
//             }
//           })
//           .then((data) => {
//             console.log("Response from backend:", data)
//           })
//           .catch((error) => {
//             console.error("An error occurred while sending form data:", error)
//           })
//       })
//       .catch((error) => {
//         console.error("Error fetching master data:", error)
//       })
//   })
//   .catch((error) => {
//     console.error("Error fetching name:", error)
//   })