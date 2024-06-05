const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-[1440px] w-[90%] mx-auto">{children}</div>;
};

export default Wrapper;
