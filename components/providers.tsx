"use client";

import {
  AutoCompleteProps,
  AutoCompletePropsContext,
  MultiSelectProps,
  MultiSelectPropsContext,
} from "@progress/kendo-react-dropdowns";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { ThemeProvider as ThemeProviderBase } from "@wrksz/themes";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { FC, useState } from "react";

function multiSelectProvider({ children }: { children: React.ReactNode }) {
  return (
    <MultiSelectPropsContext.Provider
      value={(props: MultiSelectProps) => {
        return {
          className: "border-none! shadow-none! text-inherit! bg-inherit!",
          autoClose: false,
          // tagRender: (_, tag: React.ReactElement<ChipProps>) => {
          //   return cloneElement(tag, {
          //     ...tag.props,
          //     className: cn("badge! badge-ghost", tag.props.className),
          //   });
          // },
          // itemRender: (li, itemProps) => {
          //   const itemChildren = <>{itemProps.dataItem}</>;
          //   return cloneElement(li, li.props, itemChildren);
          // },
          popupSettings: {
            popupClass: "",
            animate: false,
          },
          ...props,
        };
      }}
    >
      {children}
    </MultiSelectPropsContext.Provider>
  );
}

function AutoCompleteProvider({ children }: { children: React.ReactNode }) {
  return (
    <AutoCompletePropsContext.Provider
      value={(props: AutoCompleteProps) => {
        return {
          className: "border-none! shadow-none! text-inherit! bg-inherit!",
          popupSettings: {
            popupClass: "",
            animate: false,
          },
          // itemRender: (li, itemProps) => {
          //   const itemChildren = <>{itemProps.dataItem}</>;
          //   return cloneElement(li, li.props, itemChildren);
          // },
          ...props,
        };
      }}
    >
      {children}
    </AutoCompletePropsContext.Provider>
  );
}

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

const providers: FC<{ children: React.ReactNode }>[] = [
  ThemeProvider,
  QueryClientProvider,
  agGridProvider,
  multiSelectProvider,
  AutoCompleteProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
