import React from "react";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./Button.css";

const button = props => {
  let buttonElement = null;

  const buttonClasses = classNames(styles.button, {
    [styles.primary]: !props.buttonType || props.buttonType === "primary",
    [styles.primaryLg]:
      (!props.buttonType || props.buttonType === "primary") &&
      props.buttonSize === "large",
    [styles.secondary]: props.buttonType === "secondary",
    [styles.secondaryLg]:
      props.buttonType === "secondary" && props.buttonSize === "large",
    [styles.blue]: props.buttonType === "blue",
    [styles.red]: props.buttonType === "red",
    [styles.cyan]: props.buttonType === "cyan",
    [styles.borderLight]: props.buttonType === "borderLight",
    [styles.linkBtn]: props.buttonType === "linkBtn"
  });

  switch (props.buttonElement) {
    case "aTag":
      buttonElement = (
        <a
          className={[buttonClasses, props.className].join(" ")}
          href={props.href}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <span>{props.children}</span>
        </a>
      );
      break;
    case "navLink":
      buttonElement = (
        <NavLink
          className={[buttonClasses, props.className].join(" ")}
          to={props.to}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <span>{props.children}</span>
        </NavLink>
      );
      break;
    case "link":
      buttonElement = (
        <Link
          className={[buttonClasses, props.className].join(" ")}
          to={props.to}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <span>{props.children}</span>
        </Link>
      );
      break;
    default:
      buttonElement = (
        <button
          className={[buttonClasses, props.className].join(" ")}
          onClick={props.onClick}
          disabled={props.disabled}
          onMouseEnter={props.onMouseEnter}
        >
          <span>{props.children}</span>
        </button>
      );
  }

  return buttonElement;
};

export default button;