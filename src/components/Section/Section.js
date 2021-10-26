import propTypes from "prop-types";
import s from "../Section/Section.module.css";

export function Section({ title, children }) {
  return (
    <section className={s.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
