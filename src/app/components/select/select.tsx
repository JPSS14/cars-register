import { Automakers } from "@/app/constants/automakers";
import styles from "./select.module.scss";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  items: Automakers[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, items, ...props }, _ref) => {
    return (
      <>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <select className={styles.select} {...props}>
          {items.map((item) => (
            <option key={item.id} className={styles.option}>
              {item.name}
            </option>
          ))}
        </select>
      </>
    );
  }
);

Select.displayName = "Select";
