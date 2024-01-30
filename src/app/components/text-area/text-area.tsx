import React from "react";
import styles from "./text-area.module.scss";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, children, name, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <textarea {...props} name={name} className={styles.textArea} ref={ref}>
          {children}
        </textarea>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
