// Dados reais da Dra. Rychelly Furtado (bio do Instagram e artes de divulgação enviadas pelo cliente).
// Não inventar nada além disso: registro no COREN, horário e anos de experiência ainda não foram informados.

export const SITE = {
  nome: "Dra. Rychelly Furtado",
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
  telefoneExibicao: "(99) 99934-1648",
  telefoneE164: "+5599999341648",
  instagramUser: "@drarychellyfurtado",
  instagramUrl: "https://www.instagram.com/drarychellyfurtado/",
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

const BUSCA = encodeURIComponent(`${SITE.endereco.rua}, ${SITE.endereco.cidade} - ${SITE.endereco.uf}, ${SITE.endereco.cep}`);
export const MAPA_EMBED = `https://maps.google.com/maps?q=${BUSCA}&z=17&output=embed`;
export const MAPA_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${BUSCA}`;
