interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{title}</h2>
      <span className="text-[12px] font-light">{subtitle}</span>
    </div>
  );
};
