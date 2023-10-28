const Layout = ({ children }) => {
  return (
    <main
      className={`min-w-max min-h-screen items-center justify-between px-24`}
    >
      {children}
    </main>
  );
};

export default Layout;
