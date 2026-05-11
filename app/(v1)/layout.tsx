"use client";

import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "Components",
    children: [
      { label: "Buttons", href: "/components/buttons" },
      { label: "Forms", href: "/components/forms" },
      { label: "Data Grid", href: "/components/datagrid" },
      { label: "Simple Table", href: "/components/simple-table" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Header
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <RenderMenuItems items={navItems} pathname={pathname} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

function RenderMenuItems({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  return items.map((item) => {
    if (!item.children) {
      return (
        <NavLink
          key={item.label}
          component={Link}
          label={item.label}
          href={item.href!}
          active={pathname === item.href}
        />
      );
    }

    return (
      <NavLink key={item.label} label={item.label} defaultOpened>
        <RenderMenuItems items={item.children} pathname={pathname} />
      </NavLink>
    );
  });
}
