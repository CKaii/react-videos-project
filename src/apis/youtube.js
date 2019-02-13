import axios from 'axios';

const KEY = "AIzaSyAP2Pesv1S9qYUtw-XIVdIM-jp5UNk4pqQ"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
})
