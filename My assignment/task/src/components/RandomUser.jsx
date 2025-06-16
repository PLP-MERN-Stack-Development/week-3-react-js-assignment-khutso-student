import { useState, useEffect } from "react";
import { fetchData } from '../api/fetchRandomUser.js';

export default function RandomUser() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      try {
        const result = await fetchData(12); // fetch 12 users
        setUsers(result.results);
        setError(null);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, [page]); // refetch when page changes

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name..."
        className="mb-6 w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
      />

      {/* Loading / Error */}
      {loading && <p className="text-center">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredUsers.map((user, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-2">
              {user.name.first} {user.name.last}
            </h3>
            <p className="text-center text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
        >
          Prev
        </button>
        <span className="py-2">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
