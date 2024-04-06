import React from "react";
import Button from "@mui/material/Button";
const ButtonOne = ({ children, type = "primary", onClickHandler }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClickHandler}
      className={`py-1 px-3 sm:px-6  font-medium whitespace-nowrap rounded-3xl border-2 border-darkBlue hover:border-lightBlue ${
        children == "Log In"
          ? "bg-white text-blue-700"
          : " bg-blue-700 text-white"
      }`}
    >
      {children}
    </Button>
  );
};

export default ButtonOne;
