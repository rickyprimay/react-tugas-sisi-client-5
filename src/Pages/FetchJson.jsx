import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../Layouts/AdminLayout";
import TableForResponseJSON from "../components/TableForResponseJSON";

const FetchJson = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginateNext = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Hasil dari Fetch Posts dari api jsonplaceholder :</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            <TableForResponseJSON data={currentPosts} currentPage={currentPage} />
            <div className="flex justify-between mt-4">
              <button
                onClick={paginatePrevious}
                className="px-4 py-2 bg-gray-700 text-white rounded"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={paginateNext}
                className="px-4 py-2 bg-gray-700 text-white rounded"
                disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default FetchJson;
