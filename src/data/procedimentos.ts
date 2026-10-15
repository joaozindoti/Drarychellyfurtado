// Procedimentos da arte "Procedimentos Estéticos" da Dra., mais rinomodelação e sorriso gengival
// (que ela publica como casos). Descrições curtas, sem promessa de resultado.
// `mensagem` entra na frase do WhatsApp: "tenho interesse em <mensagem>".

export interface Procedimento {
  nome: string;
  descricao: string;
  mensagem: string;
  assinatura?: boolean;
}

export interface Grupo {
  id: string;
  titulo: string;
  frase: string;
  itens: Procedimento[];
}

export const GRUPOS: Grupo[] = [
  {
    id: "rosto",
    titulo: "Rosto",
    frase: "Harmonia, não exagero.",
    itens: [
      { nome: "Botox", descricao: "Suaviza as linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos.", mensagem: "Botox" },
      { nome: "Preenchimento", descricao: "Ácido hialurônico para dar contorno e repor volume, em áreas como queixo e mandíbula.", mensagem: "preenchimento" },
      { nome: "Preenchimento labial", descricao: "Volume e contorno respeitando o formato dos seus lábios.", mensagem: "preenchimento labial" },
      { nome: "Rinomodelação", descricao: "Ajusta o perfil do nariz com preenchimento, sem cirurgia.", mensagem: "rinomodelação" },
      { nome: "Sorriso gengival", descricao: "Toxina botulínica para mostrar menos gengiva ao sorrir.", mensagem: "tratamento do sorriso gengival" },
      { nome: "Bioestimulador de colágeno", descricao: "Estimula o próprio colágeno da pele para mais firmeza.", mensagem: "bioestimulador de colágeno" },
      { nome: "Fios de PDO", descricao: "Fios absorvíveis que dão sustentação e estimulam colágeno.", mensagem: "fios de PDO" },
    ],
  },
  {
    id: "pele",
    titulo: "Pele",
    frase: "O seu melhor filtro.",
    itens: [
      { nome: "Limpeza de pele", descricao: "Remove impurezas e cravos e prepara a pele para os outros cuidados.", mensagem: "limpeza de pele" },
      { nome: "Peeling", descricao: "Renova a camada mais superficial da pele, para manchas e textura.", mensagem: "peeling" },
      { nome: "Microagulhamento", descricao: "Estimula colágeno para melhorar textura, poros e marcas.", mensagem: "microagulhamento" },
    ],
  },
  {
    id: "corpo",
    titulo: "Corpo",
    frase: "Curvas no seu desenho.",
    itens: [
      { nome: "Golden Bum", descricao: "Harmonização de bumbum para realçar a curva, a assinatura da Dra.", mensagem: "o Golden Bum (harmonização de bumbum)", assinatura: true },
      { nome: "Depilação a laser", descricao: "Reduz os pelos de forma duradoura, em sessões programadas.", mensagem: "depilação a laser" },
    ],
  },
];
