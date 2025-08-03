import { headers } from 'next/headers';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = async ({ children }: LayoutProps) => {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname')?.substring(1) || 'home';

  const backgroundStyle = {
    backgroundImage: `url('/assets/images/bg/${pathname}-bg.jpg')`,
  };

  return <div className="">{children}</div>;
};

export default layout;
