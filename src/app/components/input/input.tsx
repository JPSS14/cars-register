import React from "react";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <input {...props} name={name} ref={ref} className={styles.input} />
      </>
    );
  }
);

Input.displayName = "Input";
