import { Meta, StoryObj } from "@storybook/react"
import { CRUD, CRUDProps  } from "./index";

export default {
  title: "Templates/CRUD",
  component: CRUD,
  args: {
    items: [
      {
        id: "1",
        nome: "Nome completo",  
        perfil: {nome: "Perfil"},
        login: "user.login"
      },
      {
        id: "2",
        nome: "Nome completo 2",  
        perfil: {nome: "Perfil2"},
        login: "user.login"
      },
  
  ],
    type: 'simples',
    onSubmit: (e) => {console.log(e) },
  }
} as Meta<CRUDProps>;

export const Default: StoryObj<CRUDProps> = {};
