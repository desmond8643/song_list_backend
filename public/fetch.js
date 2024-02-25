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
        const stats1 = getSongData(doc1)

        fetch(
          "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"
        )
          .then((response) => response.text())
          .then((expertData) => {
            const doc2 = parser.parseFromString(expertData, "text/html")
            const stats2 = getSongData(doc2)

            // Combine the data from all sources
            const formData = {
              name: name,
              masterData: stats1,
              expetData: stats2,
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


function getSongData(doc) {
  const elements1 = doc.getElementsByClassName("f_10")
  const stats = []
  const overallStats = []
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

    overallStats.push({ value, attribute })
  }

  stats.push(JSON.stringify(overallStats))

  const musicDivs = doc.querySelectorAll(".w_450")

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
      musicDiv.querySelector(".music_kind_icon_dx.music_master_btn_on") !== null
    const isStdChart =
      musicDiv.querySelector(
        ".music_kind_icon_standard.music_master_btn_on"
      ) !== null

    // songs.push({name, achievement, deluxeScore})

    if (isDXChart) {
      // If both standard and DX icons are present, prefer DX chart
      songs.push({ name: `${name} (dx)`, achievement, deluxeScore })
    } else if (isStdChart) {
      songs.push({ name: `${name} (std)`, achievement, deluxeScore })
    } else {
      const imgElement = musicDiv.querySelector(".music_kind_icon")
      const src = imgElement ? imgElement.getAttribute("src") : ""
      if (src.includes("standard")) {
        songs.push({ name: `${name} (std)`, achievement, deluxeScore })
      } else if (src.includes("dx")) {
        songs.push({ name: `${name} (dx)`, achievement, deluxeScore })
      }
    }
  })
  stats.push(songs)
  return stats
}
