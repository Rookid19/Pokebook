import { colors } from "@/utils/colors";
import styles from './ColorTheme.module.css'

const ColorThemeTemplate = ({ setColorTheme, colorTheme }: any) => {
    const Colors = [colors.primary, colors.secondary, colors.tertiary];
  
    return (
      <div>
        <div className={styles.head}>Choose Theme</div>
        <div className={styles.body}>
          {Colors.map((color, index) => (
            <div
              className={styles.theme_wrapper}
              id={colorTheme === color ? styles.theme_wrapper_active : ""}
              key={index}
              onClick={() => setColorTheme(color)}
            >
              <div
                className={styles.theme}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default ColorThemeTemplate;