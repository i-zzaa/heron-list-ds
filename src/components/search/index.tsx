export interface SearchProps {
  onClick?: (e: any) => void;
  onChange?: (value: any) => void;
  value: string;
}
import { ButtonHeron } from '../button';
import { Input } from '../input';

export function Search({ onClick, onChange, value}: SearchProps) {
  return (
    <div className="grid grid-cols-8 items-center gap-1 col-span-8 sm:col-span-7">
        <Input
          onChange={(e: any) => onChange}
          value={value}
          labelText="Search"
          id="search"
          type="text"
          customCol="col-span-7"
        />

        <div className="col-span-1 mt-4">
          <ButtonHeron 
            text="Buscar"
            icon="pi pi-search"
            type="primary"
            size="icon"
            onClick={onClick}
          />
        </div>
    </div>
  );
}