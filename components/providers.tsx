"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { FC, useState } from "react";

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
      <ModalsProvider modals={{}}>{children}</ModalsProvider>
    </MantineProvider>
  );
}

const providers: FC<{ children: React.ReactNode }>[] = [
  MantineProviderWrapper,
  QueryClientProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
