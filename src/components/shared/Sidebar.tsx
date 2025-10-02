import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Box, FileText, HouseIcon } from "lucide-react"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Manage Your Content",
      url: "#",
      items: [
        {
          title: "Home",
          url: "/",
          icon: HouseIcon,
        },
        {
          title: "Manage Blog",
          url: "/dashboard/manage-blogs",
          icon: FileText,
        },
        {
          title: "Manage Projects",
          url: "/dashboard/manage-projects",
          icon: Box
        },
      ],
    }
  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="mt-3.5">
        <Link href="/">
          <h3 className="font-bold text-xl px-2">
            <span className="text-primary">Mahdi&apos;s</span> <span> Protfolio</span>
          </h3>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data?.navMain?.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="uppercase">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        {item.icon && <item.icon className="w-16 h-16" />}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
