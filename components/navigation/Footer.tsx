import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { menuOptions, SITE_METADATA } from "@/data/constants";

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <NavigationMenu className="flex flex-col md:flex-row gap-[24px] flex-wrap items-center justify-between max-w-[1400px] mx-auto px-4">
        <section className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_METADATA.title}. All rights
          reserved.
        </section>
        <NavigationMenuList>
          {menuOptions.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.destination}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <section className="text-center mt-20">
        <p className="tracking-tighter text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">
          BuiltBy<span className="underline">Devs</span>
        </p>
      </section>
      <Separator className="mt-6" />
    </footer>
  );
};

export default Footer;
