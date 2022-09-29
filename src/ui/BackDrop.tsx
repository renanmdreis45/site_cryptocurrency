interface Props {
    onClick(): void;
}

export const BackDrop: React.FC<Props> = ({onClick}) => {
    return (
        <div
          className="bg-black opacity-90 fixed top-0 left-0 w-full h-full z-[1]"
          onClick={onClick}
        >
        </div>
      );
}