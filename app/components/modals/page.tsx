"use client";

import { Button, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

export default function Page() {
  return (
    <Group>
      <Button
        onClick={() => {
          modals.openConfirmModal({
            title: "Please confirm your action",
            centered: true,
            children: (
              <Text size="sm">
                This action is so important that you are required to confirm it
                with a modal. Please click one of these buttons to proceed.
              </Text>
            ),
            labels: { confirm: "Confirm", cancel: "Cancel" },
            onCancel: () => {
              notifications.show({
                color: "red",
                title: "Default notification",
                message: "Cancel button was clicked",
              });
            },
            onConfirm: () => {
              notifications.show({
                title: "Default notification",
                message: "Confirm button was clicked",
              });
            },
          });
        }}
      >
        Open confirm modal
      </Button>
    </Group>
  );
}
