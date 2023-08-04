import React from "react";

const TableComponent = ({
  arrayData,
  handleEdit,
  handleDelete,
  editObject,
  handleSaveEdit,
  onChangeHandlEditChange,
}) => {
  return (
    <div>
      {arrayData.map((item, index) => {
        return (
          <table>
            <tr>
              <th>Sno:</th>
              <th>Name:</th>
              <th>email:</th>
              <th>Phone no:</th>
            </tr>
            <tr>
              <td>
                {" "}
                {item.edit ? (
                  <input
                    name="name"
                    value={editObject.name}
                    onChange={onChangeHandlEditChange}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {item.edit ? (
                  <input
                    name="email"
                    value={editObject.email}
                    onChange={onChangeHandlEditChange}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {item.edit ? (
                  <input
                    name="phoneno"
                    value={editObject.phoneno}
                    onChange={onChangeHandlEditChange}
                  />
                ) : (
                  item.phoneno
                )}
              </td>
              <td>
                {item.edit ? (
                  <button onClick={() => handleSaveEdit()}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default TableComponent;
