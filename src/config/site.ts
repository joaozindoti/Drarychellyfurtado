// Dados reais da Dra. Rychelly Furtado: bio do Instagram, artes de divulgação enviadas pelo cliente e o perfil
// do Google Maps (horário e localização, conferidos em 15/10/2026). Não inventar nada além disso.
// O registro no COREN ainda não foi informado.
// Endereço: a bio diz "Av. Otávio Passos, 269"; o Google Maps mostra "R. Otávio Passos, 271". Fica o da bio
// (é o que ela divulga); o mapa e o "Como chegar" usam o pino do perfil, que é o lugar certo de qualquer forma.

export const SITE = {
  nome: "Dra. Rychelly Furtado",
  primeiroNome: "Rychelly",
  marca: "Rychelly Furtado Saúde e Estética",
  profissao: "Enfermeira Harmonizadora",
  lema: "Transforme a pele em seu melhor filtro.",
  endereco: {
    rua: "Av. Otávio Passos, 269",
    cidade: "Pedreiras",
    uf: "MA",
    cep: "65725-000",
    pais: "BR",
  },
  geo: { lat: -4.5766198, lng: -44.597307 },
  // Horário do perfil no Google Maps.
  horario: [
    { dias: "Segunda a sexta", horas: "8h às 18h" },
    { dias: "Sábado", horas: "8h às 13h" },
  ],
  horarioComplemento: "Domingo fechado. Atendimento com hora marcada",
  telefoneExibicao: "(99) 99934-1648",
  telefoneE164: "+5599999341648",
  instagramUser: "@drarychellyfurtado",
  instagramUrl: "https://www.instagram.com/drarychellyfurtado/",
  mapsUrl:
    "https://www.google.com/maps/place/Dra.+Rychelly+Furtado+Sa%C3%BAde+e+Est%C3%A9tica/@-4.5766198,-44.597307,17z/data=!4m6!3m5!1s0x78989005b61297f:0x9c0b24b94805c691!8m2!3d-4.5766198!4d-44.597307!16s%2Fg%2F11y5yh7v22",
} as const;

export const ENDERECO_LINHA = `${SITE.endereco.rua}, ${SITE.endereco.cidade}-${SITE.endereco.uf}`;

// O link wa.me/message/73B7IEF7NPF5C1 da bio não aceita mensagem pronta; o link pelo número aceita.
const NUMERO = "5599999341648";
export const whatsapp = (mensagem: string) => `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const WHATSAPP_URL = whatsapp("Olá, Dra. Rychelly! Vim pelo site e gostaria de agendar uma avaliação.");
export const whatsappProcedimento = (procedimento: string) =>
  whatsapp(`Olá, Dra. Rychelly! Vim pelo site e tenho interesse em ${procedimento}. Gostaria de agendar uma avaliação.`);

// Rótulo único de CTA na página inteira.
export const CTA_LABEL = "Agendar avaliação";

export const MAPA_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent("Dra. Rychelly Furtado Saúde e Estética, Pedreiras - MA")}&ll=${SITE.geo.lat},${SITE.geo.lng}&z=17&output=embed`;
// "Como chegar" abre o perfil real no Google Maps.
export const MAPA_ROTA = SITE.mapsUrl;
