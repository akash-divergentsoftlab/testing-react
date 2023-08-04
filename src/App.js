import React, { useState } from "react";
import FormChildComponent from "./FormChildComponent";
import TableComponent from "./TableComponent";

const App = () => {
  const intitialValues = {
    id: "",
    name: "",
    email: "",
    phoneno: "",
    edit: false,
  };
  // const [data, setdata] = useState("")
  const [obectData, setobectData] = useState({ ...intitialValues });
  const [editObject, setEditObject] = useState({ ...intitialValues });

  const [arrayData, setarrayData] = useState([]);

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setobectData({ ...obectData, [name]: value });
  };

  const onChangeHandlEditChange = (e) => {
    const { name, value } = e.target;
    setEditObject({ ...editObject, [name]: value });
  };

  const handleSubmit = () => {
    setarrayData([
      ...arrayData,
      {
        id: Math.random().toFixed(2),
        name: obectData.name,
        email: obectData.email,
        phoneno: obectData.phoneno,
        edit: false,
      },
    ]);
    setobectData({ ...intitialValues });
  };

  const handleEdit = (id) => {
    const updatedArray = arrayData.map((object) => {
      if (object.id === id) {
        // Use the spread operator to create a new object with the "edit" property set to false
        setEditObject(object);
        return {
          ...object,
          edit: true,
        };
      } else {
        return object;
      }
    });
    setarrayData(updatedArray);
  };

  const handleSaveEdit = () => {
    const updatedArray = arrayData.map((object) => {
      if (object.id === editObject.id) {
        return {
          ...editObject,
          edit: false,
        };
      } else {
        return object;
      }
    });
    setarrayData(updatedArray);
    setEditObject({ ...intitialValues });
    console.log("3. " + JSON.stringify(updatedArray));
  };

  const handleDelete = (id) => {
    setarrayData(arrayData.filter((item) => item.id !== id));
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      {console.log("1. " + JSON.stringify(obectData))}
      {console.log("2. " + JSON.stringify(arrayData))}
      <div style={{ marginTop: "20px" }}>
        <FormChildComponent
          obectData={obectData}
          onChangeHandle={onChangeHandle}
          handleSubmit={handleSubmit}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          arrayData={arrayData}
          editObject={editObject}
          handleSaveEdit={handleSaveEdit}
          onChangeHandlEditChange={onChangeHandlEditChange}
        />
      </div>
      <hr />
    </div>
  );
};

export default App;
//    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
