// import styles from './FeedbackOptions.module.css';
import propTypes from "prop-types";
import s from "../FeedbackOptions/FeedbackOptions.module.css";

export function FeedbackOptions({ options, onLeaveFedback }) {
  return (
    <div className={s.item}>
      {options.map((el) => (
        <button
          key={el}
          name={el}
          onClick={onLeaveFedback}
          className={s.button}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFedback: propTypes.func,
};
