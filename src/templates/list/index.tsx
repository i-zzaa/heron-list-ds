import { Controller, useForm } from "react-hook-form";
import { ItemList, itemListCompleteProps } from "../../components/itemList";


export interface CRUDProps extends itemListCompleteProps{
  onSubmit: (e: any) => any;
  textButton: string;
  iconButton: string;
  items: any[];
  type: 'simples' | 'complete';
}

export function CRUD({ 
  type = 'simples', 
  onClickLink,
  onClick,
  onClickEdit,
  onClickTrash,
  items
}: CRUDProps) {

  const hasPermition = (agenda: string)  => agenda == 'btnAgendar' 
  
  const renderlistSimples = () => {
    return  items.map((item: any) => {
      const textPrimaryLeft = item?.nome || item?.casa
      const textPrimaryRight = item?.perfil.nome.toUpperCase() || item?.sala
      const textSecondLeft = item?.login || item?.id

      return  (
        <ItemList.Simples
          key={textSecondLeft}
          textPrimaryLeft={textPrimaryLeft} 
          textPrimaryRight={textPrimaryRight}
          textSecondLeft={textSecondLeft}
          onClickLink={onClickLink} 
          onClick={onClick}
          textButtonFooter="Reset de senha"
          iconButtonFooter="pi pi-sync"
          typeButtonFooter="second"
          sizeButtonFooter="md"
          onClickEdit={onClickEdit}
          onClickTrash={onClickTrash}
        />
      )
    })
  }


  const renderlistComplete = () => {

    return  items.map((item: any) => {
      const textPrimaryLeft = item?.nome
      const textPrimaryCenter = item?.idade
      const textSecondLeft = item?.resposavel ? `Responsável: ${item.resposavel}` : '' 
      const textSecondCenter = item?.telefone 
      const textSecondRight = item?.telefone 
      const textFooter = item?.observacao 

      const buttonFooter = {text: '', icon: '', type: 'second', size: 'md'}
      switch (true) {
        case item.vaga.naFila &&  !item.vaga.devolutiva && hasPermition("btnAgendar"):
          buttonFooter.text = 'Agendado' 
          buttonFooter.icon = 'pi pi-calendar-minus' 
          buttonFooter.type = 'primary' 
          buttonFooter.size = 'md' 
          break;
        case !item.vaga.naFila &&  !item.vaga.devolutiva && hasPermition("btnAgendar"):
          buttonFooter.text = 'Retornar' 
          buttonFooter.icon = 'pi pi-sync' 
          buttonFooter.type = 'second' 
          buttonFooter.size = 'md' 
          break;
        case !item.vaga.naFila &&  !item.vaga.devolutiva && hasPermition("btnDevolutiva"):
          buttonFooter.text = 'Devolutiva' 
          buttonFooter.icon = 'pi pi-check-circle' 
          buttonFooter.type = 'primary' 
          buttonFooter.size = 'md' 
          break;
        case !item.vaga.naFila && item.vaga.devolutiva && hasPermition("btnDevolutiva"):
          buttonFooter.text = 'Retornar Devolutiva' 
          buttonFooter.icon = 'pi pi-check-circle' 
          buttonFooter.type = 'second' 
          buttonFooter.size = 'md' 
          break;
        default:
          break;
      }


      return (
        <ItemList.Complete
          key={item.id}
          textPrimaryLeft={textPrimaryLeft} 
          textPrimaryCenter={textPrimaryCenter} 
          textSecondLeft={textSecondLeft}
          textSecondCenter={textSecondCenter}
          textSecondRight={textSecondRight}
          textFooter={textFooter}
          onClickLink={onClickLink} 
          onClick={onClick}
          textButtonFooter={buttonFooter.text}
          iconButtonFooter={buttonFooter.icon}
          typeButtonFooter={buttonFooter.type}
          sizeButtonFooter={buttonFooter.size}
          onClickEdit={onClickEdit}
          onClickTrash={onClickTrash}
          tags={item.tags}
        />
      )
    })
  }


  return (
    <div className="pointer-events-auto mx-auto ">
      <div className="flex flex-col  bg-white m-auto ">
        <div className="flex-1 overflow-y-auto py-6 ">
          <div className="">
            <div className="flow-root">
              <ul
                role="list"
                className="-my-6 divide-y divide-gray-200 grid gap-4 items-center"
              >
                { type === 'simples'? renderlistSimples() : renderlistComplete() }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}