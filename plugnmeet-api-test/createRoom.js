const CryptoJS = require("crypto-js");
const axios = require("axios");

// must match your config.yaml values
const API_KEY = "plugnmeet"; 
const SECRET = "zumyyYWqv7KR2kUqvYdq4z4sXg7XTBD2ljT6"; 

async function createRoom() {
  const body = {
  room_id: "room01",
  name: "Test Room",
  max_participants: 10,
  recording: false,
  metadata: {
    room_title: "My Test Room",
    room_features: {
      allow_screen_share: true,
      allow_chat: true,
      allow_file_upload: true
    }
  }
};

  // stringify body
  const bodyStr = JSON.stringify(body);

  // generate HMAC-SHA256 signature (hex encoded)
  const hash = CryptoJS.HmacSHA256(bodyStr, SECRET);
  const signature = CryptoJS.enc.Hex.stringify(hash);

  console.log("Signature:", signature);
  try {
    const res = await axios.post(
      "http://localhost:8085/auth/room/create", // management API
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "API-KEY": API_KEY,
          "HASH-SIGNATURE": signature,
        },
      }
    );

    console.log("Response:", res.data);
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
}

createRoom();
