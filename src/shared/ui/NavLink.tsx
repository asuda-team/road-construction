interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <a {...props}>
      {children}
    </a>
  );
};
