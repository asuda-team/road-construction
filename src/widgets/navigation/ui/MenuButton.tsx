interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button 
      className="md:hidden relative z-[60] w-12 h-12 flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <span className={`w-7 h-0.5 bg-offWhite rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : '-translate-y-[5px]'}`} />
      <span className={`w-7 h-0.5 bg-offWhite rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`w-7 h-0.5 bg-offWhite rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : 'translate-y-[5px]'}`} />
    </button>
  );
};
