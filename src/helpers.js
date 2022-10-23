import axios from "axios";
import XMLParser from "react-xml-parser";

export const fetchData = async () => {
  var xml = [];
  await axios
    .get("https://www.tcmb.gov.tr/kurlar/today.xml")
    .then((res) => res.data)
    .then((data) => {
       xml = new XMLParser().parseFromString(data);
    })
    .catch((err) => console.log(err));
  return xml;
};
