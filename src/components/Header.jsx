import Button from "@mui/material/Button";
import styles from './css/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Button variant="outlined" size="Large">
        Button1
      </Button>
      <Button
      Button variant="outlined" size="Large">
        Button2
      </Button>
      <Button
      Button variant="outlined" size="Large">
        Button2
      </Button>

    </div>
  );
}
