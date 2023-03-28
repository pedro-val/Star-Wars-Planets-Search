import { useState, useCallback } from 'react';

function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [fullApiReturn, setFullApiReturn] = useState({});
  const [worldsReturn, setWorldReturn] = useState([]);

  const fetchPlanets = useCallback(async (endpoint) => {
    setIsLoading(true);
    const firstFetch = await fetch(endpoint);
    const json = await firstFetch.json();
    json.results.forEach((world) => {
      delete world.residents;
    });
    setWorldReturn(json.results);
    setFullApiReturn(json);
    setIsLoading(false);
  }, []);

  return {
    worldsReturn,
    isLoading,
    fullApiReturn,
    fetchPlanets,
    setIsLoading,
    setWorldReturn,
  };
}

export default useFetch;
