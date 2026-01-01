export default function Select({ placeholder, options = [], ...props }) {
  return (
    <select
      className="w-full rounded-[11px] px-4 py-[17px] bg-[#DFDFDF] focus:outline-none focus:ring-2 focus:ring-purple-500"
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
