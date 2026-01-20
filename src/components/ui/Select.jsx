export default function Select({ placeholder, options = [], ...props }) {
  return (
    <select
      className="w-full rounded-[11px] px-4 py-[17px] bg-[#DFDFDF] "
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
