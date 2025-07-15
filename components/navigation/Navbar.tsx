import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { menuOptions, SITE_METADATA } from "@/data/constants";

const Navbar = () => {
  return (
    <NavigationMenu className="flex gap-[12px] flex-wrap items-center justify-between max-w-[1400px] mx-auto">
      <section>
        <Link href={`/`} className="text-xl font-light">
          {SITE_METADATA.title}
        </Link>
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
      <Separator />
    </NavigationMenu>
  );
};

export default Navbar;
