export interface ButtonProps {
  type?: 'primary' | 'second' | 'transparent'; 
  color?: string; 
  size?: 'full' |  'sm' | 'icon' | 'link' | 'md';
  icon?: string ;
  text: string;
  loading?: boolean;
  onClick?: (e: any) => void | undefined;
}
import { clsx } from 'clsx';
import { Button } from 'primereact';

export function ButtonHeron({ 
  icon, 
  size = 'full', 
  type = 'primary',  
  color = 'white',  
  text, loading=false, 
  onClick
}: ButtonProps) {
  return (
   <Button 
    icon={icon}
    loading={loading}
    label={size === 'icon' ? '' : text}
    onClick={onClick}
    className={clsx('items-center  justify-center  text-white text-sm font-medium rounded-md border-none ' , { 
      'bg-violet-800': type === 'primary',
      'bg-yellow-400': type === 'second',
      'bg-transparent hover:bg-transparent': type === 'transparent',

      'text-white': color === 'white',
      'text-red-400': color === 'red',
      'text-green-400': color === 'green',
      'text-yellow-400': color === 'yellow',
      'text-violet-800 hover:text-violet-800': color === 'violet',

      'w-full': size === 'full',
      'sm:w-2/5 w-full': size === 'md',
      })} 
    />
  )
}
