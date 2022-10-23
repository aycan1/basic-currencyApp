import React, { createContext, useState } from "react";
import { fetchData } from "../helpers";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const getData = async () => {
    const data = await fetchData();
    setDataList(data.children);
  };
  const onSetCurrency = (value) => {
    let selectedData;
    dataList?.forEach((element) => {
      if (element.attributes.CurrencyCode === value) {
        selectedData = element;
      }
    });
    setSelectedData(selectedData);
  };

  return (
    <MainContext.Provider
      value={{
        getData,
        dataList,
        selectedData,
        onSetCurrency,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
