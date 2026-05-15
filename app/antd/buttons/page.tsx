"use client";

import { Button, Modal } from "antd";
import { useThemeMode } from "antd-style";
import { useTheme } from "@wrksz/themes/client";

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme();
  const { appearance, setAppearance } = useThemeMode();
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <Button
        onClick={() => {
          modal.info({
            centered: true,
          });
        }}
      >
        Modal Info
      </Button>

      <Button
        onClick={() => {
          modal.confirm({
            centered: true,
          });
        }}
      >
        Modal Confirm
      </Button>

      <Button
        onClick={() => {
          setAppearance(resolvedTheme === "light" ? "dark" : "light");
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </Button>
      {contextHolder}
    </>
  );
}
