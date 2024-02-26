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
//         const stats1 = getSongData(doc1, "master", "score")

//         fetch(
//           "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"
//         )
//           .then((response) => response.text())
//           .then((expertData) => {
//             const doc2 = parser.parseFromString(expertData, "text/html")
//             const stats2 = getSongData(doc2, "expert", "score")
//             const songName = getSongData(doc2, "expert", "name")

//             // Combine the data from all sources
//             const formData = {
//               name: name,
//               masterData: stats1,
//               expertData: stats2,
//               songName
//             }

//             // Send the form data to your backend API endpoint
//             fetch("https://song-list-backend.vercel.app/api/submit", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(formData),
//             })
//               .then((response) => {
//                 if (response.ok) {
//                   console.log("Form data sent successfully")
//                   return response.json() // Parse the response JSON
//                 } else {
//                   throw new Error("Failed to send form data")
//                 }
//               })
//               .then((data) => {
//                 console.log("Response from backend:", data)
//               })
//               .catch((error) => {
//                 console.error(
//                   "An error occurred while sending form data:",
//                   error
//                 )
//               })
//           })
//       })
//       .catch((error) => {
//         console.error("Error fetching expert data:", error)
//       })
//       .catch((error) => {
//         console.error("Error fetching master data:", error)
//       })
//   })
//   .catch((error) => {
//     console.error("Error fetching name:", error)
//   })

// function getSongData(doc, difficulty, get) {
//   const elements1 = doc.getElementsByClassName("f_10")
//   const stats = []
//   let overallStats = []
//   const attributes = [
//     "Clear",
//     "S",
//     "S+",
//     "SS",
//     "SS+",
//     "SSS",
//     "SSS+",
//     "FC",
//     "FC+",
//     "AP",
//     "AP+",
//     "sync play",
//     "FS",
//     "FS+",
//     "FDX",
//     "FDX+",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//   ]

//   for (let i = 0; i < elements1.length; i++) {
//     const value = elements1[i].textContent
//     const attribute = attributes[i]

//     // overallStats += `${attribute}: ${value}\n`
//     overallStats.push({attribute, value})
//   }

//   stats.push(overallStats)

//   const musicDivs = doc.querySelectorAll(".w_450")

//   const songs = []
//   const songNames = []

//   musicDivs.forEach((musicDiv) => {
//     let nameElement = ""
//     let scoreBlockElements = ""
//     let isDXChart = ""
//     let isStdChart = ""

//     if (difficulty === "master") {
//       nameElement = musicDiv.querySelector(
//         ".music_master_score_back .music_name_block"
//       )
//       scoreBlockElements = musicDiv.querySelectorAll(
//         ".music_master_score_back .music_score_block"
//       )
//       isDXChart =
//         musicDiv.querySelector(".music_kind_icon_dx.music_master_btn_on") !==
//         null
//       isStdChart =
//         musicDiv.querySelector(
//           ".music_kind_icon_standard.music_master_btn_on"
//         ) !== null
//     } else if (difficulty === "expert") {
//       nameElement = musicDiv.querySelector(
//         ".music_expert_score_back .music_name_block"
//       )
//       scoreBlockElements = musicDiv.querySelectorAll(
//         ".music_expert_score_back .music_score_block"
//       )
//       isDXChart =
//         musicDiv.querySelector(".music_kind_icon_dx.music_expert_btn_on") !==
//         null
//       isStdChart =
//         musicDiv.querySelector(
//           ".music_kind_icon_standard.music_expert_btn_on"
//         ) !== null
//     }

//     const name = nameElement ? nameElement.textContent.trim() : ""

//     const achievement = scoreBlockElements[0]
//       ? scoreBlockElements[0].textContent
//       : ""
//     let deluxeScore = scoreBlockElements[1]
//       ? scoreBlockElements[1].textContent
//       : ""
//     deluxeScore = deluxeScore.replace(/[ ,\n\t]/g, "")

//     // songs.push({name, achievement, deluxeScore})

//     if (isDXChart) {
//       // If both standard and DX icons are present, prefer DX chart
//       songs.push(`${achievement}, ${deluxeScore}`)
//       songNames.push(`${name} (dx)`)
//     } else if (isStdChart) {
//       songs.push(`${achievement}, ${deluxeScore}`)
//       songNames.push(`${name} (std)`)
//     } else {
//       const imgElement = musicDiv.querySelector(".music_kind_icon")
//       const src = imgElement ? imgElement.getAttribute("src") : ""
//       if (src.includes("standard")) {
//         songs.push(`${achievement}, ${deluxeScore}`)
//         songNames.push(`${name} (std)`)
//       } else if (src.includes("dx")) {
//         songs.push(`${achievement}, ${deluxeScore}`)
//         songNames.push(`${name} (dx)`)
//       }
//     }
//   })
//   stats.push(songs)
//   if (get === "score") return stats
//   if (get === "name") return songNames
// }

