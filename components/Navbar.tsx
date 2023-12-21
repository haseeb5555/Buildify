'use client'

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/constants";
import NextLink from "next/link";
import clsx from "clsx";
import { useRef, useEffect } from "react";

import { ThemeSwitch } from "./them-switcher";
import { GithubIcon, TwitterIcon } from "./icon";
import { UserButton } from "@clerk/nextjs";




export const Navbar = () => {
	const ref = useRef<HTMLInputElement | undefined>()
	useEffect(() => {
		ref.current?.focus()
	}, [])
	const searchInput = (
		<Input
			ref={ref}
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."

			type="search"
			// when the user clicks on the search icon, the input will be focused
			onClick={() => ref.current?.focus()}
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position='sticky' className="border-b z-50 shadow-lg shadow-cyan-600 dark:shadow-lg dark:shadow-blue-700 rounded-lg">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						{/* <Logo /> */}
						<p className="font-bold text-inherit">Buildify</p>
					</NextLink>
				</NavbarBrand>
				<ul className="flex justify-center items-center gap-6 max-sm:hidden">
					{siteConfig.navItems.map((item) => (
						<>

							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium "
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						</>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">

						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">

						{/* <DiscordIcon className="text-default-500" /> */}
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">

						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex gap-2">
					<Button
						as={Link}
						className="text-sm font-normal text-default-600 bg-green-500 text-black-200  dark:bg-purple-700"
						href='/get-started'
						// startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						SignUp
					</Button>


					<Button
						as={Link}
						className="text-sm font-normal text-default-600 bg-white-800  hover:bg-slate-200 text-inherit dark:bg-blue-700"
						href='/login'
						// startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Login
					</Button>
					<UserButton />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					{/* <GithubIcon className="text-default-500" /> */}
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu >
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};