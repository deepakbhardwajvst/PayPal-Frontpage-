import React from "react";

const ButtonOne = ({ children, type = "primary", onClickHandler }) => {
  return (
    <Button
      onClick={onClickHandler}
      className={`py-1 px-6 font-medium whitespace-nowrap rounded-3xl border-2 border-darkBlue hover:border-lightBlue ${
        type == "primary"
          ? "bg-transparent text-darkBlue hover:text-lightBlue"
          : "bg-darkBlue text-white hover:bg-lightBlue"
      }`}
    >
      {children}
    </Button>
  );
};

export default ButtonOne;
