# Deck — Projetos Executivos

Projetos executivos estruturais dos decks externos do Residencial La Reserva 2 — Portaria B, Atibaia/SP.

---

## 🏠 `casa-08-lucas/` — ✅ COMPLETO

Projeto executivo do deck da **Casa 8** (proprietário Lucas Vital Pereira Minozzo), dimensões **3,80 × 6,00 m** (22,8 m²). Entregue à administração do condomínio em resposta à Notificação de 21/10/2026.

| Arquivo | Descrição |
|---|---|
| `projeto-deck-rev16.pdf` | Projeto executivo final (11 folhas A4) |
| `projeto-deck-rev16.html` | Fonte HTML editável |
| `ART-2620263342015-assinada.pdf` | **ART CREA-SP nº 2620263342015** assinada digitalmente via GOV.BR em 23/10/2026 |
| `croqui-v2.jpg` | Perspectiva ilustrativa (Gemini) |
| `planta-oficial-lt08.png` | Trecho da planta oficial do condomínio |

**Responsável técnico:** Eng. Civil José Carlos Minozzo — CREA/SP 0600.490.414
**Status:** entregue à síndica em 23/10/2026 via e-mail para contato@evidencianegocios.com.br

---

## 🏠 `casa-07-anderson/` — ⏳ AGUARDANDO Nº DA ART

Projeto executivo do deck da **Casa 7** (proprietário Anderson Soares Silva), dimensões **4,00 × 3,00 m** (12 m²), estrutura em madeira de demolição. Regularização espontânea.

| Arquivo | Descrição |
|---|---|
| `projeto-deck-anderson-rev03.pdf` | Projeto executivo (4 folhas A4) — campo "Nº da ART" ainda em branco |
| `projeto-deck-anderson.html` | Fonte HTML editável |
| `estudo-preliminar.jpg` | Croqui preliminar colorido (Gemini) |

**Responsável técnico:** Eng. Civil José Carlos Minozzo — CREA/SP 0600.490.414 (dados já preenchidos no projeto)
**Status:** Rev.03 enviado por WhatsApp em 01/11/2026 para Bruna (escritório do Minozzo) emitir ART de Regularização. Aguardando:
1. Emissão da ART no CREAnet pela Bruna
2. Pagamento do boleto da taxa CREA (~R$ 285) pelo Anderson
3. Assinatura digital do Minozzo via GOV.BR
4. Lançamento do nº da ART no campo 13 do projeto → republicação como Rev.04

### 📝 Como atualizar quando a ART chegar

1. Receber o número da ART (ex.: 262XXXXXXXXXX) e a data de emissão
2. Editar `projeto-deck-anderson.html` → procurar `(a preencher após emissão no CREAnet)` → trocar pelo número
3. Procurar `____ / ____ / 2026` dentro da tabela de Responsabilidade Técnica → trocar pela data real
4. Trocar `Rev. 03` → `Rev. 04` em todas as ocorrências
5. Gerar novo PDF: `chromium --headless --print-to-pdf="projeto-deck-anderson-rev04.pdf" projeto-deck-anderson.html`
6. Commitar: `git add deck/casa-07-anderson/ && git commit -m "deck/casa-07-anderson: Rev.04 - ART emitida e lançada" && git push`

Ou simplesmente abrir chat novo e pedir pra atualizar o nº da ART no projeto do Anderson — tudo já está aqui no repo pra retomar.

---

## 🔧 Método estrutural padrão (ambos os projetos)

- Fundação em sapatas de concreto / brocas escavadas manualmente (depende do caso)
- Estrutura em madeira (cumaru/garapeira novos no Caso 8; madeira de demolição retrabalhada no Caso 7)
- Guarda-corpo h = 1,10 m conforme NBR 14718
- Carga condominial: 150 kgf/m² (limite da Convenção, item 3.2 "a.a.b")

## 📋 Normas técnicas adotadas

ABNT NBR 7190:2022 · NBR 6120:2019 · NBR 6118:2014 · NBR 6136:2016 · NBR 15961:2011 · NBR 14718:2019 · NBR 6122
