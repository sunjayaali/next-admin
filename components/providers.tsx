"use client";

import { cn } from "@/lib/utils";
import { ChipProps } from "@progress/kendo-react-buttons";
import {
  AutoCompleteProps,
  AutoCompletePropsContext,
  MultiSelectProps,
  MultiSelectPropsContext,
} from "@progress/kendo-react-dropdowns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { cloneElement, FC, useState } from "react";

function multiSelectProvider({ children }: { children: React.ReactNode }) {
  return (
    <MultiSelectPropsContext.Provider
      value={(props: MultiSelectProps) => {
        return {
          autoClose: false,
          tagRender: (_, tag: React.ReactElement<ChipProps>) => {
            return cloneElement(tag, {
              ...tag.props,
              className: cn("badge! badge-ghost", tag.props.className),
            });
          },
          // itemRender: (li, itemProps) => {
          //   const itemChildren = <>{itemProps.dataItem}</>;
          //   return cloneElement(li, li.props, itemChildren);
          // },
          popupSettings: {
            popupClass: "menu w-full bg-base-200!",
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
            popupClass: "menux w-full",
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

function QueryClientProviderx({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

const providers: FC<{ children: React.ReactNode }>[] = [
  QueryClientProviderx,
  agGridProvider,
  multiSelectProvider,
  AutoCompleteProvider,
];

export default function Providers({ children }: { children: React.ReactNode }) {
  console.log("Providers rendered");
  return providers.reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
}
