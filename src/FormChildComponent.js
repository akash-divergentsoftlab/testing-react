import React from "react";

const FormChildComponent = ({ obectData, onChangeHandle, handleSubmit }) => {
  return (
    <div>
      <input name="name" value={obectData.name} onChange={onChangeHandle} />
      <input name="email" value={obectData.email} onChange={onChangeHandle} />
      <input
        name="phoneno"
        value={obectData.phoneno}
        onChange={onChangeHandle}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormChildComponent;
