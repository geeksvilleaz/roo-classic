import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
} from './ui/navigation-menu';
import logoImg from '@/assets/images/header_logo.png';
import Link from 'next/link';

interface MarketingHeaderProps {}

const MarketingHeader = ({}: MarketingHeaderProps) => {
  const links = [
    { label: 'Society', href: '/society' },
    { label: 'Gameplay', href: '/gameplay' },
    { label: 'Missions', href: '/missions' },
    { label: 'Aliens', href: '/aliens' },
    { label: 'Spaceships', href: '/spaceships' },
    { label: 'Knudniks', href: '/knudniks' },
  ];

  return (
    <div className="header flex justify-center items-center bg-black/30 text-white h-[92px] border-white-1 border-b">
      <div className="flex flex-row w-[1200px] justify-between">
        <h1 className="text-lg font-bold">
          <Link href="/">
            <Image src={logoImg} alt="Rings of Orbis Best Sci Fi Game" />
          </Link>
        </h1>
        <NavigationMenu className="nav-menu">
          <NavigationMenuList className="">
            {links.map((link, index) => (
              <NavigationMenuItem
                key={index}
                className="text-white uppercase hover:bg-transparent border-r-0 border-l-1 first:border-l-0"
              >
                <NavigationMenuLink
                  href={link.href}
                  className="text-lg p-4 text-bold bg-none hover:bg-none"
                >
                  {link.label}
                </NavigationMenuLink>
                <NavigationMenuIndicator />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default MarketingHeader;
