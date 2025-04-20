// src/components/BookRecommendations.jsx
import { useEffect, useState } from "react";

const BookRecommendations = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("fiction");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
        );
        const data = await res.json();
        setBooks(data.items || []);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recommended Books 📚</h2>

      <input
        type="text"
        placeholder="Search genre or keyword..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="bg-white p-4 shadow-md rounded-xl">
              <img
                src={info.imageLinks?.thumbnail}
                alt={info.title}
                className="mb-2 w-full h-48 object-cover rounded"
              />
              <h3 className="font-semibold text-lg">{info.title}</h3>
              <p className="text-sm text-gray-500">
                {info.authors?.join(", ")}
              </p>
              <p className="text-sm mt-2 line-clamp-3">
                {info.description || "No description available."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookRecommendations;
