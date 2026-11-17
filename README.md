# Controle Casa La Reserva

Controle financeiro do fit-out da casa em Atibaia (Residência 8, La Reserva II-B).
Publicado via Cloudflare Worker `casa8-la-reserva-b-invest`.

## Arquivos

- **`worker.js`** — código do Cloudflare Worker (HTML embutido). Este é o arquivo que vai pro deploy.
- **`controle-casa-la-reserva.html`** — HTML puro do controle (fonte de verdade). Editado a cada revisão.

## Fluxo de deploy

1. Editar `controle-casa-la-reserva.html` (fonte)
2. Regenerar `worker.js` (HTML embutido em template literal JS)
3. Deploy no Cloudflare via painel ou wrangler

## Histórico de revisões

Ver seção 1 do próprio HTML — cada rev fica registrada lá com timestamp e mudanças.

## Rev atual

**10.22** — 17/11/2026 · nova §1D receitas Airbnb: 3 reservas R$ 9.615,91 líquidos (incl. Réveillon) · investimento líquido R$ 663.182 · total do projeto R$ 672.798

Obs.: desde a 10.16 o `worker.js` é a fonte viva; `controle-casa-la-reserva.html` está parado na 10.10.
