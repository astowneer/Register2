interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="space-y-4 text-center sm:text-left px-[24px] sm:px-0">
      <h2 className="font-bold text-[32px]">{title}</h2>
      <p className="font-light leading-[22px]">{subtitle}</p>
    </div>
  );
};
