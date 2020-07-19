import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cc1txII4IN6AIIQRfilvkaTasnbsP8JozapOUhYOCBg"
  }
});
