import store from "store";

const fetchHumblrPics = (tag) => {
  const { pictures, gifs, videos } = store.config;
  const limit = 20;

  return fetch(
    `https://humblr.social/api/v1/timelines/tag/${encodeURIComponent(tag)}?only_media=true&limit=${limit}`
  )
    .then(response => response.json())
    .then(data => {
      const images = data.map(post => {
        let attachedImages = post["media_attachments"].map(attachment => {
          let result;
          const type = attachment["type"];
          if ((type === "image" && pictures)
              || (type === "gifv" && gifs)
              || (type === "video" && videos)) {
            result = attachment["url"];
          }
          return result;
        });
        return attachedImages;
      })
      return [].concat.apply([], images).filter(image => !!image);
    })
  }

export default fetchHumblrPics;