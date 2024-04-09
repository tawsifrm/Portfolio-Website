import React from "react"

export default function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
  className,
  required,
}) {
  return (
    <div className={`flex flex-col shrink grow ${className ? className : ""}`}>
      <label
        htmlFor={`${label}-input`}
        className="font-extralight text-xs py-[0.125rem] px-1 text-fuchsia-500"
      >
        {label}
      </label>
      <input
        name={`${label}-input`}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange ? onChange : () => {}}
        required={required ? true : false}
        className="py-2 px-3 rounded-md text-sm font-light text-gray-500"
      />
    </div>
  )
}
