import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {children}
    </main>
  );
};

export default Layout;
