const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-[1440px] w-[95%] md:w-[90%] mx-auto overflow-x-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
