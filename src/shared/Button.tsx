import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
const Button: React.FC<Props> = ({ label, icon, ...rest }: Props) => {
  return (
    <button {...rest}>
      {label ? label : null}
      {icon ? <span>{React.createElement(icon)}</span> : null}
    </button>
  );
};

export { Button };
