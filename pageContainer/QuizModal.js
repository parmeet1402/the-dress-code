import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import router from "next/router";

const QuizModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="primary" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Style Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text variant="body2">
              Please Finish this Quiz before we proceed.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr="1em" onClick={onClose}>
              Later
            </Button>
            <Button
              variant="primary"
              on
              onClick={() => router.push("/style-quiz")}
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
