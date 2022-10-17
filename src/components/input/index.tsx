import { MultiSelect } from "primereact/multiselect";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";

import { colorsData, colorsTextData, firtUpperCase } from "../../util/util";
import { clsx } from 'clsx';
import { InputSwitch } from "primereact/inputswitch";

export interface InputProps {
  id: string;
  type: string;
  labelText: string;
  value?: any;
  options?: OptionsProps[];
  customClass?: string;
  customCol?: string;
  disabled?: boolean;
  onChange: (value: any) => void;
}

export interface OptionsProps  {
  nome: string;
  value: string | number;
}

export function Input({ id, value, type, labelText, disabled = false , customClass = "", options = [], onChange, customCol,   ...field}: InputProps) {
  const setColorChips = () => {
    setTimeout(() => {
      const chips: any = document.querySelectorAll(".p-multiselect-token") || [];
      chips.forEach((chip: any) => {
        const color = colorsData[chip.textContent];
        const text = colorsTextData[chip.textContent];

        chip.style.background = color;
        chip.style.color = text;
      });
    }, 0);
  };

  const renderType = () => {
    switch (type) {
      case "select":
        return (
          <Dropdown
            value={value}
            options={options}
            onChange={onChange}
            optionLabel="nome"
            filter
            showClear
            filterBy="nome"
          />
        );
      case "multiselect":
        return (
          <MultiSelect
            id={id}
            display="chip"
            options={options}
            optionLabel="nome"
            filter
            value={value}
            onChange={(e: any) => {
              setColorChips();
              return onChange(e);
            }}
          />
        );
      case "switch":
        return (
          <InputSwitch
            checked={value}
            onChange={onChange}
            color="#685ec5"
            value={value}
            disabled={disabled}
          />
        );
      case "tel":
        return (
          <InputMask
            value={value}
            key={id}
            type={type}
            className={"inputAnimado "  + customClass}
            mask="(99) 9999-9999"
            onChange={(e: any) => {
              return onChange(e.value);
            }}
          />
        );
      default:
        return (
          <input
            id={id}
            {...field}
            value={value}
            key={id}
            type={type}
            className={"inputAnimado "  + customClass}
          />
        );
    };
  };

  return (
    <div className={clsx('label-float', {'my-5': !customCol}, customCol)} >
      {renderType()}
      {type !== "switch" && <label> {firtUpperCase(labelText)} </label>}
    </div>
  );
}