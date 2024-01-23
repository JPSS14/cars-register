import { Automakers } from "@/app/constants/automakers";
import styles from "./select.module.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  items: Automakers[];
}

export const Select = ({ label, name, items, ...props }: SelectProps) => {
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
};