fetch("https://maimaidx-eng.com/maimai-mobile/home/")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, "text/html")

    const element = doc.querySelector(".name_block")
    const name = element.textContent

    // Fetch master data
    fetch(
      "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"
    )
      .then((response) => response.text())
      .then((masterData) => {
        const doc1 = parser.parseFromString(masterData, "text/html")

        fetch(
          "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"
        )
          .then((response) => response.text())
          .then((expertData) => {
            const doc2 = parser.parseFromString(expertData, "text/html")

            fetch(
              "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"
            )
              .then((response) => response.text())
              .then((remasterData) => {
                const doc3 = parser.parseFromString(remasterData, "text/html")

                // Combine the data from all sources
                const formData = {
                  stats: {
                    name,
                    expert: getStats(doc2),
                    master: getStats(doc1),
                    remaster: getStats(doc3),
                  },
                  songs: getSongNameAndScore(doc2, doc1, doc3),
                }

                // Send the form data to your backend API endpoint
                fetch("https://song-list-backend.vercel.app/api/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => {
                    if (response.ok) {
                      console.log("Form data sent successfully")
                      return response.json() // Parse the response JSON
                    } else {
                      throw new Error("Failed to send form data")
                    }
                  })
                  .then((data) => {
                    console.log("Response from backend:", data)
                  })
                  .catch((error) => {
                    console.error(
                      "An error occurred while sending form data:",
                      error
                    )
                  })
              })
              .catch((error) => {
                console.error("Error fetching remaster data:", error)
              })
          })
      })
      .catch((error) => {
        console.error("Error fetching expert data:", error)
      })
      .catch((error) => {
        console.error("Error fetching master data:", error)
      })
  })
  .catch((error) => {
    console.error("Error fetching name:", error)
  })

function getStats(doc) {
  const elements = doc.getElementsByClassName("f_10")
  let stats = ""
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
  for (let i = 0; i < elements.length; i++) {
    const value = elements[i].textContent
    const attribute = attributes[i]

    stats += `${attribute}: ${value}\n`
  }

  return stats
}

function getSongNameAndScore(expertDoc, masterDoc, remasterDoc) {
  const expertMusicDivs = expertDoc.querySelectorAll(".w_450")
  const masterMusicDivs = masterDoc.querySelectorAll(".w_450")
  const remasterMusicDivs = remasterDoc.querySelectorAll(".w_450")
  const songs = []

  // get all song name
  masterMusicDivs.forEach((masterMusicDiv) => {
    const nameElement = masterMusicDiv.querySelector(
      ".music_master_score_back .music_name_block"
    )
    const isDXChart =
      masterMusicDiv.querySelector(
        `.music_kind_icon_dx.music_master_btn_on`
      ) !== null
    const isStdChart =
      masterMusicDiv.querySelector(
        `.music_kind_icon_standard.music_master_btn_on`
      ) !== null
  
    let name = nameElement ? nameElement.textContent.trim() : ""
    if (isDXChart) name += "(dx)"
    else if (isStdChart) {
      name += "(std)"
    } else {
      const imgElement = masterMusicDiv.querySelector(".music_kind_icon")
      const src = imgElement ? imgElement.getAttribute("src") : ""
      if (src.includes("standard")) name += "(std)"
      else if (src.includes("dx")) name += "(dx)"
    }

    if (name !== "") {
      songs.push({ name })
    }
  })
  // create a copy of song name and score in respect of their own difficulty
  const createCopy = (musicDivs, difficulty) => {
    const copy = []
    musicDivs.forEach((musicDiv) => {
      const songObj = {}
      const nameElement = musicDiv.querySelector(
        `.music_${difficulty}_score_back .music_name_block`
      )
      const scoreBlockElements = musicDiv.querySelectorAll(
        `.music_${difficulty}_score_back .music_score_block`
      )
      const isDXChart =
        musicDiv.querySelector(
          `.music_kind_icon_dx.music_${difficulty}_btn_on`
        ) !== null
      const isStdChart =
        musicDiv.querySelector(
          `.music_kind_icon_standard.music_${difficulty}_btn_on`
        ) !== null
      let achievement = scoreBlockElements[0]
        ? scoreBlockElements[0].textContent
        : ""
      let deluxeScore = scoreBlockElements[1]
        ? scoreBlockElements[1].textContent
        : ""
      deluxeScore = deluxeScore.replace(/[ ,\n\t]/g, "")
      achievement = achievement.replace(/%/, "")
      if (achievement.includes(".0000")) achievement = achievement.replace(".0000", "")

      let name = nameElement ? nameElement.textContent.trim() : ""
      if (isDXChart) name += "(dx)"
      else if (isStdChart) {
        name += "(std)"
      } else {
        const imgElement = musicDiv.querySelector(".music_kind_icon")
        const src = imgElement ? imgElement.getAttribute("src") : ""
        if (src.includes("standard")) name += "(std)"
        else if (src.includes("dx")) name += "(dx)"
      }

      songObj.name = name
      songObj.score = `${achievement},${deluxeScore}`

      if (name !== "") copy.push(songObj)
    })

    return copy
  }
  const expertSongs = createCopy(expertMusicDivs, "expert")
  const masterSongs = createCopy(masterMusicDivs, "master")
  const remasterSongs = createCopy(remasterMusicDivs, "remaster")

  // find the song in respect of their own difficulty and add to the object that only has the song name
  songs.forEach((song) => {
    const arr = []
    if (expertSongs.find((obj) => obj.name === song.name)) {
      const obj = expertSongs.find((obj) => obj.name === song.name)
      arr.push(obj.score)
    }
    if (masterSongs.find((obj) => obj.name === song.name)) {
      const obj = masterSongs.find((obj) => obj.name === song.name)
      arr.push(obj.score)
    }
    if (remasterSongs.find((obj) => obj.name === song.name)) {
      const obj = remasterSongs.find((obj) => obj.name === song.name)
      arr.push(obj.score)
    }
    song.score = arr
  })

  return songs
}

