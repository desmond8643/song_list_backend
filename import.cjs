const { MongoClient } = require("mongodb")
require("dotenv").config({ path: "./config.env" })

async function main() {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)

  try {
  await client.connect()
  const database = client.db("maimai")
  const collection = database.collection("charts")

  const documents = [
    {
      "_id": "0fMsi4ISnovifvlxKvg4",
      "chart_id": "RlzrC9zFfXnRkPJO7NDX",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "14aG67BxQAVRf2C2M5M6",
      "chart_id": "BoYaLY0e3c2hNqChNNHZ",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "16tW9DMHmr0OoHpMY8u9",
      "chart_id": "yXPkBfchyvRDIvxm9eyV",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "1NnatSfgRZWWyrdTYslO",
      "chart_id": "mu2X8JFqLytxG1s8XcMv",
      "chart": "d",
      "version_released": "Splash"
    },
    {
      "_id": "3DxsbSDWpLMJwvaNKNh6",
      "chart_id": "nBvFiSAx2jWxyrA9nkD6",
      "chart": "s",
      "version_released": "Murasaki"
    },
    {
      "_id": "3jOujFgdBOvg6M65PfL4",
      "chart_id": "lWwx7BGNUmhi48SVFONL",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "3srBDz7Dy2KKyD0VG6nl",
      "chart_id": "sArsGPuHpG6aSRBUuIOB",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "4J993qXTMEDepOpuMUSz",
      "chart_id": "AqNrejI26bgwvtoWkqSz",
      "chart": "s",
      "version_released": "Maimai"
    },
    {
      "_id": "4pWjMNKRetDMU8WjG8TK",
      "chart_id": "1LIMxZnmjpTrCTOqNEMp",
      "chart": "d",
      "version_released": "Universe+"
    },
    {
      "_id": "6LQUujrDidqcbsnjaQmU",
      "chart_id": "SiZN26nqAVcOHy29Mbvm",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "78TP0SqMbReAOTeIA90p",
      "chart_id": "e2gH2Jn5fAsSdGjuuWy6",
      "chart": "s",
      "version_released": "Murasaki+"
    },
    {
      "_id": "7mycR7mEChbBBhJJrpol",
      "chart_id": "ENjsOYwDQT7cR8cebetN",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "7rqsxVrHwsFvyA6y4PbH",
      "chart_id": "d0P6DS66gUqCRnWC35QQ",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "8qTPTsqBCVkqQTvYK0HY",
      "chart_id": "yWj7yd1GWvNyKWnDS7T5",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "95gSLCFayzzyQ05NkuZC",
      "chart_id": "1jAYpsKVn9mTMWDvzewc",
      "chart": "s",
      "version_released": "Green"
    },
    {
      "_id": "9akC7Wf0HfEhwmm7mOjq",
      "chart_id": "2DwOtcsxDc6r4z1HdpuU",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "9zpwHRrNENPIlbRsnRmB",
      "chart_id": "tqPGiT9p1fbR6Ivpgf3r",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "BNvqgggZeoWqBhQVykRU",
      "chart_id": "dsJjQHTddbbLDT0Rywyr",
      "chart": "d",
      "version_released": "Universe+"
    },
    {
      "_id": "C0WIbn1nR1psEQfxpxYd",
      "chart_id": "wRgO7GlcJ5FVmWxbhmC4",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "C4uXZtB7Z6EeiRezRxmU",
      "chart_id": "vZW6msTRxYJuENUWwsDz",
      "chart": "d",
      "version_released": "Universe+"
    },
    {
      "_id": "DMjcbjFzloqEj9naQaWP",
      "chart_id": "kfa0HX9N2hX6zj1Hr3Nv",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "DPnNYltYilH6oqaRkKZU",
      "chart_id": "an8rIwiLuRLr1epu93Dh",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "DdGz9Eb8nmETLnTZuPNg",
      "chart_id": "4hcCHzvY83bStWcQCbJT",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "EFHG5jo8nLRWQfjHA0Uy",
      "chart_id": "dAdz4MvlauO1A3RNtjpJ",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "EhXTRkVmSo2nQm1uzcIT",
      "chart_id": "RgO9fWofJ6h3Cpi48ng2",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "FPdAlJ8d5DIpNbjZbiJE",
      "chart_id": "si8B0hC7hz71mR2TpnvW",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "FcflofuxlwGEuqyLz253",
      "chart_id": "daHKkywAKvmp40fpkAKk",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "FePFhHIEGfrd2vphkDTn",
      "chart_id": "CmlkNCPgInLoRIL0YE3S",
      "chart": "d",
      "version_released": "Splash+"
    },
    {
      "_id": "GDL1jDKSzeKwyjTrUKqx",
      "chart_id": "BkY66EAU1RW9ZjV3KYr0",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "HIOP8hk2pvRgFw5IXgzt",
      "chart_id": "wpxQUfIgpPkyeyjNJ8RZ",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "HcQFIRmEyZcIdIWnHw4A",
      "chart_id": "oHcj378Fy1W9a79DWd2y",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "HtwxSlB1AkAXwpqSccFE",
      "chart_id": "F3Wc3QMEGwRF7x5crXt5",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "IQLHSjiiulToBSNNTI73",
      "chart_id": "fi1pdtwMz8cZWOSPtUc9",
      "chart": "s",
      "version_released": "Orange+"
    },
    {
      "_id": "IilQHVpgq9CIhwxwS96X",
      "chart_id": "6uj52Y0LqXbLkszgbRYy",
      "chart": "s",
      "version_released": "Murasaki+"
    },
    {
      "_id": "JLsIuVbGTcFq98lPI7NE",
      "chart_id": "i8FeTT5QyCOyo3qyVYce",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "KGbmQBSGpL7F1eNOnYNE",
      "chart_id": "WK70IERRkdQxCB7JVIRf",
      "chart": "d",
      "version_released": "Deluxe"
    },
    {
      "_id": "Kt9MjoBQ1PMnbsdhhxGD",
      "chart_id": "2Jv6KY0o3m275abGdQOm",
      "chart": "s",
      "version_released": "Pink"
    },
    {
      "_id": "L23NijLmLUDu2xKZG3p4",
      "chart_id": "QJM0uJ8gsrI1RILPMoqJ",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "LFbfLZLp6zW8ug36mMlx",
      "chart_id": "sZYsc6sRphrHrYigHIGI",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "LuzaslgiEi2Cz63S15PB",
      "chart_id": "eB7Z3uvYKI8yk4SyxdNl",
      "chart": "s",
      "version_released": "Milk"
    },
    {
      "_id": "NBLs9utSXXrxOWCSV7W8",
      "chart_id": "RiQnceoUh7AJltqNHPE2",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "NHCwhgXRveZPDsdPWRyN",
      "chart_id": "rd4c4w39QQdsMrKAEMSs",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "PEZpBr4x0ArfoxQ2pz1R",
      "chart_id": "MRE6tMf1P3njDdg2i26o",
      "chart": "s",
      "version_released": "Milk+"
    },
    {
      "_id": "Poe6AXjHfaJGNYIM51En",
      "chart_id": "62btfKqnYk54DBGBCNwj",
      "chart": "d",
      "version_released": "Universe+",
      "youtube": [
        0,
        0,
        0,
        "https://youtu.be/03KNp074dgk?si=aErhqxMfr-P7-MkJ",
        0
      ]
    },
    {
      "_id": "PzmSvTjkopNRXUVjrD9z",
      "chart_id": "J1lf8koTvkAlrAVbTPqN",
      "chart": "d",
      "version_released": "Deluxe+"
    },
    {
      "_id": "RXbsTs6BN1UD7QJLeTfX",
      "chart_id": "MDbIl4FM6OnnbqAKifpJ",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "T1flNI4ZBWnfd1aXFbW8",
      "chart_id": "ufGrStl2qRLDD5QVo6BM",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "T4zeYPEPz6h357yL1atS",
      "chart_id": "f3ePVNRdAWLa9YClc6ye",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "TnRLkZXMIPh3nbJ2WA1n",
      "chart_id": "aQOCo2JSnboVYrT6aRJ8",
      "chart": "s",
      "version_released": "Murasaki",
      "youtube": [
        0,
        0,
        0,
        "https://youtu.be/j1CbAbPb-64?si=CjCD8dd-cyn8TIHq",
        0
      ]
    },
    {
      "_id": "UMUc2SyGjDMPNtQYdCw1",
      "chart_id": "FPygOZlil5ShjWJSpTdb",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "V4ZOSGdoAcNiw98nCknp",
      "chart_id": "zjiGBckD5rFsIpEIAUaa",
      "chart": "d",
      "version_released": "Deluxe"
    },
    {
      "_id": "WWJutqxwPe3xgh2PDJ8t",
      "chart_id": "3OCVPmqKUEiAazkcdRv5",
      "chart": "d",
      "version_released": "Universe+"
    },
    {
      "_id": "XJbYnyGFsSliJMaL2CSj",
      "chart_id": "ydDS1gvatp7YqIggPZlr",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "YbLkqBPZdZe262FKP24V",
      "chart_id": "cCbsmZdMg4pSv9WPnh9O",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "YkPIM2RruLgcRFJep5GF",
      "chart_id": "YXoRDEktJ3KWqaS5ML8q",
      "chart": "s",
      "version_released": "Milk+"
    },
    {
      "_id": "aYYCTLX3fazussDUHkKP",
      "chart_id": "Gq2yG9Fg0cNjcohk7i7d",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "ax4OlxqLn9yif1SIcI3U",
      "chart_id": "yfVyh43V3YuhSg8aicGy",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "b6LCB2dBPal5UJhbBpwr",
      "chart_id": "uqsafSSHxNdvU8miz854",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "cvXlZGc94u5C88fFi41f",
      "chart_id": "BS3yQTgY0xZ7C7MFKXUa",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "dv9cdRNpXavBhRgpuxB6",
      "chart_id": "HlAhyzQHeQNDFXhMYtSY",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "etk2gE9cLjgzdfcQOSQl",
      "chart_id": "GWfwOSHZ4XkYoDywcWI4",
      "chart": "s",
      "version_released": "Festival"
    },
    {
      "_id": "ffJTQ0xi8AA3op3PqHxS",
      "chart_id": "u6Xzt9yhonC2KpQC2NY4",
      "chart": "d",
      "version_released": "Splash"
    },
    {
      "_id": "fvdpGxG1IXkobRZYC5At",
      "chart_id": "VkPqmbE2UqeDFyKJt4Lf",
      "chart": "d",
      "version_released": "Festival"
    },
    {
      "_id": "h1IAGNjTxfgn6WPoDm12",
      "chart_id": "QnjmHp4rTzJ6KC6ZnSv6",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "hqVO95W8wrwp0CtQDaBe",
      "chart_id": "QsK9tpNBRPxolkYiAGTe",
      "chart": "d",
      "version_released": "Universe+"
    },
    {
      "_id": "i0A1cJGB9JgRXgwmBhWQ",
      "chart_id": "kwHkdxPst4MRLScfU7Lt",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "iKUqIHYkrvlHHjVyzFqy",
      "chart_id": "ZnAASNd9UWB4DoxuXrIs",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "jAwskFXasgiSLxAkLzln",
      "chart_id": "nEXRdsovsSFFrBJgaWIl",
      "chart": "s",
      "version_released": "Orange"
    },
    {
      "_id": "kRk6mJyEbzeV4B46Ax6J",
      "chart_id": "uojOzhKsNDE71QNsuTvV",
      "chart": "d",
      "version_released": "Deluxe+"
    },
    {
      "_id": "kuSJUJ5Jyi6A08eAn78z",
      "chart_id": "g5NcsP4e3sgGZ8faWIXG",
      "chart": "s",
      "version_released": "Finale"
    },
    {
      "_id": "kwf7Aul04DoS2s4351pW",
      "chart_id": "Tr3GKLKTURB0mnGPFshj",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "lKdFz3MXnTLn7mEFZgZM",
      "chart_id": "4nwz8dr31hy7BrHKW3h6",
      "chart": "d",
      "version_released": "Festival"
    },
    {
      "_id": "lngbbg0YAzsU8jLZupFN",
      "chart_id": "fzN9kbPMNlw1UEpziRll",
      "chart": "d",
      "version_released": "Splash+"
    },
    {
      "_id": "mQQSUxzxNvyZjXLDktad",
      "chart_id": "d0P6DS66gUqCRnWC35QQ",
      "chart": "s",
      "version_released": "Maimai"
    },
    {
      "_id": "nvVP4A0pjGvvJX44z8ec",
      "chart_id": "NLdoYrSVR8rULrirYw3h",
      "chart": "s",
      "version_released": "Milk+",
      "youtube": [
        0,
        0,
        0,
        "https://youtu.be/sgCC0ksu854?si=_ieEzrrlKD-fiico",
        0
      ]
    },
    {
      "_id": "nzaht5Fa8YcVHO7uhw2g",
      "chart_id": "LKTrXqF9h4uKno7KUbsM",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "r2pFc0NrhiOrxal4tvkr",
      "chart_id": "wkMUNaWdFXCMpCsEvHmb",
      "chart": "d",
      "version_released": "Deluxe+"
    },
    {
      "_id": "rjk9DBDgiBNYgvjSYcUP",
      "chart_id": "qtOBI3E4FEJtLq9BaQrS",
      "chart": "d",
      "version_released": "Universe"
    },
    {
      "_id": "sg9CRL9g2cawrd047Zk0",
      "chart_id": "dct5LLosCbIGI8WSFQtU",
      "chart": "d",
      "version_released": "Splash+"
    },
    {
      "_id": "tE1cvXY9txjlAgoatLI7",
      "chart_id": "fDIGMMp9zQgUNnesA7ka",
      "chart": "s",
      "version_released": "Pink+"
    },
    {
      "_id": "u6FtozFqaowBtVqYWZji",
      "chart_id": "5H63NdrnvfaLg5So5WPQ",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "uhSdx2JoZ91r62kb6ciE",
      "chart_id": "oHLuY4JnqJEVsbDede1g",
      "chart": "d",
      "version_released": "Festival+"
    },
    {
      "_id": "vHPWmvVbFHEl4UKeaS8i",
      "chart_id": "DD2yZTjfCddW6SnjgOgQ",
      "chart": "d",
      "version_released": "Festival"
    },
    {
      "_id": "yDD9iC3YrgPGh7vojyX4",
      "chart_id": "aQOCo2JSnboVYrT6aRJ8",
      "chart": "d",
      "version_released": "Festival+",
      "youtube": [
        "",
        "",
        "",
        "https://youtu.be/G_eRbnHSdEI?si=1yK6o4SkVtXBs6wv",
        ""
      ]
    },
    {
      "_id": "zPxYAqAUJDcvKhV6Cdr7",
      "chart_id": "2J2vIrf9vOLhW3QXXLQ8",
      "version_released": "Festival+",
      "chart": "d"
    },
    {
      "_id": "65758fcfe9b67e40d5e4ac40",
      "chart_id": "7V786CXpdnztOQJESSoY",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "65758ffde9b67e40d5e4ac42",
      "chart_id": "9kfTZmWRJP2uL8DFh1fF",
      "chart": "d",
      "version_released": "Buddies"
    },
    {
      "_id": "65759053e9b67e40d5e4ac43",
      "chart_id": "9orKYl5u4wLwv2L0FLQE",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657590a8e9b67e40d5e4ac44",
      "chart_id": "OPnyhgW4gYi9uPyuYR7B",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "65759149e9b67e40d5e4ac45",
      "chart_id": "LsfyTcrIAKtcQLSv0Ay7",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6575919ee9b67e40d5e4ac46",
      "chart_id": "QSJiQEjh4VgPio3qcln2",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6575929ce9b67e40d5e4ac48",
      "chart_id": "VxaWQ9r90Gp6cgXgTpGg",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657592ede9b67e40d5e4ac49",
      "chart_id": "jlGblwgPxNjfy9OSjBoE",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6575933ee9b67e40d5e4ac4a",
      "chart_id": "qdIMLberggf3XeAoTfbK",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6575938ce9b67e40d5e4ac4b",
      "chart_id": "sKeFkeaOVm6Sc5RzHdCC",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657593e0e9b67e40d5e4ac4c",
      "chart_id": "sfF52yQ6nBFaDfX6eMkV",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "65759423e9b67e40d5e4ac4d",
      "chart_id": "vqNrHcJrhtkjs8n5AA9V",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "65759463e9b67e40d5e4ac4e",
      "chart_id": "xlmAb1Z0PpC2NJggPaGn",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657594a3e9b67e40d5e4ac4f",
      "chart_id": "ymjY2Hx8JG2czkdC9PK0",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "65759526e9b67e40d5e4ac52",
      "chart_id": "yuMT38fKDM7QutDJpsLe",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6576527a9164b346a0a2a734",
      "chart_id": "6576525c9164b346a0a2a733",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657652fd9164b346a0a2a736",
      "chart_id": "657652c09164b346a0a2a735",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "6576542d9164b346a0a2a738",
      "chart_id": "6576541d9164b346a0a2a737",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657654979164b346a0a2a73a",
      "chart_id": "657654889164b346a0a2a739",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657655099164b346a0a2a73c",
      "chart_id": "657654ef9164b346a0a2a73b",
      "version_released": "Buddies",
      "chart": "d"
    },
    {
      "_id": "657657949164b346a0a2a73f",
      "chart_id": "657657809164b346a0a2a73e",
      "version_released": "Buddies",
      "chart": "d"
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