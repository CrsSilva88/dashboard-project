export type StatusType = "done" | "inprogress" | "pending";

export interface Task {
  label: string;
  status: StatusType;
}

export const tasks = {
  frontend: [
    { label: "Dashboard", status: "done" },
    { label: "Listagem de Jogos", status: "inprogress" },
    { label: "Tela de Detalhes", status: "pending" },
  ] as Task[],
  backend: [
    { label: "API Listar Jogos", status: "done" },
    { label: "API Cadastrar Jogo", status: "inprogress" },
    { label: "API Atualizar Status", status: "pending" },
  ] as Task[],
  database: [
    { label: "Tabela Games", status: "done" },
    { label: "Tabela Tags", status: "inprogress" },
    { label: "Relacionamento Games-Tags", status: "pending" },
  ] as Task[],
};
