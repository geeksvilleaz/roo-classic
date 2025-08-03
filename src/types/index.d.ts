declare namespace ROO {
  interface MarketingPageData {
    sections: {
      title: string;
      paragraphs: JSX.Element[];
      image: JSX.Element;
      direction: 'left' | 'right' | string;
    }[];
  }

  interface Ability {
    id: number;
    ability: string;
    description: string;
    you_move: string;
    enemy_moves: string;
    strength_req: number;
    defense_req: number;
    agility_req: number;
    oio_req: number;
    uses_per_battle: number;
    value: number;
    power_usage: number;
    expiration: number;
    probability: number;
  }

  interface Accolade {
    id: number;
    accolade: string;
  }

  interface Avatar {
    id: number;
    avatar: string;
    category: string;
    parameter: number;
    status_requisite: number;
    description: string;
  }

  interface Banner {
    id: number;
    name: string;
    ext: string;
    size: number;
    url: string;
    active: boolean;
    shows: number;
    clicks: number;
    popup: boolean;
  }
}
