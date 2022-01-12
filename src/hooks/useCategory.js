import { useEffect, useState } from "react";
import { dataApi } from "../data/dataApi";

export const useCategory = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const resp = await dataApi.get("https://fake-api-mock.herokuapp.com/categories");
    setCategory(resp.data);
    console.log(category);
  };

  useEffect(() => {
    getCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    category,
    getCategory,
  };
};
