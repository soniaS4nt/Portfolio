import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEmailJs } from "../hooks";
import { Button, Form, Input, TextArea } from "./styles";

const ModalContact: React.FC = () => {
  const { sendEmail, finalRef, form, initialRef, isOpen, onClose, onOpen } =
    useEmailJs();

  return (
    <>
      <Button onClick={onOpen}>send me an email</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send me a message</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Form ref={form} onSubmit={sendEmail}>
              <Input
                type="text"
                name="fullName"
                placeholder="Your full name"
                minLength={10}
                maxLength={70}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                min={6}
                max={70}
                required
              />
              <TextArea
                name="message"
                placeholder="Write me something..."
                minLength={5}
                maxLength={300}
                required
              />
              <Button type="submit">Send</Button>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalContact;
