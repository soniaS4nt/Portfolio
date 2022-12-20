import { useEffect, useState } from "react";
import api from "../../../../services";
import { Repository } from "../../interfaces";

const useFetchRepo = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get("users/soniaS4nt/repos").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  return { repositories };
};
export default useFetchRepo;
