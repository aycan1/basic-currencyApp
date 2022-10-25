import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContext } from "./store/main-context";

const MainPage = () => {
  const { getData, dataList, selectedData, onSetCurrency } =
    useContext(MainContext);
  return (
    <div className="container">
      <Button className="px-5" onClick={() => getData()}>
        Fetch Data
      </Button>
      {dataList.length > 0 && (
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => onSetCurrency(e.target.value)}
        >
          <option>Select Currency</option>
          {dataList?.map((item, index) => (
            <option key={index} value={item.attributes.CurrencyCode}>
              {item.attributes.CurrencyCode}
            </option>
          ))}
        </Form.Select>
      )}
      {selectedData !== null && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          {selectedData.children.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </div>
  );
};

export default MainPage;
