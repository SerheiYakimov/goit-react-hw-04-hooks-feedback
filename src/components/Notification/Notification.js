import propTypes from "prop-types";
import s from "../Notification/Notification.module.css";

export function Notification({ message }) {
  return <p className={s.container}>{message}</p>;
}

Notification.propTypes = {
  message: propTypes.string,
};
