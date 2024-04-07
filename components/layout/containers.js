export const FullWidthContainer = ({ className = '', children }) => {
  return (
    <div className={`container max-w-screen-xl mx-auto px-[15px] md:px-[30px] xl:px-[90px] ${className}`}>{children}</div>
  );
};
