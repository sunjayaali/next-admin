"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { useTheme } from "@wrksz/themes/client";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "antd-style";
import { FC } from "react";

const queryClient = new QueryClient();

function QueryClientProvider({ children }: { children: React.ReactNode }) {
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
      <QueryClientProvider>
        <ModalsProvider modals={{}}>{children}</ModalsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <AntdRegistry>
      <ConfigProvider theme={{}}>
        <ThemeProvider appearance={resolvedTheme}>{children}</ThemeProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
}

const providers: FC<{ children: React.ReactNode }>[] = [
  AntdConfigProvider,
  MantineProviderWrapper,
  QueryClientProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
