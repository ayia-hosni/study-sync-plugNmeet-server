const jwt = require("jsonwebtoken");

const apiKey = "plugnmeet"; 
const secret = "zumyyYWqv7KR2kUqvYdq4z4sXg7XTBD2ljT6";

const payload = {
  api_key: apiKey,
  iss: apiKey,          // must match
  sub: "user123",       // unique user id
  user_id: "user123",
  name: "El-Mohandes",
  room_id: "room01",    // must match created room
  role: "moderator",    // or "participant"
  exp: Math.floor(Date.now() / 1000) + 60 * 60,
  iat: Math.floor(Date.now() / 1000)
};

const token = jwt.sign(payload, secret, { algorithm: "HS256" });
console.log("Join URL:", `http://localhost:8085/?access_token=${token}`);
