import React, { VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { theme } from "../ChakraTheme/color";
import styles from "./index.module.css";
import { Button } from "../Button/Button";

type ModalInfo = {
  title: string;
  text: any;
  onClick?: any;
  disabled?: any;
  btnType?: any;
};

export const ModalItem: VFC<ModalInfo> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        disabled={props.disabled}
        btnText="Create! 🎉"
        type={props.btnType}
        size="sm"
        onClick={() => {
          onOpen();
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="dark:bg-semiDark dark:text-white">
            {props.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            className={`${styles.text} text-semiDark dark:text-fontDark bg-white dark:bg-semiDark`}
          >
            {props.text}
          </ModalBody>
          <ModalFooter className="bg-white dark:bg-semiDark rounded-bl-md rounded-br-md">
            <div>
              <Button
                btnText="Close"
                type="delete"
                size="sm"
                onClick={() => {
                  onClose();
                }}
              />
            </div>
            <div className="ml-4">
              <Button
                btnText="Create! 🎉"
                type="other"
                size="sm"
                onClick={props.onClick}
              />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
