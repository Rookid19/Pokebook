import React, { ReactNode, createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.css";
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
  const [templateId, setTemplateId] = useState(2);

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
        <Box className={styles.box_container} fontStyle={stylesObj[templateId]}>
          {templates[templateId]}
        </Box>
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
    <>
      <div>hello</div>
    </>
  );
};

const stylesObj: any = {
  1: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  2: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
