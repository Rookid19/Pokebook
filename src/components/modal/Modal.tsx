import React, { ReactNode, createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css";
// import Button from "../button/button";
import { NextRouter, useRouter } from "next/router";
// import { fetcher } from "@/services/global/api";
// import TextInput from "../textinput/textInput";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const router = useRouter();

  // tempalte id
  const [templateId, setTemplateId] = useState(1);

  const templates: any = {
    1: (
      <ColorThemeTemplate router={router} handleCloseModal={handleCloseModal} />
    ),
  };

  return (
    <ModalContext.Provider
      value={{ handleOpenModal, handleCloseModal, setTemplateId }}
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

const ColorThemeTemplate = ({
  router,
  handleCloseModal,
}: {
  router: NextRouter;
  handleCloseModal: () => any;
}) => {
  return (
    <div>
      <div className={styles.head}>Choose Theme</div>
      <div className={styles.body}></div>
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