function getSongData(doc, difficulty, get) {
  const elements1 = doc.getElementsByClassName("f_10")
  const stats = []
  let overallStats = []
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

    // overallStats += `${attribute}: ${value}\n`
    overallStats.push({ attribute, value })
  }

  stats.push(overallStats)

  const musicDivs = doc.querySelectorAll(".w_450")

  const songs = []
  const songNames = []

  musicDivs.forEach((musicDiv) => {
    let nameElement = ""
    let scoreBlockElements = ""
    let isDXChart = ""
    let isStdChart = ""

    if (difficulty === "master") {
      nameElement = musicDiv.querySelector(
        ".music_master_score_back .music_name_block"
      )
      scoreBlockElements = musicDiv.querySelectorAll(
        ".music_master_score_back .music_score_block"
      )
      isDXChart =
        musicDiv.querySelector(".music_kind_icon_dx.music_master_btn_on") !==
        null
      isStdChart =
        musicDiv.querySelector(
          ".music_kind_icon_standard.music_master_btn_on"
        ) !== null
    } else if (difficulty === "expert") {
      nameElement = musicDiv.querySelector(
        ".music_expert_score_back .music_name_block"
      )
      scoreBlockElements = musicDiv.querySelectorAll(
        ".music_expert_score_back .music_score_block"
      )
      isDXChart =
        musicDiv.querySelector(".music_kind_icon_dx.music_expert_btn_on") !==
        null
      isStdChart =
        musicDiv.querySelector(
          ".music_kind_icon_standard.music_expert_btn_on"
        ) !== null
    } else if (difficulty === "remaster") {
      nameElement = musicDiv.querySelector(
        ".music_remaster_score_back .music_name_block"
      )
      scoreBlockElements = musicDiv.querySelectorAll(
        ".music_remaster_score_back .music_score_block"
      )
      isDXChart =
        musicDiv.querySelector(".music_kind_icon_dx.music_remaster_btn_on") !==
        null
      isStdChart =
        musicDiv.querySelector(
          ".music_kind_icon_standard.music_remaster_btn_on"
        ) !== null
    }

    const name = nameElement ? nameElement.textContent.trim() : ""

    const achievement = scoreBlockElements[0]
      ? scoreBlockElements[0].textContent
      : ""
    let deluxeScore = scoreBlockElements[1]
      ? scoreBlockElements[1].textContent
      : ""
    deluxeScore = deluxeScore.replace(/[ ,\n\t]/g, "")

    // songs.push({name, achievement, deluxeScore})

    if (isDXChart) {
      // If both standard and DX icons are present, prefer DX chart
      songs.push(`${achievement}, ${deluxeScore}`)
      songNames.push(`${name} (dx)`)
    } else if (isStdChart) {
      songs.push(`${achievement}, ${deluxeScore}`)
      songNames.push(`${name} (std)`)
    } else {
      const imgElement = musicDiv.querySelector(".music_kind_icon")
      const src = imgElement ? imgElement.getAttribute("src") : ""
      if (src.includes("standard")) {
        songs.push(`${achievement}, ${deluxeScore}`)
        songNames.push(`${name} (std)`)
      } else if (src.includes("dx")) {
        songs.push(`${achievement}, ${deluxeScore}`)
        songNames.push(`${name} (dx)`)
      }
    }
  })
  stats.push(songs)
  if (get === "score") return stats
  if (get === "name") return songNames
}
