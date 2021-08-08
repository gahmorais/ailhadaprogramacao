import React from "react";

interface IInputSearchProps {
  placeHolder: string;
  value: string;
  onInputChange: (element: string) => void;
}

export default function InputSearch({
  placeHolder,
  onInputChange,
  value,
}: IInputSearchProps) {
  function handleChange(evt: React.FormEvent<HTMLInputElement>) {
    onInputChange(evt.currentTarget.value);
  }

  return (
    <input
      className="w-full h-full pl-2"
      onChange={handleChange}
      placeholder={placeHolder}
      value={value}
    />
  );
}
