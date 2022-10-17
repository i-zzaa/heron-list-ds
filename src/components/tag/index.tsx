export interface TagProps {
  onClick?: (e: any) => void;
  type: 'to' | 'fono' | 'psico' | 'psicoPedag';
  disabled: boolean;
}
import { clsx } from 'clsx';

const CLASSFIX = "text-sm items-center flex text-white py-2 px-6 rounded-full cursor-not-allowed cursor-pointer opacity-25 disabled:opacity-100 ";

export function Tag({ onClick, type, disabled}: TagProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(CLASSFIX, {
        'bg-to': type.toLowerCase() === 'to',
        'bg-fono': type.toLowerCase() === 'fono',
        'bg-psico': type.toLowerCase() === 'psico',
        'bg-psicopedag': type.toLowerCase() === 'psicoPedag',
      })}
      disabled={!disabled}
    >
      {type.toUpperCase()}
    </button>
  );
}