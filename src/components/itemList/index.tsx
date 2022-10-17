import { ReactNode } from "react";
import { ButtonHeron } from "../button";
import { Tag, TagProps } from "../tag";
import { Text } from "../text";
import { clsx } from 'clsx';
import { TextSubtext } from "../textSubtext";
import { Tooltip } from "primereact/tooltip";


export interface ActionProps {
  onClickEdit?: (e:any) => void;
  onClickTrash?: (e:any) => void;
  positionActions?: 'left' | 'right' 
 }

 export interface FooterButtonProps {
  textButtonFooter: string;
  iconButtonFooter?: string;
  typeButtonFooter?: 'primary' | 'second' ;
  sizeButtonFooter?: 'sm' | 'full' | 'md' ;
  onClick: (e: any) => void;
 }

 export interface itemListCompleteProps extends ActionProps, FooterButtonProps {
  textPrimaryLeft?: string; 
  textPrimaryCenter?: string; 
  textSecondCenter?: string; 
  textFooter?: string; 
  textPrimaryRight?: string;
  textSecondLeft?: string;
  textSecondRight?: string;
  onClickLink?: (e: any) => void;
  tags?: TagProps[];
  onClickTag?: (e: any) => void;
}


export interface RootProps extends FooterButtonProps {
  children: ReactNode
 }

function actionButtons ({ onClickEdit, onClickTrash, positionActions = 'left'}: ActionProps) {
  return (
    <div className={clsx({'flex justify-start': positionActions === 'left',  'text-right': positionActions === 'right' })}>
      <ButtonHeron 
        text= "Edit"
        icon= 'pi pi-pencil'
        type= 'transparent'
        color="violet"
        size= 'icon'
        onClick={onClickEdit}
      />

      <ButtonHeron 
        text= "Trash"
        icon= 'pi pi-trash'
        type= 'transparent'
        color= "red"
        size= 'icon'
        onClick={onClickTrash}
      />

      <ButtonHeron 
        text= "Return"
        icon= 'pi pi-replay'
        type= 'transparent'
        color= "yellow"
        size= 'icon'
        onClick={onClickTrash}
      />
    </div>
  )
}

function footerButton({ onClick, textButtonFooter, iconButtonFooter, sizeButtonFooter, typeButtonFooter}: FooterButtonProps) {
  return (
    <ButtonHeron 
      text={textButtonFooter}
      icon={iconButtonFooter}
      type={typeButtonFooter}
      size={sizeButtonFooter}
      onClick={onClick}
    />
  )
}

function itemListRoot({
  children,
  textButtonFooter,
  iconButtonFooter,
  typeButtonFooter,
  sizeButtonFooter,
  onClick
}: RootProps) {
  return (
    <div className="p-8 w-full text-center bg-white overflow-hidden relative">
      {children}

      <div className="flex text-sm items-end justify-end text-gray-400 mt-4">

       { footerButton({ textButtonFooter, iconButtonFooter, typeButtonFooter, sizeButtonFooter, onClick})}
      </div>
    </div>
  )
}

function itemListSimples({
  textPrimaryLeft, 
  textPrimaryRight,
  textSecondLeft,
  onClickLink, 
  onClick,
  textButtonFooter,
  iconButtonFooter,
  typeButtonFooter,
  sizeButtonFooter,
  onClickEdit,
  onClickTrash,
  positionActions='right'
}: itemListCompleteProps) {
  
  return (
    <ItemList.Root
      textButtonFooter={textButtonFooter}
      iconButtonFooter={iconButtonFooter}
      typeButtonFooter={typeButtonFooter}
      sizeButtonFooter={sizeButtonFooter}
      onClick={onClick}
    ><>
      <div className="flex justify-between text-base font-medium text-gray-800">
        <Text
          children= {textPrimaryLeft}
          size='md'
          color='violet'
          />

        <Text
          children= {textPrimaryRight}
          size='sm'
          color='gray'
          />	
        
        { actionButtons({ onClickEdit, onClickTrash , positionActions}) }

      </div>

      <div className="mt-1 text-sm text-gray-400 flex items-center gap-2">
        <i className="pi pi-user"></i>
        <Text
          children= {textSecondLeft}
          size='xs'
          color='gray'
          />	
      </div>

      </>
    </ItemList.Root>
  )
}

function itemListComplete({
  textPrimaryLeft, 
  textPrimaryCenter, 
  textPrimaryRight,
  textSecondLeft,
  textSecondRight,
  textSecondCenter,
  textFooter,
  tags,
  onClickTag,
  onClickEdit, 
  onClickTrash, 
  onClick,
  textButtonFooter,
  iconButtonFooter,
  typeButtonFooter,
  sizeButtonFooter,
}: itemListCompleteProps) {
  const renderTags = () => {
    return (
      <div className="text-right flex gap-1 justify-end h-8">
        {tags?.map((item: TagProps) => (
            <Tag 
              key={item.type}
              onClick={onClickTag} 
              type={item.type} 
              disabled={item.disabled} 
            />
          ))}
      </div>
    )
  }

  return (
    <ItemList.Root
      textButtonFooter={textButtonFooter}
      iconButtonFooter={iconButtonFooter}
      typeButtonFooter={typeButtonFooter}
      sizeButtonFooter={sizeButtonFooter}
      onClick={onClick}
    >
      <>
      <div className="grid grid-rows-2 sm:grid-cols-2 mb-4 sm:mb-0 h-12">
        { actionButtons({ onClickEdit, onClickTrash }) }
        { renderTags() }
      </div>
        <div>
          <div className="grid sm:flex items-end gap-8 text-left ">
            <Text children= {textPrimaryLeft}  size='lg' color='violet' />
            <Text children= {textPrimaryCenter} size='xs' color='gray' />		
          </div>

          <div className="mt-1 grid sm:flex items-center sm:gap-2 justify-between font-light text-left" >
            <div className="flex justify-center items-center gap-2 p-2">
              <i className="pi pi-user text-gray-400  text-xs" ></i>
              <Text  children= {textSecondLeft}  size='md' color='gray' />
            </div>
            <div className="flex justify-center items-center gap-2 p-2">
              <i className="pi pi-phone text-gray-400 text-xs" ></i>
              <Text  children= {textSecondCenter}  size='md' color='gray' />
            </div>
            <Text  children= {textSecondRight}  size='md' color='gray' />
          </div>

          <div className="mt-6 grid sm:flex items-center sm:gap-4">
            <TextSubtext text="firtText:" subtext=" secondText" size="sm" color="gray" display="flex"/>
            <TextSubtext text="firtText:" subtext=" secondText" size="sm" color="gray" display="flex"/>
            <TextSubtext text="firtText:" subtext=" secondText" size="sm" color="gray" display="flex"/>
          </div>

          <div className="mt-8 flex items-center gap-2 text-ellipsis overflow-hidden">
            <Tooltip target=".obs" mouseTrack className="w-2/4 sm:w-1/4" />
              <p
                className=" text-gray-400  text-sm justify-start text-start obs text-ellipsis overflow-hidden"
                data-pr-tooltip={textFooter}
              >
                {textFooter}
              </p>
          </div>
        </div>
      </>
    </ItemList.Root>
  )
}

export const ItemList = {
  Root: itemListRoot,
  Simples:  itemListSimples,
  Complete: itemListComplete
} 