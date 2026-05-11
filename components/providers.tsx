"use client";

import {
  createTheme,
  MantineProvider
} from "@mantine/core";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { ThemeProvider as ThemeProviderBase } from "@wrksz/themes";
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

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderBase themes={["light", "dark"]}>{children}</ThemeProviderBase>
  );
}

function MantineProviderWrapper({ children }: { children: React.ReactNode }) {
  const theme = createTheme({});

  return <MantineProvider theme={theme} defaultColorScheme="auto">{children}</MantineProvider>;
}

const providers: FC<{ children: React.ReactNode }>[] = [
  ThemeProvider,
  MantineProviderWrapper,
  QueryClientProvider,
  agGridProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
