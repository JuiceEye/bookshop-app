import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

export const fetchBooks = async () => {
  try {
    const response = await api.get("/volumes", {
      params: {
        q: "programming",
        maxResults: 10,
      },
    });

    const books = response.data.items.map((item) => {
      return {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown Author",
        image: item.volumeInfo.imageLinks?.thumbnail || "",
      };
    });

    return books;
  } catch (error) {
    throw error;
  }
};