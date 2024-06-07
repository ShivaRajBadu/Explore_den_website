const Headers = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) => {
  return (
    <header className={`bg-${background} mx-auto w-full relative z-0  `}>
      {children}
    </header>
  );
};

export default Headers;
