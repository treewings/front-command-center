const OutlinedCard = ({ title, className, children }) => {
  return (
    <fieldset className={`p-1 border border-green-600 rounded-lg ${className}`}>
      <legend className="text-white font-semibold uppercase text-sm text-center">
        {title}
      </legend>
      {children}
    </fieldset>
  );
};

export default OutlinedCard;
