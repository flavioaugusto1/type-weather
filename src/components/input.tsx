import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className="w-full py-4 px-5 bg-gray-600 pl rounded-lg outline-none text-gray-300 shadow-sm focus:outline-bluelight-600"
    />
  );
}
