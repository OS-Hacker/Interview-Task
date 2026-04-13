import { useEffect, useState } from "react";

export function useFetch(apiFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFn();
        console.log(response.data?.data); 
        setData(response.data?.data); 
      } catch (err) {
        setError("Failed to fetch data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
