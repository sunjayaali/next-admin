"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { useTheme } from "@wrksz/themes/client";
import { ConfigProvider, theme } from "antd";

import { FC } from "react";

const queryClient = new QueryClient();

function QueryClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
}

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm:
            resolvedTheme === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}

const providers: FC<{ children: React.ReactNode }>[] = [
  AntdConfigProvider,
  QueryClientProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
