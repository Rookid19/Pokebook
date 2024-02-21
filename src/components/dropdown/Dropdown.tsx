import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { RiArrowDownSLine } from "react-icons/ri";

function Dropdown({ selectedOption, setSelectedOption }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [8, 12, 16, 24];

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={styles.dropdown_header}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.selectedOption}>{selectedOption}</div>
          <div className={styles.icon}>
            <RiArrowDownSLine size={24} />
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdown_options}>
            {options.map((option) => (
              <div key={option} onClick={() => handleOptionClick(option)} 
              className={styles.dropdown_option}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
