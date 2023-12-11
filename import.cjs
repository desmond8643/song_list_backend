const { MongoClient } = require("mongodb")
require("dotenv").config({ path: "./config.env" })

async function main() {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)

  try {
  await client.connect()
  const database = client.db("maimai")
  const collection = database.collection("songs")

  const documents = [
    {
      "_id": "1jAYpsKVn9mTMWDvzewc",
      "title": "Garakuta Doll Play"
    },
    {
      "_id": "1LIMxZnmjpTrCTOqNEMp",
      "title": "Sage"
    },
    {
      "_id": "2DwOtcsxDc6r4z1HdpuU",
      "title": "Hello, Hologram"
    },
    {
      "_id": "2J2vIrf9vOLhW3QXXLQ8",
      "title": "ULTRA SYNERGY MATRIX"
    },
    {
      "_id": "2Jv6KY0o3m275abGdQOm",
      "title": "Glorious Crown"
    },
    {
      "_id": "3OCVPmqKUEiAazkcdRv5",
      "title": "Metamorphosism"
    },
    {
      "_id": "4hcCHzvY83bStWcQCbJT",
      "title": "超熊猫的周游记（ワンダーパンダートラベラー）"
    },
    {
      "_id": "4nwz8dr31hy7BrHKW3h6",
      "title": "最強STRONGER"
    },
    {
      "_id": "5H63NdrnvfaLg5So5WPQ",
      "title": "Halfway(>∀<)"
    },
    {
      "_id": "62btfKqnYk54DBGBCNwj",
      "title": "WiPE OUT MEMORIES"
    },
    {
      "_id": "6uj52Y0LqXbLkszgbRYy",
      "title": "Calamity Fortune"
    },
    {
      "_id": "7V786CXpdnztOQJESSoY",
      "title": "星界ちゃんと可不ちゃんのおつかい合騒曲"
    },
    {
      "_id": "9kfTZmWRJP2uL8DFh1fF",
      "title": "GEOMETRIC DANCE"
    },
    {
      "_id": "9orKYl5u4wLwv2L0FLQE",
      "title": "my flow"
    },
    {
      "_id": "AqNrejI26bgwvtoWkqSz",
      "title": "In Chaos"
    },
    {
      "_id": "BS3yQTgY0xZ7C7MFKXUa",
      "title": "Kairos"
    },
    {
      "_id": "BkY66EAU1RW9ZjV3KYr0",
      "title": "MAGENTA POTION"
    },
    {
      "_id": "BoYaLY0e3c2hNqChNNHZ",
      "title": "QZKago Requiem"
    },
    {
      "_id": "CmlkNCPgInLoRIL0YE3S",
      "title": "AMABIE"
    },
    {
      "_id": "DD2yZTjfCddW6SnjgOgQ",
      "title": "mystique as iris"
    },
    {
      "_id": "ENjsOYwDQT7cR8cebetN",
      "title": "Vallista"
    },
    {
      "_id": "F3Wc3QMEGwRF7x5crXt5",
      "title": "KHYMΞXΛ"
    },
    {
      "_id": "FPygOZlil5ShjWJSpTdb",
      "title": "FLUFFY FLASH"
    },
    {
      "_id": "GWfwOSHZ4XkYoDywcWI4",
      "title": "康莊大道"
    },
    {
      "_id": "Gq2yG9Fg0cNjcohk7i7d",
      "title": "Schwarzschild"
    },
    {
      "_id": "HlAhyzQHeQNDFXhMYtSY",
      "title": "PERSONA feat. PANXI"
    },
    {
      "_id": "J1lf8koTvkAlrAVbTPqN",
      "title": "Valsqotch"
    },
    {
      "_id": "LKTrXqF9h4uKno7KUbsM",
      "title": "宵の鳥"
    },
    {
      "_id": "LsfyTcrIAKtcQLSv0Ay7",
      "title": "OMAKENO Stroke"
    },
    {
      "_id": "MDbIl4FM6OnnbqAKifpJ",
      "title": "GIGANTØMAKHIA"
    },
    {
      "_id": "MRE6tMf1P3njDdg2i26o",
      "title": "怒槌"
    },
    {
      "_id": "NLdoYrSVR8rULrirYw3h",
      "title": "SILENT BLUE"
    },
    {
      "_id": "OPnyhgW4gYi9uPyuYR7B",
      "title": "熱異常"
    },
    {
      "_id": "QJM0uJ8gsrI1RILPMoqJ",
      "title": "躯樹の墓守"
    },
    {
      "_id": "QSJiQEjh4VgPio3qcln2",
      "title": "POWER OF UNITY"
    },
    {
      "_id": "QnjmHp4rTzJ6KC6ZnSv6",
      "title": "リフヴェイン"
    },
    {
      "_id": "QrsTX87KQ7NXf0Hntk7N",
      "title": "IMAWANOKIWA"
    },
    {
      "_id": "QsK9tpNBRPxolkYiAGTe",
      "title": "sølips"
    },
    {
      "_id": "RgO9fWofJ6h3Cpi48ng2",
      "title": "脳天直撃"
    },
    {
      "_id": "RiQnceoUh7AJltqNHPE2",
      "title": "地球"
    },
    {
      "_id": "RlzrC9zFfXnRkPJO7NDX",
      "title": "ここからはじまるプロローグ。 (Kanon Remix)"
    },
    {
      "_id": "SiZN26nqAVcOHy29Mbvm",
      "title": "Complex Mind"
    },
    {
      "_id": "Tr3GKLKTURB0mnGPFshj",
      "title": "VERTeX (rintaro soma deconstructed remix)"
    },
    {
      "_id": "VkPqmbE2UqeDFyKJt4Lf",
      "title": "ViRTUS"
    },
    {
      "_id": "VxaWQ9r90Gp6cgXgTpGg",
      "title": "Horoscope Express"
    },
    {
      "_id": "WK70IERRkdQxCB7JVIRf",
      "title": "TEmPTaTiON"
    },
    {
      "_id": "YXoRDEktJ3KWqaS5ML8q",
      "title": "larva"
    },
    {
      "_id": "ZnAASNd9UWB4DoxuXrIs",
      "title": "コンティニュー！ feat. 蓝月なくる"
    },
    {
      "_id": "aQOCo2JSnboVYrT6aRJ8",
      "title": "Selector"
    },
    {
      "_id": "an8rIwiLuRLr1epu93Dh",
      "title": "BULK UP (GAME EXCLUSIVE EDIT)"
    },
    {
      "_id": "cCbsmZdMg4pSv9WPnh9O",
      "title": "Churros Parlor"
    },
    {
      "_id": "d0P6DS66gUqCRnWC35QQ",
      "title": "ジングルベル"
    },
    {
      "_id": "dAdz4MvlauO1A3RNtjpJ",
      "title": "Last Kingdom"
    },
    {
      "_id": "daHKkywAKvmp40fpkAKk",
      "title": "enchanted wanderer"
    },
    {
      "_id": "dct5LLosCbIGI8WSFQtU",
      "title": "Heavenly Blast"
    },
    {
      "_id": "dsJjQHTddbbLDT0Rywyr",
      "title": "World's end loneliness"
    },
    {
      "_id": "e2gH2Jn5fAsSdGjuuWy6",
      "title": "Moon of Noon"
    },
    {
      "_id": "eB7Z3uvYKI8yk4SyxdNl",
      "title": "Excalibur ～Revived Resolution～"
    },
    {
      "_id": "f3ePVNRdAWLa9YClc6ye",
      "title": "LAMIA"
    },
    {
      "_id": "fDIGMMp9zQgUNnesA7ka",
      "title": "AMAZING MIGHTYYYY!!!!"
    },
    {
      "_id": "fi1pdtwMz8cZWOSPtUc9",
      "title": "ガラテアの螺旋"
    },
    {
      "_id": "fzN9kbPMNlw1UEpziRll",
      "title": "VIIIbit Explorer"
    },
    {
      "_id": "g5NcsP4e3sgGZ8faWIXG",
      "title": "End Time"
    },
    {
      "_id": "i8FeTT5QyCOyo3qyVYce",
      "title": "PANDORA PARADOXXX"
    },
    {
      "_id": "jlGblwgPxNjfy9OSjBoE",
      "title": "バグ"
    },
    {
      "_id": "kfa0HX9N2hX6zj1Hr3Nv",
      "title": "ツムギボシ"
    },
    {
      "_id": "kwHkdxPst4MRLScfU7Lt",
      "title": "VeRForTe αRtE:VEiN"
    },
    {
      "_id": "lWwx7BGNUmhi48SVFONL",
      "title": "Cthugha"
    },
    {
      "_id": "mu2X8JFqLytxG1s8XcMv",
      "title": "Regulus"
    },
    {
      "_id": "nBvFiSAx2jWxyrA9nkD6",
      "title": "Our Wrenally"
    },
    {
      "_id": "nEXRdsovsSFFrBJgaWIl",
      "title": "Ignis Danse"
    },
    {
      "_id": "oHLuY4JnqJEVsbDede1g",
      "title": "リスペク風神"
    },
    {
      "_id": "oHcj378Fy1W9a79DWd2y",
      "title": "モ°ルモ°ル (MZK Skippin’ Remix)"
    },
    {
      "_id": "qdIMLberggf3XeAoTfbK",
      "title": "Party☆People☆Princess"
    },
    {
      "_id": "qtOBI3E4FEJtLq9BaQrS",
      "title": "Lia=Fail"
    },
    {
      "_id": "rd4c4w39QQdsMrKAEMSs",
      "title": "Comet Panto Men!"
    },
    {
      "_id": "sArsGPuHpG6aSRBUuIOB",
      "title": "にゃーにゃー冒険譚"
    },
    {
      "_id": "sKeFkeaOVm6Sc5RzHdCC",
      "title": "初音ミクの消失"
    },
    {
      "_id": "sZYsc6sRphrHrYigHIGI",
      "title": "the EmpErroR"
    },
    {
      "_id": "sfF52yQ6nBFaDfX6eMkV",
      "title": "Latent Kingdom"
    },
    {
      "_id": "si8B0hC7hz71mR2TpnvW",
      "title": "雷切-RAIKIRI-"
    },
    {
      "_id": "tqPGiT9p1fbR6Ivpgf3r",
      "title": "BLACK SWAN"
    },
    {
      "_id": "u6Xzt9yhonC2KpQC2NY4",
      "title": "BREaK! BREaK! BREaK!"
    },
    {
      "_id": "ufGrStl2qRLDD5QVo6BM",
      "title": "Final Step!"
    },
    {
      "_id": "uojOzhKsNDE71QNsuTvV",
      "title": "渦状銀河のシンフォニエッタ"
    },
    {
      "_id": "uqsafSSHxNdvU8miz854",
      "title": "‘ウソテイ’ ～一回戦せりなvsしろなvsなずな～"
    },
    {
      "_id": "vZW6msTRxYJuENUWwsDz",
      "title": "チューリングの跡"
    },
    {
      "_id": "vqNrHcJrhtkjs8n5AA9V",
      "title": "Energizing Flame"
    },
    {
      "_id": "wRgO7GlcJ5FVmWxbhmC4",
      "title": "あつすぎの歌"
    },
    {
      "_id": "wkMUNaWdFXCMpCsEvHmb",
      "title": "封焔の135秒"
    },
    {
      "_id": "wpxQUfIgpPkyeyjNJ8RZ",
      "title": "Yorugao"
    },
    {
      "_id": "xlmAb1Z0PpC2NJggPaGn",
      "title": "PUPA"
    },
    {
      "_id": "yWj7yd1GWvNyKWnDS7T5",
      "title": "僕の和風本当上手"
    },
    {
      "_id": "yXPkBfchyvRDIvxm9eyV",
      "title": "おとせサンダー"
    },
    {
      "_id": "ydDS1gvatp7YqIggPZlr",
      "title": "TiamaT:F minor"
    },
    {
      "_id": "yfVyh43V3YuhSg8aicGy",
      "title": "Alea jacta est!"
    },
    {
      "_id": "ymjY2Hx8JG2czkdC9PK0",
      "title": "青春コンプレックス"
    },
    {
      "_id": "yuMT38fKDM7QutDJpsLe",
      "title": "SQUAD-Phvntom-"
    },
    {
      "_id": "zjiGBckD5rFsIpEIAUaa",
      "title": "Titania"
    },
    {
      "_id": "6576525c9164b346a0a2a733",
      "title": "DANGEROOOOUS JUNGLE"
    },
    {
      "_id": "657652c09164b346a0a2a735",
      "title": "天使光輪"
    },
    {
      "_id": "6576541d9164b346a0a2a737",
      "title": "ozma"
    },
    {
      "_id": "657654889164b346a0a2a739",
      "title": "神威"
    },
    {
      "_id": "657654ef9164b346a0a2a73b",
      "title": "月面基地"
    },
    {
      "_id": "657657809164b346a0a2a73e",
      "title": "PinqPiq (xovevox Remix)"
    }
  ]
    

  const result = await collection.insertMany(documents)
  console.log(`${result.insertedCount} documents inserted.`)
  // const documents = await collection.find().toArray()
  // console.log(documents)
  


  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main()

/*
{
      "chart_id": "RlzrC9zFfXnRkPJO7NDX",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "0fMsi4ISnovifvlxKvg4"
    },
    {
      "chart_id": "BoYaLY0e3c2hNqChNNHZ",
      "level": [0, 0, 0, 14.8, 14.9],
      "chart": "s",
      "version_released": "Finale",
      "_id": "14aG67BxQAVRf2C2M5M6"
    },
    {
      "chart_id": "yXPkBfchyvRDIvxm9eyV",
      "level": [0, 0, 0, 0, 13.7],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "16tW9DMHmr0OoHpMY8u9"
    },
    {
      "chart_id": "mu2X8JFqLytxG1s8XcMv",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Splash",
      "_id": "1NnatSfgRZWWyrdTYslO"
    },
    {
      "chart_id": "nBvFiSAx2jWxyrA9nkD6",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Murasaki",
      "_id": "3DxsbSDWpLMJwvaNKNh6"
    },
    {
      "chart_id": "lWwx7BGNUmhi48SVFONL",
      "level": [0, 0, 0, 14.3, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "3jOujFgdBOvg6M65PfL4"
    },
    {
      "chart_id": "sArsGPuHpG6aSRBUuIOB",
      "level": [0, 0, 0, 13.7, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "3srBDz7Dy2KKyD0VG6nl"
    },
    {
      "chart_id": "AqNrejI26bgwvtoWkqSz",
      "level": [0, 0, 0, 0, 14.8],
      "chart": "s",
      "version_released": "Maimai",
      "_id": "4J993qXTMEDepOpuMUSz"
    },
    {
      "chart_id": "1LIMxZnmjpTrCTOqNEMp",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Universe+",
      "_id": "4pWjMNKRetDMU8WjG8TK"
    },
    {
      "chart_id": "SiZN26nqAVcOHy29Mbvm",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "6LQUujrDidqcbsnjaQmU"
    },
    {
      "chart_id": "e2gH2Jn5fAsSdGjuuWy6",
      "level": [0, 0, 0, 14.4, 0],
      "chart": "s",
      "version_released": "Murasaki+",
      "_id": "78TP0SqMbReAOTeIA90p"
    },
    {
      "chart_id": "ENjsOYwDQT7cR8cebetN",
      "level": [0, 0, 0, 14.1, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "7mycR7mEChbBBhJJrpol"
    },
    {
      "chart_id": "d0P6DS66gUqCRnWC35QQ",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "7rqsxVrHwsFvyA6y4PbH"
    },
    {
      "chart_id": "yWj7yd1GWvNyKWnDS7T5",
      "level": [0, 0, 0, 14.0, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "8qTPTsqBCVkqQTvYK0HY"
    },
    {
      "chart_id": "1jAYpsKVn9mTMWDvzewc",
      "level": [0, 0, 0, 14.2, 14.8],
      "chart": "s",
      "version_released": "Green",
      "_id": "95gSLCFayzzyQ05NkuZC"
    },
    {
      "chart_id": "2DwOtcsxDc6r4z1HdpuU",
      "level": [0, 0, 0, 13.7, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "9akC7Wf0HfEhwmm7mOjq"
    },
    {
      "chart_id": "tqPGiT9p1fbR6Ivpgf3r",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "9zpwHRrNENPIlbRsnRmB"
    },
    {
      "chart_id": "dsJjQHTddbbLDT0Rywyr",
      "level": [0, 0, 0, 14.9, 0],
      "chart": "d",
      "version_released": "Universe+",
      "_id": "BNvqgggZeoWqBhQVykRU"
    },
    {
      "chart_id": "wRgO7GlcJ5FVmWxbhmC4",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "C0WIbn1nR1psEQfxpxYd"
    },
    {
      "chart_id": "vZW6msTRxYJuENUWwsDz",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Universe+",
      "_id": "C4uXZtB7Z6EeiRezRxmU"
    },
    {
      "chart_id": "kfa0HX9N2hX6zj1Hr3Nv",
      "level": [0, 0, 0, 14.1, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "DMjcbjFzloqEj9naQaWP"
    },
    {
      "chart_id": "an8rIwiLuRLr1epu93Dh",
      "level": [0, 0, 0, 14.1, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "DPnNYltYilH6oqaRkKZU"
    },
    {
      "chart_id": "4hcCHzvY83bStWcQCbJT",
      "level": [0, 0, 0, 14.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "DdGz9Eb8nmETLnTZuPNg"
    },
    {
      "chart_id": "dAdz4MvlauO1A3RNtjpJ",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "EFHG5jo8nLRWQfjHA0Uy"
    },
    {
      "chart_id": "RgO9fWofJ6h3Cpi48ng2",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "EhXTRkVmSo2nQm1uzcIT"
    },
    {
      "chart_id": "si8B0hC7hz71mR2TpnvW",
      "level": [0, 0, 0, 14.6, 14.8],
      "chart": "s",
      "version_released": "Finale",
      "_id": "FPdAlJ8d5DIpNbjZbiJE"
    },
    {
      "chart_id": "daHKkywAKvmp40fpkAKk",
      "level": [0, 0, 0, 13.8, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "FcflofuxlwGEuqyLz253"
    },
    {
      "chart_id": "CmlkNCPgInLoRIL0YE3S",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Splash+",
      "_id": "FePFhHIEGfrd2vphkDTn"
    },
    {
      "chart_id": "BkY66EAU1RW9ZjV3KYr0",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "GDL1jDKSzeKwyjTrUKqx"
    },
    {
      "chart_id": "wpxQUfIgpPkyeyjNJ8RZ",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "HIOP8hk2pvRgFw5IXgzt"
    },
    {
      "chart_id": "oHcj378Fy1W9a79DWd2y",
      "level": [0, 0, 0, 13.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "HcQFIRmEyZcIdIWnHw4A"
    },
    {
      "chart_id": "F3Wc3QMEGwRF7x5crXt5",
      "chart": "d",
      "version_released": "Festival+",
      "level": [0, 0, 0, 14.7, 0],
      "_id": "HtwxSlB1AkAXwpqSccFE"
    },
    {
      "chart_id": "fi1pdtwMz8cZWOSPtUc9",
      "level": [0, 0, 0, 14.6, 14.7],
      "chart": "s",
      "version_released": "Orange+",
      "_id": "IQLHSjiiulToBSNNTI73"
    },
    {
      "chart_id": "6uj52Y0LqXbLkszgbRYy",
      "level": [0, 0, 0, 14.1, 0],
      "chart": "s",
      "version_released": "Murasaki+",
      "_id": "IilQHVpgq9CIhwxwS96X"
    },
    {
      "chart_id": "i8FeTT5QyCOyo3qyVYce",
      "level": [0, 0, 0, 14.9, 15.0],
      "chart": "s",
      "version_released": "Finale",
      "_id": "JLsIuVbGTcFq98lPI7NE"
    },
    {
      "chart_id": "WK70IERRkdQxCB7JVIRf",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Deluxe",
      "_id": "KGbmQBSGpL7F1eNOnYNE"
    },
    {
      "chart_id": "2Jv6KY0o3m275abGdQOm",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Pink",
      "_id": "Kt9MjoBQ1PMnbsdhhxGD"
    },
    {
      "chart_id": "QJM0uJ8gsrI1RILPMoqJ",
      "level": [0, 0, 0, 14.9, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "L23NijLmLUDu2xKZG3p4"
    },
    {
      "chart_id": "sZYsc6sRphrHrYigHIGI",
      "level": [0, 0, 0, 14.8, 14.9],
      "chart": "s",
      "version_released": "Finale",
      "_id": "LFbfLZLp6zW8ug36mMlx"
    },
    {
      "chart_id": "eB7Z3uvYKI8yk4SyxdNl",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Milk",
      "_id": "LuzaslgiEi2Cz63S15PB"
    },
    {
      "chart_id": "RiQnceoUh7AJltqNHPE2",
      "level": [0, 0, 0, 14.3, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "NBLs9utSXXrxOWCSV7W8"
    },
    {
      "chart_id": "rd4c4w39QQdsMrKAEMSs",
      "level": [0, 0, 0, 14, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "NHCwhgXRveZPDsdPWRyN"
    },
    {
      "chart_id": "MRE6tMf1P3njDdg2i26o",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Milk+",
      "_id": "PEZpBr4x0ArfoxQ2pz1R"
    },
    {
      "chart_id": "62btfKqnYk54DBGBCNwj",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Universe+",
      "youtube": [0, 0, 0, "https://youtu.be/03KNp074dgk?si=aErhqxMfr-P7-MkJ", 0],
      "_id": "Poe6AXjHfaJGNYIM51En"
    },
    {
      "chart_id": "J1lf8koTvkAlrAVbTPqN",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Deluxe+",
      "_id": "PzmSvTjkopNRXUVjrD9z"
    },
    {
      "chart_id": "MDbIl4FM6OnnbqAKifpJ",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "RXbsTs6BN1UD7QJLeTfX"
    },
    {
      "chart_id": "ufGrStl2qRLDD5QVo6BM",
      "level": [0, 0, 0, 13.8, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "T1flNI4ZBWnfd1aXFbW8"
    },
    {
      "chart_id": "f3ePVNRdAWLa9YClc6ye",
      "level": [0, 0, 0, 14.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "T4zeYPEPz6h357yL1atS"
    },
    {
      "chart_id": "aQOCo2JSnboVYrT6aRJ8",
      "level": [0, 0, 0, 13.7, 0],
      "chart": "s",
      "version_released": "Murasaki",
      "youtube": [0, 0, 0, "https://youtu.be/j1CbAbPb-64?si=CjCD8dd-cyn8TIHq", 0],
      "_id": "TnRLkZXMIPh3nbJ2WA1n"
    },
    {
      "chart_id": "FPygOZlil5ShjWJSpTdb",
      "level": [0, 0, 0, 14.3, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "UMUc2SyGjDMPNtQYdCw1"
    },
    {
      "chart_id": "zjiGBckD5rFsIpEIAUaa",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Deluxe",
      "_id": "V4ZOSGdoAcNiw98nCknp"
    },
    {
      "chart_id": "3OCVPmqKUEiAazkcdRv5",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Universe+",
      "_id": "WWJutqxwPe3xgh2PDJ8t"
    },
    {
      "chart_id": "ydDS1gvatp7YqIggPZlr",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "s",
      "version_released": "Finale",
      "_id": "XJbYnyGFsSliJMaL2CSj"
    },
    {
      "chart_id": "cCbsmZdMg4pSv9WPnh9O",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "YbLkqBPZdZe262FKP24V"
    },
    {
      "chart_id": "YXoRDEktJ3KWqaS5ML8q",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Milk+",
      "_id": "YkPIM2RruLgcRFJep5GF"
    },
    {
      "chart_id": "Gq2yG9Fg0cNjcohk7i7d",
      "level": [0, 0, 0, 14.0, 14.9],
      "chart": "s",
      "version_released": "Finale",
      "_id": "aYYCTLX3fazussDUHkKP"
    },
    {
      "chart_id": "yfVyh43V3YuhSg8aicGy",
      "level": [0, 0, 0, 0, 14.8],
      "chart": "s",
      "version_released": "Finale",
      "_id": "ax4OlxqLn9yif1SIcI3U"
    },
    {
      "chart_id": "uqsafSSHxNdvU8miz854",
      "level": [0, 0, 0, 13.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "b6LCB2dBPal5UJhbBpwr"
    },
    {
      "chart_id": "BS3yQTgY0xZ7C7MFKXUa",
      "level": [0, 0, 0, 13.8, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "cvXlZGc94u5C88fFi41f"
    },
    {
      "chart_id": "HlAhyzQHeQNDFXhMYtSY",
      "level": [0, 0, 0, 13.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "dv9cdRNpXavBhRgpuxB6"
    },
    {
      "chart_id": "GWfwOSHZ4XkYoDywcWI4",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "s",
      "version_released": "Festival",
      "_id": "etk2gE9cLjgzdfcQOSQl"
    },
    {
      "chart_id": "u6Xzt9yhonC2KpQC2NY4",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Splash",
      "_id": "ffJTQ0xi8AA3op3PqHxS"
    },
    {
      "chart_id": "VkPqmbE2UqeDFyKJt4Lf",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Festival",
      "_id": "fvdpGxG1IXkobRZYC5At"
    },
    {
      "chart_id": "QnjmHp4rTzJ6KC6ZnSv6",
      "level": [0, 0, 0, 13.7, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "h1IAGNjTxfgn6WPoDm12"
    },
    {
      "chart_id": "QsK9tpNBRPxolkYiAGTe",
      "level": [0, 0, 0, 14.9, 0],
      "chart": "d",
      "version_released": "Universe+",
      "_id": "hqVO95W8wrwp0CtQDaBe"
    },
    {
      "chart_id": "kwHkdxPst4MRLScfU7Lt",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "i0A1cJGB9JgRXgwmBhWQ"
    },
    {
      "chart_id": "ZnAASNd9UWB4DoxuXrIs",
      "level": [0, 0, 0, 13.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "iKUqIHYkrvlHHjVyzFqy"
    },
    {
      "chart_id": "nEXRdsovsSFFrBJgaWIl",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "s",
      "version_released": "Orange",
      "_id": "jAwskFXasgiSLxAkLzln"
    },
    {
      "chart_id": "uojOzhKsNDE71QNsuTvV",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Deluxe+",
      "_id": "kRk6mJyEbzeV4B46Ax6J"
    },
    {
      "chart_id": "g5NcsP4e3sgGZ8faWIXG",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "s",
      "version_released": "Finale",
      "_id": "kuSJUJ5Jyi6A08eAn78z"
    },
    {
      "chart_id": "Tr3GKLKTURB0mnGPFshj",
      "level": [0, 0, 0, 14.7, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "kwf7Aul04DoS2s4351pW"
    },
    {
      "chart_id": "4nwz8dr31hy7BrHKW3h6",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Festival",
      "_id": "lKdFz3MXnTLn7mEFZgZM"
    },
    {
      "chart_id": "fzN9kbPMNlw1UEpziRll",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Splash+",
      "_id": "lngbbg0YAzsU8jLZupFN"
    },
    {
      "chart_id": "d0P6DS66gUqCRnWC35QQ",
      "level": [0, 0, 0, 14.3, 14],
      "chart": "s",
      "version_released": "Plus",
      "_id": "mQQSUxzxNvyZjXLDktad"
    },
    {
      "chart_id": "NLdoYrSVR8rULrirYw3h",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "s",
      "version_released": "Milk+",
      "youtube": [0, 0, 0, "https://youtu.be/sgCC0ksu854?si=_ieEzrrlKD-fiico", 0],
      "_id": "nvVP4A0pjGvvJX44z8ec"
    },
    {
      "chart_id": "LKTrXqF9h4uKno7KUbsM",
      "level": [0, 0, 0, 13.8, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "nzaht5Fa8YcVHO7uhw2g"
    },
    {
      "chart_id": "wkMUNaWdFXCMpCsEvHmb",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "d",
      "version_released": "Deluxe+",
      "_id": "r2pFc0NrhiOrxal4tvkr"
    },
    {
      "chart_id": "qtOBI3E4FEJtLq9BaQrS",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "d",
      "version_released": "Universe",
      "_id": "rjk9DBDgiBNYgvjSYcUP"
    },
    {
      "chart_id": "dct5LLosCbIGI8WSFQtU",
      "level": [0, 0, 0, 14.8, 0],
      "chart": "d",
      "version_released": "Splash+",
      "_id": "sg9CRL9g2cawrd047Zk0"
    },
    {
      "chart_id": "fDIGMMp9zQgUNnesA7ka",
      "level": [0, 0, 0, 14.7, 0],
      "chart": "s",
      "version_released": "Pink+",
      "_id": "tE1cvXY9txjlAgoatLI7"
    },
    {
      "chart_id": "5H63NdrnvfaLg5So5WPQ",
      "level": [0, 0, 0, 13.8, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "u6FtozFqaowBtVqYWZji"
    },
    {
      "chart_id": "oHLuY4JnqJEVsbDede1g",
      "level": [0, 0, 0, 13.7, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "uhSdx2JoZ91r62kb6ciE"
    },
    {
      "chart_id": "DD2yZTjfCddW6SnjgOgQ",
      "level": [0, 0, 0, 14.6, 0],
      "chart": "d",
      "version_released": "Festival",
      "_id": "vHPWmvVbFHEl4UKeaS8i"
    },
    {
      "chart_id": "aQOCo2JSnboVYrT6aRJ8",
      "level": [0, 0, 0, 13.9, 0],
      "chart": "d",
      "version_released": "Festival+",
      "_id": "yDD9iC3YrgPGh7vojyX4"
    },
    {
      "chart_id": "2J2vIrf9vOLhW3QXXLQ8",
      "level": [0, 0, 0, 14, 0],
      "version_released": "Festival+",
      "chart": "d",
      "_id": "zPxYAqAUJDcvKhV6Cdr7"
    },
  ]
*/