import React, { ReactNode, createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css";
import { NextRouter, useRouter } from "next/router";
import { colors } from "@/utils/colors";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState(colors.primary);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const router = useRouter();

  // tempalte id
  const [templateId, setTemplateId] = useState(1);

  const templates: any = {
    1: (
      <ColorThemeTemplate
        setColorTheme={setColorTheme}
        colorTheme={colorTheme}
      />
    ),
  };

  return (
    <ModalContext.Provider
      value={{ handleOpenModal, handleCloseModal, setTemplateId, colorTheme }}
    >
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylesObj[templateId]}>{templates[templateId]}</Box>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default function useModal() {
  return useContext(ModalContext);
}

// templates

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

const stylesObj: any = {
  1: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 320,
    // heigh: 100,
    // bgcolor: "background.paper",
    // boxShadow: 24,
    // p: 1,
    // border: "none",
    // borderRadius: 6,
    // outline: "none",
  },
  2: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
