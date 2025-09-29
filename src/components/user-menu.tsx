"use client"
import {
  LayoutDashboard,
  LogIn,
  LogOutIcon,
  UserRound,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function UserMenu() {

  const session = useSession()
  console.log(session)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-auto p-2 hover:bg-transparent rounded-full bg-muted">
          <UserRound className="text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          {session.status === "authenticated"
            ? <>
              <span className="text-foreground truncate text-sm font-medium">
                {session.data?.user.name}
              </span>
              <span className="text-muted-foreground truncate text-xs font-normal">
                {session.data?.user.email}
              </span>
            </>
            : <span className="text-foreground truncate text-sm font-medium">
              Owner Access
            </span>
          }
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/login"}>
          <DropdownMenuItem>
            <LogIn size={16} className="opacity-60" aria-hidden="true" />
            <span>Login</span>
          </DropdownMenuItem>
        </Link>
        {session.status === "authenticated" && (
          <>
            <Link href={"/dashboard"}>
              <DropdownMenuItem>
                <LayoutDashboard size={16} className="opacity-60" aria-hidden="true" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Logout</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
