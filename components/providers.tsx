"use client";

import { Button, createTheme, MantineProvider, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { FC, useState } from "react";

function agGridProvider({ children }: { children: React.ReactNode }) {
  const modules = [AllCommunityModule];
  return <AgGridProvider modules={modules}>{children}</AgGridProvider>;
}

function QueryClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
}

function MantineProviderWrapper({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    components: {
      Modal: {
        defaultProps: {
          closeOnClickOutside: false,
          withCloseButton: false,
          centered: true,
        },
      },
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications />
      <ModalsProvider
        modals={{
          test: TestModal,
        }}
      >
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}

const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

const providers: FC<{ children: React.ReactNode }>[] = [
  // ThemeProvider,
  MantineProviderWrapper,
  QueryClientProvider,
  agGridProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
