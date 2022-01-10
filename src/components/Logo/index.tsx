import React from "react";

import ImgLogo from "../../assets/images/logo.svg";

type Props = {
  onClick?: () => void;
};

export const Logo = ({ ...rest }: Props) => {
  return (
    <div className="logo" {...rest}>
      <img src={ImgLogo} alt="Logo Tech People Dark" />
    </div>
  );
};
