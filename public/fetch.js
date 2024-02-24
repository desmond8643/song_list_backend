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

        const musicDivs = doc.querySelectorAll(".music_master_score_back")

        const songs = []

        musicDivs.forEach((musicDiv) => {
          const nameElement = musicDiv.querySelector(".music_name_block")
          const name = nameElement.textContent.trim()

          const scoreBlockElements =
            musicDiv.querySelectorAll(".music_score_block")
          const achievement = scoreBlockElements[0]
            ? scoreBlockElements[0].textContent
            : ""
          let deluxeScore = scoreBlockElements[1]
            ? scoreBlockElements[1].textContent
            : ""
          deluxeScore = deluxeScore.replace(/[\n\t]/g, "")

          songs.push({ name, achievement, deluxeScore })
        })

        stats1.push(songs)

        // Fetch expert data
        fetch(
          "https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"
        )
          .then((response) => response.text())
          .then((expertData) => {
            const doc2 = parser.parseFromString(expertData, "text/html")

            const elements2 = doc2.getElementsByClassName("f_10")
            const stats2 = []

            for (let i = 0; i < elements2.length; i++) {
              const value = elements2[i].textContent
              const attribute = attributes[i]
              stats2.push({ value, attribute })
            }

            // Combine the data from all sources
            const formData = {
              name: name,
              masterData: stats1,
              expertData: stats2,
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
            console.error("Error fetching expert data:", error)
          })
      })
      .catch((error) => {
        console.error("Error fetching master data:", error)
      })
  })
  .catch((error) => {
    console.error("Error fetching name:", error)
  })
