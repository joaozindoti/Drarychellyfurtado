// Procedimentos da arte "Procedimentos Estéticos" da Dra., mais rinomodelação e sorriso gengival (que ela
// publica como casos). Uma linha de benefício cada, sem promessa de resultado.
// `mensagem` entra na frase do WhatsApp: "tenho interesse em <mensagem>".
import type { IconName } from "../config/icons";

export type Area = "Rosto" | "Pele" | "Corpo";

export interface Procedimento {
  nome: string;
  area: Area;
  linha: string;
  mensagem: string;
  icon: IconName;
  assinatura?: boolean;
}

export const PROCEDIMENTOS: Procedimento[] = [
  { nome: "Botox", area: "Rosto", linha: "Suaviza as linhas de expressão sem tirar a sua expressão.", mensagem: "Botox", icon: "syringe" },
  { nome: "Preenchimento labial", area: "Rosto", linha: "Volume e contorno no desenho da sua boca, sem exagero.", mensagem: "preenchimento labial", icon: "heart" },
  { nome: "Rinomodelação", area: "Rosto", linha: "Ajusta o perfil do nariz com preenchimento, sem cirurgia.", mensagem: "rinomodelação", icon: "userFocus" },
  { nome: "Preenchimento", area: "Rosto", linha: "Ácido hialurônico para dar contorno ao queixo, à mandíbula e ao rosto.", mensagem: "preenchimento", icon: "drop" },
  { nome: "Golden Bum", area: "Corpo", linha: "Harmonização de bumbum para realçar a curva. A assinatura da Dra.", mensagem: "o Golden Bum (harmonização de bumbum)", icon: "crown", assinatura: true },
  { nome: "Bioestimulador de colágeno", area: "Rosto", linha: "Estimula o colágeno da própria pele para mais firmeza.", mensagem: "bioestimulador de colágeno", icon: "sparkle" },
  { nome: "Fios de PDO", area: "Rosto", linha: "Fios absorvíveis que sustentam e estimulam colágeno.", mensagem: "fios de PDO", icon: "wave" },
  { nome: "Sorriso gengival", area: "Rosto", linha: "Toxina botulínica para mostrar menos gengiva ao sorrir.", mensagem: "tratamento do sorriso gengival", icon: "smiley" },
  { nome: "Limpeza de pele", area: "Pele", linha: "Tira impurezas e cravos e deixa a pele pronta para o resto.", mensagem: "limpeza de pele", icon: "dropHalf" },
  { nome: "Peeling", area: "Pele", linha: "Renova a camada de cima da pele, para manchas e textura.", mensagem: "peeling", icon: "leaf" },
  { nome: "Microagulhamento", area: "Pele", linha: "Estimula colágeno para melhorar textura, poros e marcas.", mensagem: "microagulhamento", icon: "wand" },
  { nome: "Depilação a laser", area: "Corpo", linha: "Menos pelos de forma duradoura, em sessões programadas.", mensagem: "depilação a laser", icon: "lightning" },
];
