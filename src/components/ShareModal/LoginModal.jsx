import { Modal, useMantineTheme } from "@mantine/core";
import Auth from "../../pages/Auth/Auth";
function LoginModal({ loginModalOpened, setLoginModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={loginModalOpened}
      onClose={() => setLoginModalOpened(false)}
    >
      <Auth />
      
      
    </Modal>
  );
}

export default LoginModal;
