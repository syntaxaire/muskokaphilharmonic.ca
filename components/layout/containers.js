export const FullWidthContainer = ({ className = '', bgPattern, children }) => {
  return (
    <div
      className={
        `w-full ${
          bgPattern ? 'bg-pattern bg-gray-800 bg-cover bg-blend-multiply ' : ''
        }` + className
      }
    >
      <div className={`container mx-auto ${className}`}>{children}</div>
    </div>
  );
};
