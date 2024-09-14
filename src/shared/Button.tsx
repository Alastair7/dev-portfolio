type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: string;
};
const Button: React.FC<Props> = ({ label, icon, ...rest }: Props) => {
  return (
    <button {...rest}>
      {label ? label : null}
      {icon ? (
        <span>
          <img src={icon} />
        </span>
      ) : null}
    </button>
  );
};

export { Button };
