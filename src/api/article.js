export const fetchArticles = async (username) => {
  const response = await fetch(
    `https://dev.to/api/articles?username=${username}`
  );
  const data = await response.json();
  return data;
};
