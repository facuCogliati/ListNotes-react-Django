import React from "react";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { Link } from "react-router-dom";
const AddButtom = () => {
  return (
    <Link to={"/note/create"} className="floating-button">
      <AddIcon />
    </Link>
  );
};

export default AddButtom;
