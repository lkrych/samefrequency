export const iconChoices = () => (
      [
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662592/violin.png",
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662591/microphone.png",
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662591/casette.png",
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662591/cd.png",
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662591/music.png",
        "https://res.cloudinary.com/heab4q3lg/image/upload/h_64/v1495662591/radio.png"
      ]
);


export const magnifyIcon = (imageUri) => (
  imageUri.replace("h_64","h_128")
);

export const minnifyIcon = (imageUri) => (
  imageUri.replace("h_128","h_32")
);

export const mediumifyIcon = (imageUri) => (
  imageUri.replace("h_128","h_64")
);
