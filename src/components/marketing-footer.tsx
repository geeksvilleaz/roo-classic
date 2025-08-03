import Link from 'next/link';

interface MarketingFooterProps {}

const MarketingFooter = ({}: MarketingFooterProps) => {
  const rooLinks = [
    { label: 'Sitemap', href: '' },
    { label: 'Society', href: '' },
    { label: 'Gameplay', href: '' },
    { label: 'Missions', href: '' },
    { label: 'Aliens', href: '' },
    { label: 'Spaceships', href: '' },
    { label: 'Knudniks', href: '' },
    { label: 'Press Room', href: '' },
    { label: 'The Books', href: '' },
    { label: 'The Art', href: '' },
  ];
  const socialLinks = [
    { label: 'Facebook', href: '' },
    { label: 'Twitter', href: '' },
    { label: 'YouTube', href: '' },
    { label: 'Vimeo', href: '' },
    { label: 'PJHaarsma.com', href: '' },
    { label: 'FrankBeddor.com', href: '' },
    { label: 'Automatic Games', href: '' },
    { label: 'Looking Glass Wars', href: '' },
    { label: 'Card Soldier Wars', href: '' },
    { label: 'Contact Us', href: '' },
  ];
  return (
    <div className="flex justify-center items-center  text-white">
      <div className="flex flex-col w-[800px]">
        <div className="flex justify-between">
          <div>Roo Logo</div>
          <div>AG Logo</div>
        </div>
        <div className="flex justify-between mx-4 my-2">
          <div>
            <div>
              <strong>Ringsoforbis.com</strong>
            </div>
            <ul>
              {rooLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <strong>Connect with us</strong>
            </div>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>&nbsp;</div>
          <div>Sign up for our Tips &amp; Tricks newsletter!</div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFooter;
