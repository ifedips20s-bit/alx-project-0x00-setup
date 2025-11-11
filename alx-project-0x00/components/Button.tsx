import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size = "md", shape = "rounded-md" }) => {
  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}
    >
      {title}
    </button>
  );
};

export default Button;
