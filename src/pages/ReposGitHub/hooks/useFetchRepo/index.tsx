import { useEffect, useState } from "react";
import api from "../../../../services";
import { Repository } from "../../interfaces";

const useFetchRepo = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [page, setPage] = useState(1);

  const Repo = {
    per_page: 2,
    owner: "soniaS4nt",
  };

  useEffect(() => {
    const { per_page, owner } = Repo;
    api
      .get(`users/${owner}/repos?per_page=${per_page}&page=${page}`)
      .then((response) => {
        setRepositories(response.data);
      });
  }, [page]);

  return { repositories, setPage, page };
};
export default useFetchRepo;
