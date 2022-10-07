import { Loader } from "./styles";

interface Props {
  className?: string;
  size?: number;
  id?: string;
}

export const Spinner = ({ className, id = "loader", size = 1.5 }: Props) => (
  <Loader className={className} size={`${size}rem`} id={id} />
);
