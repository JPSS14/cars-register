import styles from "./text-area.module.scss";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = ({
  label,
  children,
  name,
  ...props
}: TextAreaProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea {...props} name={name} className={styles.textArea}>
        {children}
      </textarea>
    </div>
  );
};
