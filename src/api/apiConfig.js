const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4a608ac97ed2a47e56fdf6d98e8ec371",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
