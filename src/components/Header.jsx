import Button from "@mui/material/Button";
import styles from './css/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Button variant="outlined" size="Large">
        Large
      </Button>
    </div>
  );
}
