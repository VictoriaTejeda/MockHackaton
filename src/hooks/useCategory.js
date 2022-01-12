import { useEffect, useState } from "react";
import { dataApi } from "../data/dataApi";

export const useCategory = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const resp = await dataApi.get(
      "https://fake-api-mock.herokuapp.com/categories"
    );
    setCategory(resp.data);
  };

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [recovery, setRecovery] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });
  const [dataEdit, setDataEdit] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });
  const defaultData = (event) => {
    setDataEdit({
      ...dataEdit,
      [event.target.name]: event.target.value,

    });

    //console.log(event.target.value);
  };

  const [conditionalRender, setConditionalRender] = useState(true);

  const changeCondition = () => {
    setConditionalRender(false);
  };

  const recoverDataFn = (id, name, description, url) => {
    setRecovery({
      id: id,
      name: name,
      description: description,
      url: url,
    });
    setDataEdit({
      id: id,
      name: name,
      description: description,
      url: url,
    });
  };

  const editUser = async (id) => {
    await dataApi.patch(
      `https://fake-api-mock.herokuapp.com/categories/${id}`,
      {
        id: dataEdit.id,
        name: dataEdit.name,
        url: dataEdit.url,
        description: dataEdit.description,
      }
    );
  };
  return {
    category,
    getCategory,
    editUser,
    conditionalRender,
    recoverDataFn,
    recovery,
    defaultData,
    changeCondition,
    dataEdit,
  };
};
