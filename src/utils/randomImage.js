const images = [
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/volcanes00016.jpg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/tortuguero-canoe-00006.jpg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/04/volcanes00015.jpg",
  "https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/carribean-tour00010.jpeg",
]
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}