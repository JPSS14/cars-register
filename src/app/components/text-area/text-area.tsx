import React from "react";
import styles from "./text-area.module.scss";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, errorMessage, children, name, ...props }, ref) => {
    return (
      <div className={styles.textAreaContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          {...props}
          name={name}
          className={`${styles.textArea} ${
            errorMessage && styles.errorTextArea
          }`}
          ref={ref}
        >
          {children}
        </textarea>
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
