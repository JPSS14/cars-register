import { Automakers } from "@/app/constants/automakers";
import styles from "./select.module.scss";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  items: Automakers[];
  errorMessage?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, errorMessage, name, items, ...props }, _ref) => {
    return (
      <div className={styles.selectContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <select
          className={`${styles.select} ${errorMessage && styles.errorSelect}`}
          {...props}
          defaultValue=""
        >
          <option disabled value="">
            Selecione uma opção
          </option>
          {items.map((item) => (
            <option key={item.id} className={styles.option}>
              {item.name}
            </option>
          ))}
        </select>
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
