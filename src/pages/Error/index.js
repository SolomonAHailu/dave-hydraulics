import React from "react";
import ErrorImg from "../../assets/error.png";
import "./index.scss";

const Erro = () => {
  return (
    <div className="error-container">
      <div>
        <img src={ErrorImg} alt="" />
      </div>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>
          The page you are looking for might be under construction or does not
          exist.
        </p>
      </div>
    </div>
  );
};

export default Erro;
