export const FullWidthContainer = ({ className, bgPattern, children }) => {
  return (
    <div
      className={
        `w-full ${
          bgPattern ? 'bg-pattern bg-gray-800 bg-cover bg-blend-multiply ' : ''
        }` + className
      }
    >
      <div
        className={`container max-w-screen-xl mx-auto justify-center items-center ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
