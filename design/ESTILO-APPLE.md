# Estilo de referência: páginas de produto da Apple

Resumo da referência enviada pelo dono (15/10/2026) e de como ela foi aplicada à LP da Dra. Rychelly.

## A ideia

A página é uma galeria branca. A imagem principal ocupa o centro como o "evento visual", e a tipografia e os
controles ficam quietos em volta. Seções brancas se alternam com faixas `#f5f5f7` que recebem cards brancos
grandes. Uma única cor saturada aparece só em links e em pílulas pequenas de conversão. Tudo é plano: sem sombra
e sem gradiente decorativo.

## Tokens usados

| Papel | Apple | Aqui |
| --- | --- | --- |
| Canvas | `#ffffff` | igual |
| Faixa alternada, rodapé, card sobre branco | `#f5f5f7` | igual |
| Painel da nav aberta | `#fafafc` | igual |
| Divisória 1px | `#d6d6d6` | igual |
| Borda de controle | `#e6e6e8` | igual |
| Texto | `#1d1d1f` | igual |
| Texto secundário | `#707070` | igual |
| Contorno fino | `#86868b` | igual |
| Link de texto | `#0066cc` (Apple Blue) | `#5b45c9`, violeta da marca |
| Pílula de conversão | `#0071e3` (Pricing Blue) | `#6a4fe0`, violeta da marca |
| Rótulo de lançamento | `#b64400` | `#b5473a`, coral escuro da marca ("Assinatura") |

O azul da Apple foi trocado pelo violeta do logo da Dra. no mesmo papel e com a mesma economia de uso. Para voltar
ao azul, troque `--color-accent` e `--color-accent-cta` em `src/styles/global.css`.

## Tipografia

SF Pro não pode ser servida na web. Nos aparelhos Apple a página usa a própria SF Pro do sistema
(`-apple-system`); no resto usa Inter Variable com eixo óptico (`opsz`), que troca sozinho para o desenho
"Display" em tamanhos grandes, como a SF Pro Display.

| Papel | Tamanho / peso / entrelinha / tracking |
| --- | --- |
| Hero | 80px (44px no celular) / 600 / 1.05 / -0.015em |
| Título de seção | 56px (36px) / 600 / 1.07 |
| Título de card de destaque | 40px (28px) / 600 / 1.1 |
| Título de card | 28px (21px) / 600 / 1.14 |
| Rótulo (kicker) | 21px (17px) / 600 |
| Corpo | 17px / 400 / 1.47 / -0.022em (os -0.374px da Apple) |
| Nav | 12px / 400 |
| Nome na nav | 19px / 600 |

## Forma e componentes

- Card e mídia: raio de 28px, sem sombra, sem borda. Botões e controles: pílula.
- Nav local presa no topo, branco translúcido com blur de 20px e linha de 1px quando a página rola.
- Hero: rótulo + título centralizados e o retrato logo abaixo, sem card em volta; cápsula branca flutuante
  sobre a foto com a pílula de agendamento.
- Faixa de destaques (`#f5f5f7`) com título e link de texto do lado oposto, fileira de cards brancos que vaza
  para a direita, e o controle translúcido `rgba(210,210,215,.64)` com pontos e setas.
- Seletor Antes/Depois no mesmo estilo de controle segmentado.
- Blocos editoriais: texto alinhado à esquerda e imagem entrando pelo lado oposto.
- Rodapé `#f5f5f7`, texto 12px, linhas finas.

## Não fazer

- Gradiente decorativo, sombra em card, raio diferente de 28px em card/mídia.
- Cor de destaque como fundo grande ou em todos os botões.
- Título do hero em 700.
- Rótulo de "assinatura" dentro de pílula colorida (é só texto).
