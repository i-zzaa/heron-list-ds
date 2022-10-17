import { Controller, useForm } from "react-hook-form";


export interface SearchAddProps {
  onClick?: (e: any) => void;
  onSubmit: (e: any) => any;
  textButton: string;
  iconButton: string;
}
import { ButtonHeron } from '../button';
import { Search } from "../search";

export function SearchAdd({ onClick, onSubmit,  textButton, iconButton}: SearchAddProps) {
  const { handleSubmit,  control} = useForm();

  return (
    <div className="grid grid-cols-8 gap-2 justify-between">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='search'
          control={control}
          render={({ field }: any) => (
            <Search onChange={field.onChange} value={field.value}/>
          )}
        />
      </form>

      <div className='sm:col-span-1 col-span-8 sm:mt-6'>
        <ButtonHeron 
          text={textButton}
          icon={iconButton}
          type="primary"
          size="md"
          onClick={onClick}
          />
      </div>
  </div>
  );
}