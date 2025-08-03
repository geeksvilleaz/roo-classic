import homeHero from '@/assets/images/heroes/home-hero.png';
import knudniksHero from '@/assets/images/heroes/knudniks-hero.png';
import societyHero from '@/assets/images/heroes/society-hero.png';
import aliensHero from '@/assets/images/heroes/aliens-hero.png';
import spaceshipsHero from '@/assets/images/heroes/spaceships-hero.png';
import gameplayHero from '@/assets/images/heroes/gameplay-hero.png';
import missionsHero from '@/assets/images/heroes/missions-hero.png';

import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';

interface MarketingHeroProps {
  pid: string;
}

const MarketingHero = ({ pid = 'knudniks' }: MarketingHeroProps) => {
  const images: Record<string, StaticImageData> = {};
  images['knudniks'] = knudniksHero;
  images['home'] = homeHero;
  images['society'] = societyHero;
  images['aliens'] = aliensHero;
  images['spaceships'] = spaceshipsHero;
  images['gameplay'] = gameplayHero;
  images['missions'] = missionsHero;

  return (
    <div className="h-[262px] flex items-center justify-around relative w-[1200px] mx-auto">
      <div className="img">
        <Image
          src={images[pid]}
          alt={`Rings of Orbis ${pid}`}
          className="w-full h-full object-cover"
          priority
          width={433}
          height={259}
        />
      </div>
      <div className="flex flex-col">
        <Button variant="outline">Log In</Button>
        <Button variant="outline">Create Account</Button>
      </div>
    </div>
  );
};

export default MarketingHero;
