import React from "react";
import cx from "classnames";

import { CardContainer } from "./Card.styles";

export const Card = ({ id, color, flipped, disabled, handleFlip }) => {
  const classNames = cx({
    flipped: flipped,
    disabled: disabled
  });
  return (
    <>
      {disabled ? (
        <CardContainer className="disabled" />
      ) : (
        <CardContainer
          onClick={() => handleFlip(id)}
          className={classNames}
          color={color}
        />
      )}
    </>
  );
};
