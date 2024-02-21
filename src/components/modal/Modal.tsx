import React, { ReactNode, createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { colors } from "@/utils/colors";
import ColorThemeTemplate from "../colorTheme/ColorTheme";
import StatsTemplate from "../stats/Stats";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState(colors.primary);
  const [pokename, setPokename] = useState("");

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  // tempalte id
  const [templateId, setTemplateId] = useState(1);

  const templates: any = {
    1: (
      <ColorThemeTemplate
        setColorTheme={setColorTheme}
        colorTheme={colorTheme}
      />
    ),
    2: <StatsTemplate />,
  };

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        setTemplateId,
        colorTheme,
        pokename,
        setPokename,
      }}
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

const stylesObj: any = {
  1: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 320,
    outline: "none",
  },
  2: {
    position: "absolute" as "absolute",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    outline: "none",
  },
};
