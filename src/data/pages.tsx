import Image from 'next/image';
import Link from 'next/link';

export const pages: Record<string, ROO.MarketingPageData> = {
  society: {
    sections: [
      {
        title: 'A Unique Society .... A Unique Sci Fi Game!',
        paragraphs: [
          <p>
            THE RINGS OF ORBIS takes place in an area of space dominated by four
            planet-like rings that stabilize a busy wormhole - a daunting sight
            for new arrivals. But even more daunting is the rigid social order.
            Life on THE RINGS OF ORBIS is divided into three distinct classes,
            starting with... THE KEEPERS: A benevolent race of two-headed aliens
            who rule the rings and offer guidance and protection for... THE
            KNUDNIKS: Aliens who have sold themselves into slavery with the
            hopes of one day becoming...
          </p>,
          <p>
            CITIZENS: This is your group. Citizens are the real engine of
            societies. Its movers. Its shakers. And they&apos;re all aliens!
            Weird, wonderful aliens. And you&apos;ll get to choose from{' '}
            <Link href="/aliens">
              five playable races in this top sci fi game.
            </Link>{' '}
            But this is not all. Far beyond the rings, on the far flung outer
            planets, another society lurks. They call themselves.. THE
            NEEWALKERS: Tenuously linked bands of mercenaries, known for their
            wealth, bravery and penchant for double-dealing.{' '}
            <Link href="/join">
              THE BEST SCIENCE FICTION GAME you can play. JOIN THE SOCIETY NOW.
            </Link>
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/society-1.jpg"
            alt="Rings of Orbis Society"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'A Friendship Generator Game!',
        paragraphs: [
          <p>
            THE RINGS OF ORBIS is a uniquely social sci fi game, rewarding
            alliances and cooperative play. Making it...
          </p>,
          <p>
            The BEST SCIENCE FICTION GAME to play with friends and A GREAT WAY
            to make new ones.
          </p>,
          <p>
            Friends enhance the playing experience. They increase your strategic
            advantage, or become sneaky opponents. And they expand the fun
            factor.
          </p>,
          <p>
            Played solo THE RINGS OF ORBIS is amazing. Played with friends
            it&apos;s transformative. So find a friend. Make a friend. And...
          </p>,
          <p>
            <Link href="/join">
              ENTER THE SOCIAL WHIRL of the Rings of Orbis. Voted TOP SCI FI
              GAME!
            </Link>
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/society-2.jpg"
            alt="Rings of Orbis Society"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
  gameplay: {
    sections: [
      {
        title: 'How To Play The Rings Of Orbis',
        paragraphs: [
          <p>
            WHAT IS THE GOAL? Becoming the most powerful CITIZEN in THE RINGS OF
            ORBIS.
          </p>,
          <p>
            HOW DO YOU ACHIEVE THIS? By amassing wealth (called
            &quot;chits&quot;) in THE RINGS OF ORBIS, and leveling up your five
            key stats (Status, OIO, Strength, Agility, and Defense).
          </p>,
          <p>
            AND HOW DO YOU DO THAT? This is where THE RINGS OF ORBIS gets
            exciting. The way to achieve these goals is limited only by your
            skill and imagination.
          </p>,
          <p>Some examples:</p>,
          <ul>
            <li>Collect alien artifacts</li>
            <li>Build a zoo</li>
            <li>Create alliances</li>
            <li>Battle in the arena</li>
            <li>Run Guns on the outer worlds</li>
            <li>all in one sci fi game</li>
          </ul>,
          <p>
            And this only scratches the surface. THE RINGS OF ORBIS overflows
            with options.
          </p>,
          <p>
            <Link href="/">EXPLORE THIS TOP SCI FI GAME NOW!</Link>
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/gameplay-1.jpg"
            alt="Rings of Orbis Game Gameplay"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'The Best Science Fiction Games are Free!',
        paragraphs: [
          <p>
            THE RINGS OF ORBIS is a 100% free browser game. Free to join. Free
            to play. Free to stay. No hidden costs. No secret pay walls. All you
            need is a computer, or compatible mobile device, and you&apos;ll be
            playing in seconds.
          </p>,
          <p>But...</p>,
          <p>
            If you need that special edge: The rush of instant gratification.
            Then THE RINGS OF ORBIS gives you the entirely OPTIONAL ability to
            buy RING CASH. And with this cash you can bribe officials at a
            moments notice, buy premium goods, or instantly build fleets of
            spaceships. It&apos;s a very powerful tool.
          </p>,
          <p>
            So rely entirely on your skill and wits to play this sci fi game for
            free. Or jumpstart your experience with a few fistfuls of RING CASH.
            Either way THE RINGS OF ORBIS pays you back with hours of enjoyment!
          </p>,
          <p>
            <Link href="/join">SAVOR THE FREEDOM!</Link>
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/gameplay-2.jpg"
            alt="Rings of Orbis Game Gameplay"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
  missions: {
    sections: [
      {
        title: 'Select the Source of Your Missions in this Sci Fi Game',
        paragraphs: [
          <p>
            Much of the action in THE RINGS OF ORBIS will involve the completion
            of missions. Missions are given by The Keepers and the Neewalkers.
            And, as you might expect, these very different groups offer very
            different missions. Choose wisely.
          </p>,
          <p>
            <strong>Choosing the Keepers:</strong>
          </p>,
          <p>
            THE KEEPERS will offer you missions full of noble purpose and
            political intrigue. The fate of universe will often hang in the
            balance. You may be called upon to protect the sanctity of THE RINGS
            OF ORBIS. Or they may ask you to reclaim a stolen item. Working for
            the Keepers will help you build wealth and status.
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/missions-1.jpg"
            alt="Rings of Orbis Missions"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'Choosing the Neewalkers:',
        paragraphs: [
          <p>
            THE NEEWALKERS will offer you missions full of danger, excitement
            and great financial reward. They may send you on missions to get
            them weapons. To fight battles for them. Or even steal for them.
            Working for the Neewalkers will increase your wealth, strength and
            agility.
          </p>,
          <p>
            The best science fiction game gives you a breadth of choices to
            match your game play style. Rings of Orbis allows you to partake in
            a massive universe backed by one of the most intriguing sci fi
            stories available. You won't be dissapointed.
          </p>,
          <p>
            <Link href="/join">PLAY THIS TOP SCI FI GAME NOW!</Link>
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/missions-2.jpg"
            alt="Rings of Orbis Missions"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
  aliens: {
    sections: [
      {
        title: 'Which Alien Race are You?',
        paragraphs: [
          <p>
            THE RINGS OF ORBIS lets you choose from these five exciting playable
            races in this intriguing sci fi game:
          </p>,
          <p>
            THE BELARANS: An unyielding race who believe that the universe, and
            everything in it, is theirs for the taking.
          </p>,
          <p>
            THE TREFALDOORS: A race known for their bizarre appearance and
            undying commitment to the truth.
          </p>,
          <p>
            THE CHOI: Blessed with the innate ability to navigate the cosmos,
            this race also boasts powerhouse negotiation skills.
          </p>,
          <p>
            THE SOLINN: A race marked by empath-level intuition and an
            unparalleled ability to fight to death.
          </p>,
          <p>
            THE SESSII: Although cultured and elegant, this race is second to
            none in ruthlessness.
          </p>,
          <p>
            THE ENTHANS: Hard workers that are quick to anger if they see
            behavior they consider unfair or dishonorable.
          </p>,
          <p>Which one will you choose? GET ALIENATED!</p>,
        ],
        image: (
          <Image
            src="/assets/images/aliens-1.jpg"
            alt="Rings of Orbis Aliens"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'A Sci Fi Game For Everyone!',
        paragraphs: [
          <p>
            THE RINGS OF ORBIS truly is a sci fi game with something for
            everyone. It was carefully designed to encompass a wide range of
            genres and playing styles. Each one carefully integrated to create
            seamless gameplay and to make it one of the best science ficiton
            games out there.
          </p>,
          <p>Experience these genres:</p>,
          <ul>
            <li>Roleplaying</li>
            <li>Simulation</li>
            <li>Strategy</li>
            <li>Fighting</li>
            <li>Arcade</li>
          </ul>,
          <p>Select from these styles of play:</p>,
          <ul>
            <li>Casual</li>
            <li>Immersive</li>
            <li>Solo</li>
            <li>Cooperative</li>
          </ul>,
          <p>
            Mix and match. Combine and modify. Create and recreate. You can
            tailor THE RINGS OF ORBIS to precisely match your taste. Or alter
            the experience on-the-fly, at any time, to suit your mood. It’s that
            flexible! EXPLORE YOUR OPTIONS!
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/aliens-2.jpg"
            alt="Rings of Orbis Aliens"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
  spaceships: {
    sections: [
      {
        title: 'A Sci Fi Game Where you Build your Dream Machine!',
        paragraphs: [
          <p>**WIN PRIZES**</p>,
          <p>
            THE RINGS OF ORBIS allows you to customize all your spaceships.
          </p>,
          <p>
            We supply the base models, spare parts and paint. You supply the
            creativity.
          </p>,
          <p>
            Pimp your ride any way you like. From retro to modern to futuristic.
            And everything in between and sideways. The choice is up to you,
            then put them out to work.
          </p>,
          <p>
            Post the results in our gallery. Watch the votes roll in. Prizes
            awarded every week.
          </p>,
        ],
        image: (
          <Image
            src="/assets/images/spaceships-1.jpg"
            alt="Rings of Orbis Spaceships"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'Customize And Earn! Customize And Win!',
        paragraphs: [
          <p>
            Customizing your fleet isn&apos;t just about style and prizes.
            Customizing can enhance a ship&apos;s abilities. Enhanced abilities
            lead to higher paying missions. And higher paying missions pave the
            way to victory. There is no surer path to victory than creating and
            maintaining a properly customized fleet in this awesome sci fi game.
          </p>,
          <p>CUSTOMIZE YOUR WAY TO WEALTH!</p>,
          <p>
            Spaceships also make you mobile. Allowing you to leave the confines
            of the rings. Venture to the outer planets. And pick up those
            exciting, dangerous and lucrative jobs that only the Neewalkers
            offer.
          </p>,
          <p>CUSTOMIZE YOUR WAY TO VICTORY! PLAY NOW!</p>,
        ],
        image: (
          <Image
            src="/assets/images/spaceships-2.jpg"
            alt="Rings of Orbis Spaceships"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
  knudniks: {
    sections: [
      {
        title: 'Earn Chits With Knudniks',
        paragraphs: [
          <p>
            Even now, in THE RINGS OF ORBIS, knudniks are stepping on the
            auction block. They've come from every planet in the region to work
            for CITIZENS just like you. And they can make you rich. But take
            heed of the old saying:
          </p>,
          <p>“A KNUDNIK IS ONLY AS GOOD AS HIS MASTER.”</p>,
          <p>
            Educate, train, house and feed them well. And you will have happy,
            healthy and productive Knudniks.
          </p>,
          <p>
            But treat them shabbily and they will escape, revolt or even die.
          </p>,
          <p>BUY A KNUDNIK NOW!</p>,
        ],
        image: (
          <Image
            src="/assets/images/knudniks-1.jpg"
            alt="Rings of Orbis Knudniks"
            width={225}
            height={225}
          />
        ),
        direction: 'left',
      },
      {
        title: 'Softwires: Your Secret Weapon in this Sci Fi Game!',
        paragraphs: [
          <p>
            Softwires. A rare breed. Hard to get. Tricky to train. But, once
            acquired, impossible to imagine living without.
          </p>,
          <p>SOFTWIRES ARE MIND HACKERS!</p>,
          <p>
            Softwires have the ability to access computers with their minds,
            making them a critical addition to any mission.
          </p>,
          <p>SOFTWIRES ARE CUSTOMIZABLE!</p>,
          <p>
            With special customization, Softwires can acquire a range of special
            abilities, making them fearsome fighters. Fighters who can aid in
            any battle. But who can also deliver you win after win in
            gladiatorial arenas of THE RINGS OF ORBIS.
          </p>,
          <p>START LOOKING FOR A SOFTWIRE TODAY!</p>,
        ],
        image: (
          <Image
            src="/assets/images/knudniks-2.jpg"
            alt="Rings of Orbis Knudniks"
            width={225}
            height={225}
          />
        ),
        direction: 'right',
      },
    ],
  },
};
