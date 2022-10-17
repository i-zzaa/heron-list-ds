export interface TextSubtextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' ;
  text?: string;
  subtext?: string;
  color?: 'gray' | 'gray-dark' | 'gray-light' | 'yellow' | 'violet' | 'black' | 'white';
  display: 'flex' | 'grid' 
}
import { clsx } from 'clsx';

export function TextSubtext({ size = 'md', color = 'gray-dark', text, display,  subtext}: TextSubtextProps) {
  return (
   <span 
    className={clsx('font-normal tracking-wider  gap-1 text-start ' + display, { 
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
    
    'text-white': color === 'white',
    'text-gray-300': color === 'gray-light',
    'text-gray-400': color === 'gray',
    'text-gray-800': color === 'gray-dark',
    'text-violet-800': color === 'violet',
    'text-yellow-400': color === 'yellow',
    'text-black': color === 'black',
    
    })}>
      { text }
      <strong> { subtext }</strong>
    </span>
  )
}