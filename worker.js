// worker.js
var HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Controle \u2014 Resid\xEAncia 8 \xB7 La Reserva II-B \xB7 Rev. 10.16</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0f1115; --panel:#171a20; --panel2:#1d2129; --line:#2a2f3a;
  --txt:#e6e9ef; --dim:#98a0b0; --dim2:#6f7787;
  --warm:#e8a25c; --ok:#6fbf8b; --alert:#e0705f; --cool:#8fb8d4; --purple:#a98fd4;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--txt);font-family:Inter,system-ui,sans-serif;font-size:15px;line-height:1.6}
.wrap{max-width:1120px;margin:0 auto;padding:32px 22px 80px}
h1,h2,h3,h4{font-family:Archivo,sans-serif;margin:0}
h1{font-size:32px;font-weight:800;letter-spacing:-.02em}
h2{font-size:20px;font-weight:800;letter-spacing:-.01em;margin:0 0 4px}
h3{font-size:15px;font-weight:700;color:var(--warm);text-transform:uppercase;letter-spacing:.08em;margin:0 0 10px}
h4{font-size:14px;font-weight:700;margin:0 0 6px}
p{margin:0 0 12px}
a{color:var(--cool)}
.hero{background:linear-gradient(140deg,#1a1f2b,#12151b);border:1px solid var(--line);border-radius:16px;padding:26px 26px 22px;margin-bottom:26px}
.hero .sub{color:var(--dim);font-size:14px;margin-top:6px}
.rev{display:inline-block;background:var(--warm);color:#1a1207;font-weight:800;font-size:12px;padding:3px 10px;border-radius:20px;letter-spacing:.06em;font-family:Archivo}
sec,section{display:block}
section{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:22px;margin-bottom:18px}
.grid{display:grid;gap:12px}
.g2{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}
.kpi{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:14px}
.kpi span,.kpi .l{display:block;font-size:11px;color:var(--dim2);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:4px}
.kpi b,.kpi .v{display:block;font-family:Archivo;font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.2}
.kpi small,.kpi .d{display:block;font-size:12px;color:var(--dim);margin-top:5px;line-height:1.45}
.kpi h4{font-size:13px;color:var(--txt);margin-bottom:6px}
table{width:100%;border-collapse:collapse;font-size:14px;margin:6px 0 4px}
th{text-align:left;font-family:Archivo;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--dim2);font-weight:700;padding:8px 10px;border-bottom:1px solid var(--line)}
td{padding:9px 10px;border-bottom:1px solid #21252e;vertical-align:top}
tr:last-child td{border-bottom:none}
td.n,th.n{text-align:right;font-variant-numeric:tabular-nums}
tbody tr:hover{background:#1b1f27}
.tot td{font-weight:700;border-top:1px solid var(--line);background:#1b1f27}
.pill{display:inline-block;font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;font-family:Archivo;letter-spacing:.04em;white-space:nowrap}
.pill.ok{background:rgba(111,191,139,.16);color:var(--ok)}
.pill.go{background:rgba(143,184,212,.16);color:var(--cool)}
.pill.no{background:rgba(224,112,95,.16);color:var(--alert)}
.pill.warm{background:rgba(232,162,92,.16);color:var(--warm)}
.pill.new{background:rgba(169,143,212,.18);color:var(--purple)}
.note{border-left:3px solid var(--warm);background:rgba(232,162,92,.06);padding:12px 14px;border-radius:0 8px 8px 0;margin:12px 0;font-size:14px}
.note.bad{border-color:var(--alert);background:rgba(224,112,95,.07)}
.note.good{border-color:var(--ok);background:rgba(111,191,139,.06)}
.note.info{border-color:var(--cool);background:rgba(143,184,212,.06)}
.note.new{border-color:var(--purple);background:rgba(169,143,212,.07)}
ul{margin:0 0 12px;padding-left:20px}
li{margin-bottom:7px}
.mono{font-variant-numeric:tabular-nums}
.sep{height:1px;background:var(--line);margin:18px 0}
.foot{color:var(--dim2);font-size:12px;text-align:center;margin-top:30px;line-height:1.7}
.clock{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.clock div{background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:10px;padding:10px 14px;min-width:132px}
.clock em{display:block;font-style:normal;font-size:11px;color:var(--dim2);text-transform:uppercase;letter-spacing:.07em;font-weight:600}
.clock strong{display:block;font-family:Archivo;font-size:19px;font-weight:800;margin-top:2px}
.d0{color:var(--alert)}.d1{color:var(--warm)}.d2{color:var(--ok)}
.tag{font-size:11px;color:var(--dim2);font-weight:600;letter-spacing:.06em;text-transform:uppercase}
@media(max-width:640px){h1{font-size:25px}.wrap{padding:20px 14px 60px}table{font-size:13px}td,th{padding:7px 6px}}

/* rev 10.12 \u2014 bot\xE3o flutuante, modal, \xA712C din\xE2mica */
.fab{position:fixed;bottom:24px;right:24px;z-index:100;background:var(--warm);color:#1a1207;border:none;border-radius:100px;padding:14px 22px;font-family:Archivo,sans-serif;font-weight:800;font-size:14px;letter-spacing:.04em;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.5),0 3px 8px rgba(232,162,92,.25);transition:transform .12s,box-shadow .12s}
.fab:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(0,0,0,.55),0 4px 12px rgba(232,162,92,.35)}
.fab:active{transform:translateY(0)}
.stamp{display:inline-block;font-size:11px;color:var(--dim);background:rgba(0,0,0,.28);border:1px solid var(--line);border-radius:20px;padding:3px 10px;margin-left:8px;font-family:Archivo,sans-serif;letter-spacing:.04em;font-weight:600}
.stamp b{color:var(--txt);font-weight:700}
.stamp.live{background:rgba(111,191,139,.14);border-color:rgba(111,191,139,.4);color:var(--ok)}
.modal-backdrop{position:fixed;inset:0;background:rgba(5,7,11,.75);z-index:200;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px)}
.modal-backdrop.open{display:flex}
.modal{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:26px;max-width:520px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 30px 80px rgba(0,0,0,.6)}
.modal h3{margin-bottom:16px;color:var(--warm)}
.modal .close{float:right;background:none;border:none;color:var(--dim);font-size:24px;cursor:pointer;line-height:1;padding:0;margin:-8px -6px 0 0}
.modal .close:hover{color:var(--txt)}
.field{margin-bottom:14px}
.field label{display:block;font-size:11px;color:var(--dim2);text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:5px}
.field input,.field select,.field textarea{width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px 12px;color:var(--txt);font-family:Inter,system-ui,sans-serif;font-size:14px}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--warm)}
.field.row{display:flex;gap:10px}.field.row>div{flex:1}
.field small{display:block;color:var(--dim2);font-size:11px;margin-top:4px}
.modal .actions{display:flex;gap:10px;margin-top:20px;justify-content:flex-end}
.modal .btn{padding:10px 18px;border-radius:8px;font-family:Archivo,sans-serif;font-weight:700;font-size:13px;letter-spacing:.05em;cursor:pointer;border:1px solid var(--line);background:var(--panel2);color:var(--txt)}
.modal .btn:hover{background:#22262f}
.modal .btn.primary{background:var(--warm);color:#1a1207;border-color:var(--warm)}
.modal .btn.primary:hover{filter:brightness(1.1)}
.modal .btn.danger{background:transparent;color:var(--alert);border-color:rgba(224,112,95,.4)}
.modal .btn.danger:hover{background:rgba(224,112,95,.12)}

/* \xA712C \u2014 grade mensal din\xE2mica */
.month-grid{display:grid;gap:6px;margin-top:14px}
.mrow{display:grid;grid-template-columns:80px 1fr 100px 32px;align-items:center;gap:10px;background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:10px 14px;transition:background .12s}
.mrow.past{opacity:.55}
.mrow.peak{border-color:var(--alert);background:rgba(224,112,95,.06)}
.mrow.plateau{border-color:var(--warm);background:rgba(232,162,92,.05)}
.mrow.calm{border-color:rgba(111,191,139,.3)}
.mrow .mlabel{font-family:Archivo,sans-serif;font-weight:800;font-size:13px;letter-spacing:.03em;text-transform:uppercase;color:var(--txt)}
.mrow .mbar{background:rgba(0,0,0,.28);border-radius:4px;height:8px;overflow:hidden;position:relative}
.mrow .mbar>span{display:block;height:100%;background:linear-gradient(90deg,var(--warm),var(--alert));border-radius:4px;transition:width .3s}
.mrow.calm .mbar>span{background:linear-gradient(90deg,var(--ok),var(--cool))}
.mrow .mval{font-family:Archivo,sans-serif;font-weight:800;font-size:14px;text-align:right;font-variant-numeric:tabular-nums}
.mrow .mtoggle{background:none;border:none;color:var(--dim);cursor:pointer;font-size:16px;padding:0;line-height:1}
.mrow .mtoggle:hover{color:var(--txt)}
.mdetails{display:none;grid-column:1/-1;margin-top:8px;padding-top:10px;border-top:1px solid var(--line);font-size:12px;color:var(--dim)}
.mdetails.open{display:block}
.mdetails table{margin:0;font-size:12px}
.mdetails td{padding:4px 8px;border:none}
.mdetails .del-item{color:var(--alert);background:none;border:none;cursor:pointer;font-size:14px;padding:0 4px}
.mdetails .del-item:hover{filter:brightness(1.3)}
.legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.legend span{display:inline-flex;align-items:center;gap:5px}
.legend em{width:10px;height:10px;border-radius:3px;display:inline-block;font-style:normal}
.custom-list{margin-top:16px;background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:14px}
.custom-list h4{color:var(--warm);margin-bottom:10px}
.custom-list .empty{color:var(--dim2);font-size:13px;font-style:italic}
.custom-row{display:grid;grid-template-columns:1fr 90px 90px 60px 30px;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid #21252e;font-size:13px}
.custom-row:last-child{border-bottom:none}
.custom-row .desc{color:var(--txt)}
.custom-row .desc small{display:block;color:var(--dim2);font-size:11px;margin-top:2px}
.custom-row .amt{text-align:right;font-variant-numeric:tabular-nums;font-family:Archivo,sans-serif;font-weight:700}
.custom-row .cond{color:var(--dim);font-size:12px}
.custom-row .pill{font-size:10px;padding:1px 6px}
.custom-row .del{background:none;border:none;color:var(--alert);cursor:pointer;font-size:16px;padding:0}
.custom-row .del:hover{filter:brightness(1.3)}
@media(max-width:640px){
  .fab{padding:12px 16px;font-size:13px;bottom:16px;right:16px}
  .mrow{grid-template-columns:60px 1fr 84px 24px;gap:6px;padding:8px 10px}
  .mrow .mlabel{font-size:11px}
  .mrow .mval{font-size:12px}
  .custom-row{grid-template-columns:1fr 80px 24px;gap:6px}
  .custom-row .cond,.custom-row .pill{display:none}
  .modal{padding:18px}
  .field.row{flex-direction:column;gap:14px}
}

</style>
</head>
<body>
<div class="wrap">
<div class="hero">
  <span class="rev">REV. 10.18 \xB7 <b>21/10/2026 \xB7 qua</b> \xB7 <b>deck ampliado + planejados cozinha fechados + MO deck quitada + Felipe Uemori removido</b> \xB7 Elson 2/2 R$ 2.500 PAGO (R$ 5k MO deck total quitada) \xB7 Tino corte+fitagem R$ 3.351 agora em 6\xD7 (era \xE0 vista) \xB7 Leo Madeiras material cozinha R$ 3.871 em 10\xD7 (era a or\xE7ar) \xB7 Felipe Uemori REMOVIDO (foi s\xF3 Franklin) \xB7 R$ 3.700 vigas e madeiras adicionais do deck AMPLIADO PIX 08/10 \xB7 R$ 1.133,35 cimento inicial do deck (linha explicitada) \xB7 total projeto R$ 652.459 \u2192 R$ 660.030 \xB7 falta \xE0 vista agora SOMENTE R$ 450 (port\xE3ozinho) \xB7 nova \xA71C resumo por ambiente</span>
  <span class="stamp live" id="update-stamp">\xDAltima atualiza\xE7\xE3o: <b id="update-time">agora</b></span>
  <h1 style="margin-top:12px">Resid\xEAncia 8 \xB7 La Reserva II-B</h1>
  <div class="sub">Av. Zezico Pe\xE7anha, 605 \u2014 Itapetinga \u2014 Atibaia/SP \xB7 CEP 12946-372 \xB7 matr. 158.854 \xB7 137,39 m\xB2<br>
  <b>Estado em 14/09/2026 (dom):</b> im\xF3vel <b>QUITADO</b> \xB7 energia LIGADA \xB7 pedra + cooktop + ACs + fechadura + Adelco (arandelas + banheiros) + piso Destro + boxes dos banheiros \u2014 <b>tudo INSTALADO</b>. <b>Semana pesada de compras:</b> +R$ 15.799 em cortinas (6\xD7 cart\xE3o), Spa Infl\xE1vel Rome (10\xD7 Master 3619), carrinho ML (6 cadeiras Gruvyer + mesa 130cm + lumin\xE1ria + l\xE2mpada RGB), aspirador. <b>Falta:</b> espa\xE7o gourmet (LYME) \xB7 planejados agora s\xE3o breakdown modular \u2014 <b>Tino</b> corte+produ\xE7\xE3o R$ 3.351 (paga sexta 03/10) + <b>Leo Madeiras</b> material (a or\xE7ar, 10\xD7 na maquineta Tino) + <b>Felipe Uemori</b> instala\xE7\xE3o ~R$ 4k \xB7 deck: Elson 2/2 R$ 2.500 pendente (adiantamento R$ 2.500 pago set/26). Total do projeto do bolso: <b>R$ 660.030</b> \xB7 pago R$ 496.262 \xB7 falta \xE0 vista <b>R$ 450</b> (port\xE3ozinho entrada, paga 30/10) \xB7 <b>MO deck quitada</b> (Elson 2/2 R$ 2.500 pago) \xB7 <b>planejados cozinha fechados</b> (Tino R$ 3.351 em 6\xD7 + Leo Madeiras R$ 3.871 em 10\xD7) \xB7 <b>deck ampliado</b> (+R$ 3.700 vigas 08/10).</div>
  <div class="clock">
    <div><em>Im\xF3vel</em><strong class="d2">\u2713 QUITADO</strong><span class="tag">02/09 \xB7 R$ 411k do bolso</span></div>
    <div><em>Piso \xB7 Adelco \xB7 boxes</em><strong class="d2">\u2713 INSTALADOS</strong><span class="tag">semana 08-13/09</span></div>
    <div><em>Compras da semana</em><strong class="d1">+R$ 15.799</strong><span class="tag">cortinas + Spa + carrinho ML</span></div>
    <div><em>Espa\xE7o gourmet \xB7 LYME</em><strong class="d1">pendente</strong><span class="tag">\xFAltimo item de esquadria</span></div>
    <div><em>Projeto planejados</em><strong class="d2">\u2713 PAGO 2\xAA</strong><span class="tag">entrega ~28/09</span></div>
  </div>
</div>
<!-- ============ 1. O QUE MUDOU ============ -->
<section>
  <h3>1 \xB7 Hist\xF3rico de revis\xF5es</h3>
  <table>
    <tr><td style="width:120px"><span class="pill new">10.18</span></td><td><b>Deck ampliado + MO deck quitada + planejados cozinha concretizados + Felipe Uemori apagado + nova \xA71C resumo por ambiente.</b> <b>Elson 2/2 R$ 2.500 PAGO</b> \u2014 R$ 5k total de MO do deck quitada. <b>Deck AMPLIADO:</b> R$ 3.700 em vigas e madeiras adicionais PIX 08/10. R$ 1.133,35 cimento inicial do deck virou linha expl\xEDcita (estava no chip 10.16 como "alvenaria"). <b>Planejados cozinha fechados:</b> Tino corte+fitagem R$ 3.351 agora em 6\xD7 (era \xE0 vista pra sexta 03/10) + Leo Madeiras material R$ 3.871 em 10\xD7 (era "a or\xE7ar"). <b>Felipe Uemori REMOVIDO</b> da tabela \u2014 nunca foi, foi s\xF3 o Franklin. KPIs: total R$ 652.459 \u2192 <b>R$ 660.030</b> (+R$ 7.571: Leo Madeiras + vigas adicionais). Falta \xE0 vista R$ 2.950 \u2192 <b>R$ 450</b> (s\xF3 port\xE3ozinho). Pago \xE0 vista R$ 490.062 \u2192 <b>R$ 496.262</b> (+Elson 2/2 R$ 2.500 + vigas R$ 3.700). <b>Nova se\xE7\xE3o \xA71C \u2014 Resumo por ambiente da casa</b>: 10 categorias ADHD-friendly com total e principais itens, pra sair da sopa de linhas.</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.17</span></td><td><b>Bloco outubro fechado \u2014 8 lanc\xE7amentos novos somando +R$ 8.081 l\xEDquido no projeto.</b> <b>Franklin montou os arm\xE1rios da cozinha</b> (R$ 2.800 \xE0 vista, R$ 100 acima do orc\xE7ado R$ 2.700) \u2014 SUBSTITUI a estimativa de R$ 4k do Felipe Uemori (economia l\xEDquida R$ 1.200). Deck acabamento: <b>R$ 5.400 madeiras guarda-corpo PIX 11/10</b> + R$ 130 parafusos + R$ 372 cetol \xE0 vista. <b>Port\xE3ozinho entrada R$ 450</b> \xE0 vista \u2014 paga 30/10 (\xFAnica pend\xEAncia \xE0 vista). <b>Paisagismo R$ 1.193 em 5\xD7</b> cart\xE3o (10 mudas podocarpo 2,5m + 2 jardineiras 1m + frete + plantio). <b>LYME aditivo R$ 3.181 em 5\xD7 cr\xE9dito 10/10</b>: entrou o 3\xBA box R$ 1.531 (contratado desde rev 10.7, agora com condic\xE7\xE3o confirmada) + <b>R$ 1.650 vidro/esquadria do corredor lateral da casa</b> (NOVO escopo). 6 lumin\xE1rias externas solares R$ 180 \xE0 vista pro deck/jardim. KPIs: total R$ 644.378 \u2192 <b>R$ 652.459</b>. Falta \xE0 vista R$ 2.500 \u2192 <b>R$ 2.950</b> (Elson 2/2 + port\xE3ozinho). Falta contratar R$ 4.000 \u2192 <b>R$ 0</b> (Franklin fez o papel do Felipe Uemori). Fluxo out/26 R$ 19.625 \u2192 <b>R$ 28.957</b> (pico desloca de set/26 pra out/26). Nov/26\u2192mar/27 recebe +R$ 874,80/m\xEAs nas parcelas (5\xD7 R$ 238,60 paisagismo + 5\xD7 R$ 636,20 LYME aditivo).</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.16</span></td><td><b>10.16 \u2014 chip hero, par\xE1grafo de estado e tabela de planejados finalmente atualizados (rev 10.15 tinha ficado meia-boca, s\xF3 \xA712C e \xA7A2). Setembro fechou com bloco de deck + projetor + planejados modulares.</b> Registrado: deck vigas/madeiramento extra R$ 3.700 (PIX 23/09), alvenaria R$ 1.133, Elson MO 1/2 R$ 2.500 (50% adiantamento, falta R$ 2.500), Projetor sala BTG 10\xD7 R$ 300 (1\xAA em set/26). Planejados pivotaram: <b>abandonada a provis\xE3o monol\xEDtica JKV R$ 65k</b>, entra breakdown modular <b>Tino</b> (corte+produ\xE7\xE3o R$ 3.351, paga sexta 03/10) + <b>Leo Madeiras</b> (material, a or\xE7ar, 10\xD7 na maquineta do Tino) + <b>Felipe Uemori</b> (instala\xE7\xE3o ~R$ 4k). KPIs recalculados: "Falta \xE0 vista" R$ 4k \u2192 R$ 2.5k; "Falta contratar" R$ 65k \u2192 R$ 4k. Baseline \xA712C atualizado nos meses set/26 e out/26; projetor entra como parcela de set/26 a jun/27.</td></tr>
        <tr><td style="width:120px"><span class="pill new">10.14</span></td><td><b>+Jogo de Panelas Indu\xE7\xE3o Antiaderente Cer\xE2mica 10 pe\xE7as PPG PFOA Free Grafite \u2014 R$ 379,56 no Master 3619, 1\xD7 \xE0 vista (de R$ 683,88 \xB7 desconto R$ 304,32 \xB7 45% off).</b> Pedido ML #2000018524446284, FULL, chegou 19/09 entre 11-15h. <b>Impacto:</b> total projeto R$ 645.439 \u2192 R$ 645.819. Bloco Enxoval ML 18/09 agora tem 11 itens (R$ 1.061,11 \u2192 R$ 1.440,67) \xB7 Cozinha R$ 350,44 \u2192 R$ 730,00. Plat\xF4 out/26 R$ 15.593 \u2192 R$ 15.973 (s\xF3 esse m\xEAs, depois volta).</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.13</span></td><td><b>+10 itens de enxoval Mercado Livre (18/09), somando R$ 1.061,11 no cart\xE3o \xE0 vista.</b> Cama R$ 306,98 (len\xE7\xF3is Super King + Queen 600 fios GM Decorshop), cozinha R$ 350,44 (jogo jantar/ch\xE1 Tramontina Canyon 20 p\xE7s + faqueiro Essenciale 24 p\xE7s + 12 copos vidro 340ml OCA), banheiros R$ 403,69 (2\xD7 Clink bambu preto + porta-toalha bancada + lixeira sensor 16L + suporte papel higi\xEAnico 4 rolos). Detalhado no \xA711 (novo bloco "Enxoval ML 18/09"). <b>Impacto:</b> out/26 R$ 14.532 \u2192 R$ 15.593 (plat\xF4 sobe R$ 1.061 no primeiro m\xEAs, depois volta). Total projeto R$ 644.378 \u2192 R$ 645.439. \xA712C atualizada com 3 linhas novas no baseline out/26.</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.12</span></td><td><b>Controle virou ferramenta interativa \u2014 bot\xE3o "+ Nova despesa" no canto inferior, timestamp de \xFAltima atualiza\xE7\xE3o no cabe\xE7alho, e nova \xA712C com fluxo mensal DIN\xC2MICO.</b> Toda despesa que voc\xEA adicionar pelo bot\xE3o entra automaticamente na grade m\xEAs a m\xEAs (respeitando data da 1\xAA parcela e n\xBA de parcelas) e vai pra caixa "Despesas customizadas" com op\xE7\xE3o de apagar. Persist\xEAncia via <code>localStorage</code> \u2014 funciona sem tocar em infra (se quiser sincronizar entre celular e desktop depois, migro pra Cloudflare KV em ~15 min). \xA712B hardcoded segue como baseline; \xA712C mostra baseline + custom somados por m\xEAs, com barras proporcionais e cores por intensidade (calm/plateau/peak).</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.11</span></td><td><b>Deck material PAGO 03/09 na Madeireira Par\xE1 Brazzil \u2014 R$ 9.445 em 7\xD7 no BTG Ultra Blue.</b> Fato substitui a estimativa da rev 9.2 (R$ 10.639 em 5\xD7 cart\xE3o gen\xE9rico). <b>Pedido novo 19785</b> (o 19768 da rev 9.2 era pr\xE9-or\xE7amento). Composi\xE7\xE3o: 18 m\xB2 deck cumaru 1\xAA linha R$ 5.400 + 3 pilares 300\xD715\xD75 R$ 1.863 + 8 vigas 350\xD711\xD75 R$ 1.125 + 2 vigas 350\xD715\xD75 R$ 384 + 1 viga 450\xD720\xD75 R$ 351 + 2 vigas 450\xD715\xD75 R$ 492 + plainagem R$ 170. <b>Impacto no projeto: \u2212R$ 1.194</b> (total R$ 645.572 \u2192 <b>R$ 644.378</b>). <b>Impacto no fluxo:</b> parcela cai de R$ 2.128 pra R$ 1.349, mas estica de 5 pra 7 meses \u2014 plat\xF4 out\u2013jan/27 de R$ 15.311 vira <b>R$ 14.532</b>, fev/27 R$ 12.227 \u2192 R$ 11.448, mar/27 R$ 9.793 \u2192 R$ 11.142, abr/27 R$ 6.341 \u2192 R$ 7.690. <b>Falta \xE0 vista</b> segue R$ 4.000 (s\xF3 MO Elson).</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.10</span></td><td><b>\xA712B agora inclui as 2 despesas RECORRENTES mensais.</b> <b>Financiamento CAIXA</b> \u2014 1\xAA parcela <b>21/09 (dom)</b>, R$ 1.700/m\xEAs estimado (SAC 420\xD7 de R$ 143.966,50 \u2014 faixa real R$ 1.435\u20131.602 dependendo da taxa; ajusto quando cair o boleto). <b>Condom\xEDnio + energia \xE1reas comuns + fundo de obra</b> \u2014 R$ 700 fixo todo dia 15, come\xE7ando set/26. <b>Impacto:</b> +R$ 2.400/m\xEAs permanentes no fluxo. Pico set/26 R$ 16.875 \u2192 <b>R$ 19.275</b>. Plat\xF4 out/26\u2013jan/27 R$ 12.911 \u2192 <b>R$ 15.311</b>. <b>Total do projeto do bolso n\xE3o muda (R$ 645.572)</b> \u2014 CAIXA e condom\xEDnio n\xE3o entram no or\xE7amento do fit-out (s\xE3o d\xEDvida e recorrente).</td></tr>
    <tr><td style="width:120px"><span class="pill new">10.9</span></td><td><b>\xA712B refeita SEM marcenaria (como pediu).</b> A grade agora tem s\xF3 os 18 parcelamentos ativos, sem provis\xE3o futura. <b>Pico se desloca:</b> antes era nov/26 R$ 19.411 (com marcenaria); agora \xE9 <b>set/26 R$ 16.875</b> (m\xEAs de arrancada, tudo come\xE7ando), depois plat\xF4 em <b>R$ 12.911/m\xEAs por 4 meses (out/26 \u2192 jan/27)</b> e curva descendente at\xE9 set/27. Quando voc\xEA contratar a marcenaria, adiciono o bloco de volta na \xA712B.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.8</span></td><td><b>NOVA SE\xC7\xC3O \xA712B \xB7 Fluxo mensal de parcelamentos.</b> Consolidei todos os 18 parcelamentos ativos + marcenaria futura em 2 tabelas: (A) item por item com total, condi\xE7\xE3o, meio, 1\xAA parcela; (B) desembolso m\xEAs a m\xEAs de ago/26 a set/27. <b>Cronograma real:</b> ago/26 R$ 2.299 \xB7 set/26 R$ 16.875 \xB7 out/26 R$ 12.911 \xB7 <b>nov/26 R$ 19.411 (PICO)</b> \xB7 dez/26 R$ 19.411 \xB7 jan/27 R$ 19.411 \xB7 reduz gradualmente at\xE9 set/27 fechar. <b>Pico coincide com a marcenaria entrando</b> (R$ 6.500) + boiler + LYME + cortinas + Spa + carrinho ML todos ativos simultaneamente. Datas de in\xEDcio s\xE3o premissas (fatura fecha ~1 m\xEAs depois da compra) \u2014 me avisa se algum item come\xE7ar diferente.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.7</span></td><td><b>3\xBA box pequeno LYME confirmado: R$ 1.531,83 (fora do contrato 1412 original).</b> Total do projeto R$ 644.040 \u2192 R$ 645.572. Boiler solar EcoSol marcado como <b>INSTALADO</b>.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.6</span></td><td><b>Semana de gasto pesado: +R$ 15.799 em compras.</b> <b>Cortinas fechadas:</b> R$ 6.725 em 6\xD7 cart\xE3o (2 sala Wave cinza + 3 quartos Voil branco + escrit\xF3rio Blackout gelo). <b>Compras ML:</b> Spa Infl\xE1vel Rome 1180L R$ 6.780 (10\xD7 Master 3619) \xB7 carrinho ML R$ 1.864 (6 cadeiras Gruvyer + mesa industrial 130cm + lumin\xE1ria Luczeng + l\xE2mpada RGB) \xB7 aspirador Arno X-Pert R$ 430 parte cart\xE3o. <b>Projeto planejados 2\xAA parcela PAGA (R$ 2.500).</b> <b>Status:</b> piso instalado \u2713 \xB7 box banheiros instalados \u2713 \xB7 falta espa\xE7o gourmet LYME. <b>Total do projeto: R$ 628.241 \u2192 R$ 644.040.</b> "Falta \xE0 vista" agora tem apenas R$ 4.000 (s\xF3 MO deck).</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.4</span></td><td><b>Adelco eletricista PAGO R$ 3.500 em 05/09 (arandelas + instala\xE7\xE3o dos banheiros). Buraco do \xA77 encerrado.</b> Corrigi meu erro de interpreta\xE7\xE3o da rev 8.6: os "R$ 2.000 do eletricista" eram cota\xE7\xE3o, n\xE3o pagamento \u2014 o real foi R$ 3.500 pago no s\xE1bado, cobrindo <b>arandelas + instala\xE7\xE3o de todos os itens de banheiro</b>. <b>Total do projeto R$ 626.741 \u2192 R$ 628.241 (+R$ 1.500).</b> Migrou de parcelado (estimativa) pra \xE0 vista (real). <b>Limpeza da 1\xAA p\xE1gina:</b> arquivei do \xA72 tudo que j\xE1 foi feito (Elektro, Feijor, Cooktop, ACs, Fechadura, emolumentos, quita\xE7\xE3o Rodrigo, Adelco, CAIXA/Prefeitura). S\xF3 sobraram no rel\xF3gio os 4 itens de execu\xE7\xE3o real que faltam: <b>piso 08/09 \xB7 forno aguarda marc. \xB7 projeto planejados ~28/09 \xB7 marcenaria ~out</b>. <b>Novo:</b> internet Impacto Telecom 600 MB por R$ 109,90/m\xEAs (despesa recorrente, fora do or\xE7amento do fit-out).</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.3</span></td><td><b>Corre\xE7\xE3o: AC instala\xE7\xE3o R$ 3.247 foi PIX \xE0 vista em 31/08, n\xE3o parcelado.</b> Migrou de "\u25D0 parcelado em curso" \u2192 "\u2713 pago \xE0 vista". <b>Total do projeto INALTERADO (R$ 626.741)</b> \u2014 s\xF3 realocou entre as caixas: pago \xE0 vista R$ 467.882 \u2192 R$ 471.129, e comprado parcelado R$ 87.359 \u2192 R$ 84.112.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">\u{1F50C} 10.2</span></td><td><b>ELEKTRO LIGOU A ENERGIA hoje 03/09 \u2014 UC 49211331, nota 202610548330123-3.</b> Pedido feito 11/08 \u2192 conclu\xEDdo 03/09 = <b>23 dias corridos</b>, atraso de 10 dias vs previsto 24/08. Mas chegou <b>antes do pr\xF3ximo bloqueio real</b>, que era o eletricista de s\xE1bado 05/09 \u2014 se tivesse atrasado mais, a instala\xE7\xE3o de lumin\xE1rias + banheiros teria que ser remarcada. A diverg\xEAncia de logradouro (Zezico Pe\xE7anha \xD7 Avenida Atibaia) reconciliou na pr\xE1tica. <b>Destrava:</b> boiler solar (precisa de apoio el\xE9trico), opera\xE7\xE3o dos ACs, e o eletricista de s\xE1bado. <b>Uma coisa a confirmar:</b> os ACs foram instalados em ~26/08 antes da energia \u2014 estavam operacionais aguardando ou o instalador testou com gerador?</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.1</span></td><td><b>Semana produtiva \u2014 5 updates de status (nenhum mexe em dinheiro).</b> <b>Cooktop B+D INSTALADO</b> \u2713 (fecha o item destravado desde a rev 7.4). <b>Forno Midea chegou</b>, aguarda marcenaria (~28/09) pra embutir. <b>Piso Destro ENTREGUE</b> \u2014 <b>nivelamento com argamassa 04/09</b> (aplica o nivelante de R$ 509 da rev 9.4), <b>instala\xE7\xE3o 08/09</b>. <b>2 colch\xF5es Zidi (King + Queen) chegaram</b> \u2014 bases ba\xFA ainda pendentes. <b>S\xE1bado 05/09 o eletricista fecha os banheiros + lumin\xE1rias</b> \u2014 resolve o "buraco do \xA77" (a MO do muro que caiu). <b>\u26A0 Confirmar:</b> a instala\xE7\xE3o dos banheiros est\xE1 inclu\xEDda nos R$ 2.000 das arandelas ou \xE9 adicional? Se for adicional, vira linha nova.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">10.0</span></td><td><b>Foto completa da casa lan\xE7ada.</b> Voc\xEA me lembrou das 2 entradas anteriores que eu nunca tinha visto: <b>R$ 50.000 + R$ 150.000 = R$ 200.000 pagos antes</b> de tudo. Isso muda a leitura do im\xF3vel: <b>total pago do bolso no im\xF3vel = R$ 411.034</b> (entradas 200k + Rodrigo em agosto 60k + quita\xE7\xE3o hoje 151.034). Somando FGTS R$ 545k + financiamento CAIXA R$ 143.966,50 (420\xD7 SAC) = <b>R$ 1.100.000 da casa</b>. <b>Total do projeto (s\xF3 do bolso) sobe de R$ 426.741 \u2192 R$ 626.741.</b> FGTS e CAIXA seguem fora do controle (recursos/d\xEDvida \xE0 parte). Ver bloco explicativo no \xA71B com a decomposi\xE7\xE3o completa.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">\u{1F3E0} 9.9</span></td><td><b>IM\xD3VEL QUITADO em 02/09/2026 \u2014 R$ 151.034 pagos ao Rodrigo via Pix.</b> Total pago ao Rodrigo: R$ 60k (agosto, 2 tranches) + R$ 151.034 (hoje) = <b>R$ 211.034 integrais</b>. Zero de saldo. <b>A caixa "falta \xE0 vista" despencou de R$ 157.534 \u2192 R$ 6.500</b> \u2014 sobram s\xF3 projeto dos planejados R$ 2.500 + MO deck R$ 4.000. <b>Financeiramente, a compra do im\xF3vel est\xE1 encerrada.</b> O que sobra do projeto \xE9 obra e enxoval. <b>Pr\xF3ximo passo:</b> receber recibo de quita\xE7\xE3o do Rodrigo por escrito (cr\xEDtico pra escritura).</td></tr>
    <tr><td style="width:120px"><span class="pill ok">9.8</span></td><td><b>Compra ML de 01/09 destrinchada \u2014 era 1 preto + 3 brancos, n\xE3o 4 pretos como estava descrito.</b> A compra dos R$ 223,44 do bloco de registro (\xA71B) \xC9 a compra da imagem 2. Composi\xE7\xE3o real: 1\xD7 plafon preto 24W (R$ 40,52) + 3\xD7 painel branco 40W (R$ 59,32 cada), produtos R$ 254,90 \u2212 desconto R$ 34,29 \u2212 cupons R$ 2,13 + frete R$ 4,96 = <b>R$ 223,44 pago com saldo Mercado Pago</b>. <b>Nada muda no total do projeto</b> (saldo ML j\xE1 era "fora do or\xE7amento"). <b>Contagem de plafons brancos 40W:</b> 8 originais (Visa 0700) + 3 novos (ML) = <b>11 no total</b>.</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.7</span></td><td><b>Devolu\xE7\xE3o: Kit 8\xD7 spots GU10 + 8\xD7 l\xE2mpadas MR16 preto \u2014 R$ 136,33 estornados no Visa 0700.</b> Estava na compra original de R$ 1.506 (\xA73E). Linha das lumin\xE1rias caiu de R$ 1.506 \u2192 <b>R$ 1.369,67 l\xEDquido</b>. Total do projeto R$ 426.877 \u2192 <b>R$ 426.741</b>. <b>Premissa aplicada:</b> reembolso no cart\xE3o (n\xE3o troca por outro item) \u2014 me avisa se foi diferente. <b>\u26A0 Pendente:</b> os 3 plafons brancos 40W entregues em 02/09 (imagem 2) \u2014 s\xE3o compras novas ou j\xE1 est\xE3o no bloco ML de R$ 223,44? Ver pergunta no fim.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">9.6</span></td><td><b>Audit contra o SKILL rev 3 (o resumo que voc\xEA mandou): todas as 3 entradas j\xE1 est\xE3o lan\xE7adas.</b> Geladeira R$ 4.588 PIX \u2713, cama Zidi R$ 4.914 Master 6369 \u2713, ilumina\xE7\xE3o R$ 1.506 \u2713 (agora com o detalhe do parcelamento: Visa 0700, 1\xD7 R$ 1.046,37 entrada em set + 9\xD7 R$ 51,07 at\xE9 mai/27). Compras ML R$ 773,87 no bloco de registro \u2713. Pessoais (piscina, barbeador, sensores) fora do controle \u2713. <b>Nada muda no total (R$ 426.877)</b> \u2014 s\xF3 refinei a condi\xE7\xE3o de pagamento das lumin\xE1rias. <b>Continua faltando</b>: devolu\xE7\xF5es e compras adicionais que voc\xEA mencionou.</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.5</span></td><td><b>Muro da divisa CANCELADO + adicional na instala\xE7\xE3o dos AC + status corrigido de v\xE1rios itens.</b> Voc\xEA me atualizou: (1) <b>muro n\xE3o vai mais acontecer</b> \u2014 retirei material R$ 2.185 (\xE0 vista) e MO R$ 4.850 (parcelado) = <b>\u2212R$ 7.035</b>; <b>\u26A0 aten\xE7\xE3o:</b> essa MO instalava os banheiros \u2014 voltou a ser buraco no \xA77. (2) <b>Instala\xE7\xE3o dos AC: R$ 3.000 \u2192 R$ 3.247</b> por adicional de material (+R$ 247, j\xE1 pago). (3) Confirmei: <b>Feijor R$ 5.040 no cart\xE3o 8\xD7 j\xE1 instalada 26/08</b>, <b>AC aparelhos R$ 10.257 j\xE1 pagos parcelados</b>, <b>deck contratado mas nada pago ainda</b>. <b>Total do projeto: R$ 433.665 \u2192 R$ 426.877.</b> <b>Falta pedir:</b> devolu\xE7\xF5es de lumin\xE1rias e compras adicionais que voc\xEA mencionou \u2014 sem n\xFAmeros, n\xE3o pude lan\xE7ar.</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.4</span></td><td><b>Nivelante do piso: R$ 509 em 8\xD7 \u2014 requerido pelo instalador Destro.</b> Aquele alerta antigo do \xA712b ("autonivelante entra na conta se reprovar, R$ 2.000\u20133.500 n\xE3o previstos") virou fato: o contrapiso reprovou. Mas veio <b>75% abaixo</b> do temido \u2014 R$ 509 vs R$ 2.000\u20133.500. Total do projeto R$ 433.156 \u2192 R$ 433.665. Fica pr\xE9-empilhado no fluxo mensal (~R$ 64/m\xEAs por 8 meses), impercept\xEDvel.</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.3</span></td><td><b>Corre\xE7\xE3o: voc\xEA j\xE1 pagou R$ 60k pro Rodrigo, n\xE3o R$ 30k.</b> Eu tinha registrado s\xF3 a tranche de 24/08. Agora bate: <b>saldo do im\xF3vel cai de R$ 181.034 \u2192 R$ 151.034</b>, "pago \xE0 vista" sobe pra R$ 116.848 e "falta \xE0 vista" cai pra R$ 159.719. <b>Total do projeto N\xC3O muda</b> (R$ 60k \xE9 pagamento abatendo d\xEDvida, n\xE3o custo novo). <b>Impacto real na quita\xE7\xE3o: precisa de R$ 30k a menos do CDB.</b> Fica R$ 151.034 pro Rodrigo (emolumentos j\xE1 pagos 31/08).</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.2</span></td><td><b>Deck cumaru entra no projeto \u2014 sai da \xA714 "fora de escopo".</b> Fechado com o <b>Elson</b> (mesma pessoa comprou madeira e vai executar): <b>18 m\xB2</b> de cumaru 1\xAA linha, pedido 19768 da Par\xE1 Brazzil (Itatiba). <b>Material R$ 10.639 no cart\xE3o em 5\xD7</b> (R$ 2.128/m\xEAs) + <b>MO R$ 4.000 \xE0 vista</b> = <b>+R$ 14.639</b> no projeto. R$ 813/m\xB2 instalado \u2014 bem posicionado (mercado 850\u20131.400) e bem abaixo dos R$ 23.000 que o vizinho pagou.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">9.1</span></td><td><b>Emolumentos da escritura pagos \u2014 R$ 26.340 via Pix em 31/08 \xE0s 16:01</b> (BTG \u2192 Meta Neg\xF3cios Financeiros, ID E30306294...28E7OU). ITBI 1,8% + registro 0,51% + dilig\xEAncias 0,07% (2,40% como 1\xBA im\xF3vel SFH), fechados com a Erika/Mieko. Documenta\xE7\xE3o da escritura <b>quitada</b>. Sobrou no \xE0 vista s\xF3: quita\xE7\xE3o do im\xF3vel (R$ 181.034, CDB) + projeto R$ 2.500 + material do muro R$ 2.185 + MO do deck R$ 4.000.</td></tr>
    <tr><td style="width:120px"><span class="pill new">9.0</span></td><td><b>Sincronizado com o SKILL rev 3 (01/09).</b> Entraram: <b>geladeira Electrolux R$ 4.588 no PIX</b> (\xE0 vista, paga) e <b>cama Zidi R$ 4.914</b> (parcelado, 1\xD7 R$ 1.059 + 10\xD7 R$ 386 no Master 6369). <b>Total do projeto: R$ 409.015 \u2192 R$ 418.517.</b> As compras no saldo ML (R$ 773,87) entraram como registro, fora do or\xE7amento. <b>3 conflitos de valor com o SKILL ficaram marcados no \xA71B pra voc\xEA confirmar</b> (LYME, piso, e a provis\xE3o de el\xE9trica que voc\xEA mandou tirar).</td></tr>
    <tr><td style="width:120px"><span class="pill new">8.9</span></td><td><b>Removida a estimativa fantasma de R$ 8.494 de el\xE9trica/instala\xE7\xE3o.</b> A linha "ilumina\xE7\xE3o + el\xE9trica" carregava um envelope de R$ 12.000 que era chute do modelo, sem or\xE7amento. Agora vale o <b>gasto real: R$ 3.506</b> (lumin\xE1rias R$ 1.506 + eletricista R$ 2.000). <b>Total do projeto cai de R$ 417.509 \u2192 R$ 409.015</b> e o "comprado no parcelado" (\xA71B) vai de R$ 79.680 \u2192 R$ 71.186.</td></tr>
    <tr><td style="width:120px"><span class="pill new">8.8</span></td><td><b>Nova p\xE1gina: consolidado financeiro (\xA71B, no topo).</b> Todo o dinheiro em quatro caixas que somam o projeto: <b>pago \xE0 vista R$ 55.920</b> \xB7 <b>comprado no parcelado R$ 71.186</b> \xB7 <b>falta \xE0 vista R$ 212.059</b> \xB7 <b>falta contratar R$ 69.850</b>. A leitura que destrava a confus\xE3o: tirando a quita\xE7\xE3o do im\xF3vel (R$ 181.034, que sai do CDB), o que falta \xE0 vista \xE9 s\xF3 R$ 31.025.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">8.7</span></td><td><b>\u2713 Pedra da ilha INSTALADA em 26/08 \u2014 e ficou \xF3tima.</b> O caminho cr\xEDtico que dominou o controle desde a rev. 6 (cooktop \u2192 recorte 56\xD749 \u2192 Feijor) est\xE1 <b>encerrado</b>: a chapa foi cortada na medida certa e assentada, o risco de "chapa cortada n\xE3o tem conserto" passou. Granito preto S\xE3o Gabriel, 5,63 m\xB2. Marco do projeto.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">8.6</span></td><td><b>CONTRATO ASSINADO \u2014 custos de fechamento pararam de ser estimativa.</b> Documenta\xE7\xE3o <b>R$ 26.340</b> (2,40% como 1\xBA im\xF3vel SFH: ITBI 1,8% R$ 19.840 + registro 0,51% R$ 5.630 + dilig\xEAncias 0,07% R$ 870) na escritura, mais <b>CAIXA/FGTS R$ 10.500</b> (emiss\xE3o + saque) <b>j\xE1 quitado</b> \u2014 R$ 2.500 de IR antes + <b>R$ 8.000 pagos hoje</b>. Fechamento real <b>R$ 36.840</b> vs estimativa R$ 33.000 = <b>+R$ 3.840</b> no total. O ITBI e o registro vieram <b>abaixo</b> do temido; a "taxa CAIXA" misteriosa era isto. Se\xE7\xE3o 10.</td></tr>
    <tr><td style="width:120px"><span class="pill new">8.6</span></td><td><b>Eletricista R$ 2.000</b> (instala\xE7\xE3o de todas as arandelas, pago 26/08) e <b>Feijor R$ 5.040 no cart\xE3o em 8\xD7</b> (26/08). Nenhum dos dois soma ao total: o eletricista est\xE1 <b>dentro do envelope</b> de ilumina\xE7\xE3o+el\xE9trica (\xA711) e a Feijor <b>j\xE1 era linha</b> do parcelado \u2014 s\xF3 mudou de "a vencer" para <b>pago</b>. <b>Anu\xEAncia do condom\xEDnio: fora do radar</b> a seu pedido.</td></tr>
    <tr><td style="width:120px"><span class="pill new">8.4</span></td><td><b>Muro da divisa + amplia\xE7\xE3o \u2014 escopo NOVO no or\xE7amento.</b> Material <b>R$ 2.300</b> (\xE0 vista <b>R$ 2.185</b>, or\xE7amento 158.706 de 24/08) \u2014 bloco, canaleta, areia, brita, vergalh\xE3o, coluna e viga baldrame, cimento, cal, tijolo \u2014 para o <b>muro frontal e lateral da divisa</b> e o <b>aterro que estende a \xE1rea de grama at\xE9 a divisa frontal</b>. Mais <b>R$ 4.850 de m\xE3o de obra</b> que <b>tamb\xE9m instala todos os itens de banheiro</b>. \xC9 a primeira frente de <b>muro/terraplanagem</b> do projeto \u2014 <b>+R$ 7.035 no total</b>. Se\xE7\xE3o 3F.</td></tr>
    <tr><td style="width:120px"><span class="pill new">8.3</span></td><td><b>Ilumina\xE7\xE3o: 15 lumin\xE1rias compradas \u2014 R$ 1.506.</b> Trilho + spots, 8 plafons de 40 W, balizadores, lustre, pendente de bancada, espelho com LED e os kits de spot. <b>O material de ilumina\xE7\xE3o virou fato e caiu barato</b> \u2014 agora a linha "ilumina\xE7\xE3o + el\xE9trica" de R$ 12.000 \xE9 essencialmente <b>m\xE3o de obra + infra</b> (circuitos, exclusivos do cooktop/forno, balanceamento de fases, preparo do boiler e instalar tudo isso). Se\xE7\xE3o 3E. <b>N\xE3o \xE9 gasto novo sobre os R$ 12.000 \u2014 estava dentro do envelope</b>, ent\xE3o o total do projeto n\xE3o muda.</td></tr>
    <tr><td><span class="pill new">8.3</span></td><td><b>R$ 30.000 pagos ao Rodrigo em 24/08</b>, amortizando o saldo do im\xF3vel de <b>R$ 211.034 \u2192 R$ 181.034</b>. <b>Neutro pro colch\xE3o:</b> saiu do CDB (fundo de quita\xE7\xE3o) e abateu igual valor da d\xEDvida, ent\xE3o a reserva p\xF3s-\xE0-vista segue <b>R$ 22.564</b>. O custo total do projeto <b>n\xE3o cai</b> \u2014 R$ 30k \xE9 pagamento, n\xE3o desconto. Se\xE7\xE3o 11.</td></tr>
    <tr><td style="width:120px"><span class="pill ok">FECHADO</span></td><td><b>LYME assinada em 17/08 \u2014 contrato 1412, R$ 30.840,11.</b> Veio <b>R$ 3.160 abaixo</b> dos R$ 34.000 provisionados. Mas a <b>estrutura mudou</b>: metade virou entrada Pix (R$ 15.420, j\xE1 saiu do caixa) e metade em <b>5\xD7 R$ 3.084 no CART\xC3O</b>, n\xE3o em boleto. Ver se\xE7\xE3o 3C.</td></tr>
    <tr><td><span class="pill bad">FALTA</span></td><td><b>O contrato tem 2 boxes, n\xE3o 3.</b> Itens 4 e 5 s\xE3o os \xFAnicos boxes. O terceiro banheiro <b>n\xE3o est\xE1 contratado</b> \u2014 vai exigir adendo (cl\xE1usula 2.2) a pre\xE7o de hoje. Ver se\xE7\xE3o 3C.</td></tr>
    <tr><td><span class="pill warm">CAIXA</span></td><td><b>O piso de agosto caiu de R$ 39.182 para R$ 30.562.</b> A entrada Pix de R$ 15.420 substituiu a parcela de R$ 6.800 que estava modelada. Continua confort\xE1vel, mas a <b>reserva p\xF3s-\xE0-vista caiu de R$ 31.959 para R$ 16.539</b>.</td></tr>
    <tr><td><span class="pill new">NOVO</span></td><td><b>3 compras feitas em 14/08</b> \u2014 cooktop Black+Decker BXICHCPB4B, forno Midea TSD80P2 e fechadura digital biom\xE9trica. Detalhe na se\xE7\xE3o 3.</td></tr>
    <tr><td><span class="pill ok">DESTRAVA</span></td><td><b>O cooktop deixou de ser bloqueio.</b> A rev. 6 dizia que sem o desenho de recorte n\xE3o se autoriza corte de pedra. Continua verdade \u2014 mas agora o aparelho <b>f\xEDsico</b> chega em 18/08, e o or\xE7amento Feijor s\xF3 vence 26/08. Medida f\xEDsica vale mais que manual em PDF. Ver se\xE7\xE3o 4.</td></tr>
    <tr><td><span class="pill warm">CORRIGE</span></td><td>Hoje \xE9 <b>sexta-feira</b>. Tudo que a rev. 6 marcou como "esta semana" (CAIXA, Prefeitura, RI Atibaia) acontece <b>hoje ou escorrega pra segunda</b>, comendo 3 dias do caminho cr\xEDtico de agosto.</td></tr>
    <tr><td><span class="pill warm">CORRIGE</span></td><td>A rev. 6 listava <b>"13/09 \u2014 parcela Destro"</b>. 13/09/2026 <b>\xE9 domingo</b>. E o valor (12\xD7 R$ 579) \xE9 do or\xE7amento antigo de R$ 6.950 \u2014 o pedido 470049 mudou o valor. Ver se\xE7\xE3o 8.</td></tr>
    <tr><td><span class="pill warm">CORRIGE</span></td><td>Tabela de fornecedores da rev. 6 ainda descrevia a Destro como "piso vin\xEDlico <b>click</b> 50 m\xB2, R$ 6.950, escolher padr\xE3o". Est\xE1 errado em quatro pontos: j\xE1 foi comprado, \xE9 <b>LVT colado 2 mm</b>, s\xE3o 62,86 m\xB2 faturados e o padr\xE3o (Magnifique Sophie) j\xE1 foi escolhido.</td></tr>
    <tr><td><span class="pill go">ACHADO</span></td><td><b>Nicho real do forno Midea</b> extra\xEDdo do manual de instala\xE7\xE3o do fabricante (TC-80P2, Rev.03) \u2014 os sites de varejo publicam medida errada. N\xFAmero que a projetista precisa. Se\xE7\xE3o 5.</td></tr>
    <tr><td><span class="pill ok">7.4</span></td><td><b>Cooktop saiu por R$ 999,90</b> \u2014 R$ 1.799 de etiqueta menos R$ 799,10 de desconto \xE0 vista. <b>44% off</b>, e R$ 150 abaixo do piso da faixa de mercado que eu tinha levantado. Melhor compra do projeto at\xE9 agora. Pago em Pix + saldo ML, <b>n\xE3o no cart\xE3o</b>.</td></tr>
    <tr><td><span class="pill ok">8.2</span></td><td><b>A fechadura chegou e est\xE1 INSTALADA.</b> O extravio se resolveu e o item saiu da lista. Fecha tr\xEAs pend\xEAncias de uma vez: rastreio, <b>m\xE3o da porta</b> (estava certa) e fura\xE7\xE3o em madeira maci\xE7a. Falta s\xF3 saber se os <b>R$ 250 de instala\xE7\xE3o</b> foram pagos de fato ou se foi voc\xEA quem colocou.</td></tr>
    <tr><td><span class="pill new">7.3</span></td><td><b>Banheiros: R$ 1.781,17 em metais e acess\xF3rios</b>, 1\xD7 no cart\xE3o \u2014 em 15/08 \u2014 3 duchas, 3 kits de 5 pe\xE7as, 3 porta-shampoo. Consome a linha "chuveiros e metais" (R$ 1.500). <b>Corrigido em 8.0:</b> torneiras e acabamentos de registro j\xE1 estavam comprados \u2014 a provis\xE3o de R$ 1.600 saiu do or\xE7amento. Se\xE7\xE3o 3B.</td></tr>
    <tr><td><span class="pill new">7.2</span></td><td><b>Fechadura: R$ 328 pagos + R$ 250 de instala\xE7\xE3o = R$ 578.</b> O aparelho saiu abaixo da minha premissa (R$ 450), mas a instala\xE7\xE3o, que <b>n\xE3o estava no or\xE7amento</b>, joga o custo real acima dela. Li\xE7\xE3o que vale para os outros dois. Se\xE7\xE3o 3.</td></tr>
    <tr><td><span class="pill new">7.1</span></td><td><b>Estorno da Destro confirmado em R$ 3.168,30</b>, como cr\xE9dito no cart\xE3o, <b>mantendo as parcelas cheias</b>. \xC9 R$ 2.028 a mais do que o cen\xE1rio que eu recomendava. Bom pro caixa \u2014 e levanta uma d\xFAvida de quantidade que tem de ser respondida na visita. Se\xE7\xE3o 8.</td></tr>
    <tr><td><span class="pill no">RISCO</span></td><td><b>O cooktop n\xE3o pode ser testado.</b> Precisa de circuito 220V exclusivo, disjuntor 32A e cabo 6 mm\xB2 \u2014 que ainda n\xE3o existem. As janelas de devolu\xE7\xE3o do ML vencem com o aparelho na caixa. Se\xE7\xE3o 4.</td></tr>
  </table>
</section>
<!-- ============ 1B. CONSOLIDADO FINANCEIRO ============ -->
<section id="dinheiro">
  <h3>\u{1F4B0} Consolidado financeiro \u2014 pago \xD7 falta <span class="pill new">8.8</span></h3>
  <p style="color:var(--dim);font-size:14px">Todo o dinheiro do projeto em <b>quatro caixas que n\xE3o se sobrep\xF5em e somam o total</b>. Custo do projeto: <b>R$ 644.378</b> <span class="pill new">10.11</span> <span class="tag" style="font-weight:400">s\xF3 do bolso \xB7 casa R$ 1,1M inclui FGTS+CAIXA (ver bloco abaixo)</span>.</p>
  <div class="grid g4">
    <div class="kpi"><span>\u2713 J\xE1 paguei \xE0 vista</span><b style="color:var(--ok)">R$ 496.262</b><small><b>R$ 411.034 no im\xF3vel</b> + LYME + FGTS/CAIXA + geladeira + emolumentos + AC + Adelco + planejados 2\xAA + Franklin R$ 2.800 + deck acabamento R$ 5.902 + solares R$ 180 + <b>Elson 2/2 R$ 2.500 + vigas adicionais deck ampliado R$ 3.700 PIX 08/10</b> <span class="pill new">10.18</span></small></div>
    <div class="kpi"><span>\u25D0 Comprei no parcelado</span><b>R$ 105.963</b><small>Inclui agora <b>Leo Madeiras R$ 3.871 em 10\xD7</b> (material planejados cozinha) + <b>Tino R$ 3.351 em 6\xD7</b> (corte+fitagem, era \xE0 vista). Continua: LYME aditivo, paisagismo, cama, nivelante, AC, deck material, cortinas, Spa, carrinho ML, aspirador, projetor BTG. <span class="pill new">10.18</span></small></div>
    <div class="kpi"><span>\u25CB Falta pagar \xE0 vista</span><b style="color:var(--ok)">R$ 450</b><small>S\xF3 <b>port\xE3ozinho da entrada R$ 450</b> (paga 30/10). <b>MO deck quitada</b> \u2014 Elson 2/2 R$ 2.500 pago out/26. <span class="pill new">10.18</span></small></div>
    <div class="kpi"><span>\u25CB Falta contratar (parcelado)</span><b style="color:var(--ok)">R$ 0</b><small><b>Tudo contratado.</b> Franklin montou arm\xE1rios, Tino cortou+fitou (6\xD7), Leo Madeiras forneceu material (10\xD7). <b>Felipe Uemori nunca foi</b> \u2014 apagado. <span class="pill new">10.18</span></small></div>
  </div>
  <div class="note good"><b>Leitura em uma frase:</b> <b>IM\xD3VEL QUITADO 02/09 \u2014 R$ 411.034 do bolso ao longo do processo</b> (entradas de 50k+150k anteriores, R$ 60k em agosto, R$ 151.034 hoje). Somando FGTS liberado (R$ 545k) + financiamento CAIXA (R$ 143.966,50 em 420\xD7 SAC), fecha os R$ 1.100.000 da casa. A caixa "falta \xE0 vista" caiu pra <b>R$ 450</b> \u2014 s\xF3 o port\xE3ozinho da entrada (paga 30/10). <b>MO deck integralmente quitada</b> (Elson 1/2 R$ 2.500 set/26 + Elson 2/2 R$ 2.500 out/26 = R$ 5k). <b>Planejados da cozinha fechados</b>: Franklin montou arm\xE1rios R$ 2.800 \xE0 vista + Tino cortou+fitou R$ 3.351 em 6\xD7 + Leo Madeiras forneceu material R$ 3.871 em 10\xD7 = <b>R$ 10.022 total</b>, bem abaixo da provis\xE3o original monol\xEDtica JKV R$ 65k. <span class="pill new">10.18</span></div>

  <h4 style="margin-top:22px">1 \xB7 \xC0 vista \u2014 R$ 496.712 <span class="tag" style="font-weight:400">\u2713 pago R$ 496.262 \xB7 \u25CB falta R$ 450 (port\xE3ozinho) <span class="pill new">10.18</span></span></h4>
  <table>
    <tr><th>Item</th><th class="n">Valor</th><th>Situa\xE7\xE3o</th></tr>
    <tr><td>Entrada LYME (esquadrias) \u2014 Pix</td><td class="n">R$ 15.420</td><td><span class="pill ok">\u2713 pago 17/08</span></td></tr>
    <tr><td>CAIXA + FGTS \u2014 emiss\xE3o do contrato + saque</td><td class="n">R$ 10.500</td><td><span class="pill ok">\u2713 pago 26/08</span></td></tr>
    <tr><td>Geladeira Electrolux IM8IS \u2014 PIX <span class="pill new">9.0</span></td><td class="n">R$ 4.588</td><td><span class="pill ok">\u2713 pago (ago)</span></td></tr>
    <tr><td>AC \u2014 instala\xE7\xE3o (com adicional material) <span class="pill new">10.3</span></td><td class="n">R$ 3.247</td><td><span class="pill ok">\u2713 pago 31/08 (Pix)</span></td></tr>
    <tr><td><b>Eletricista Adelco</b> \u2014 arandelas + instala\xE7\xE3o banheiros <span class="pill new">10.4</span></td><td class="n">R$ 3.500</td><td><span class="pill ok">\u2713 pago 05/09</span></td></tr>
    <tr><td>Projeto planejados \u2014 2\xAA parcela <span class="pill new">10.6</span></td><td class="n">R$ 2.500</td><td><span class="pill ok">\u2713 pago</span></td></tr>
    <tr><td><b>Im\xF3vel \u2014 entrada 1</b> <span class="pill new">10.0</span></td><td class="n">R$ 50.000</td><td><span class="pill ok">\u2713 pago (anterior)</span></td></tr>
    <tr><td><b>Im\xF3vel \u2014 entrada 2</b> <span class="pill new">10.0</span></td><td class="n">R$ 150.000</td><td><span class="pill ok">\u2713 pago (anterior)</span></td></tr>
    <tr><td><b>Im\xF3vel \u2014 Rodrigo (agosto, 2 tranches)</b></td><td class="n">R$ 60.000</td><td><span class="pill ok">\u2713 pago ago</span></td></tr>
    <tr><td><b>Im\xF3vel \u2014 QUITA\xC7\xC3O Rodrigo</b></td><td class="n">R$ 151.034</td><td><span class="pill ok">\u2713 pago 02/09 (Pix)</span></td></tr>
    <tr><td>Documenta\xE7\xE3o \u2014 ITBI + registro + dilig\xEAncias</td><td class="n">R$ 26.340</td><td><span class="pill ok">\u2713 pago 31/08 (Pix Meta)</span></td></tr>
    <tr><td><b>Franklin</b> \u2014 montagem arm\xE1rios cozinha (orc\xE7ado R$ 2.700) <span class="pill new">10.17</span></td><td class="n">R$ 2.800</td><td><span class="pill ok">\u2713 pago out/26</span></td></tr>
    <tr><td>Deck acabamento \u2014 madeiras guarda-corpo <span class="pill new">10.17</span></td><td class="n">R$ 5.400</td><td><span class="pill ok">\u2713 pago 11/10 (PIX)</span></td></tr>
    <tr><td>Deck acabamento \u2014 parafusos <span class="pill new">10.17</span></td><td class="n">R$ 130</td><td><span class="pill ok">\u2713 pago out/26</span></td></tr>
    <tr><td>Deck acabamento \u2014 cetol (verniz) <span class="pill new">10.17</span></td><td class="n">R$ 372</td><td><span class="pill ok">\u2713 pago out/26</span></td></tr>
    <tr><td>6 lumin\xE1rias solares deck/jardim <span class="pill new">10.17</span></td><td class="n">R$ 180</td><td><span class="pill ok">\u2713 pago out/26</span></td></tr>
    <tr><td><b>Port\xE3ozinho da entrada</b> <span class="pill new">10.17</span></td><td class="n">R$ 450</td><td><span class="pill warm">\u25CB a pagar 30/10 (\xE0 vista)</span></td></tr>
        <tr><td>Deck cumaru \u2014 m\xE3o de obra Elson (1/2 + 2/2 = R$ 5.000 total) <span class="pill new">10.18</span></td><td class="n">R$ 5.000</td><td><span class="pill ok">\u2713 QUITADA (1/2 set/26 + 2/2 out/26)</span></td></tr>
    <tr><td><b>Deck ampliado</b> \u2014 vigas e madeiras adicionais (ampliac\xE7\xE3o) <span class="pill new">10.18</span></td><td class="n">R$ 3.700</td><td><span class="pill ok">\u2713 pago 08/10 (PIX)</span></td></tr>
    <tr><td>Deck base \u2014 cimento inicial (expl\xEDcito agora) <span class="pill new">10.18</span></td><td class="n">R$ 1.133,35</td><td><span class="pill ok">\u2713 pago set/26 (j\xE1 contado em "alvenaria" chip 10.16)</span></td></tr>
    <tr class="tot"><td>Subtotal \xE0 vista</td><td class="n">R$ 496.712</td><td><b>pago R$ 496.262 \xB7 falta R$ 450 (port\xE3ozinho)</b> <span class="pill new">10.18</span></td></tr>
  </table>

  <h4 style="margin-top:22px">2 \xB7 Parcelado \u2014 R$ 168.964 <span class="tag" style="font-weight:400">\u25D0 comprado R$ 108.963 + R$ 3.000 projetor \xB7 <b>TUDO contratado</b> <span class="pill new">10.18</span></span></h4>
  <table>
    <tr><th>Item</th><th class="n">Valor</th><th>Condi\xE7\xE3o</th><th>Situa\xE7\xE3o</th></tr>
    <tr><td>Esquadrias + 2 boxes \u2014 LYME</td><td class="n">R$ 15.420</td><td>5\xD7 cart\xE3o</td><td><span class="pill ok">\u25D0 em curso</span></td></tr>
    <tr><td>Boiler solar \u2014 EcoSol <span class="pill new">10.7</span></td><td class="n">R$ 18.390</td><td>8\xD7 boleto \xB7 15/08\u219215/03</td><td><span class="pill ok">\u2713 INSTALADO</span></td></tr>
    <tr><td>AC \u2014 4 aparelhos</td><td class="n">R$ 10.257</td><td>8\xD7</td><td><span class="pill ok">\u25D0 em curso</span></td></tr>
    <tr><td>Piso LVT \u2014 Destro <span class="pill new">10.1</span></td><td class="n">R$ 9.696</td><td>~12\xD7 R$ 1.072</td><td><span class="pill ok">\u2713 entregue \xB7 nivela 04/09 \xB7 instala 08/09</span></td></tr>
    <tr><td>Nivelante do piso (requerido pelo instalador) <span class="pill new">9.4</span></td><td class="n">R$ 509</td><td>8\xD7 R$ 64</td><td><span class="pill ok">\u2713 comprado 02/09</span></td></tr>
    <tr><td>Lumin\xE1rias (Visa 0700) <span class="pill new">10.4</span></td><td class="n">R$ 1.370</td><td>l\xEDq. da devolu\xE7\xE3o (\xA73E)</td><td><span class="pill ok">\u25D0 em curso</span></td></tr>
    <tr><td>Pedra da ilha \u2014 Feijor</td><td class="n">R$ 5.040</td><td>8\xD7 cart\xE3o</td><td><span class="pill ok">\u2713 comprado 26/08</span></td></tr>
    <tr><td>Eletros embutidos + fechadura</td><td class="n">R$ 3.359</td><td>cart\xE3o/Pix</td><td><span class="pill ok">\u2713 comprado \xB7 R$ 250 install a vir</span></td></tr>
    <tr><td>Banheiros \u2014 duchas + acess\xF3rios</td><td class="n">R$ 1.781</td><td>1\xD7 cart\xE3o</td><td><span class="pill ok">\u2713 comprado</span></td></tr>
    <tr><td>Assentos sanit\xE1rios</td><td class="n">R$ 737</td><td>cart\xE3o + saldo ML</td><td><span class="pill ok">\u2713 comprado</span></td></tr>
    <tr><td>Cama/dormit\xF3rio \u2014 Zidi (2 colch\xF5es + 2 bases ba\xFA) <span class="pill new">10.1</span></td><td class="n">R$ 4.914</td><td>1\xD7 R$ 1.059 + 10\xD7 R$ 386 \xB7 Master 6369</td><td><span class="pill ok">\u2713 2 colch\xF5es chegaram (bases pend.)</span></td></tr>
    <tr><td><b>Deck cumaru \u2014 material (Par\xE1 Brazzil pedido 19785)</b> <span class="pill new">10.11</span></td><td class="n">R$ 9.445</td><td>7\xD7 R$ 1.349 \xB7 <b>BTG Ultra Blue</b></td><td><span class="pill ok">\u2713 PAGO 03/09</span></td></tr>
    <tr><td><b>Cortinas</b> (2 sala Wave + 3 quartos + escrit\xF3rio) <span class="pill new">10.6</span></td><td class="n">R$ 6.725</td><td>6\xD7 R$ 1.121 \xB7 cart\xE3o</td><td><span class="pill ok">\u2713 fechado</span></td></tr>
    <tr><td><b>Spa Infl\xE1vel Ofur\xF4 Rome 1180L</b> <span class="pill new">10.6</span></td><td class="n">R$ 6.780</td><td>10\xD7 R$ 678 \xB7 Master 3619</td><td><span class="pill ok">\u2713 comprado 13/09</span></td></tr>
    <tr><td><b>Carrinho ML</b> (6 cadeiras Gruvyer + mesa 130cm + lumin\xE1ria + l\xE2mpada) <span class="pill new">10.6</span></td><td class="n">R$ 1.864</td><td>R$ 1.674 \xE0 vista + 6\xD7 R$ 32 \xB7 Master 3619</td><td><span class="pill ok">\u2713 comprado 13/09</span></td></tr>
    <tr><td><b>Aspirador Arno X-Pert 7.60</b> (s\xF3 cart\xE3o) <span class="pill new">10.6</span></td><td class="n">R$ 430</td><td>10\xD7 R$ 43 \xB7 Master 6369</td><td><span class="pill ok">\u2713 pago 04/09</span></td></tr>
    <tr><td><b>LYME aditivo</b> \u2014 3\xBA box R$ 1.531 + corredor lateral R$ 1.650 <span class="pill new">10.17</span></td><td class="n">R$ 3.181</td><td>5\xD7 R$ 636,20 \xB7 cr\xE9dito 10/10</td><td><span class="pill ok">\u2713 fechado 10/10</span></td></tr>
    <tr><td><b>Tino</b> \u2014 corte + fitagem planejados cozinha <span class="pill new">10.18</span></td><td class="n">R$ 3.351</td><td>6\xD7 R$ 558,50 \xB7 cart\xE3o</td><td><span class="pill ok">\u2713 fechado out/26</span></td></tr>
    <tr><td><b>Leo Madeiras</b> \u2014 material planejados cozinha <span class="pill new">10.18</span></td><td class="n">R$ 3.871</td><td>10\xD7 R$ 387,10 \xB7 maquineta Tino</td><td><span class="pill ok">\u2713 comprado out/26</span></td></tr>
    <tr><td><b>Paisagismo</b> \u2014 10 mudas podocarpo 2,5m + 2 jardineiras 1m + frete + plantio <span class="pill new">10.17</span></td><td class="n">R$ 1.193</td><td>5\xD7 R$ 238,60 \xB7 cart\xE3o</td><td><span class="pill ok">\u2713 comprado out/26</span></td></tr>
    <tr><td><b>Projetor sala BTG</b> <span class="pill new">10.15</span></td><td class="n">R$ 3.000</td><td>10\xD7 R$ 300 (BTG)</td><td><span class="pill ok">\u2713 1\xAA parc. set/26</span></td></tr>
    <tr class="tot"><td>Subtotal parcelado</td><td class="n">R$ 168.964</td><td colspan="2"><b>comprado R$ 108.963 (com projetor + LYME aditivo + paisagismo + Tino 6\xD7 + Leo Madeiras 10\xD7) \xB7 Felipe Uemori removido \xB7 TUDO contratado</b> <span class="pill new">10.18</span></td></tr>
  </table>
  <div class="note info"><b>O parcelado "em curso" n\xE3o \xE9 dinheiro que falta juntar \u2014 \xE9 dinheiro que j\xE1 flui todo m\xEAs.</b> No pico (quando boiler + AC + esquadrias + piso + Feijor coincidem) pesa <b>~R$ 9.367/m\xEAs</b>, coberto pelos R$ 15.000 do sal\xE1rio destinados \xE0 casa (\xA712). <b>Rev 10.18:</b> tudo contratado \u2014 Tino (6\xD7) + Leo Madeiras (10\xD7) + Franklin (\xE0 vista pago) + Elson 2/2 (\xE0 vista pago). N\xE3o h\xE1 mais item esperando contrata\xE7\xE3o. <span class="pill new">10.18</span></div>
  <div class="note bad"><b>Fora das quatro caixas (ainda sem n\xFAmero fechado):</b> instala\xE7\xE3o da fechadura R$ 250 \xB7 revestimento da escada R$ 2.000\u20135.000 \xB7 i\xE7amento da carga do piso \xB7 materiais de instala\xE7\xE3o da Feijor R$ 150\u2013300 \xB7 rack/TV. Some <b>R$ 2.000\u20135.000+</b> que ainda v\xE3o aparecer. <b>\u26A0 Pergunta pendente sobre a instala\xE7\xE3o dos banheiros:</b> o eletricista vai fazer isso 05/09 (junto com as lumin\xE1rias) \u2014 <b>est\xE1 inclu\xEDdo nos R$ 2.000 originais das arandelas ou \xE9 adicional?</b> Se for adicional, entra como linha nova.</div>

  <div class="note good"><b>Como se decomp\xF5em os R$ 1.100.000 da casa</b> (a rev. 10.0 completou a foto):
  <table style="margin-top:10px">
    <tr><th>Fonte</th><th class="n">Valor</th><th>Onde entra no controle</th></tr>
    <tr><td><b>Do bolso Lucas \u2014 \xE0 vista/CDB</b></td><td class="n"><b>R$ 411.034</b></td><td>\u2713 no bloco "\xE0 vista" (linhas do im\xF3vel acima)</td></tr>
    <tr><td>FGTS liberado</td><td class="n">R$ 545.000</td><td>fora do controle \u2014 n\xE3o \xE9 do bolso, \xE9 recurso do FGTS</td></tr>
    <tr><td>Financiamento CAIXA (420\xD7 SAC)</td><td class="n">R$ 143.966,50</td><td>fora do controle \u2014 \xE9 d\xEDvida, vira parcela mensal separada</td></tr>
    <tr class="tot"><td><b>Pre\xE7o da casa</b></td><td class="n"><b>R$ 1.100.000</b></td><td></td></tr>
  </table>
  <p style="margin-top:10px">O <b>"total do projeto R$ 626.741"</b> nesse controle \xE9 <b>s\xF3 o que sai do seu bolso</b> (im\xF3vel R$ 411.034 do bolso + reforma R$ 215.707). O FGTS e o financiamento CAIXA s\xE3o recursos/d\xEDvida \xE0 parte, com fluxo pr\xF3prio. Se quiser, posso adicionar a parcela mensal do CAIXA (~R$ 1.500\u20131.800/m\xEAs come\xE7ando quando o financiamento entrar em presta\xE7\xE3o) ao fluxo do \xA712.</p></div>

  <h4 style="margin-top:22px">Enxoval ML 18/09 \u2014 11 itens \xB7 R$ 1.440,67 \xB7 cart\xE3o \xE0 vista <span class="pill new">10.14</span></h4>
  <p style="color:var(--dim);font-size:13px">Compras de enxoval fechadas em 18/09/2026 no Mercado Livre. Tudo \xE0 vista no cart\xE3o. Somam ao or\xE7amento (viram parcela na fatura de out/26).</p>
  <table>
    <tr><th>#</th><th>Produto</th><th class="n">Qtd</th><th class="n">De</th><th class="n">Por (pago)</th></tr>
    <tr><td>1</td><td>Len\xE7ol Super King 600 fios Eg\xEDpcio \xB7 GM DECORSHOP</td><td class="n">1</td><td class="n">R$ 318,20</td><td class="n"><b>R$ 159,99</b></td></tr>
    <tr><td>2</td><td>Jogo Jantar/Ch\xE1 Tramontina Canyon 20 p\xE7s</td><td class="n">1</td><td class="n">\u2014</td><td class="n"><b>R$ 236,55</b></td></tr>
    <tr><td>3</td><td>Len\xE7ol Queen 600 fios Eg\xEDpcio \xB7 GM DECORSHOP</td><td class="n">1</td><td class="n">R$ 265,19</td><td class="n"><b>R$ 146,99</b></td></tr>
    <tr><td>4</td><td>Faqueiro Inox 24 p\xE7s Essenciale \xB7 Haushop</td><td class="n">1</td><td class="n">R$ 69,90</td><td class="n"><b>R$ 39,79</b></td></tr>
    <tr><td>5</td><td>Jogo c/ 12 copos de vidro 340 ml \xB7 OCA</td><td class="n">1</td><td class="n">R$ 78,00</td><td class="n"><b>R$ 74,10</b></td></tr>
    <tr><td>6</td><td>Clink Banheiro Bambu Preto \xB7 Beemixutilidades</td><td class="n">2</td><td class="n">\u2014</td><td class="n"><b>R$ 135,36</b></td></tr>
    <tr><td>7</td><td>Porta Toalha Rosto/M\xE3os Bancada A\xE7o Preto \xB7 3A Arts</td><td class="n">1</td><td class="n">R$ 33,10</td><td class="n"><b>R$ 24,68</b></td></tr>
    <tr><td>8</td><td>Clink Banheiro Bambu Preto (2\xBA pedido)</td><td class="n">2</td><td class="n">\u2014</td><td class="n"><b>R$ 135,36</b></td></tr>
    <tr><td>9</td><td>Lixeira Autom\xE1tica c/ Sensor 16 L \xB7 Xiaobang</td><td class="n">1</td><td class="n">R$ 111,55</td><td class="n"><b>R$ 68,30</b></td></tr>
    <tr><td>10</td><td>Suporte Papel Higi\xEAnico Ch\xE3o 4 rolos A\xE7o Preto \xB7 JCNET</td><td class="n">1</td><td class="n">R$ 82,99</td><td class="n"><b>R$ 39,99</b></td></tr>
    <tr><td>11 <span class="pill new" style="font-size:9px">10.14</span></td><td>Jogo de Panelas Indu\xE7\xE3o Antiaderente Cer\xE2mica 10 p\xE7s PPG PFOA Free Grafite \xB7 pedido #2000018524446284</td><td class="n">1</td><td class="n">R$ 683,88</td><td class="n"><b>R$ 379,56</b></td></tr>
    <tr class="tot"><td colspan="4"><b>Total</b></td><td class="n"><b>R$ 1.440,67</b></td></tr>
  </table>
  <p style="margin-top:10px"><b>Agrupamento por ambiente</b> (usado na \xA712B e \xA712C): <b>Cama</b> R$ 306,98 (len\xE7\xF3is Super King + Queen \xB7 itens 1, 3) \xB7 <b>Cozinha</b> R$ 730,00 (jantar Tramontina + faqueiro + copos + <b>panelas indu\xE7\xE3o</b> \xB7 itens 2, 4, 5, 11) \xB7 <b>Banheiros</b> R$ 403,69 (2\xD7 Clink + porta-toalha + lixeira + suporte PH \xB7 itens 6-10).</p>
  <div class="note info"><b>Economia vis\xEDvel vs pre\xE7os "de":</b> dos 8 itens com pre\xE7o "de" na tabela, o pago somou R$ 963,30 contra "de" R$ 1.642,81 \u2014 <b>\u2212R$ 679,51 (41% off)</b>. O item 11 (panelas indu\xE7\xE3o) sozinho contribuiu com R$ 304,32 de desconto (45% off). Os 3 itens sem pre\xE7o "de" (Tramontina, 2\xD7 Clink) provavelmente j\xE1 sa\xEDram no pre\xE7o final da loja.</div>

  <h4 style="margin-top:22px">Compras no saldo Mercado Pago \u2014 registro, <u>n\xE3o somam</u> ao or\xE7amento <span class="pill new">9.0</span></h4>
  <p style="color:var(--dim);font-size:13px">Grana do saldo ML \xE9 lucro de venda de produto, n\xE3o caixa da casa. Fica registrado s\xF3 pra constar.</p>
  <table>
    <tr><th>Data</th><th>Item</th><th class="n">Valor</th></tr>
    <tr><td>24/08</td><td>Assento Boss Amortecido Incepa</td><td class="n">R$ 178,40</td></tr>
    <tr><td>29/08</td><td>Torneira retr\xE1til monocomando gourmet inox + 4 itens</td><td class="n">R$ 372,03</td></tr>
    <tr><td>01/09 <span class="pill new">9.8</span></td><td>1\xD7 Plafon preto 24W (R$ 40,52) + 3\xD7 Painel branco 40W (R$ 59,32 cada) \xB7 Shopss \xB7 <span class="tag">Produtos R$ 254,90 \u2212 desconto R$ 34,29 \u2212 cupons R$ 2,13 + frete R$ 4,96</span></td><td class="n">R$ 223,44</td></tr>
    <tr class="tot"><td>Total registrado (fora do or\xE7amento)</td><td></td><td class="n"><b>R$ 773,87</b></td></tr>
  </table>

  <div class="note bad"><b>\u26A0\uFE0F Conflitos entre o SKILL rev 3 (01/09) e este reporte \u2014 preciso da sua palavra em 3 pontos.</b> Sincronizei o que era claramente novo (geladeira, cama, compras no saldo ML), mas em tr\xEAs linhas os dois documentos discordam de <b>valor</b>, e eu <b>n\xE3o</b> sobrescrevi no chute:<br>
  <b>1. LYME (esquadrias + gourmet + boxes).</b> O SKILL diz <b>R$ 34.000</b> (5\xD7 R$ 6.800, tudo parcelado). O reporte tem <b>R$ 30.840</b> (entrada R$ 15.420 no Pix + 5\xD7 R$ 3.084). Diferen\xE7a R$ 3.160. Qual \xE9 o certo?<br>
  <b>2. Piso Destro.</b> O SKILL diz <b>R$ 6.950</b> (50 m\xB2 \xD7 R$ 139). O reporte tem <b>R$ 9.696</b> (pedido real 470049, cheio R$ 12.864 \u2212 estorno R$ 3.168). Diferen\xE7a R$ 2.746. Mantive o do pedido real \u2014 confirma?<br>
  <b>3. El\xE9trica/ilumina\xE7\xE3o restante.</b> Voc\xEA mandou eu tirar o R$ 8.494 (feito). Mas o SKILL rev 3 <b>ainda provisiona R$ 10.494</b> pra el\xE9trica + ilumina\xE7\xE3o externa (arandelas de fachada, balizadores IP67 do caminho de pedras, circuitos, preparo do boiler). Isso \xE9 obra real que ainda n\xE3o foi or\xE7ada. <b>Quer de volta como provis\xE3o</b> ou segue fora at\xE9 ter or\xE7amento na m\xE3o?</div>
  <div class="note info"><b>O que mantive do reporte (o SKILL rev 3 est\xE1 atrasado nisso):</b> a amortiza\xE7\xE3o de R$ 30.000 ao Rodrigo, o muro da divisa (R$ 2.185 + R$ 4.850), a <b>pedra j\xE1 instalada</b> (o SKILL ainda a trata como "or\xE7ada, vence 26/08"), e os custos reais de fechamento <b>R$ 36.840</b> do contrato assinado (o SKILL ainda tem a estimativa de R$ 33.000). Esses s\xE3o eventos reais que aconteceram aqui \u2014 o reporte \xE9 a fonte mais atual neles.</div>
</section>

<!-- ============ 1C. RESUMO POR AMBIENTE ============ -->
<section id="por-ambiente">
  <h3>\u{1F3E0} 1C \xB7 Resumo por ambiente da casa <span class="pill new">10.18</span></h3>
  <p style="color:var(--dim);font-size:14px">Pra sair da sopa de linhas: 10 categorias ADHD-friendly com total gasto por \xE1rea. Soma \xB1 R$ 660k do bolso (im\xF3vel + reforma + enxoval). FGTS R$ 545k e financiamento CAIXA R$ 143.966,50 ficam fora.</p>
  <div class="grid g2">
    <div class="kpi"><h4>1 \xB7 Im\xF3vel + documenta\xE7\xE3o <small style="color:var(--dim);font-weight:400">(aquisi\xE7\xE3o)</small></h4><b style="color:var(--warm)">R$ 447.874</b><small>\u2022 Im\xF3vel R$ 411.034 (entradas 50k+150k anteriores + Rodrigo R$ 60k ago + quita\xE7\xE3o R$ 151.034 set) \xB7 Emolumentos ITBI+registro R$ 26.340 \xB7 CAIXA/FGTS emiss\xE3o R$ 10.500<br><b style="color:var(--ok)">67,9% do projeto \u2014 o custo da casa foi comprar a casa.</b></small></div>
    <div class="kpi"><h4>2 \xB7 Esquadrias &amp; vidros <small style="color:var(--dim);font-weight:400">(LYME)</small></h4><b>R$ 34.021</b><small>\u2022 Contrato 1412 R$ 30.840 (entrada R$ 15.420 Pix + 5\xD7 R$ 3.084) \xB7 Aditivo R$ 3.181 em 5\xD7 (3\xBA box R$ 1.531 + corredor lateral R$ 1.650)<br>Janelas de correr, portas de correr, cobertura pergolado, 3 boxes.</small></div>
    <div class="kpi"><h4>3 \xB7 Cozinha <small style="color:var(--dim);font-weight:400">(ilha + eletros + planejados)</small></h4><b>R$ 25.390</b><small>\u2022 Pedra ilha Feijor R$ 5.040 \xB7 Cooktop B+D R$ 1.000 \xB7 Forno Midea R$ 1.780 \xB7 Geladeira Electrolux R$ 4.588 \xB7 Franklin montagem R$ 2.800 \xB7 Tino corte R$ 3.351 \xB7 Leo Madeiras material R$ 3.871 \xB7 Enxoval cozinha ML R$ 730 \xB7 Projeto planejados R$ 5.000 (R$ 2.500 1\xAA + R$ 2.500 2\xAA)<br>Core da reforma depois do im\xF3vel.</small></div>
    <div class="kpi"><h4>4 \xB7 Banheiros <small style="color:var(--dim);font-weight:400">(3 su\xEDtes + lavabo)</small></h4><b>R$ 6.425</b><small>\u2022 Metais/duchas/kits R$ 1.781 \xB7 Assentos sanit\xE1rios R$ 737 \xB7 Adelco eletricista arandelas+banheiros R$ 3.500 \xB7 Enxoval banheiros ML R$ 404<br>Boxes contados em Esquadrias.</small></div>
    <div class="kpi"><h4>5 \xB7 Dormit\xF3rios <small style="color:var(--dim);font-weight:400">(cama + cortinas + len\xE7\xF3is)</small></h4><b>R$ 9.258</b><small>\u2022 Cama Zidi (2 colch\xF5es King+Queen + bases ba\xFA) R$ 4.914 \xB7 Cortinas quartos (parte dos R$ 6.725) \xB1 R$ 4.037 \xB7 Len\xE7\xF3is Super King+Queen ML R$ 307</small></div>
    <div class="kpi"><h4>6 \xB7 Pisos &amp; revestimentos</h4><b>R$ 10.205</b><small>\u2022 Piso LVT Destro R$ 9.696 \xB7 Nivelante R$ 509 (requerido pelo instalador)<br>Instalado 08/09 ap\xF3s nivelamento com argamassa.</small></div>
    <div class="kpi"><h4>7 \xB7 Clima + \xE1gua quente</h4><b>R$ 31.894</b><small>\u2022 Boiler solar EcoSol R$ 18.390 \xB7 AC 4 aparelhos R$ 10.257 \xB7 AC instala\xE7\xE3o R$ 3.247 (com adicional material)<br>Boiler instalado \u2713 \xB7 ACs operacionais desde 03/09.</small></div>
    <div class="kpi"><h4>8 \xB7 El\xE9trica + ilumina\xE7\xE3o</h4><b>R$ 1.370</b><small>\u2022 Lumin\xE1rias Visa 0700 R$ 1.370 l\xEDquido (ap\xF3s devolu\xE7\xE3o)<br>Adelco eletricista R$ 3.500 contabilizado em Banheiros. Internet Impacto R$ 110/m\xEAs recorrente (fora do fit-out).</small></div>
    <div class="kpi"><h4>9 \xB7 Deck + guarda-corpo <small style="color:var(--dim);font-weight:400">(frente)</small></h4><b style="color:var(--warm)">R$ 25.080</b><small>\u2022 Material cumaru 18m\xB2 (Par\xE1 Brazzil pedido 19785) R$ 9.445 em 7\xD7 BTG \xB7 MO Elson 1/2+2/2 R$ 5.000 \xB7 <b>Deck ampliado:</b> vigas adicionais R$ 3.700 PIX 08/10 \xB7 Vigas setembro R$ 3.700 PIX 23/09 \xB7 Madeiras guarda-corpo R$ 5.400 PIX 11/10 \xB7 Parafusos R$ 130 \xB7 Cetol R$ 372 \xB7 Cimento inicial R$ 1.133,35<br>Foi a frente que mais apareceu em outubro.</small></div>
    <div class="kpi"><h4>10 \xB7 \xC1rea externa + paisagismo</h4><b>R$ 1.823</b><small>\u2022 Paisagismo (10 mudas podocarpo 2,5m + 2 jardineiras 1m + frete + plantio) R$ 1.193 em 5\xD7 \xB7 6 lumin\xE1rias solares deck/jardim R$ 180 \xB7 Port\xE3ozinho da entrada R$ 450 (paga 30/10)</small></div>
  </div>
  <h4 style="margin-top:24px">Resumo da fatura total do projeto</h4>
  <table>
    <tr><th>Categoria</th><th class="n">Total</th><th class="n">% do projeto</th></tr>
    <tr><td>1. Im\xF3vel + documenta\xE7\xE3o</td><td class="n">R$ 447.874</td><td class="n">67,9%</td></tr>
    <tr><td>2. Esquadrias &amp; vidros (LYME)</td><td class="n">R$ 34.021</td><td class="n">5,2%</td></tr>
    <tr><td>7. Clima + \xE1gua quente</td><td class="n">R$ 31.894</td><td class="n">4,8%</td></tr>
    <tr><td>3. Cozinha</td><td class="n">R$ 25.390</td><td class="n">3,8%</td></tr>
    <tr><td>9. Deck + guarda-corpo</td><td class="n">R$ 25.080</td><td class="n">3,8%</td></tr>
    <tr><td>6. Pisos &amp; revestimentos</td><td class="n">R$ 10.205</td><td class="n">1,5%</td></tr>
    <tr><td>5. Dormit\xF3rios</td><td class="n">R$ 9.258</td><td class="n">1,4%</td></tr>
    <tr><td>4. Banheiros</td><td class="n">R$ 6.425</td><td class="n">1,0%</td></tr>
    <tr><td>10. \xC1rea externa + paisagismo</td><td class="n">R$ 1.823</td><td class="n">0,3%</td></tr>
    <tr><td>8. El\xE9trica + ilumina\xE7\xE3o</td><td class="n">R$ 1.370</td><td class="n">0,2%</td></tr>
    <tr><td colspan="3" style="padding-top:12px"><em style="color:var(--dim);font-size:12px">Diferen\xE7a vs R$ 660.030: \xB1 R$ 66.690 em itens que atravessam v\xE1rias categorias (parte das cortinas, utens\xEDlios comuns, fechadura, Spa + aspirador + carrinho ML + projetor BTG = "lazer/outros") \u2014 pr\xF3xima rev refina.</em></td></tr>
    <tr class="tot"><td><b>Soma categorizada</b></td><td class="n"><b>R$ 593.340</b></td><td class="n"><b>89,9%</b></td></tr>
  </table>
  <div class="note info"><b>Leitura em uma frase:</b> dos R$ 660k, <b>R$ 448k (68%) foi comprar a casa</b>. Dos R$ 212k de reforma + enxoval, as frentes pesadas s\xE3o <b>esquadrias (LYME R$ 34k)</b>, <b>clima+boiler (R$ 32k)</b>, <b>cozinha (R$ 25k)</b> e <b>deck (R$ 25k)</b>. Banheiros e el\xE9trica/ilumina\xE7\xE3o foram baratos \u2014 o custo da casa n\xE3o est\xE1 nos acabamentos, est\xE1 nos vidros grandes e no clima.</div>
</section>

<!-- ============ 2. REL\xD3GIO ============ -->
<section>
  <h3>2 \xB7 Rel\xF3gio ativo \u2014 o que vence e quando</h3>
  <p style="color:var(--dim);font-size:14px">Dias \xFAteis contados <b>a partir de 05/09 (s\xE1bado)</b>, descontando fins de semana e feriados nacionais (07/09 seg, 12/10 seg, 02/11 seg, 20/11 sex, 25/12 sex).</p>
  <table>
    <tr><th>Item</th><th>Vence</th><th class="n">Dias \xFAteis</th><th>A\xE7\xE3o</th><th style="width:70px"></th></tr>
    <tr><td><b>Piso Destro \u2014 instala\xE7\xE3o</b> <span class="pill new">10.1</span></td><td>08/09 (seg)</td><td class="n">2</td><td>Material entregue, nivelamento com argamassa 04/09 (aplica o nivelante de R$ 509). Confirmar disponibilidade do instalador pra 08/09 na segunda.</td><td><span class="pill warm">PR\xD3XIMO</span></td></tr>
    <tr><td><b>Forno Midea \u2014 aguarda marcenaria</b> <span class="pill new">10.1</span></td><td>~28/09</td><td class="n">\u2014</td><td>J\xE1 chegou (~28/08). Vai embutido no gabinete \u2014 precisa aguardar a marcenaria fechar (~28/09).</td><td><span class="pill warm">aguarda</span></td></tr>
    <tr><td><b>Projeto dos planejados \u2014 2\xAA parcela + entrega</b></td><td>~28/09</td><td class="n">15</td><td>45 dias contados de 11/08. R$ 2.500 restantes + entrega do projeto pra JKV/Felipe come\xE7arem.</td><td><span class="pill go">\u2014</span></td></tr>
    <tr><td><b>Marcenaria da cozinha</b> \u2014 FECHADA <span class="pill new">10.18</span></td><td>out/26</td><td class="n">\u2014</td><td><b>Rev 10.18:</b> Franklin montou arm\xE1rios R$ 2.800 \xE0 vista + Tino corte+fitagem R$ 3.351 em 6\xD7 + Leo Madeiras material R$ 3.871 em 10\xD7 = R$ 10.022 total. Provis\xE3o monol\xEDtica JKV R$ 65k abandonada \u2014 breakdown modular saiu MUITO mais barato.</td><td><span class="pill ok">\u2713 FEITO</span></td></tr>
    <tr><td><b>Arquivados nesta rev</b> <span class="pill ok">10.4</span></td><td>\u2014</td><td class="n">\u2014</td><td>\u2713 Elektro (ligada 03/09) \xB7 \u2713 Feijor pedra (instalada 26/08) \xB7 \u2713 Cooktop (instalado ~02/09) \xB7 \u2713 Fechadura digital \xB7 \u2713 ACs (operacionais 03/09) \xB7 \u2713 Adelco eletricista (pago 05/09) \xB7 \u2713 Emolumentos (pagos 31/08) \xB7 \u2713 Im\xF3vel quitado (02/09) \xB7 \u2713 Destro estorno \xB7 \u2713 CAIXA/Prefeitura/RI Atibaia.</td><td><span class="pill ok">hist\xF3rico</span></td></tr>
  </table>
  <div class="note good"><b>Rel\xF3gio limpo.</b> Os grandes gargalos do projeto (im\xF3vel, pedra, cooktop, energia, banheiros) est\xE3o todos resolvidos. Os itens que restam s\xE3o planejamento normal de execu\xE7\xE3o: piso \u2192 projeto marcenaria \u2192 marcenaria em si.</div>
</section>
<!-- ============ 2B. AGENDA DE INSTALACOES ============ -->
<section>
  <h3>2B \xB7 Agenda de instala\xE7\xF5es \u2014 21/08 a ~19/10 <span class="pill new">8.2</span></h3>
  <p style="color:var(--dim);font-size:14px">Datas passadas pelo Lucas em 20/08. As marcadas com <b>~</b> s\xE3o contadas em dias corridos a partir de hoje \u2014 <b>estimativa, n\xE3o data firme</b>. A dos arm\xE1rios \xE9 <b>estimativa do pr\xF3prio Lucas</b> ("imagino"), n\xE3o compromisso da f\xE1brica.</p>
  <table>
    <tr><th style="width:96px">Data</th><th>Evento</th><th>Depende de</th><th style="width:78px">Risco</th></tr>
    <tr><td><b>21/08</b> sex</td><td><b>ACs chegam</b> \u2014 4 aparelhos</td><td>\u2014</td><td><span class="pill ok">OK</span></td></tr>
    <tr><td><b>03/09</b> qua <span class="pill new">10.2</span></td><td><b>Elektro LIGOU a energia</b> \u2014 UC 49211331 \xB7 nota 202610548330123-3</td><td>vistoria + medidor OK \xB7 atraso de 10 dias vs previsto 24/08</td><td><span class="pill ok">\u2713 FEITO</span></td></tr>
    <tr><td><b>~26/08</b> qua</td><td><b>Instala\xE7\xE3o dos 4 ACs \u2014 feita</b> (R$ 3.247 com adicional de material, \xA79.5)</td><td>operacional desde 03/09 quando a Elektro ligou</td><td><span class="pill ok">\u2713 FEITO</span></td></tr>
    <tr><td><b>25/08</b> ter</td><td><b>Ara\xFAjo \u2014 todos os itens de banheiro</b></td><td><b>bacias existirem</b> \xB7 assentos \xB7 altura do gabinete</td><td><span class="pill no">CEDO DEMAIS</span></td></tr>
    <tr><td><b>26/08</b> qua</td><td><b>Pedra da ilha \u2014 Feijor</b> <span class="pill new">8.7</span></td><td>recorte 56\xD749 deu certo</td><td><span class="pill ok">\u2713 INSTALADA</span></td></tr>
    <tr><td><b>27/08</b> qui</td><td><b>Boiler EcoSol</b> \u2014 j\xE1 pago em 15/08 (R$ 2.298,75)</td><td>energia (apoio el\xE9trico)</td><td><span class="pill ok">ordem certa</span></td></tr>
    <tr><td><b>31/08</b> seg <span class="pill new">8.5</span></td><td><b>In\xEDcio do muro da divisa + aterro</b> \u2014 material R$ 2.185 + m\xE3o de obra R$ 4.850 (\xA73F)</td><td>caimento/dreno na base definido com o pedreiro</td><td><span class="pill go">agendado</span></td></tr>
    <tr><td><b>03/09</b> qua <span class="pill new">10.2</span></td><td><b>Energia ligada</b> \u2014 destrava boiler, ACs e o eletricista de s\xE1bado</td><td>Elektro concluiu</td><td><span class="pill ok">\u2713 hoje</span></td></tr>
    <tr><td><b>04/09</b> qui <span class="pill new">10.1</span></td><td><b>Destro \u2014 nivelamento do contrapiso do superior com argamassa</b></td><td>o nivelante de R$ 509 (\xA79.4) vai ser aplicado</td><td><span class="pill ok">agendado</span></td></tr>
    <tr><td><b>~04/09</b> sex</td><td><b>3 boxes de vidro + vidro superior do gourmet</b> \u2014 LYME</td><td><b>o 3\xBA box n\xE3o est\xE1 no contrato 1412</b></td><td><span class="pill warm">CONTRADI\xC7\xC3O</span></td></tr>
    <tr><td><b>05/09</b> s\xE1b <span class="pill new">10.1</span></td><td><b>Eletricista termina: instala lumin\xE1rias + itens de banheiro</b></td><td>fecha o buraco do \xA77 (instala\xE7\xE3o banheiros) que virou \xF3rf\xE3o quando o muro caiu</td><td><span class="pill ok">agendado</span></td></tr>
    <tr><td><b>08/09</b> ter</td><td><b>Piso LVT \u2014 Destro</b></td><td>contrapiso nivelado \xB7 i\xE7amento \xB7 primer \xB7 cola</td><td><span class="pill no">4 BLOQUEIOS</span></td></tr>
    <tr><td><b>~14/09</b> seg</td><td><b>Restante das esquadrias</b> \u2014 LYME</td><td>piso colado 6 dias antes</td><td><span class="pill warm">proteger piso</span></td></tr>
    <tr><td>~28/09</td><td>Projeto da marcenaria (45 d de 11/08)</td><td>medidas in loco \xB7 nicho do forno</td><td><span class="pill go">\u2014</span></td></tr>
    <tr><td><b>~19/10</b> seg</td><td><b>Instala\xE7\xE3o dos arm\xE1rios</b> \u2014 60 d <span class="pill new">8.2</span></td><td>projeto ~28/09 \xB7 <b>piso instalado antes da medi\xE7\xE3o</b></td><td><span class="pill warm">estimativa</span></td></tr>
    <tr><td>depois de ~19/10</td><td><b>Ara\xFAjo \u2014 2\xAA ida</b> (kit 5 pe\xE7as \xB7 torneira de bancada) <span class="pill new">8.2</span></td><td><b>gabinete e bancada montados</b></td><td><span class="pill go">\u2014</span></td></tr>
  </table>

  <div class="note bad"><b>0 \xB7 A pedra em 26/08 cai exatamente no dia em que o or\xE7amento Feijor vence \u2014 e o modelo previa a pedra pronta s\xF3 em ~10/09.</b> O painel carregava <b>15 dias \xFAteis de produ\xE7\xE3o</b> a partir da autoriza\xE7\xE3o; para instalar em 26/08 a chapa teria de estar sendo cortada <b>agora</b>. Ou a Feijor est\xE1 trabalhando mais r\xE1pido do que a pr\xF3pria prazo declarado, ou <b>a medi\xE7\xE3o e a autoriza\xE7\xE3o j\xE1 aconteceram e eu n\xE3o fui informado</b>. N\xE3o \xE9 problema \u2014 \xE9 bom, adianta o projeto em duas semanas. Mas <b>muda o que ainda d\xE1 para mudar</b>: depois que a chapa \xE9 cortada, recorte errado n\xE3o tem conserto, tem chapa nova.<br>
  <b>Confirme hoje, antes da pedra entrar em produ\xE7\xE3o:</b><br>
  \u2022 <b>Recorte do cooktop = 56 \xD7 49 cm</b> (Black+Decker BXICHCPB4B, 4 bocas). Se a Feijor cortou por medida de cat\xE1logo em vez do aparelho f\xEDsico, \xE9 chapa perdida.<br>
  \u2022 <b>200 mm livres sob o cooktop</b> \u2014 \xE9 restri\xE7\xE3o do forno embutido logo abaixo. Isso era informa\xE7\xE3o devida \xE0 projetista da marcenaria; agora \xE9 devida <b>\xE0 Feijor primeiro</b>, porque a espessura do tampo e o rebaixo consomem essa altura.<br>
  \u2022 <b>A cuba</b> \u2014 se a casa j\xE1 vem com cuba (ver \xA73B), o recorte dela tamb\xE9m sai agora, e o modelo tem de ser o que j\xE1 existe, n\xE3o um a comprar.<br>
  \u2022 <b>O pagamento em 8\xD7</b> \u2014 se o or\xE7amento vence 26/08 e a instala\xE7\xE3o \xE9 26/08, a condi\xE7\xE3o de 8\xD7 precisa estar travada por escrito antes, n\xE3o negociada no dia.</div>

  <div class="note good"><b>0b \xB7 A pedra em 26/08 N\xC3O conflita com o piso de 08/09.</b> A ilha \xE9 no <b>t\xE9rreo</b>; o LVT colado \xE9 no <b>superior</b>. Frentes separadas, equipes separadas, nenhuma disputa de espa\xE7o. E cair <b>1 dia depois do Ara\xFAjo</b> (25/08) tamb\xE9m est\xE1 certo: marmoraria trabalhando com pedra pesada num banheiro rec\xE9m-montado seria risco; cozinha e banheiro n\xE3o se cruzam.</div>

  <div class="note info"><b>0c \xB7 Arm\xE1rios em ~60 dias (\u224819/10) fecha com o resto \u2014 mas \xE9 seu chute, n\xE3o compromisso da f\xE1brica.</b> Bate com o projeto saindo ~28/09 mais produ\xE7\xE3o, e confirma a onda de outubro que o \xA717 j\xE1 previa. Duas leituras que saem disso:<br>
  (1) <b>O piso de 08/09 vira pr\xE9-requisito duro.</b> O marceneiro mede <b>depois</b> do LVT instalado \u2014 medir antes erra altura de rodap\xE9 e de gaveta na cozinha inteira. Se o piso escorregar de 08/09, os arm\xE1rios escorregam junto, e n\xE3o \xE9 1 por 1: \xE9 o atraso do piso mais uma nova janela de medi\xE7\xE3o.<br>
  (2) <b>Isso empurra a 2\xAA ida do Ara\xFAjo para depois de ~19/10.</b> Toalheiro, papeleira, porta-toalha e torneira de bancada dependem do gabinete montado. <b>Dois meses de dist\xE2ncia</b> entre a 1\xAA e a 2\xAA ida \u2014 o que torna a divis\xE3o do servi\xE7o n\xE3o uma prefer\xEAncia, mas a \xFAnica forma de fazer certo. Combine isso com ele <b>antes de 25/08</b>, n\xE3o depois.<br>
  <b>Cobre a f\xE1brica de uma data firme</b> quando o projeto sair em ~28/09. "60 dias" sem contrato n\xE3o segura cronograma.</div>

  <div class="note bad"><b>1 \xB7 Ara\xFAjo em 25/08 vai furar porcelanato no escuro \u2014 e furo em porcelanato n\xE3o tem volta.</b> O projeto da marcenaria s\xF3 sai <b>~28/09, trinta e quatro dias depois dele</b>. A altura do toalheiro, da papeleira e do porta-toalha <b>depende da bancada e do gabinete</b>, que ainda n\xE3o existem nem no papel. Se ele instalar o kit de 5 pe\xE7as em 25/08, ele est\xE1 chutando cota.<br>
  <b>Divida o servi\xE7o dele em duas idas:</b><br>
  \u2022 <b>Pode ir em 25/08</b> \u2014 ducha, acabamento de registro, nicho/porta-shampoo, bacia e assento. S\xE3o itens cuja posi\xE7\xE3o j\xE1 est\xE1 definida pelo <b>ponto hidr\xE1ulico</b>, que n\xE3o muda.<br>
  \u2022 <b>Segura para depois de 28/09</b> \u2014 <b>kit de 5 pe\xE7as</b> (toalheiro, papeleira, cabide, saboneteira, porta-toalha) e <b>torneira, se for de bancada</b>. Torneira de bancada sem bancada n\xE3o instala; torneira de parede pode ir agora.<br>
  Uma segunda visita do Ara\xFAjo custa uma di\xE1ria. Refazer furo errado em porcelanato custa a pe\xE7a, o pedreiro e a mancha que fica.</div>

  <div class="note bad"><b>2 \xB7 As bacias podem n\xE3o existir \u2014 e sem bacia, metade do servi\xE7o do Ara\xFAjo cai.</b> Voc\xEA comprou <b>4 assentos</b> em 20/08 (\xA73D), mas as bacias n\xE3o aparecem em nenhuma linha do or\xE7amento. Se elas n\xE3o estiverem na casa em 25/08, o Ara\xFAjo n\xE3o instala bacia nem assento, e voc\xEA paga a di\xE1ria por meio servi\xE7o. Some-se: os <b>3 assentos Art chegam 22/08</b> (3 dias de folga, ok) e o <b>Boss do lavabo est\xE1 com "sa\xEDda pendente"</b> \u2014 \xE9 FULL, deve chegar, mas <b>confirme o rastreio antes de 25/08</b>. E as bacias, se forem comprar agora, t\xEAm de ser <b>Incepa Art \xD73 e Incepa Boss \xD71</b> \u2014 o assento j\xE1 travou o modelo.</div>

  <div class="note good"><b>3 \xB7 Energia LIGADA em 03/09.</b> A aposta original ("energia + AC no mesmo dia") ficou pra tr\xE1s \u2014 a Elektro atrasou 10 dias vs previsto 24/08, mas concluiu antes do eletricista de s\xE1bado, que era o pr\xF3ximo bloqueio real. <b>Contexto hist\xF3rico abaixo (mantido pra refer\xEAncia):</b> <span style="opacity:0.6"> A instaladora precisa de <b>energia para fazer v\xE1cuo e testar</b> os 4 aparelhos. Se a Elektro atrasar um dia \u2014 e a vistoria j\xE1 teve o problema do endere\xE7o da UC gravado errado ("AVENIDA ATIBAIA 605" contra "Av. Zezico Pe\xE7anha, 605") \u2014 a equipe chega numa casa morta e voc\xEA paga a mobiliza\xE7\xE3o \xE0 toa. <b>Ligue para a instaladora na manh\xE3 de 24/08 e s\xF3 libere depois de ver o medidor energizado.</b> Dois pontos ainda abertos que tamb\xE9m caem em 24/08: <b>onde vai a 4\xAA condensadora</b> (nunca foi confirmado no local) e se os <b>circuitos dos ACs</b> est\xE3o prontos e balanceados entre fases.</span></div>

  <div class="note bad"><b>4 \xB7 O piso em 08/09 tem quatro bloqueios n\xE3o resolvidos, e s\xF3 12 dias \u2014 com feriado no meio.</b> 07/09 \xE9 segunda e cai v\xE9spera. Falta:<br>
  (1) <b>I\xE7amento.</b> O pedido diz impresso <i>"n\xE3o subimos e n\xE3o descemos escadas"</i> e <b>toda a carga vai pro superior</b> \u2014 ~50 m\xB2 de LVT mais 12 sacos de nivelador (240 kg). N\xE3o est\xE1 or\xE7ado nem combinado.<br>
  (2) <b>Contrapiso nunca foi nivelado nem conferido.</b> R\xE9gua de 2 m, toler\xE2ncia 3 mm. \xC9 LVT <b>colado de 2 mm</b> \u2014 imperfei\xE7\xE3o de contrapiso aparece no acabamento.<br>
  (3) <b>Falta 1 gal\xE3o de primer</b> \u2014 s\xE3o ~18 m\xB2/gal\xE3o, voc\xEA tem 2 para ~43 m\xB2.<br>
  (4) <b>A cola nunca apareceu no pedido.</b> Confirmar se est\xE1 l\xE1.<br>
  E antes de tudo: <b>08/09 \xE9 entrega ou instala\xE7\xE3o?</b> Se for instala\xE7\xE3o, a entrega e o nivelamento t\xEAm de ser antes, e a janela encolhe mais.</div>

  <div class="note bad"><b>5 \xB7 Contradi\xE7\xE3o no 3\xBA box.</b> Voc\xEA diz que a LYME instala <b>3 boxes</b> em ~15 dias. O <b>contrato 1412 tem 2</b> \u2014 o 3\xBA box est\xE1 registrado no painel como fora do contrato, <b>R$ 1.500\u20132.000 n\xE3o or\xE7ados</b>. Ou ele foi inclu\xEDdo e voc\xEA tem um valor novo a lan\xE7ar, ou v\xE3o aparecer s\xF3 2 boxes no dia. <b>Confirmar com a LYME antes de ~04/09.</b></div>

  <div class="note good"><b>Uma coisa a agenda acertou sozinha: vidro antes de piso.</b> Boxes em ~04/09 e LVT em 08/09 \xE9 a ordem certa \u2014 instalador de vidro carregando pe\xE7a pesada sobre piso colado novo seria dano garantido. Mas a <b>esquadria de ~14/09 vem 6 dias depois do LVT</b>: a cola ainda est\xE1 curando e a equipe vai arrastar caixilho. <b>Forre o piso com papel\xE3o ondulado ou chapa dura antes de eles subirem.</b> Custa quase nada e evita risco em piso de 2 mm.</div>

  <div class="note info"><b>Duas coisas sem linha no or\xE7amento.</b> A <b>m\xE3o de obra do Ara\xFAjo</b> (2 di\xE1rias, se dividir o servi\xE7o) e o <b>i\xE7amento da carga da Destro</b>. Nenhuma das duas est\xE1 provisionada. Somadas, \xE9 dinheiro pequeno \u2014 mas hoje elas est\xE3o em R$ 0 no modelo, e R$ 0 n\xE3o \xE9 uma estimativa.</div>
</section>
<!-- ============ 3. COMPRAS DE 14/08 ============ -->
<section>
  <h3>3 \xB7 Compras de 14/08 \u2014 tr\xEAs itens novos</h3>
  <div class="grid g3">
    <div class="kpi">
      <h4>Cooktop indu\xE7\xE3o Black+Decker</h4>
      <span>BXICHCPB4B \xB7 4 zonas \xB7 220V</span>
      <b style="font-size:18px;color:var(--warm)">7.200 W \xB7 32,7 A</b>
      <small>Loja oficial BlackDecker / 2ELETRO INFO \xB7 <b>FULL</b> \xB7 chega <b>ter\xE7a 18/08</b>. Externo 59 \xD7 5 \xD7 52 cm. <b>Recorte n\xE3o publicado</b> \u2014 a ficha repete a medida externa no campo "nicho".</small>
    </div>
    <div class="kpi">
      <h4>Forno de embutir Midea</h4>
      <span>TSD80P2 \xB7 80 L \xB7 air fryer \xB7 220V</span>
      <b style="font-size:18px;color:var(--cool)">2.750 W \xB7 12,5 A</b>
      <small>Loja oficial Midea Store \xB7 chega <b>25\u201327/08</b>. Externo 59,5 L \xD7 56,5 A \xD7 59,5 P cm \xB7 31,5 kg. Tomada <b>exclusiva 20 A</b>.</small>
    </div>
    <div class="kpi">
      <h4>Fechadura digital biom\xE9trica</h4>
      <span>ZIKOTECHTEC \xB7 WiFi + app \xB7 preto</span>
      <b style="font-size:18px;color:var(--purple)">chega 15\u201316/08</b>
      <small>Acabamento piano preto \xB7 dire\xE7\xE3o <b>direita</b>. Porta de entrada \xE9 <b>madeira maci\xE7a ripada</b> \u2014 conferir fura\xE7\xE3o e espessura na visita.</small>
    </div>
  </div>
  <div class="note new"><b>N\xE3o s\xE3o compras:</b> a mesma tela trazia um ar-condicionado LG Dual Inverter (R$ 4.619, Webcontinental) e um rack para TV 75" (R$ 659,99, MadeiraMadeira) \u2014 os dois marcados como <b>"Ad"</b>. O AC da casa j\xE1 est\xE1 fechado direto com o instalador; n\xE3o abrir essa frente de novo.</div>
  <h4 style="margin-top:20px">Pre\xE7os \u2014 premissa declarada, n\xE3o confirmada</h4>
  <p style="color:var(--dim);font-size:14px">A tela n\xE3o mostrou os valores pagos. Enquanto n\xE3o vierem, o or\xE7amento carrega a faixa de mercado apurada hoje:</p>
  <table>
    <tr><th>Item</th><th class="n">Faixa de mercado (14/08)</th><th class="n">Premissa no or\xE7amento</th></tr>
    <tr><td><b>Cooktop B+D BXICHCPB4B</b> <span class="pill ok">PAGO</span><br><span class="tag">pedido 2000017933246762</span></td><td class="n">R$ 1.150 \u2013 1.400<br><span class="tag">premissa era R$ 1.300</span></td><td class="n"><b style="color:var(--ok)">R$ 999,90</b><br><span class="tag">R$ 1.799 \u2212 R$ 799,10 \xB7 frete gr\xE1tis</span></td></tr>
    <tr><td><b>Forno Midea TSD80P2</b> <span class="pill ok">PAGO</span><br><span class="tag">pedido 2000017932936906</span></td><td class="n">R$ 1.699 \u2013 1.915<br><span class="tag">premissa era R$ 1.800</span></td><td class="n"><b>R$ 1.780,00</b><br><span class="tag">R$ 1.999 \u2212 R$ 300 + R$ 81 frete</span></td></tr>
    <tr><td><b>Fechadura digital biom\xE9trica WiFi</b> <span class="pill ok">PAGO</span><br><span class="tag">pedido 2000017934799942</span></td><td class="n">R$ 300 \u2013 600<br><span class="tag">premissa era R$ 450</span></td><td class="n"><b>R$ 328,98</b><br><span class="tag">R$ 349,98 \u2212 R$ 21 cupom</span></td></tr>
    <tr><td><b>Instala\xE7\xE3o da fechadura</b></td><td class="n">\u2014</td><td class="n"><b>R$ 250</b> <span class="pill go">est.</span></td></tr>
    <tr class="tot"><td>Linha no or\xE7amento</td><td class="n">premissa: R$ 3.678</td><td class="n"><b>R$ 3.358,88</b></td></tr>
  </table>
  <div class="note good"><b>Os tr\xEAs somam R$ 3.108,88 \u2014 R$ 319 abaixo da minha premissa, e o cooktop carrega sozinho essa economia.</b> R$ 1.799 de etiqueta por R$ 999,90 \xE9 <b>44,4% de desconto</b>, R$ 150 abaixo do piso da faixa de mercado que eu tinha levantado (R$ 1.150) e R$ 300 abaixo da premissa. O forno ficou dentro da faixa (R$ 1.780 contra R$ 1.699\u20131.915) \u2014 <b>vale notar que os R$ 81 de frete comeram um quarto do desconto de R$ 300</b>. A fechadura, no piso da faixa.</div>
  <div class="note good"><b>ATUALIZA\xC7\xC3O 8.2 \u2014 a fechadura chegou e est\xE1 instalada.</b> O extravio se resolveu, a m\xE3o da porta bateu (foi comprada "dire\xE7\xE3o direita") e a fura\xE7\xE3o em madeira maci\xE7a \u2014 que era irrevers\xEDvel \u2014 j\xE1 est\xE1 feita. <b>Item encerrado.</b> Fica s\xF3 a pergunta de caixa: os <b>R$ 250 de instala\xE7\xE3o</b> foram pagos a algu\xE9m ou voc\xEA mesmo instalou? Se foi voc\xEA, o total do projeto cai R$ 250 e a linha vira fato em vez de premissa.<br>
  <span style="color:var(--dim2)">Registro do que era o risco, para hist\xF3rico:</span><br>
  <b>O que fazer:</b> se o ML n\xE3o resolver at\xE9 18/08, acionar o reembolso \u2014 a prote\xE7\xE3o cobre. Mas <b>prefira reenvio a estorno</b>: o pre\xE7o de R$ 328,98 inclui um <b>cupom de R$ 21</b> que muito provavelmente n\xE3o se repete numa recompra. Se cair para reembolso, o custo real de recomprar \xE9 ~R$ 350.<br>
  <b>Efeito colateral bom:</b> se refizer a compra, voc\xEA ainda n\xE3o furou a porta. D\xE1 tempo de medir espessura da folha e backset <b>hoje</b>, com trena, e comprar com a medida na m\xE3o em vez de torcer para a m\xE3o estar certa.</div>
  <div class="note info"><b>Formas de pagamento \u2014 muda o caixa, n\xE3o o total.</b> O cooktop foi pago com <b>R$ 200 de saldo ML + R$ 799,90 em Pix</b>: sai da conta <b>agora</b>, em agosto. Forno e fechadura foram no cart\xE3o (Mastercard 8508 e Visa 0700), caem na fatura. S\xF3 <b>R$ 799,90</b> desses R$ 3.108,88 tocam o caixa de agosto.</div>
  <div class="note bad"><b>Mas o custo real da fechadura \xE9 R$ 578, n\xE3o R$ 328</b> \u2014 a instala\xE7\xE3o de R$ 250 <b>n\xE3o estava em lugar nenhum do or\xE7amento</b>. Isso \xE9 76% em cima do pre\xE7o do aparelho. <b>A li\xE7\xE3o vale para os outros dois:</b> o cooktop exige circuito exclusivo de 32 A em cabo 6 mm\xB2 e o recorte da pedra; o forno exige tomada exclusiva de 20 A e o nicho da marcenaria. Nenhum dos tr\xEAs "custa o pre\xE7o da etiqueta". A diferen\xE7a \xE9 que os custos de instala\xE7\xE3o do cooktop e do forno <b>j\xE1 est\xE3o dentro</b> das linhas de el\xE9trica (R$ 12.000), pedra (R$ 5.040) e marcenaria (R$ 65.000) \u2014 <b>n\xE3o estou contando duas vezes</b>. O da fechadura era o \xFAnico \xF3rf\xE3o.</div>
  <div class="note good"><b>Os 3 pre\xE7os viraram fato.</b> Nessa linha n\xE3o sobrou nenhuma premissa al\xE9m dos R$ 250 do instalador.</div>
  <div class="note info"><b>Fatura: essas compras provavelmente caem em setembro, n\xE3o em agosto.</b> A fatura que vence 20/08 j\xE1 fechou. Compra de 14/08 normalmente entra no ciclo seguinte. Isso preserva o piso de caixa de agosto (~R$ 40k) e joga os ~R$ 3.890 pra fatura de setembro. <b>Confirmar a data de fechamento do cart\xE3o</b> \u2014 se por acaso fechar depois do dia 14, a fatura de 20/08 vira ~R$ 16.390 e o piso de agosto cai pra ~R$ 35,3k. Continua confort\xE1vel, mas muda o n\xFAmero. <b>Tudo em 1\xD7 no cart\xE3o n\xE3o alivia parcela nenhuma \u2014 \xE9 caixa de um m\xEAs s\xF3.</b></div>
</section>
<!-- ============ 3B. BANHEIROS ============ -->
<section>
  <h3>3B \xB7 Metais e acess\xF3rios dos 3 banheiros \u2014 comprados em 14/08</h3>
  <p style="color:var(--dim);font-size:14px">Tudo 1\xD7 no cart\xE3o. Quantidades coerentes: <b>3 de cada</b>, um por banheiro.</p>
  <table>
    <tr><th>Item</th><th>Vendedor</th><th class="n">Qtd</th><th class="n">Unit.</th><th class="n">Total</th><th>Envio</th></tr>
    <tr><td>Ducha autolimpante ABS preto + ducha manual</td><td>AMG Metais</td><td class="n">3</td><td class="n">R$ 221,57</td><td class="n"><b>R$ 664,71</b></td><td>pendente</td></tr>
    <tr><td>Porta-shampoo / nicho duplo preto</td><td>SHARKACABAMENTOS</td><td class="n">3</td><td class="n">R$ 141,32</td><td class="n"><b>R$ 423,96</b></td><td>pendente</td></tr>
    <tr><td>Kit acess\xF3rios 5 pe\xE7as Dreamway inox preto fosco</td><td>FDHEFBAGC8886</td><td class="n">3</td><td class="n">R$ 134,83</td><td class="n"><b>R$ 404,49</b></td><td>2 pendentes \xB7 1 chega 17/08</td></tr>
    <tr class="tot"><td>Soma dos produtos</td><td></td><td class="n">9</td><td class="n">\u2014</td><td class="n"><b>R$ 1.493,16</b></td><td></td></tr>
    <tr class="tot"><td><b>Cobrado no cart\xE3o</b></td><td></td><td></td><td></td><td class="n"><b>R$ 1.781,17</b></td><td>1\xD7</td></tr>
  </table>
  <div class="note bad"><b>Sobra R$ 288,01 que os produtos n\xE3o explicam.</b> A soma das etiquetas d\xE1 R$ 1.493,16, mas o cobrado foi <b>R$ 1.781,17</b>. A hip\xF3tese mais prov\xE1vel \xE9 <b>frete</b> \u2014 e ela conversa exatamente com o alerta abaixo: os 3 kits sa\xEDram como <b>3 pedidos separados</b>, o que normalmente significa <b>3 fretes</b>. R$ 288 dividido por 3 remessas d\xE1 ~R$ 96 cada, que \xE9 frete t\xEDpico de acess\xF3rio pesado fora de FULL. <b>Confere na fatura de cada pedido.</b> Se for isso, um \xFAnico pedido com quantidade 3 teria economizado ~R$ 190.</div>
  <div class="note bad"><b>Uma ambiguidade de R$ 1.329 que preciso resolver.</b> A ducha veio escrita como <i>"3 un. \u2014 de R$ 685,26 por R$ 664,71"</i>. Li <b>R$ 664,71 como total das 3</b> (R$ 221,57 a unidade), porque \xE9 assim que o porta-shampoo apareceu (3 un. = R$ 423,96) e porque R$ 221 \xE9 pre\xE7o plaus\xEDvel de ducha em <b>ABS</b>. Se R$ 664,71 for o <b>unit\xE1rio</b>, o total vira <b>R$ 1.994,13</b> e a linha inteira sobe para R$ 2.822,58. <b>Confere no pedido.</b></div>
  <div class="note good"><b>A ducha sem resist\xEAncia el\xE9trica \xE9 a escolha certa aqui</b> \u2014 e provavelmente n\xE3o foi por acaso. Com o boiler solar da EcoSol (+ apoio el\xE9trico no reservat\xF3rio), a \xE1gua j\xE1 chega quente e a ducha s\xF3 precisa distribuir. Chuveiro el\xE9trico no ponto seria carga redundante \u2014 e voc\xEA est\xE1 com <b>45,2 A de cooktop + forno contra o teto de 50 A</b> da Conven\xE7\xE3o. Cada resist\xEAncia a menos no ponto de uso \xE9 folga no quadro. Contrapartida: se o apoio el\xE9trico do boiler falhar, n\xE3o h\xE1 aquecimento de emerg\xEAncia no chuveiro. \xC9 o trade-off padr\xE3o de casa com solar, e \xE9 aceit\xE1vel.</div>
  <div class="note good"><b>CORRE\xC7\xC3O 8.2 \u2014 a casa J\xC1 VEM com torneiras e acabamentos de registro.</b> N\xE3o \xE9 "j\xE1 comprado", como eu escrevi na 8.0: <b>vem com o im\xF3vel</b>. A provis\xE3o de <b>R$ 1.600</b> sai do or\xE7amento e n\xE3o volta. Era estimativa minha, nunca foi cota\xE7\xE3o.</div>
  <div class="note bad"><b>E isso abre uma pergunta de R$ 3.600 que eu ainda n\xE3o fiz.</b> Se a casa vem com torneira e acabamento de registro, <b>o que mais ela vem?</b> O painel carrega hoje <b>4 bacias a R$ 1.800\u20133.600 sem linha de or\xE7amento nenhuma</b> \u2014 e se as bacias j\xE1 vierem com o im\xF3vel, essa d\xEDvida some, o Ara\xFAjo em 25/08 deixa de depender de compra, e os 4 assentos que voc\xEA comprou em 20/08 (\xA73D) <b>t\xEAm de bater com o modelo das bacias que j\xE1 est\xE3o l\xE1</b>, n\xE3o com uma bacia a comprar. <b>Fa\xE7a a lista do que a casa entrega antes de 25/08:</b> bacias \xB7 cubas/lavat\xF3rios \xB7 v\xE1lvula ou acionamento de descarga \xB7 chuveiros \xB7 sif\xF5es e v\xE1lvulas de pia \xB7 rabichos e registros \xB7 tanque da lavanderia. Cada item nessa lista \xE9 dinheiro que sai do or\xE7amento ou compra que voc\xEA evita fazer em duplicado.</div>
  <div class="note bad"><b>Dois pontos operacionais do pedido:</b><br>
  (1) Os 3 kits sa\xEDram como <b>3 pedidos separados do mesmo vendedor</b>, n\xE3o 1 pedido com quantidade 3. Isso significa 3 remessas, 3 rastreios e possivelmente <b>3 fretes</b>. Confere se o frete foi cobrado tr\xEAs vezes \u2014 se foi, d\xE1 para pedir ajuste.<br>
  (2) O vendedor <b>FDHEFBAGC8886</b> \xE9 nome autogerado, padr\xE3o de conta sem hist\xF3rico. Vale olhar a reputa\xE7\xE3o e o volume de vendas antes de a janela de 7 dias correr. Os outros dois (AMG Metais, SHARKACABAMENTOS) t\xEAm nome comercial.</div>
  <div class="note info"><b>N\xE3o instalar agora.</b> Acess\xF3rios de banheiro s\xE3o parafusados no porcelanato \u2014 furo em revestimento \xE9 irrevers\xEDvel e precisa de broca certa. Guardar caixa fechada at\xE9 o piso estar assentado e a marcenaria dos gabinetes definida, porque a <b>altura do toalheiro e da papeleira depende do gabinete</b>. \xDAnico item com pressa \xE9 conferir se veio completo, dentro do prazo do ML.</div>
</section>
<!-- ============ 3D. ASSENTOS SANITARIOS ============ -->
<section>
  <h3>3D \xB7 Assentos sanit\xE1rios \u2014 pedido ML 2000014630727711 \xB7 20/08 <span class="pill new">7.9</span></h3>
  <p style="color:var(--dim);font-size:14px">Entrega em <b>Rua Jos\xE9 Cirne Guimar\xE3es 339, Itapetinga</b> \u2014 n\xE3o na obra. Todos soft close, 4 banheiros cobertos.</p>
  <table>
    <tr><th>Item</th><th>Vendedor</th><th class="n">Qtd</th><th class="n">Unit.</th><th class="n">Total</th><th>Envio</th></tr>
    <tr><td>Assento Art Incepa PP soft close <span class="tag">su\xEDtes 1, 2 e m\xE1ster</span></td><td>RBV Delalana</td><td class="n">3</td><td class="n">R$ 179,33</td><td class="n"><b>R$ 538,00</b></td><td>agendado \xB7 chega <b>22/08</b></td></tr>
    <tr><td>Assento Boss Softclose Original PP Incepa <span class="tag">lavabo</span></td><td>Loja Kaster</td><td class="n">1</td><td class="n">R$ 199,00</td><td class="n"><b>R$ 199,00</b></td><td>Full \xB7 sa\xEDda pendente</td></tr>
    <tr><td>Frete</td><td>\u2014</td><td class="n">\u2014</td><td class="n">\u2014</td><td class="n">gr\xE1tis</td><td>\u2014</td></tr>
    <tr class="tot"><td><b>Total</b></td><td></td><td class="n">4</td><td class="n">\u2014</td><td class="n"><b>R$ 737,00</b></td><td></td></tr>
  </table>
  <div class="note good"><b>Esse pedido fecha certinho \u2014 ao contr\xE1rio do de 14/08.</b> 3 \xD7 179,33 = 537,99 e 661,01 no Visa final 0700 + 75,99 de saldo ML = <b>R$ 737,00 exatos</b>. N\xE3o sobrou centavo sem explica\xE7\xE3o, e o frete saiu gr\xE1tis nos dois pacotes. Nada a conferir na fatura aqui.</div>
  <div class="note bad"><b>O assento acabou de travar a lou\xE7a em Incepa.</b> Assento sanit\xE1rio n\xE3o \xE9 universal \u2014 a fixa\xE7\xE3o e o contorno s\xE3o por modelo de bacia. Comprando <b>Art</b> (\xD73) e <b>Boss</b> (\xD71) voc\xEA definiu, na pr\xE1tica, que as bacias t\xEAm que ser <b>Incepa Art nas tr\xEAs su\xEDtes e Incepa Boss no lavabo</b>. Duas situa\xE7\xF5es:<br>
  \u2022 <b>Se as bacias j\xE1 foram compradas</b> \u2014 confere modelo a modelo antes de 7 dias correrem. Art e Boss n\xE3o s\xE3o intercambi\xE1veis entre si.<br>
  \u2022 <b>Se ainda n\xE3o foram</b> \u2014 a escolha de bacia deixou de ser livre, e isso tem custo: bacia com caixa acoplada Incepa roda <b>R$ 450\u2013900</b> cada. Quatro bacias s\xE3o <b>R$ 1.800\u20133.600 ainda n\xE3o or\xE7ados</b>. Com torneiras e acabamentos de registro j\xE1 comprados (corre\xE7\xE3o 8.0), <b>a bacia virou o \xFAnico item pesado em aberto nos banheiros.</b></div>
  <div class="note info"><b>Dois pontos menores.</b> (1) A entrega vai pra <b>Itapetinga, n\xE3o pra obra</b> \u2014 se foi de prop\xF3sito, \xF3timo, \xE9 o caminho certo enquanto a casa est\xE1 em fit-out e sem ningu\xE9m pra receber. (2) O <b>Visa final 0700</b> precisa ser identificado: se for o BRB, os R$ 661,01 caem na fatura seguinte, n\xE3o na de hoje (20/08, R$ 12.000). N\xE3o muda o caixa de agosto de qualquer forma.</div>
  <div class="note"><b>Mesma regra do \xA73B: n\xE3o instalar agora.</b> Assento se monta depois da bacia fixada e do piso assentado. \xDAnico prazo que corre \xE9 o de <b>conferir se veio completo e sem trinca</b> dentro da janela do ML \u2014 22/08 pro pacote RBV.</div>
</section>
<!-- ============ 3C. LYME CONTRATO 1412 ============ -->
<section>
  <h3>3C \xB7 LYME Esquadrias \u2014 contrato 1412, assinado 17/08 <span class="pill new">7.5</span></h3>
  <div class="grid g4">
    <div class="kpi"><span>Valor do contrato</span><b>R$ 30.840,11</b><small>provisionado era R$ 34.000 \xB7 <b style="color:var(--ok)">\u2212R$ 3.160</b></small></div>
    <div class="kpi"><span>Entrada \u2014 Pix</span><b style="color:var(--alert)">R$ 15.420</b><small>pago 17/08 \xB7 sai do caixa agora</small></div>
    <div class="kpi"><span>Saldo</span><b>5\xD7 R$ 3.084</b><small><b>cart\xE3o de cr\xE9dito</b> \u2014 o contrato N\xC3O diz boleto</small></div>
    <div class="kpi"><span>Boxes contratados</span><b style="color:var(--alert)">2 de 3</b><small>falta o terceiro banheiro</small></div>
  </div>
  <h4 style="margin-top:20px">Os 5 itens do contrato</h4>
  <table>
    <tr><th>#</th><th>Item</th><th>Medida (mm)</th><th>Vidro / cor</th><th class="n">Valor</th></tr>
    <tr><td>1</td><td>Janela de correr 3 folhas c/ peitoril \u2014 linha Gold</td><td>4120 \xD7 2680</td><td>6 mm temperado incolor \xB7 alum\xEDnio e ferragem <b>preto</b></td><td class="n">R$ 10.018,47</td></tr>
    <tr><td>2</td><td>Porta de correr 3 folhas, trilho cogumelo \u2014 linha Gold</td><td>3100 \xD7 2680</td><td>6 mm temperado incolor \xB7 <b>preto</b></td><td class="n">R$ 8.329,06</td></tr>
    <tr><td>3</td><td>Cobertura de vidro para pergolado <b>de madeira</b></td><td>2680 \xD7 4250</td><td>8 mm temperado incolor <b>com pel\xEDcula</b> \xB7 <b>preto</b></td><td class="n">R$ 8.993,12</td></tr>
    <tr><td>4</td><td>Box frontal fora de padr\xE3o (engenharia)</td><td>1140 \xD7 2780</td><td>8 mm temperado \xB7 <b>preto</b></td><td class="n">R$ 1.531,83</td></tr>
    <tr><td>5</td><td>Box frontal fora de padr\xE3o (engenharia)</td><td>1530 \xD7 2780</td><td>8 mm temperado \xB7 alum\xEDnio e ferragem <b style="color:var(--alert)">BRANCO</b></td><td class="n">R$ 1.967,63</td></tr>
    <tr class="tot"><td colspan="4">Total do contrato</td><td class="n"><b>R$ 30.840,11</b></td></tr>
  </table>
  <div class="note bad"><b>S\xF3 h\xE1 2 boxes no contrato \u2014 e s\xE3o 3 su\xEDtes.</b> Os itens 4 e 5 s\xE3o os \xFAnicos boxes contratados. O terceiro banheiro ficou de fora. Pela cl\xE1usula 2.2, incluir depois \xE9 <b>adendo ao contrato</b>, a pre\xE7o praticado no momento do adendo \u2014 n\xE3o ao pre\xE7o de hoje. Pelo padr\xE3o dos dois contratados (R$ 1.532 e R$ 1.968), o terceiro deve custar <b>R$ 1.500 \u2013 2.000</b>, que ainda <b>n\xE3o est\xE3o no or\xE7amento</b>. Resolver antes da medi\xE7\xE3o definitiva, porque medir os 3 numa visita s\xF3 \xE9 gr\xE1tis; voltar para medir o terceiro \xE9 <b>visita cobrada</b> (cl\xE1usula 3.2).</div>
  <div class="note bad"><b>Voc\xEA me disse boleto; o contrato diz cart\xE3o de cr\xE9dito.</b> Cl\xE1usula 4.2, textual: "RESTANTE NO CARTAO DE CREDITO EM 5X DE 3084,00". A diferen\xE7a n\xE3o \xE9 sem\xE2ntica \u2014 se cair no cart\xE3o, os R$ 3.084/m\xEAs <b>somam \xE0 fatura</b> que o modelo j\xE1 trata como custo de vida (R$ 12.500 no dia 20). Cinco meses de R$ 3.084 <b>n\xE3o</b> est\xE3o dentro dos R$ 15.000/m\xEAs de custo de vida. Se voc\xEA quer boleto, tem de ser corrigido por escrito <b>agora</b>, antes da primeira cobran\xE7a.</div>
  <div class="note warm"><b>Item 5 saiu em alum\xEDnio e ferragem BRANCO.</b> Toda a esquadria da casa \xE9 <b>alum\xEDnio preto</b> \u2014 inclusive o box do item 4, no mesmo contrato. Ou \xE9 escolha deliberada para um banheiro espec\xEDfico, ou \xE9 erro de digita\xE7\xE3o da proposta. Corrigir depois de produzido \xE9 perda total do vidro. <b>Confirmar hoje.</b></div>
  <div class="note warm"><b>A cobertura \xE9 especificada para pergolado de MADEIRA.</b> O item 3 diz "cobertura de vidro para pergolado de madeira", e o desenho de corte mostra fixa\xE7\xE3o sobre estrutura de madeira. As fotos da construtora de 13/07 mostram <b>pergolado met\xE1lico preto j\xE1 montado</b>. Se a estrutura for met\xE1lica, o detalhe de fixa\xE7\xE3o muda (parafuso e veda\xE7\xE3o sobre metal, n\xE3o sobre madeira). \xC9 a diverg\xEAncia com maior potencial de virar retrabalho em obra \u2014 <b>mandar foto do pergolado para a LYME antes da medi\xE7\xE3o</b>.</div>
  <h4 style="margin-top:20px">Prazos \u2014 o que o contrato realmente promete</h4>
  <table>
    <tr><th>Item</th><th>Prazo contratual</th><th>Contado a partir de</th><th>Proje\xE7\xE3o</th></tr>
    <tr><td>Boxes e esquadrias em temperado</td><td>10 a 15 dias</td><td>medi\xE7\xE3o definitiva</td><td>depende da medi\xE7\xE3o</td></tr>
    <tr><td><b>Cobertura do pergolado</b></td><td><b>20 a 60 dias</b>, em 2 fases (estrutura, depois vidros)</td><td>contrata\xE7\xE3o ou medi\xE7\xE3o</td><td><b style="color:var(--warm)">at\xE9 ~16/10/2026</b></td></tr>
  </table>
  <div class="note"><b>A cobertura \xE9 o item longo \u2014 e o rel\xF3gio dela j\xE1 come\xE7ou.</b> O prazo conta da contrata\xE7\xE3o (17/08), ent\xE3o o pior caso cai em meados de outubro. Tudo o mais depende da <b>medi\xE7\xE3o definitiva</b>, que ainda n\xE3o foi agendada. Cada dia sem agendar \xE9 um dia somado no fim.</div>
  <div class="note bad"><b>Cl\xE1usula 3.3 \u2014 a medi\xE7\xE3o tem pr\xE9-requisito de obra.</b> Os v\xE3os s\xF3 s\xE3o considerados liberados quando estiverem "requadrados, calfinados e com soleira", e <b>"as portas devem estar com piso definido"</b>. Isso amarra a LYME ao mesmo caminho cr\xEDtico do piso. E a cl\xE1usula 3.2 \xE9 dura: <b>medi\xE7\xE3o parcial n\xE3o existe</b> \u2014 se o t\xE9cnico n\xE3o conseguir medir todos os v\xE3os na visita, a segunda visita <b>\xE9 cobrada</b>. Antes de chamar, checar v\xE3o por v\xE3o: os 3 banheiros est\xE3o com revestimento e soleira prontos? A porta de correr tem piso definido?</div>
  <div class="note"><b>Cl\xE1usula 3.4 \u2014 risco transferido para voc\xEA.</b> A LYME <b>n\xE3o se responsabiliza</b> por quebra de cer\xE2mica, porcelanato ou granito durante a instala\xE7\xE3o, alegando que a culpa seria de assentamento oco feito por terceiro. Na pr\xE1tica voc\xEA assume o risco de dano ao porcelanato do t\xE9rreo e ao granito. N\xE3o d\xE1 para renegociar depois de assinado, mas d\xE1 para mitigar: <b>fotografar o entorno de cada v\xE3o antes da instala\xE7\xE3o</b> e acompanhar o servi\xE7o.</div>
  <div class="note good"><b>O que ficou bom.</b> R$ 30.840,11 contra R$ 34.000 provisionados \xE9 <b>R$ 3.160 de economia</b> \u2014 a maior do projeto at\xE9 agora. Pre\xE7o "certo, fixo e irreajust\xE1vel" (cl\xE1usula 4.1), o que trava o custo contra qualquer varia\xE7\xE3o de alum\xEDnio e vidro nos pr\xF3ximos 60 dias. E a diferen\xE7a de 11 centavos entre o valor do contrato e a soma dos pagamentos (R$ 30.840,00) \xE9 irrelevante, mas vale saber que existe.</div>
</section>
<!-- ============ 3E. ILUMINACAO ============ -->
<section>
  <h3>3E \xB7 Ilumina\xE7\xE3o \u2014 15 lumin\xE1rias compradas <span class="pill new">8.3</span></h3>
  <div class="grid g4">
    <div class="kpi"><span>Total das lumin\xE1rias (l\xEDq.)</span><b style="color:var(--ok)">R$ 1.369,67</b><small>bruto R$ 1.506 \u2212 R$ 136,33 do kit 8\xD7 spots devolvido em 02/09</small></div>
    <div class="kpi"><span>Plafon 40 W BQ</span><b>8 un</b><small>R$ 459,63 \xB7 o corpo da luz de sobrepor</small></div>
    <div class="kpi"><span>Falta agora</span><b style="color:var(--warm)">m\xE3o de obra</b><small>eletricista instala \u2014 ver linha do or\xE7amento</small></div>
    <div class="kpi"><span>Impacto no total</span><b>R$ 3.370</b><small>lumin\xE1rias R$ 1.370 l\xEDq. (Visa 0700) + eletricista R$ 2.000 \xB7 <b>envelope R$ 12k aposentado na 8.9</b></small></div>
  </div>
  <table style="margin-top:14px">
    <tr><th>Item</th><th class="n">Qtd</th><th class="n">Valor pago</th></tr>
    <tr><td>Kit trilho 1 m + 4 spots 10 W preto/branco</td><td class="n">4 un</td><td class="n">R$ 207,71</td></tr>
    <tr><td>Painel plafon LED sobrepor 40 W quadrado branco quente</td><td class="n">8 un</td><td class="n">R$ 459,63</td></tr>
    <tr><td>Kit 3 painel plafon LED 25 W quadrado branco neutro</td><td class="n">1 un</td><td class="n">R$ 72,60</td></tr>
    <tr><td>Espelho redondo 60 cm c/ LED</td><td class="n">1 un</td><td class="n">R$ 73,16</td></tr>
    <tr><td>Lustre pendente LED 3 cores \xB7 3 an\xE9is preto</td><td class="n">1 un</td><td class="n">R$ 145,41</td></tr>
    <tr><td>Balizador LED sobrepor 4 W preto 4\xD72</td><td class="n">3 un</td><td class="n">R$ 160,44</td></tr>
    <tr><td>Lumin\xE1ria pendente Yaso Axis spot LED de bancada</td><td class="n">1 un</td><td class="n">R$ 250,72</td></tr>
    <tr style="text-decoration:line-through;opacity:0.5"><td>Kit 8\xD7 spots GU10 + 8\xD7 l\xE2mpadas MR16 preto</td><td class="n">1 un</td><td class="n">R$ 136,33</td></tr>
    <tr style="background:rgba(255,180,0,0.08)"><td colspan="2"><b>\u21B3 DEVOLVIDO 02/09 \xB7 estorno no Visa 0700</b> <span class="pill new">9.7</span></td><td class="n" style="color:var(--warm)"><b>\u2212 R$ 136,33</b></td></tr>
    <tr class="tot"><td>Total das lumin\xE1rias (bruto)</td><td class="n">\u2014</td><td class="n">R$ 1.506,00</td></tr>
    <tr class="tot"><td>Total l\xEDquido ap\xF3s devolu\xE7\xE3o <span class="pill new">9.7</span></td><td class="n">\u2014</td><td class="n"><b style="color:var(--ok)">R$ 1.369,67</b></td></tr>
  </table>
  <div class="note good"><b>Bottom line: os materiais de ilumina\xE7\xE3o viraram fato e vieram baratos \u2014 R$ 1.506 pra casa inteira.</b> Isso <b>confirma</b> o que o \xA712 do projeto j\xE1 dizia: o custo da ilumina\xE7\xE3o sempre foi m\xE3o de obra e infra, n\xE3o a lumin\xE1ria. As 15 pe\xE7as cobrem o conceito da rev. 6 \u2014 trilho + 4 spots na sala, plafons de sobrepor no superior (teto de concreto aparente n\xE3o embute), balizadores na escada, pendente na ilha/bancada, lustre e espelho com LED no lavabo.</div>
  <div class="note info"><b>Atualiza\xE7\xE3o 8.9: o envelope de R$ 12.000 de "ilumina\xE7\xE3o + el\xE9trica" foi aposentado.</b> Ele era uma estimativa do modelo, sem or\xE7amento por tr\xE1s. O gasto real de ilumina\xE7\xE3o+el\xE9trica \xE9 <b>R$ 3.506</b> \u2014 lumin\xE1rias R$ 1.506 + eletricista R$ 2.000 (arandelas). N\xE3o estou mais carregando os ~R$ 8.494 de "resto" que inflavam o total. Se aparecer conta nova de el\xE9trica/instala\xE7\xE3o, entra como linha real quando tiver valor.</div>
  <div class="note bad"><b>Dois pontos a confirmar antes de fechar a linha:</b><br>
  (1) <b>O trilho.</b> Lan\xE7ei "4 un \xB7 R$ 207,71" como <b>total da linha</b> (R$ 51,93/kit), que \xE9 como a coluna "valor pago" aparece nas outras linhas. <b>Mas R$ 52 por um kit de trilho + 4 spots de 10 W \xE9 barato demais</b> \u2014 se R$ 207,71 for o <b>unit\xE1rio</b>, a linha vira <b>R$ 830,84</b> e o total das lumin\xE1rias sobe pra <b>R$ 2.129,13</b>. <b>Confere no pedido</b> \u2014 \xE9 a \xFAnica ambiguidade da lista, e s\xE3o R$ 623 de diferen\xE7a.<br>
  (2) <b>Forma de pagamento.</b> Voc\xEA n\xE3o disse se foi cart\xE3o, Pix ou parcelado. N\xE3o muda o total (est\xE1 no envelope), mas muda <b>quando</b> toca o caixa \u2014 se caiu no cart\xE3o, entra numa fatura futura. S\xF3 pra fechar a origem.</div>
  <div class="note"><b>Regra que vale pra pr\xF3xima etapa:</b> a m\xE3o de obra da ilumina\xE7\xE3o est\xE1 <b>dentro</b> do or\xE7amento do eletricista, que ainda n\xE3o foi cotado. Quando o valor vier, ele n\xE3o \xE9 "novo" \u2014 ele <b>preenche</b> os ~R$ 10.494 que sobraram do envelope. Se estourar isso, a\xED sim \xE9 linha nova. Pe\xE7a o or\xE7amento do eletricista <b>com o projeto de circuitos e o balanceamento de fases juntos</b>, n\xE3o depois (\xA713 das pend\xEAncias).</div>
</section>
<!-- ============ 3F. MURO DA DIVISA + AMPLIACAO ============ -->
<section>
  <h3 style="text-decoration:line-through;opacity:0.55">3F \xB7 Muro da divisa + amplia\xE7\xE3o \u2014 or\xE7amento 158.706</h3>
  <div class="note bad"><b>\u274C CANCELADO na rev. 9.5 (02/09).</b> Muro da divisa n\xE3o vai mais acontecer. <b>Retiradas do or\xE7amento:</b> material R$ 2.185 (\xE0 vista) + MO R$ 4.850 (parcelado) = <b>\u2212R$ 7.035</b>. <b>Alerta:</b> a MO do muro <b>tamb\xE9m instalava os itens de banheiro</b> (duchas, kits, porta-shampoo, assentos) \u2014 com o cancelamento, essa instala\xE7\xE3o volta a ser buraco no \xA77 (era R$ 0 antes, virou d\xEDvida impl\xEDcita ainda sem dono). Vai precisar de m\xE3o de obra separada pra isso.</div>
  <div style="opacity:0.5">
  <div class="grid g4">
    <div class="kpi"><span>Material \u2014 \xE0 vista</span><b style="color:var(--warm)">R$ 2.185</b><small>lista R$ 2.300 \xB7 desconto R$ 115 (5%)</small></div>
    <div class="kpi"><span>M\xE3o de obra</span><b style="color:var(--alert)">R$ 4.850</b><small>muro + aterro + grama + <b>instala os banheiros</b></small></div>
    <div class="kpi"><span>Escopo novo</span><b>R$ 7.035</b><small>primeira frente de muro/terraplanagem</small></div>
    <div class="kpi"><span>Total do projeto</span><b style="color:var(--warm)">R$ 413.669</b><small>era R$ 406.634 \xB7 <b>+R$ 7.035</b></small></div>
  </div>
  <p style="color:var(--dim);font-size:14px;margin-top:12px"><b>O que \xE9:</b> muro frontal e lateral na divisa, aterro (movimenta\xE7\xE3o de terra) para estender a \xE1rea de grama at\xE9 a divisa frontal, e a m\xE3o de obra que executa isso <b>e</b> instala todos os itens de banheiro j\xE1 comprados (duchas, kits, porta-shampoo, assentos). Loja Maria Andrade \xB7 vendedor 03 \xB7 consumidor final \xB7 <b>24/08/2026 14:33</b>.</p>
  <table>
    <tr><th>Item</th><th class="n">Qtd</th><th class="n">Unit.</th><th class="n">Total</th></tr>
    <tr><td>Bloco concreto veda\xE7\xE3o 20\xD740</td><td class="n">100 pc</td><td class="n">R$ 3,29</td><td class="n">R$ 329,00</td></tr>
    <tr><td>Canaleta concreto 20\xD720\xD740</td><td class="n">5 pc</td><td class="n">R$ 4,05</td><td class="n">R$ 20,25</td></tr>
    <tr><td>Areia lavada branca</td><td class="n">1 m\xB3</td><td class="n">R$ 260,40</td><td class="n">R$ 260,40</td></tr>
    <tr><td>Pedra brita 01 \xB7 1/2</td><td class="n">1 m\xB3</td><td class="n">R$ 125,00</td><td class="n">R$ 125,00</td></tr>
    <tr><td>Vergalh\xE3o D 3/8 10,0 mm \xB7 barra 12 m</td><td class="n">2 pc</td><td class="n">R$ 58,80</td><td class="n">R$ 117,60</td></tr>
    <tr><td>Coluna 4F 3/8 14\xD714 <span class="tag">7 com 1,5 m</span></td><td class="n">10,5 ml</td><td class="n">R$ 31,50</td><td class="n">R$ 330,75</td></tr>
    <tr><td>Viga baldrame 4F 3/8 14\xD724</td><td class="n">5 m</td><td class="n">R$ 33,75</td><td class="n">R$ 168,75</td></tr>
    <tr><td>Viga baldrame 4F 3/8 14\xD724 <span class="tag">2 com 3,5 m</span></td><td class="n">7 m</td><td class="n">R$ 33,75</td><td class="n">R$ 236,25</td></tr>
    <tr><td>T\xE1bua pinus 30 cm \xB7 3,0 m</td><td class="n">4 pc</td><td class="n">R$ 41,25</td><td class="n">R$ 165,00</td></tr>
    <tr><td>Arame recozido torcidinho</td><td class="n">1 pc</td><td class="n">R$ 19,00</td><td class="n">R$ 19,00</td></tr>
    <tr><td>Cimento CPII 50 kg \xB7 com entrega</td><td class="n">10 pc</td><td class="n">R$ 39,90</td><td class="n">R$ 399,00</td></tr>
    <tr><td>Cal 15 kg CH-III Finacal</td><td class="n">5 pc</td><td class="n">R$ 15,40</td><td class="n">R$ 77,00</td></tr>
    <tr><td>Tijolo comum m\xE1quina</td><td class="n">100 pc</td><td class="n">R$ 0,52</td><td class="n">R$ 52,00</td></tr>
    <tr class="tot"><td>Total do material (lista)</td><td class="n">13 itens</td><td class="n">\u2014</td><td class="n"><b>R$ 2.300,00</b></td></tr>
    <tr class="tot"><td><b>\xC0 vista</b> \u2014 pre\xE7o negociado</td><td class="n"></td><td class="n"></td><td class="n"><b style="color:var(--ok)">R$ 2.185,00</b></td></tr>
  </table>
  <div class="note info"><b>\xDAnico ponto de execu\xE7\xE3o que sobra do muro: drenagem.</b> O aterro levanta a cota junto \xE0 divisa frontal \u2014 <b>trave com o pedreiro o caimento + um dreno na base</b> pra \xE1gua n\xE3o escorrer pro vizinho ou pro vi\xE1rio. N\xE3o \xE9 material desta lista, \xE9 defini\xE7\xE3o de obra. (A parte de anu\xEAncia do condom\xEDnio voc\xEA j\xE1 resolveu \u2014 fora do radar.)</div>
  <div class="note bad"><b>Drenagem \u2014 o aterro muda para onde a \xE1gua corre.</b> Estender a grama at\xE9 a divisa frontal com aterro levanta a cota do terreno ali. Se a \xE1gua passar a escorrer para o lote vizinho ou para o vi\xE1rio do condom\xEDnio, vira reclama\xE7\xE3o e poss\xEDvel obriga\xE7\xE3o de refazer. <b>Exigir do pedreiro o caimento e um dreno na base do muro</b> \u2014 n\xE3o \xE9 item de material desta lista, \xE9 defini\xE7\xE3o de execu\xE7\xE3o.</div>
  <div class="note good"><b>Not\xEDcia boa: os R$ 4.850 de m\xE3o de obra fecham um buraco que estava aberto no modelo.</b> O \xA77 registrava que a <b>instala\xE7\xE3o dos itens de banheiro estava em R$ 0</b> \u2014 "R$ 0 n\xE3o \xE9 uma estimativa". Agora tem dono: essa m\xE3o de obra instala os banheiros junto com o muro. <b>N\xE3o \xE9 100% dinheiro novo</b> \u2014 uma fatia dela j\xE1 era d\xEDvida impl\xEDcita; mas como o modelo carregava R$ 0, o total sobe pelos R$ 4.850 cheios.</div>
  <div class="note bad"><b>Mas o \xA77 continua valendo para o timing do banheiro.</b> Nem tudo pode ser instalado agora: o <b>kit de 5 pe\xE7as</b> (toalheiro, papeleira etc.) e a <b>torneira de bancada</b> dependem do gabinete e da bancada, que s\xF3 existem depois da marcenaria (~28/09+). Se o pedreiro instalar tudo em uma passada, ele vai chutar cota. <b>Divida:</b> ducha, registro, nicho e bacia/assento agora (posi\xE7\xE3o definida pelo ponto hidr\xE1ulico); kit de 5 pe\xE7as e torneira de bancada depois da marcenaria.</div>
  <div class="note info"><b>Dois n\xFAmeros a confirmar:</b> (1) <b>Como paga a m\xE3o de obra?</b> \xC0 vista, por medi\xE7\xE3o, parcelado? Lancei R$ 4.850 no parcelado com "condi\xE7\xE3o a confirmar" \u2014 se sair do colch\xE3o \xE0 vista, ela abate a reserva; se for dilu\xEDda na obra, entra no fluxo mensal. (2) <b>De onde saem os R$ 2.185 do material?</b> Se da conta corrente agora, o piso de agosto vai de R$ 38.186 para <b>~R$ 36.001</b> \u2014 segue confort\xE1vel. Se do CDB, n\xE3o toca o piso.</div>
  </div>
</section>
<!-- ============ 4. COOKTOP \u2192 PEDRA ============ -->
<section>
  <h3>4 \xB7 Cooktop \u2192 pedra da ilha \u2014 o item destravou</h3>
  <div class="note good"><b>Chamada direta: a compra do Black+Decker resolveu o gargalo n\xBA 1 do projeto, e resolveu melhor do que o caminho que eu tinha recomendado.</b> A rev. 6 recomendava o Fischer 4Q porque o manual dele publica o recorte (56 \xD7 49 cm) e o do B+D n\xE3o. Esse argumento morreu. Manual em PDF \xE9 um <i>substituto</i> da medida f\xEDsica; agora o aparelho f\xEDsico chega <b>18/08</b> e o or\xE7amento Feijor s\xF3 vence <b>26/08</b>. Voc\xEA ter\xE1 o cooktop na m\xE3o <b>6 dias \xFAteis antes do prazo</b>. N\xE3o vou defender a recomenda\xE7\xE3o antiga \u2014 os fatos mudaram a favor.</div>
  <h4>A jogada</h4>
  <ul>
    <li><b>N\xE3o mandar medida por WhatsApp.</b> Agendar a medi\xE7\xE3o da Feijor <b>no local</b>, para 19, 20 ou 21/08, com o cooktop f\xEDsico (ou o gabarito de papel\xE3o que vem na caixa) em cima da ilha.</li>
    <li><b>Exigir que a Feijor me\xE7a e registre o recorte no pedido.</b> Assim o corte vira responsabilidade da marmoraria, n\xE3o sua. Isso \xE9 o valor real de ter o aparelho em m\xE3os \u2014 transfere o risco.</li>
    <li>O or\xE7amento j\xE1 diz "sujeito a altera\xE7\xF5es ap\xF3s confirma\xE7\xE3o das medidas". Use isso a seu favor: a altera\xE7\xE3o agora \xE9 <i>medi\xE7\xE3o</i>, n\xE3o <i>renegocia\xE7\xE3o de pre\xE7o</i>.</li>
  </ul>
  <h4 style="margin-top:18px">Quando a pedra fica pronta (15 dias \xFAteis a partir da autoriza\xE7\xE3o)</h4>
  <table>
    <tr><th>Autoriza em</th><th>Pedra pronta</th><th>Leitura</th></tr>
    <tr><td>17/08 seg</td><td class="mono">08/09 ter</td><td>s\xF3 se a Feijor medir na segunda \u2014 improv\xE1vel, cooktop chega ter\xE7a</td></tr>
    <tr><td>18/08 ter</td><td class="mono">09/09 qua</td><td>cooktop chega no dia; medi\xE7\xE3o no mesmo dia \xE9 agressivo</td></tr>
    <tr><td><b>19/08 qua</b></td><td class="mono"><b>10/09 qui</b></td><td><span class="pill ok">ALVO</span> um dia de folga depois da chegada. \xC9 a data a perseguir.</td></tr>
    <tr><td>21/08 sex</td><td class="mono">14/09 seg</td><td>fim da semana que vem \u2014 ainda confort\xE1vel</td></tr>
    <tr><td>24/08 seg</td><td class="mono">15/09 ter</td><td>\xFAltima segunda antes de vencer</td></tr>
    <tr><td>26/08 qua</td><td class="mono">17/09 qui</td><td>no limite do or\xE7amento \u2014 sem margem para erro</td></tr>
  </table>
  <p style="color:var(--dim);font-size:14px">Adiar de 19/08 para 26/08 custa <b>7 dias na pedra</b> e queima 100% da margem de seguran\xE7a. N\xE3o h\xE1 ganho nenhum em esperar.</p>
  <div class="note bad"><b>Risco novo: o cooktop n\xE3o pode ser testado.</b> Ele exige circuito 220V exclusivo, disjuntor de <b>32 A</b> e cabo <b>6,0 mm\xB2</b> (NBR 5410) \u2014 que n\xE3o existem na casa hoje. O aparelho vai ficar meses na caixa enquanto as janelas do Mercado Livre correm (<b>7 dias</b> de arrependimento, <b>30 dias</b> de defeito aparente). Depois disso voc\xEA depende s\xF3 da garantia de 12 meses do fabricante.
  <br><br><b>Mitiga\xE7\xE3o:</b> se houver como energizar um ponto 220V provis\xF3rio com disjuntor adequado \u2014 na visita, ou logo que a Elektro instalar o medidor \u2014 vale ligar o cooktop por 10 minutos s\xF3 para confirmar que as 4 zonas acendem e aquecem. \xC9 o teste mais barato do projeto.</div>
  <div class="note"><b>Risco que continua de p\xE9:</b> Black+Decker linha branca no Brasil \xE9 <b>marca licenciada</b>, com rede de assist\xEAncia t\xE9cnica fraca para embutidos. Garantia 12 meses. Se o aparelho falhar e o modelo tiver sido descontinuado, o recorte do granito fica \xF3rf\xE3o \u2014 aparelho de ~R$ 1,3k contra pedra de R$ 5,0k. N\xE3o \xE9 motivo para trocar agora; \xE9 motivo para <b>guardar nota fiscal, embalagem e manual</b> e para n\xE3o perder as janelas de devolu\xE7\xE3o por descuido.</div>
  <h4 style="margin-top:18px">Restri\xE7\xF5es de instala\xE7\xE3o que batem na marcenaria</h4>
  <p style="color:var(--dim);font-size:14px">Do manual Fischer 4Q \u2014 valem para qualquer indu\xE7\xE3o de 4 bocas e continuam v\xE1lidas com o B+D:</p>
  <div class="grid g4">
    <div class="kpi"><span>abaixo do fundo</span><b>200 mm</b><small>livres \u2014 a gaveta sob a ilha precisa de divis\xF3ria. <b>Passar pra LYME e pra projetista.</b></small></div>
    <div class="kpi"><span>bancada lateral</span><b>120 mm</b><small>livres de cada lado do recorte</small></div>
    <div class="kpi"><span>atr\xE1s</span><b>50 mm</b><small>livres at\xE9 a parede/anteparo</small></div>
    <div class="kpi"><span>circuito</span><b>32 A \xB7 6 mm\xB2</b><small>exclusivo, aterrado, NBR 5410</small></div>
  </div>
</section>
<!-- ============ 5. FORNO ============ -->
<section>
  <h3>5 \xB7 Forno Midea TSD80P2 \u2014 o n\xFAmero que a projetista precisa</h3>
  <div class="note good"><b>Achado que vale a pesquisa:</b> os sites de varejo (Fastshop, marketplaces) publicam "nicho 595 \xD7 595 \xD7 575 mm" \u2014 que \xE9 <b>a medida externa do produto repetida</b>, e \xE9 fisicamente imposs\xEDvel (um v\xE3o n\xE3o pode ser mais raso que o aparelho). O manual de instala\xE7\xE3o do fabricante, fam\xEDlia TC-80P2 Rev.03, traz o v\xE3o de verdade. <b>Se a marcenaria for feita pelo n\xFAmero do varejo, o forno n\xE3o entra.</b></div>
  <table>
    <tr><th>Grandeza</th><th>Valor real (manual do fabricante)</th><th>O que o varejo publica</th></tr>
    <tr><td>Largura do v\xE3o</td><td><b>m\xEDn. 585 mm \xB7 m\xE1x. 595 mm</b></td><td class="n" style="color:var(--alert)">595 (medida externa)</td></tr>
    <tr><td>Altura do v\xE3o</td><td><b>m\xEDn. 590 mm</b> (600 mm em instala\xE7\xE3o sob bancada)</td><td class="n" style="color:var(--alert)">595 (medida externa)</td></tr>
    <tr><td>Profundidade do v\xE3o</td><td><b>m\xEDn. 550 mm</b></td><td class="n" style="color:var(--alert)">575</td></tr>
    <tr><td>Folga de recircula\xE7\xE3o de ar</td><td><b>m\xEDn. 35 mm</b> \u2014 e <b>35 cm</b> livres na face da sa\xEDda de ar</td><td class="n" style="color:var(--alert)">n\xE3o informado</td></tr>
    <tr><td>Produto (L \xD7 A \xD7 P)</td><td>59,5 \xD7 56,5 \xD7 59,5 cm \xB7 31,5 kg</td><td>ok</td></tr>
    <tr><td>Pot\xEAncia / corrente</td><td><b>2.750 W \xB7 ~12,5 A</b> \xB7 tomada exclusiva 20 A</td><td>ok</td></tr>
  </table>
  <h4 style="margin-top:16px">Regras de instala\xE7\xE3o que a marcenaria tem de obedecer</h4>
  <ul>
    <li><b>Nada de porta decorativa no nicho</b> \u2014 o manual pro\xEDbe expressamente, por superaquecimento.</li>
    <li><b>As paredes do forno n\xE3o podem encostar nas paredes do m\xF3vel.</b> A folga de 35 mm n\xE3o \xE9 sugest\xE3o.</li>
    <li>O m\xF3vel precisa <b>suportar 31,5 kg</b> mais o peso dos alimentos. Prateleira de MDF sem refor\xE7o n\xE3o serve.</li>
    <li>Fixa\xE7\xE3o com <b>2 parafusos de sustenta\xE7\xE3o</b> que v\xEAm no produto \u2014 o nicho tem de permitir o parafusamento.</li>
    <li><b>"Caso o forno seja instalado abaixo de um cooktop, utilize interliga\xE7\xF5es el\xE9tricas separadas."</b> Ou seja: cooktop e forno em <b>circuitos independentes</b>. N\xE3o pendurar os dois no mesmo disjuntor.</li>
  </ul>
  <div class="note bad"><b>A\xE7\xE3o com prazo:</b> o projeto dos planejados entrega em ~28/09 e a tabela da projetista cobra <b>R$ 70 por altera\xE7\xE3o de t\xE9cnico</b>. O nicho do forno tem de entrar <b>antes</b> do t\xE9cnico fechar \u2014 ou vira altera\xE7\xE3o paga, e altera\xE7\xE3o de nicho de forno costuma arrastar a torre inteira do m\xF3vel. Mandar pra ela: <b>v\xE3o 585\u2013595 L \xD7 590 A \xD7 550 P mm, + 35 mm de folga, sem porta decorativa, tomada exclusiva 20 A no fundo do nicho.</b></div>
</section>
<!-- ============ 6. LIGA\xC7\xD5ES ============ -->
<section>
  <h3>6 \xB7 Liga\xE7\xF5es de hoje \u2014 antes das 17h</h3>
  <p style="color:var(--dim);font-size:14px">N\xE3o \xE9 pesquisa. \xC9 telefone. O que n\xE3o sair hoje escorrega pra segunda 17/08 e come 3 dias do caminho cr\xEDtico de agosto (ITBI \u2192 protocolo \u2192 registro \u2192 libera\xE7\xE3o do FGTS \u2192 quita\xE7\xE3o).</p>
  <table>
    <tr><th style="width:150px">Para quem</th><th>Perguntar exatamente</th><th style="width:80px">Prioridade</th></tr>
    <tr><td><b>Destro</b><br><span class="tag">pedido 470049</span></td><td>Estorno de <b>12 caixas</b> de LVT Magnifique Sophie (c\xF3d. 46004) e acerto dos insumos. Confirmar: quanto ficou o valor final, a condi\xE7\xE3o de pagamento real, e se instala\xE7\xE3o + rodap\xE9 est\xE3o dentro ou fora. Avisar que <b>toda a carga vai pro pavimento superior</b>. Ver se\xE7\xE3o 8.</td><td><span class="pill no">HOJE</span></td></tr>
    <tr><td><b>Elektro</b><br><span class="tag">UC 49211331 \xB7 conclu\xEDdo 03/09</span></td><td><b>\u2713 RESOLVIDO</b> \u2014 liga\xE7\xE3o conclu\xEDda em 03/09/2026. Endere\xE7o reconciliado.</td><td><span class="pill ok">\u2713 FEITO</span></td></tr>
    <tr><td><b>Feijor</b><br><span class="tag">(11) 94005-2784</span></td><td>Agendar <b>medi\xE7\xE3o no local</b> para 19, 20 ou 21/08 \u2014 "o cooktop chega dia 18 e quero que voc\xEAs me\xE7am com ele em cima da ilha". Confirmar que o recorte fica registrado no pedido.</td><td><span class="pill warm">HOJE</span></td></tr>
    <tr><td><b>CAIXA</b></td><td>(1) O que exatamente \xE9 a taxa de R$ 4.000? (2) <b>Qual a data de validade da aprova\xE7\xE3o de cr\xE9dito?</b> Se faltar menos de 60 dias, tudo acelera.</td><td><span class="pill warm">HOJE</span></td></tr>
    <tr><td><b>Prefeitura de Atibaia</b><br><span class="tag">portal bloqueado por CloudFlare</span></td><td>(1) Al\xEDquota de ITBI e se h\xE1 <b>al\xEDquota reduzida sobre a parcela financiada pelo SFH</b>. (2) Qual base de c\xE1lculo ser\xE1 usada \u2014 <b>STJ Tema 1113 fixou que \xE9 o valor da transa\xE7\xE3o</b>, R$ 1.100.000, n\xE3o valor venal de refer\xEAncia. (3) Prazo de recolhimento da guia.</td><td><span class="pill warm">HOJE</span></td></tr>
    <tr><td><b>RI de Atibaia</b><br><span class="tag">CNS 12.048-5 \xB7 contato via Corregedoria TJSP</span></td><td>(1) Valor dos emolumentos para R$ 1.100.000. (2) <b>Confirmar o desconto de 50% do art. 290 da Lei 6.015/73</b> \u2014 primeira aquisi\xE7\xE3o, SFH, resid\xEAncia pr\xF3pria. <b>N\xE3o \xE9 autom\xE1tico: tem de ser pedido no protocolo.</b> (3) Prazo de registro e o que exigem no protocolo.</td><td><span class="pill warm">HOJE</span></td></tr>
    <tr><td><b>LYME \u2014 Cris</b><br><span class="tag">(11) 97289-3421</span></td><td><b>Assinada 17/08.</b> Cobrar: (1) <b>o 3\xBA box n\xE3o est\xE1 no contrato</b>; (2) item 5 saiu em alum\xEDnio <b>BRANCO</b> \u2014 a casa \xE9 toda preta, confirmar se \xE9 erro; (3) a cobertura \xE9 para pergolado de <b>madeira</b>, mas a foto da construtora mostra pergolado <b>met\xE1lico</b>; (4) agendar a medi\xE7\xE3o definitiva. Passar a restri\xE7\xE3o do cooktop: <b>200 mm livres sob o fundo</b>.</td><td><span class="pill warm">HOJE</span></td></tr>
  </table>
</section>
<!-- ============ 7. VISITA ============ -->
<section>
  <h3>7 \xB7 Protocolo da visita \u2014 fim de semana 15\u201316/08</h3>
  <div class="note info">Voc\xEA vai \xE0 casa no <b>s\xE1bado ou domingo</b>. Essa visita destranca 6 itens que hoje est\xE3o travados por falta de medida. Leve <b>trena laser, trena de fita, n\xEDvel de 2 m (ou n\xEDvel de bolha longo), b\xFAssola do celular, fita crepe e caneta</b>. <b>A fechadura N\xC3O vai estar aqui</b> \u2014 pacote extraviado, consulta aberta at\xE9 18/08. Ainda assim, <b>me\xE7a a porta</b>: espessura da folha e backset. Com a medida na m\xE3o voc\xEA recompra certo em vez de torcer.</div>
  <table>
    <tr><th style="width:150px">Medir</th><th>Como e por qu\xEA</th><th style="width:110px">Destrava</th></tr>
    <tr><td><b>\xC1rea do superior, c\xF4modo a c\xF4modo</b></td><td>Tr\xEAs medi\xE7\xF5es concorrem: Destro <b>57,15 m\xB2</b> \xB7 planta FL.01 <b>~48 m\xB2</b> \xB7 sua trena laser <b>41 m\xB2</b>. Medir de novo e anotar <b>separado por ambiente</b>, incluindo closet, circula\xE7\xE3o e o patamar da escada. <b>Decidir na hora: a escada leva LVT ou n\xE3o?</b> Isso sozinho move 3\u20136 m\xB2.</td><td>Estorno Destro (valor final)</td></tr>
    <tr><td><b>Nivelamento do contrapiso</b></td><td>R\xE9gua/n\xEDvel de 2 m em v\xE1rias dire\xE7\xF5es. Toler\xE2ncia <b>\u2264 3 mm em 2 m</b>. Onde passar disso, marcar com fita crepe. <b>Isto define quantos sacos de nivelador ficam</b> \u2014 hoje s\xE3o 20 sacos comprados contra \xE1rea inflada.</td><td>Estorno de insumos</td></tr>
    <tr><td><b>V\xE3o da geladeira</b></td><td>Medir largura em <b>tr\xEAs alturas</b> (rodap\xE9, meio, topo) \u2014 paredes de alvenaria n\xE3o s\xE3o paralelas. Anotar tamb\xE9m a profundidade \xFAtil e se a porta abre 90\xB0 sem bater.</td><td>Marcenaria + compra da geladeira</td></tr>
    <tr><td><b>Per\xEDmetro do rodap\xE9</b></td><td>Somar o per\xEDmetro real dos ambientes que levam LVT, descontando portas. O pedido tem 20 pe\xE7as \u2014 conferir se fecha.</td><td>Estorno Destro</td></tr>
    <tr><td><b>Orienta\xE7\xE3o solar com b\xFAssola</b></td><td>A rev. 6 registra que estar/cozinha estariam voltados a <b>norte</b>, mas isso ainda <b>n\xE3o foi confirmado no local</b>. Abrir a b\xFAssola do celular no meio da sala e fotografar. Define material das lumin\xE1rias externas (alum\xEDnio, nunca PVC, na face noroeste) e carga t\xE9rmica dos ACs.</td><td>Ilumina\xE7\xE3o + valida\xE7\xE3o do AC</td></tr>
    <tr><td><b>Espa\xE7o da 4\xAA condensadora</b></td><td>Conferir onde vai a condensadora do 24k na cobertura/laje, e se h\xE1 caminho de dreno e de tubula\xE7\xE3o. 4 aparelhos j\xE1 foram fechados.</td><td>Instala\xE7\xE3o do AC</td></tr>
    <tr><td><b>Porta de entrada</b><br><span class="pill ok">RESOLVIDO 8.2</span></td><td>Medir <b>espessura da folha</b>, dist\xE2ncia da borda at\xE9 o centro da fura\xE7\xE3o (backset), e a fura\xE7\xE3o existente. Porta \xE9 <b>madeira maci\xE7a ripada</b> \u2014 furo novo em maci\xE7a \xE9 irrevers\xEDvel. Testar tamb\xE9m <b>se tem sinal de WiFi na porta</b> (a casa ainda n\xE3o tem internet \u2014 vale usar o celular como roteador para simular). <b>Guardar a fechadura original.</b> E <b>conferir a m\xE3o</b>: foi comprada como "dire\xE7\xE3o direita" \u2014 se a porta abrir para o outro lado, \xE9 troca, n\xE3o ajuste. Diferente do cooktop, essa voc\xEA <b>consegue</b> verificar neste fim de semana, dentro do prazo do ML. Instalador or\xE7ado em R$ 250.</td><td>Instala\xE7\xE3o da fechadura</td></tr>
    <tr><td><b>Torre do forno</b><br><span class="pill new">NOVO</span></td><td>Definir <b>onde</b> o forno vai. Precisa de v\xE3o de <b>585\u2013595 \xD7 590 \xD7 550 mm + 35 mm</b>, tomada exclusiva 20 A no fundo, e 35 cm livres na face da sa\xEDda de ar. Marcar a posi\xE7\xE3o com fita no piso e fotografar.</td><td>Projeto de marcenaria</td></tr>
  </table>
  <div class="note">Foto de tudo, com a trena aparecendo no quadro. Medida sem foto vira discuss\xE3o daqui a tr\xEAs semanas.</div>
</section>
<!-- ============ 8. DESTRO ============ -->
<section>
  <h3>8 \xB7 Piso do superior \u2014 pedido Destro 470049</h3>
  <p style="color:var(--dim);font-size:14px">Emitido 13/08/2026 14:43 \xB7 vendedor Gildailton \xB7 <b>entrega prevista 01/09/2026</b></p>
  <table>
    <tr><th>Item</th><th>C\xF3d.</th><th class="n">Qtd</th><th class="n">Unit.</th><th class="n">Total</th></tr>
    <tr><td>PS LVT Arquit Magnifique Sophie 2 mm 18,4\xD7122</td><td>46004</td><td class="n">62,860 m\xB2</td><td class="n">R$ 126,90</td><td class="n">R$ 7.976,93</td></tr>
    <tr><td>Nivela R\xE1pido Cinza 20 kg Quartzolit</td><td>15465</td><td class="n">20 sc</td><td class="n">R$ 111,51</td><td class="n">R$ 2.230,14</td></tr>
    <tr><td>Primer Flex 3,6 L Quartzolit</td><td>47113</td><td class="n">2 gl</td><td class="n">R$ 148,71</td><td class="n">R$ 297,41</td></tr>
    <tr class="tot"><td colspan="4">Subtotal vis\xEDvel na foto do pedido</td><td class="n">R$ 10.504,48</td></tr>
<tr class="tot"><td colspan="4">Instala\xE7\xE3o + rodap\xE9 20 p\xE7s (abaixo da dobra) <span class="pill new">8.0</span></td><td class="n">R$ 2.359,84</td></tr>
<tr class="tot"><td colspan="4"><b>TOTAL DO PEDIDO \u2014 confirmado pelo Lucas</b> <span class="pill new">8.0</span></td><td class="n"><b>R$ 12.864,32</b></td></tr>
  </table>
  <h4 style="margin-top:16px">O problema: tr\xEAs \xE1reas concorrentes</h4>
  <div class="grid g3">
    <div class="kpi"><span>Destro faturou</span><b style="color:var(--alert)">57,15 m\xB2</b><small>base do pedido \u2014 e dos insumos</small></div>
    <div class="kpi"><span>Planta FL.01</span><b>~48 m\xB2</b><small>projeto executivo</small></div>
    <div class="kpi"><span>Sua trena laser</span><b style="color:var(--ok)">41 m\xB2</b><small>medi\xE7\xE3o no local</small></div>
  </div>
  <p style="color:var(--dim);font-size:14px;margin-top:10px">Com 10% de perda sobre 41 m\xB2 reais \u2192 <b>~45 m\xB2</b> de necessidade. Foram faturados 62,86 m\xB2. Sobra de ~18 m\xB2.</p>
  <div class="note"><b>Regra que n\xE3o pode ser esquecida na liga\xE7\xE3o:</b> a r\xE9gua \xE9 0,184 \xD7 1,22 = <b>0,2245 m\xB2</b>; a caixa tem 20 r\xE9guas = <b>4,4896 m\xB2</b>. <b>O estorno tem de ser pedido em CAIXAS, nunca em m\xB2.</b> Pedir "estornar 18 m\xB2" gera confus\xE3o e provavelmente recusa.</div>
  <table>
    <tr><th>Cen\xE1rio</th><th class="n">Estorno</th><th class="n">Sobra sobre 45 m\xB2</th><th>Leitura</th></tr>
    <tr><td>10 caixas</td><td class="n">R$ 2.279,63</td><td class="n">\u22120,0 m\xB2</td><td><span class="pill no">N\xC3O</span> zera a margem de perda</td></tr>
    <tr><td>11 caixas</td><td class="n">R$ 1.709,90</td><td class="n">~4,5 m\xB2</td><td>piso m\xEDnimo defens\xE1vel</td></tr>
    <tr><td><b>12 caixas</b></td><td class="n"><b>R$ 1.140,17</b></td><td class="n">~9,0 m\xB2</td><td><span class="pill ok">RECOMENDADO</span> margem de erro + reposi\xE7\xE3o futura</td></tr>
    <tr><td>13 caixas</td><td class="n">R$ 570,44</td><td class="n">~13,5 m\xB2</td><td>conservador demais, dinheiro parado</td></tr>
  </table>
  <h4 style="margin-top:16px">Insumos \u2014 recalculados contra 43 m\xB2 (41 medidos + margem)</h4>
  <table>
    <tr><th>Insumo</th><th>Consumo do fabricante</th><th class="n">Necess\xE1rio</th><th class="n">No pedido</th><th>A\xE7\xE3o</th></tr>
    <tr><td>Nivela R\xE1pido</td><td>1,7 kg/m\xB2/mm \xB7 camada de <b>1 a 10 mm</b></td><td class="n">15\u201316 sc</td><td class="n">20 sc</td><td><span class="pill warm">estornar 4\u20135</span> \u2192 R$ 446\u2013557</td></tr>
    <tr><td>Primer Flex</td><td><b>~18 m\xB2 por gal\xE3o</b></td><td class="n">3 gl</td><td class="n">2 gl</td><td><span class="pill no">FALTA 1</span> \u2192 +R$ 148,71</td></tr>
    <tr><td>Cola para LVT</td><td>0,25\u20130,30 kg/m\xB2 \xB7 balde 18 kg cobre 60\u201372 m\xB2</td><td class="n">1 balde</td><td class="n">n\xE3o vis\xEDvel</td><td><span class="pill no">CONFERIR</span> se est\xE1 no pedido</td></tr>
  </table>
  <div class="note good"><b>Corre\xE7\xF5es que eu mesmo devo \xE0 rev. 5:</b> (1) eu tinha escrito que o autonivelante exige camada <b>m\xEDnima de 3 mm</b> \u2014 o Boletim T\xE9cnico diz <b>1 a 10 mm</b>; (2) eu tinha escrito que 2 gal\xF5es de primer cobriam ~48 m\xB2, usando 0,15 L/m\xB2 de mem\xF3ria \u2014 o fabricante publica <b>18 m\xB2/gal\xE3o</b>, ent\xE3o 2 gal\xF5es cobrem 36 m\xB2 e <b>n\xE3o fecham</b> nem os 41 m\xB2 medidos; (3) eu tinha escrito que no nivelador "n\xE3o se mexe" \u2014 errado, \xE9 consumo por m\xB2 e a Destro dimensionou 20 sacos contra a pr\xF3pria \xE1rea inflada.</div>
  <div class="note bad"><b>Duas armadilhas do pedido:</b><br>
  (1) Est\xE1 impresso: <b>"n\xE3o subimos e n\xE3o descemos escadas, dist\xE2ncia m\xE1xima de 30 metros"</b>. <b>Toda a carga vai pro pavimento superior</b> \u2014 62,86 m\xB2 de LVT + 20 sacos de 20 kg (400 kg s\xF3 de nivelador). I\xE7amento/subida <b>n\xE3o est\xE1 or\xE7ado</b>. Combinar isso na liga\xE7\xE3o de hoje.<br>
  (2) O LVT \xE9 <b>colado de 2 mm</b>, n\xE3o click de 5 mm. Consequ\xEAncias: o <b>contrapiso vira caminho cr\xEDtico</b> (imperfei\xE7\xE3o de contrapiso aparece no acabamento colado) e <b>n\xE3o h\xE1 manta ac\xFAstica</b> \u2014 piso superior sobre laje, sem nenhum amortecimento de ru\xEDdo de impacto. Se isso incomodar, a hora de decidir \xE9 agora, n\xE3o depois de colado.</div>
  <div class="note good"><b>RESOLVIDO \u2014 estorno confirmado: R$ 3.168,30.</b> Cr\xE9dito no cart\xE3o, <b>parcelas mantidas cheias</b>. A tabela de cen\xE1rios acima virou hist\xF3rico: o valor confirmado \xE9 <b>R$ 2.028,13 maior</b> que o cen\xE1rio "12 caixas" que eu recomendava (R$ 1.140,17).</div>
<div class="note good"><b>CORRE\xC7\xC3O 8.0 \u2014 eu estava usando a base errada.</b> Eu vinha calculando sobre os R$ 10.504,48 que apareciam na foto do pedido. O <b>pedido cheio \xE9 R$ 12.864,32</b> \u2014 a diferen\xE7a de <b>R$ 2.359,84</b> \xE9 a instala\xE7\xE3o e as 20 pe\xE7as de rodap\xE9, que ficaram abaixo da dobra. L\xEDquido correto do piso: <b>R$ 12.864,32 \u2212 R$ 3.168,30 = R$ 9.696,02</b>. S\xE3o <b>R$ 2.359,84 a mais</b> no or\xE7amento do que a rev. 7.9 mostrava.</div>
  <div class="note bad"><b>Mas R$ 3.168,30 n\xE3o fecha em n\xFAmero redondo de caixas</b> \u2014 a caixa sai ~R$ 570, e 3.168,30 \xF7 570 = <b>5,56 caixas</b>. Logo o cr\xE9dito <b>mistura caixas e insumos</b>. A decomposi\xE7\xE3o que fecha quase exata:<br>
  <b>4 caixas (R$ 2.279,63) + 8 sacos de Nivela R\xE1pido (R$ 891,60) = R$ 3.171,23</b> \u2014 a R$ 2,93 do valor creditado.<br>
  <b>Se for isso, h\xE1 dois problemas de quantidade:</b><br>
  (1) sobram <b>10 caixas = 44,896 m\xB2</b> contra <b>~45 m\xB2</b> de necessidade. Margem <b>zero</b> \u2014 e \xE9 LVT <b>colado</b>, onde recorte de canto e perda de sarrafeamento s\xE3o reais. Sem caixa de reposi\xE7\xE3o para dano futuro.<br>
  (2) sobram <b>12 sacos</b> de nivelador contra os <b>15\u201316</b> calculados para 43 m\xB2. <b>Faltariam 3\u20134 sacos.</b><br>
  <b>Pedir \xE0 Destro a discrimina\xE7\xE3o linha a linha do cr\xE9dito antes de aceitar.</b> Se a leitura acima se confirmar, o caminho \xE9 recompor 1 caixa e 3\u20134 sacos \u2014 n\xE3o brigar com o cr\xE9dito, que \xE9 bom.</div>
  <div class="note"><b>O formato do estorno \xE9 favor\xE1vel e vale entender por qu\xEA.</b> Manter as parcelas cheias e creditar o valor de uma vez significa que voc\xEA <b>recebe R$ 3.168,30 agora</b> e devolve dilu\xEDdo em 12 meses sem juros. Dinheiro na m\xE3o hoje vale mais que a mesma quantia espalhada \u2014 se a compra \xE9 realmente sem juros, esse arranjo \xE9 <b>melhor</b> para voc\xEA do que reduzir o valor das parcelas. Nada a renegociar aqui.</div>
  <div class="note bad"><b>A parcela mensal sobe \u2014 e isso mexe no fluxo inteiro.</b> Com as parcelas mantidas cheias, a mensalidade corre sobre o <b>pedido cheio de R$ 12.864,32</b>, n\xE3o sobre os R$ 10.504,48 que eu usava. Em 12\xD7, d\xE1 <b>R$ 1.072,03/m\xEAs</b> contra os <b>R$ 875,37</b> que est\xE3o dentro da grade de 12 meses \u2014 <b>R$ 196,66 a mais por m\xEAs</b>. Aplicado \xE0 grade: set/26 cai de +4.087 para <b>+3.890</b>, nov/26 de \u22127.741 para <b>\u22127.938</b>, e as parcelas de set/26 v\xE3o de R$ 15.674 para <b>R$ 15.871</b> contra o teto de R$ 15.000 que voc\xEA definiu. <b>Isso s\xF3 est\xE1 travado quando voc\xEA confirmar o n\xFAmero de parcelas</b> \u2014 se for 10\xD7 a parcela \xE9 R$ 1.286,43, se for 12\xD7 \xE9 R$ 1.072,03. \xC9 a pend\xEAncia de maior impacto no fluxo hoje.</div>
</section>
<!-- ============ 9. CARGA EL\xC9TRICA ============ -->
<section>
  <h3>9 \xB7 Or\xE7amento de carga el\xE9trica \u2014 teto de 50 A da Conven\xE7\xE3o</h3>
  <p style="color:var(--dim);font-size:14px">Correntes em 220V. Casa trif\xE1sica: as cargas grandes se distribuem entre fases, e o <b>balanceamento \xE9 projeto</b>, n\xE3o improviso do eletricista na obra.</p>
  <table>
    <tr><th>Carga</th><th class="n">Pot\xEAncia</th><th class="n">Corrente</th><th>Circuito</th></tr>
    <tr><td><b>Cooktop indu\xE7\xE3o B+D</b> <span class="pill new">CONFIRMADO</span></td><td class="n">7.200 W</td><td class="n"><b>32,7 A</b></td><td>exclusivo \xB7 disjuntor 32 A \xB7 cabo 6,0 mm\xB2</td></tr>
    <tr><td><b>Forno Midea TSD80P2</b> <span class="pill new">CONFIRMADO</span></td><td class="n">2.750 W</td><td class="n"><b>12,5 A</b></td><td>tomada exclusiva 20 A \xB7 cabo 2,5 mm\xB2</td></tr>
    <tr><td>Split 24.000 BTU</td><td class="n">~2.600 W</td><td class="n">~11,8 A</td><td>exclusivo</td></tr>
    <tr><td>Split 12.000 BTU</td><td class="n">~1.300 W</td><td class="n">~5,9 A</td><td>exclusivo</td></tr>
    <tr><td>2\xD7 Split 9.000 BTU</td><td class="n">~2.000 W</td><td class="n">~9,1 A</td><td>exclusivos</td></tr>
    <tr><td>Apoio el\xE9trico do boiler solar</td><td class="n">a confirmar c/ EcoSol</td><td class="n">\u2014</td><td>exclusivo</td></tr>
    <tr><td>Tomadas, ilumina\xE7\xE3o, lavanderia</td><td class="n">\u2014</td><td class="n">\u2014</td><td>circuitos gerais</td></tr>
  </table>
  <div class="note bad"><b>Cooktop + forno sozinhos somam 45,2 A.</b> Contra um teto de 50 A por unidade, isso \xE9 praticamente toda a cota se ca\xEDrem na mesma fase. Trif\xE1sico resolve \u2014 <b>desde que estejam em fases diferentes</b>. E o pr\xF3prio manual do forno manda: <i>"caso o forno seja instalado abaixo de um cooktop, utilize interliga\xE7\xF5es el\xE9tricas separadas."</i> Passar isso ao eletricista <b>por escrito</b>, junto com o projeto de balanceamento de fases.</div>
  <div class="note good"><b>Boa not\xEDcia pequena:</b> a rev. 6 carregava o forno numa estimativa gen\xE9rica de ~3.000 W / 13,6 A. O n\xFAmero real \xE9 <b>2.750 W / 12,5 A</b> \u2014 libera ~1,1 A no or\xE7amento de carga.</div>
</section>
<!-- ============ 10. ITBI ============ -->
<section>
  <h3>10 \xB7 ITBI, registro e custos de fechamento <span class="pill new">8.6</span></h3>
  <p><b>Ordem processual:</b> contrato \u2192 ITBI \u2192 protocolo no RI \u2192 registro \u2192 libera\xE7\xE3o do FGTS \u2192 quita\xE7\xE3o. Nada pula a fila. <b>Contrato assinado \u2014 os n\xFAmeros pararam de ser estimativa.</b></p>
  <div class="note good"><b>Fechado com a Mieko/Erika (26/08): documenta\xE7\xE3o = R$ 26.340 (2,40% sobre a compra e venda), como 1\xBA im\xF3vel pelo SFH.</b> Emolumentos que voc\xEA paga na escritura. \xC9 o real, n\xE3o a minha estimativa de R$ 33.000 \u2014 e veio <b>abaixo</b> na parte de cart\xF3rio.</div>
  <table>
    <tr><th>Custo</th><th class="n">%</th><th class="n">Valor</th><th>O que cobre</th></tr>
    <tr><td><b>ITBI</b></td><td class="n">1,8%</td><td class="n">R$ 19.840</td><td>c\xE1lculo, guia e pagamento do imposto de transmiss\xE3o</td></tr>
    <tr><td><b>Registro / certid\xF5es / matr\xEDcula</b></td><td class="n">0,51%</td><td class="n">R$ 5.630</td><td>certid\xE3o de inteiro teor, emolumentos do RI, notas devolutivas, entrega das vias</td></tr>
    <tr><td><b>Dilig\xEAncias / assessoria</b></td><td class="n">0,07%</td><td class="n">R$ 870</td><td>certid\xF5es pessoais, CND de IPTU, digitaliza\xE7\xE3o, certificadora</td></tr>
    <tr class="tot"><td><b>Documenta\xE7\xE3o (na escritura)</b></td><td class="n">2,40%</td><td class="n"><b>R$ 26.340</b></td><td>a pagar no ato</td></tr>
  </table>
  <table style="margin-top:14px">
    <tr><th>CAIXA + FGTS</th><th class="n">Valor</th><th>Status</th></tr>
    <tr><td>Emiss\xE3o do contrato + relacionamento + seguro CAIXA</td><td class="n">R$ 4.000</td><td><span class="pill ok">PAGO</span></td></tr>
    <tr><td>Custo sobre o saque do FGTS <span class="tag">inclui R$ 2.500 de IR j\xE1 pago</span></td><td class="n">R$ 6.500</td><td><span class="pill ok">PAGO</span></td></tr>
    <tr class="tot"><td>Total CAIXA/FGTS <span class="tag" style="font-weight:400">R$ 2.500 IR antes + R$ 8.000 quitados hoje 26/08</span></td><td class="n"><b>R$ 10.500</b></td><td><span class="pill ok">QUITADO</span></td></tr>
  </table>
  <div class="grid g3" style="margin-top:14px">
    <div class="kpi"><span>Documenta\xE7\xE3o</span><b>R$ 26.340</b><small>na escritura</small></div>
    <div class="kpi"><span>CAIXA + FGTS</span><b style="color:var(--ok)">R$ 10.500</b><small>j\xE1 quitado (26/08)</small></div>
    <div class="kpi"><span>Fechamento total</span><b style="color:var(--warm)">R$ 36.840</b><small>era estimativa de R$ 33.000 \xB7 <b>+R$ 3.840</b></small></div>
  </div>
  <ul style="margin-top:14px">
    <li><b>Valor financiado:</b> R$ 144.000 (o contrato arredondou os R$ 143.966,50 do modelo).</li>
    <li><b>Base do ITBI:</b> o STJ (Tema 1113) fixou que \xE9 o <b>valor da transa\xE7\xE3o</b> \u2014 R$ 1.100.000. Os R$ 19.840 (1,8%) j\xE1 sa\xEDram <b>abaixo</b> dos 2% que voc\xEA temia; o desconto SFH foi aplicado.</li>
    <li><b>Registro veio barato</b> (0,51%): o desconto de 50% de emolumentos do SFH (art. 290 da Lei 6.015/73) entrou \u2014 era o que eu apontava como superestimado, e confirmou.</li>
    <li><b>A "taxa CAIXA" que estava sem identifica\xE7\xE3o</b> era isto: R$ 4.000 de emiss\xE3o/relacionamento/seguro + o custo do saque do FGTS. Resolvido.</li>
  </ul>
</section>
<!-- ============ 11. OR\xC7AMENTO ============ -->
<section>
  <h3>11 \xB7 Or\xE7amento consolidado \u2014 rev. 7</h3>
  <h4>\xC0 vista \u2014 sai da liquidez</h4>
  <table>
    <tr><th>Item</th><th class="n">Valor</th></tr>
    <tr><td>Saldo do im\xF3vel <span class="pill new">8.3</span><br><span class="tag">\u2212R$ 30.000 pago a Rodrigo 24/08 \xB7 remanescente R$ 181.034</span></td><td class="n">R$ 211.034</td></tr>
    <tr><td>Documenta\xE7\xE3o \u2014 ITBI + registro + dilig\xEAncias <span class="pill new">9.1</span><br><span class="tag">PAGO 31/08 \xB7 Pix R$ 26.340 \u2192 Meta Neg\xF3cios Financeiros (BTG)</span></td><td class="n">R$ 26.340</td></tr>
    <tr><td>CAIXA + FGTS \u2014 emiss\xE3o do contrato + saque <span class="pill new">8.6</span><br><span class="tag">PAGO 26/08 (R$ 8.000 hoje + R$ 2.500 IR antes)</span></td><td class="n">R$ 10.500</td></tr>
    <tr><td>Projeto dos planejados \u2014 2\xAA parcela</td><td class="n">R$ 2.500</td></tr>
    <tr><td>LYME \u2014 entrada Pix (contrato 1412) <span class="pill new">7.5</span></td><td class="n">R$ 15.420</td></tr>
    <tr><td><b>Geladeira Electrolux IM8IS</b> \u2014 PIX (Tudo B\xF4nus #89109) <span class="pill new">9.0</span><br><span class="tag">PAGO \xE0 vista \xB7 ago/26</span></td><td class="n">R$ 4.588</td></tr>
    <tr><td><b>AC \u2014 instala\xE7\xE3o (com adicional material)</b> <span class="pill new">10.3</span><br><span class="tag">PAGO 31/08 \xB7 Pix</span></td><td class="n">R$ 3.247</td></tr>
    <tr><td><b>Eletricista Adelco</b> \u2014 m\xE3o de obra completa <span class="pill new">10.4</span><br><span class="tag">arandelas + banheiros \xB7 PAGO 05/09</span></td><td class="n">R$ 3.500</td></tr>
    <tr class="tot"><td>Total \xE0 vista <span class="tag" style="font-weight:400">custo \u2014 R$ 477.129 j\xE1 pago (im\xF3vel R$ 411.034 + demais R$ 66.095) \xB7 R$ 2.500 a pagar (MO deck Elson 2/2 pendente)</span></td><td class="n">R$ 481.129</td></tr>
  </table>
  <div class="note good"><b>R$ 30.000 amortizados ao Rodrigo hoje (24/08) \u2014 e \xE9 uma jogada neutra pro seu colch\xE3o.</b> O saldo do im\xF3vel cai de R$ 211.034 para <b>R$ 181.034</b>, mas o dinheiro saiu do <b>CDB</b> (o fundo de quita\xE7\xE3o D+0, premissa declarada \u2014 <b>confirmar a origem</b>), que j\xE1 estava carimbado pra isso. Como a liquidez e a d\xEDvida caem <b>o mesmo valor</b>, a <b>reserva p\xF3s-\xE0-vista continua R$ 22.564</b>. O <b>custo total do projeto n\xE3o muda</b> (R$ 406.634) \u2014 R$ 30k \xE9 pagamento, n\xE3o desconto. <b>Dois pontos:</b> (1) se por acaso saiu da <b>conta corrente</b> e n\xE3o do CDB, o piso de agosto de R$ 38.186 despenca pra ~R$ 8k \u2014 por isso a origem importa; (2) antecipar pagamento ao vendedor antes do registro tira R$ 30k da sua m\xE3o antes da transfer\xEAncia estar conclu\xEDda e abre m\xE3o de ~R$ 300/m\xEAs de rendimento no CDB \u2014 trade-off pequeno e aceit\xE1vel se for sinal/boa-f\xE9 contratada, mas \xE9 bom ter dito.</div>
  <div class="grid g3" style="margin-top:12px">
    <div class="kpi"><span>Liquidez total <span class="pill new">8.6</span></span><b>R$ 246.518</b><small>R$ 254.518 <b>\u2212R$ 8.000</b> do saldo FGTS/contrato pago hoje (26/08). Antes j\xE1 havia ca\xEDdo de R$ 284.518 pelos R$ 30.000 do Rodrigo (CDB). Composi\xE7\xE3o: conta + EQI + CDB.</small></div>
    <div class="kpi"><span>Reserva p\xF3s-\xE0-vista <span class="pill new">8.6</span></span><b style="color:var(--warm)">R$ 19.039</b><small>era R$ 20.379 \xB7 <b>\u2212R$ 1.340</b>: o fechamento real (R$ 36.840) veio R$ 3.840 acima da estimativa, dos quais R$ 2.500 (IR) j\xE1 eram pr\xE9-pagos \u2192 l\xEDquido no colch\xE3o \u2212R$ 1.340. Contra R$ 2.000\u20135.000 n\xE3o or\xE7ados <b>+ R$ 4.850 do muro se sa\xEDrem do colch\xE3o</b>, o piso real fica em <b>~R$ 9,2\u201312,2k</b>.</small></div>
    <div class="kpi"><span>J\xE1 comprometido em conta <span class="pill new">7.7</span></span><b style="color:var(--alert)">R$ 15.500</b><small>cart\xE3o <b>BRB R$ 12.000</b> (20/08) + <b>BTG R$ 3.500</b> (01/09 \u2014 cai em setembro, n\xE3o em agosto)</small></div>
  </div>
  <h4 style="margin-top:22px">Parcelado</h4>
  <table>
    <tr><th>Item</th><th class="n">Valor</th><th>Condi\xE7\xE3o</th><th style="width:70px"></th></tr>
    <tr><td><b>Planejados cozinha</b> \u2014 FECHADO <span class="pill new">10.18</span>: Franklin montagem + Tino corte+fitagem + Leo Madeiras material</td><td class="n">R$ 10.022</td><td>Franklin \xE0 vista pago \xB7 Tino 6\xD7 R$ 558,50 \xB7 Leo 10\xD7 R$ 387,10</td><td><span class="pill ok">\u2713 TUDO FECHADO</span></td></tr>
    <tr><td>Esquadrias + 2 boxes \u2014 LYME <span class="tag">contrato 1412</span></td><td class="n">R$ 15.420</td><td>5\xD7 R$ 3.084 \xB7 <b>CART\xC3O</b>, n\xE3o boleto</td><td><span class="pill ok">assinado 17/08</span></td></tr>
    <tr><td>Boiler solar \u2014 EcoSol</td><td class="n">R$ 18.390</td><td>8\xD7 R$ 2.298,75 \xB7 boleto dia 15 \xB7 15/08/26 a 15/03/27</td><td><span class="pill ok">fechado</span></td></tr>
    <tr><td><b>Lumin\xE1rias (Visa 0700)</b> <span class="pill new">10.4</span></td><td class="n">R$ 1.370</td><td>l\xEDquidas da devolu\xE7\xE3o do kit 8\xD7 spots (\xA73E) \xB7 1\xD7 R$ 1.046 + 9\xD7 R$ 51 \xB7 <b>eletricista MOVIDO pra \xE0 vista</b> (Adelco R$ 3.500)</td><td><span class="pill ok">\u25D0 em curso</span></td></tr>
    <tr><td>AC \u2014 4 aparelhos</td><td class="n">R$ 10.256,68</td><td>8\xD7 R$ 1.282,09</td><td><span class="pill ok">fechado</span></td></tr>
    <tr><td><b>Piso LVT \u2014 Destro, pedido 470049</b> <span class="pill new">10.1</span></td><td class="n"><b>R$ 9.696</b></td><td>pedido cheio R$ 12.864,32 \u2212 estorno R$ 3.168,30 \xB7 ~R$ 1.072/m\xEAs em 12\xD7 \xB7 <b>ENTREGUE. Nivelamento 04/09, instala\xE7\xE3o 08/09.</b></td><td><span class="pill ok">em execu\xE7\xE3o</span></td></tr>
    <tr><td><b>Nivelante do piso</b> \u2014 requerido pelo instalador <span class="pill new">9.4</span><br><span class="tag">o \xA712b temia R$ 2.000\u20133.500; veio R$ 509 (75% abaixo)</span></td><td class="n">R$ 509</td><td>8\xD7 R$ 64 cart\xE3o</td><td><span class="pill ok">comprado 02/09</span></td></tr>
    <tr><td>Pedra da ilha \u2014 Feijor <span class="pill new">8.6</span></td><td class="n">R$ 5.040</td><td>8\xD7 R$ 630 no cart\xE3o</td><td><span class="pill ok">PAGO 26/08</span></td></tr>
    <tr><td><b>Eletros embutidos + fechadura + instala\xE7\xE3o</b> <span class="pill ok">7.4</span></td><td class="n"><b>R$ 3.359</b></td><td>cooktop <b>R$ 999,90</b> (Pix+saldo) + forno <b>R$ 1.780</b> + fechadura <b>R$ 328,98</b> + instala\xE7\xE3o R$ 250 (est.)</td><td><span class="pill ok">3 de 3</span></td></tr>
    <tr><td><b>Banheiros \u2014 duchas + acess\xF3rios</b> <span class="pill new">7.4</span></td><td class="n"><b>R$ 1.781</b></td><td>1\xD7 no cart\xE3o \xB7 3 duchas + 3 kits + 3 porta-shampoo \xB7 <b>R$ 288 de prov\xE1vel frete</b></td><td><span class="pill ok">pago</span></td></tr>
    <tr><td><b>Assentos sanit\xE1rios</b> \u2014 ML 2000014630727711 <span class="pill new">7.9</span></td><td class="n"><b>R$ 737</b></td><td>3 Art Incepa + 1 Boss Incepa \xB7 R$ 661,01 no Visa + R$ 75,99 de saldo ML</td><td><span class="pill ok">pago</span></td></tr>
    <tr><td><b>Cama/dormit\xF3rio \u2014 Zidi</b> <span class="tag">order 2000014800097849</span> <span class="pill new">10.1</span></td><td class="n"><b>R$ 4.914</b></td><td>colch\xE3o King Alabama + Queen Miami + base ba\xFA King + ba\xFA Queen \xB7 1\xD7 R$ 1.058,78 + 10\xD7 R$ 385,50 Master 6369 \xB7 <b>2 COLCH\xD5ES CHEGARAM. Bases ba\xFA pendentes.</b></td><td><span class="pill ok">parcial \u2713</span></td></tr>
    <tr><td><b>Deck cumaru \u2014 material</b> <span class="pill new">10.11</span></td><td class="n"><b>R$ 9.445</b></td><td>Par\xE1 Brazzil pedido 19785 \xB7 7\xD7 R$ 1.349 \xB7 <b>BTG Ultra Blue</b></td><td><span class="pill ok">PAGO 03/09</span></td></tr>
    <tr><td><b>Cortinas \u2014 pacote completo</b> <span class="pill new">10.6</span><br><span class="tag">2 sala Wave Gaze cinza + 3 quartos Voil branco + escrit\xF3rio Blackout gelo</span></td><td class="n"><b>R$ 6.725</b></td><td>6\xD7 R$ 1.121 \xB7 cart\xE3o \xB7 trilhos su\xEDssos com aba, instala\xE7\xE3o parede</td><td><span class="pill ok">fechado</span></td></tr>
    <tr><td><b>Spa Infl\xE1vel Ofur\xF4 Rome 1180L</b> \u2014 Bestway <span class="pill new">10.6</span><br><span class="tag">order #2000018446192532 \xB7 220V \xB7 entrega 18\u201319/09</span></td><td class="n"><b>R$ 6.780</b></td><td>R$ 8.990 \u2212 R$ 2.210 desc. \xE0 vista \xB7 10\xD7 R$ 678,03 \xB7 Master 3619</td><td><span class="pill ok">comprado 13/09</span></td></tr>
    <tr><td><b>Carrinho ML</b> \u2014 4 produtos <span class="pill new">10.6</span><br><span class="tag">order #2000015010800051 \xB7 3 vendedores</span></td><td class="n"><b>R$ 1.864</b></td><td>Cadeiras Gruvyer (6) + Mesa industrial 130cm + Lumin\xE1ria Luczeng + L\xE2mpada RGB \xB7 R$ 1.674 \xE0 vista + 6\xD7 R$ 31,67 \xB7 Master 3619</td><td><span class="pill ok">comprado 13/09</span></td></tr>
    <tr><td><b>Aspirador Arno X-Pert 7.60</b> \u2014 parte cart\xE3o <span class="pill new">10.6</span><br><span class="tag">order #2000018282963924 \xB7 R$ 289 em saldo ML fora</span></td><td class="n"><b>R$ 430</b></td><td>10\xD7 R$ 43,03 \xB7 Master 6369</td><td><span class="pill ok">pago 04/09</span></td></tr>
    <tr><td><b>LYME \u2014 3\xBA box pequeno</b> <span class="pill new">10.7</span><br><span class="tag">fora do contrato 1412 \xB7 R$ 1.531,83</span></td><td class="n"><b>R$ 1.532</b></td><td>condi\xE7\xE3o de pagamento a confirmar</td><td><span class="pill warm">contratado</span></td></tr>
    <tr class="tot"><td>Total parcelado <span class="pill new">10.11</span></td><td class="n">R$ 163.249</td><td colspan="2">R$ 164.443 <b>\u2212 R$ 1.194</b> deck real vs estimado (rev 10.11)</td></tr>
  </table>
  <div class="grid g2" style="margin-top:16px">
    <div class="kpi"><span>Total do projeto \u2014 rev. 10.11</span><b style="color:var(--warm);font-size:26px">R$ 644.378</b><small>R$ 481.129 \xE0 vista + R$ 163.249 parcelado. <b>Rev. 10.11:</b> deck material pago R$ 9.445 em 7\xD7 BTG Ultra Blue (vs estimativa R$ 10.639/5\xD7 da rev 9.2) \u2192 <b>\u2212R$ 1.194</b>. Do bolso no im\xF3vel R$ 411.034; FGTS R$ 545k + CAIXA fora do controle. Ainda premissa: instala\xE7\xE3o da fechadura R$ 250 e <b>4 bacias, R$ 1.800\u20133.600 sem linha</b>.</small></div>
    <div class="kpi"><span>Ainda n\xE3o or\xE7ado <span class="pill new">7.7</span></span><b style="color:var(--alert)">R$ 2.000 \u2013 5.000</b><small>Revestimento da escada R$ 2.000\u20135.000 \xB7 i\xE7amento da carga Destro \xB7 materiais de instala\xE7\xE3o da Feijor R$ 150\u2013300 \xB7 rack/TV. <b>O autonivelante da \xE1rea social saiu da lista</b> \u2014 Lucas confirmou que j\xE1 est\xE1 incluso (\u2212R$ 2.000\u20133.500).</small></div>
  </div>
</section>
<!-- ============ 12. FLUXO ============ -->
<section>
  <h3>12 \xB7 Fluxo de caixa</h3>
  <h4>Agosto \u2192 05/09 \u2014 calend\xE1rio real <span class="pill new">7.7</span> (extrato de 17/08: R$ 62.518,22)</h4>
  <table>
    <tr><th>Data</th><th>Movimento</th><th class="n">Valor</th><th class="n">Saldo</th></tr>
    <tr><td><b>17/08</b></td><td><b>Saldo apurado</b> \u2014 R$ 62.518,22 em conta + R$ 5.000 EQI</td><td class="n">\u2014</td><td class="n">67.518</td></tr>
    <tr><td>17/08</td><td>LYME \u2014 entrada Pix</td><td class="n" style="color:var(--alert)">\u221215.420,00</td><td class="n">52.098</td></tr>
    <tr><td><b>20/08</b></td><td><b>Cart\xE3o BRB</b></td><td class="n">\u221212.000</td><td class="n">40.098</td></tr>
    <tr><td>at\xE9 26/08</td><td>Feijor 1/8</td><td class="n">\u2212630</td><td class="n">39.468</td></tr>
    <tr><td>ago</td><td>AC aparelhos 1/8</td><td class="n">\u22121.282,09</td><td class="n"><b style="color:var(--warm)">38.186 \u2190 piso do m\xEAs</b></td></tr>
    <tr><td>28/08</td><td>Sal\xE1rio l\xEDquido <span class="tag">R$ 15.000 destinados \xE0 casa</span></td><td class="n" style="color:var(--ok)">+33.000</td><td class="n"><b>71.186 \u2190 sa\xEDda de agosto</b></td></tr>
    <tr><td>01/09</td><td>Cart\xE3o BTG</td><td class="n">\u22123.500</td><td class="n">67.686</td></tr>
    <tr><td>05/09</td><td>Aluguel \u2014 parcela restante</td><td class="n" style="color:var(--ok)">+5.400</td><td class="n">73.086</td></tr>
    <tr><td>05/09</td><td>Condom\xEDnio <span class="pill new">7.7</span></td><td class="n">\u22121.500</td><td class="n">71.586</td></tr>
  </table>
  <p style="color:var(--dim);font-size:14px"><b>Piso de agosto: R$ 38.186</b> (rev. 7.5 projetava R$ 30.562 \u2014 <b>+R$ 7.624</b>). A diferen\xE7a \xE9 quase toda dinheiro que j\xE1 existia e n\xE3o estava no modelo: <b>R$ 5.000 na conta corrente da EQI</b>, R$ 2.025 de saldo a mais e R$ 500 de cart\xE3o a menos, al\xE9m do BTG de R$ 3.500 ter migrado para setembro. <b>O EcoSol de 15/08 (R$ 2.298,75), os R$ 3.000 de aluguel de 12/08 e a amortiza\xE7\xE3o do pai (+R$ 5.000) j\xE1 est\xE3o dentro do saldo apurado</b> \u2014 n\xE3o entram de novo. As compras de 14/08 <b>n\xE3o entram aqui</b> \u2014 devem cair na fatura de setembro. O bloco \xE0 vista (R$ 261.954) sai do CDB na escritura, n\xE3o desta conta.</p>
  <div class="note good"><b>Quatro premissas confirmadas em 17/08 \u2014 o modelo mensal fica de p\xE9 como est\xE1.</b> <b>(1) Sal\xE1rio R$ 33.000</b>, confirmado \u2014 a grade de set/26 a ago/27 n\xE3o muda. <b>(2) Amortiza\xE7\xE3o Minozzo \xE9 mensal at\xE9 jan/27</b>, confirmado \u2014 era a maior incerteza do fluxo (R$ 25.000 de diferen\xE7a em mar/27) e cai por terra; mar/27 fica em R$ 29.067. <b>(3) Cart\xF5es: R$ 12.000 BRB no dia 20 + R$ 3.500 BTG no dia 1\xBA</b> = R$ 15.500, e o BTG cai no m\xEAs seguinte. <b>(4) Autonivelante j\xE1 or\xE7ado</b> \u2014 o n\xE3o-or\xE7ado desce para R$ 2.000\u20135.000.</div>
  <div class="note info"><b>Tr\xEAs coisas que este acerto abriu e ainda n\xE3o t\xEAm lugar definido no modelo.</b> <b>(1) O condom\xEDnio de R$ 1.500 no dia 5.</b> Se for do im\xF3vel alugado, o aluguel l\xEDquido cai de R$ 5.400 para R$ 3.900 e as entradas mensais descem R$ 1.500 \u2014 nov/26 vai de \u2212R$ 7.741 para ~\u2212R$ 9.241. Se j\xE1 estiver dentro dos R$ 15.000 de custo de vida ou dos R$ 3.500 de posse, n\xE3o muda nada. <b>\xC9 a pergunta mais barata de responder e a que mais mexe na grade.</b> <b>(2) Os R$ 15.000 do sal\xE1rio destinados \xE0 casa.</b> Isso \xE9 aloca\xE7\xE3o, n\xE3o sa\xEDda \u2014 o saldo de 28/08 continua R$ 71.186. Mas significa que a casa recebe R$ 15.000/m\xEAs de dinheiro novo, e n\xE3o o sal\xE1rio inteiro: qualquer parcela acima disso come colch\xE3o. <b>(3) Aluguel: R$ 3.000 j\xE1 recebidos + R$ 5.400 no dia 5 = R$ 8.400</b>, exatamente o bruto declarado dos dois im\xF3veis. Confirmar se s\xE3o dois inquilinos ou um s\xF3 pagando em duas parcelas \u2014 muda o risco de vac\xE2ncia, n\xE3o o valor.</div>
  <div class="sep"></div>
  <h4>Mensal \u2014 set/26 a ago/27</h4>
  <table>
    <tr><th>M\xEAs</th><th class="n">Entradas</th><th class="n">Vida</th><th class="n">Parcelas</th><th class="n">Posse</th><th class="n">Resultado</th><th class="n">Caixa fim</th></tr>
    <tr><td>set/26</td><td class="n">34.761</td><td class="n">15.000</td><td class="n">15.674 <span class="pill new">7.5</span></td><td class="n">\u2014</td><td class="n" style="color:var(--ok)">+4.087</td><td class="n">20.626</td></tr>
    <tr><td>out/26</td><td class="n">41.562</td><td class="n">15.000</td><td class="n">16.174</td><td class="n">\u2014</td><td class="n" style="color:var(--ok)">+10.388</td><td class="n">31.014</td></tr>
    <tr><td><b>nov/26</b></td><td class="n">35.433</td><td class="n">15.000</td><td class="n"><b>24.674</b></td><td class="n">3.500</td><td class="n" style="color:var(--alert)"><b>\u22127.741</b></td><td class="n">23.273</td></tr>
    <tr><td>dez/26</td><td class="n">52.141</td><td class="n">15.000</td><td class="n">23.674</td><td class="n">3.500</td><td class="n" style="color:var(--ok)">+9.967</td><td class="n">33.240</td></tr>
    <tr><td>jan/27</td><td class="n">34.761</td><td class="n">15.000</td><td class="n">16.374 <small>\u2190 \xFAltima LYME</small></td><td class="n">3.500</td><td class="n" style="color:var(--alert)">\u2212113</td><td class="n">33.127</td></tr>
    <tr><td>fev/27</td><td class="n">29.761</td><td class="n">15.000</td><td class="n">13.290</td><td class="n">3.500</td><td class="n" style="color:var(--alert)">\u22122.030</td><td class="n">31.097</td></tr>
    <tr><td>mar/27</td><td class="n">29.761</td><td class="n">15.000</td><td class="n">13.290</td><td class="n">3.500</td><td class="n" style="color:var(--alert)">\u22122.030</td><td class="n"><b style="color:var(--warm)">29.067 \u2190 vale</b></td></tr>
    <tr><td>abr/27</td><td class="n">29.761</td><td class="n">15.000</td><td class="n">9.079</td><td class="n">3.500</td><td class="n" style="color:var(--ok)">+2.182</td><td class="n">31.249</td></tr>
    <tr><td>mai\u2013ago/27</td><td class="n">29.761</td><td class="n">15.000</td><td class="n">7.079</td><td class="n">3.500</td><td class="n" style="color:var(--ok)">+4.182</td><td class="n">47.977</td></tr>
  </table>
  <p style="color:var(--dim);font-size:13px">Base: reserva p\xF3s-\xE0-vista <b>R$ 16.539</b> no fim de ago/26 (rev. 7.4 usava R$ 31.959 \u2014 a entrada Pix da LYME consumiu R$ 15.420). As <b>5\xD7 de R$ 3.084 da LYME</b> foram somadas \xE0s parcelas de set/26 a jan/27. A partir de fev/27 some a amortiza\xE7\xE3o do pai (R$ 5.000). <b>Corre\xE7\xE3o 8.0:</b> a grade foi montada com a parcela da Destro em ~R$ 875/m\xEAs, calculada sobre R$ 10.504,48. O pedido cheio \xE9 <b>R$ 12.864,32</b> e a parcela real em 12\xD7 \xE9 <b>R$ 1.072,03</b> \u2014 <b>R$ 196,66/m\xEAs a mais em todos os meses da grade</b>. Os n\xFAmeros abaixo ainda n\xE3o foram reescritos porque o <b>n\xFAmero de parcelas segue sem confirma\xE7\xE3o</b>; leia cada m\xEAs com esse desconto mental at\xE9 a Destro confirmar. Tamb\xE9m fora da grade: as parcelas das compras de 14/08 \u2014 ~R$ 200\u20131.000/m\xEAs, dentro das margens.</p>
  <h4 style="margin-top:18px">Leitura</h4>
  <ul>
    <li><b>O plano continua de p\xE9, mas com metade da folga.</b> A LYME custou duas vezes: R$ 15.420 de entrada sa\xEDram do colch\xE3o e R$ 3.084/m\xEAs entram na fatura por 5 meses. Toda a curva desceu ~R$ 30k. O vale de mar/27 caiu de <b>R$ 59.906 para R$ 29.067</b> <span class="pill new">7.5</span>.</li>
    <li><b>Novembro piorou e janeiro entrou na lista.</b> Nov/26 vai a <b>\u2212R$ 7.741</b> contra caixa de R$ 23k, e jan/27 fecha em <b>\u2212R$ 113</b> \u2014 praticamente zero a zero. Nenhum dos dois quebra, mas a partir daqui <b>n\xE3o cabe outra entrada \xE0 vista de R$ 15k</b> sem empurrar m\xEAs.</li>
    <li><b>A v\xE1lvula de escape saiu da mesa.</b> Adiar os m\xF3veis pra jan/27 derrubaria o pico pra ~R$ 15k, mas n\xE3o \xE9 mais necess\xE1rio <i>por caixa</i>. Se fatiar a marcenaria, que seja por risco de execu\xE7\xE3o (lote de cor, agenda do montador), n\xE3o por dinheiro.</li>
    <li><b>Marcenaria a R$ 72.000 (10\xD7 R$ 7.200) cabe com folga</b> \u2014 custa R$ 700/m\xEAs contra margens de R$ 2\u201313k.</li>
    <li><b>O empr\xE9stimo do pai \xE9 a \xFAnica linha com data de morte: jan/27.</b> N\xE3o gastar como se fosse permanente.</li>
  </ul>
  <div class="note bad"><b>Duas confirma\xE7\xF5es ainda em aberto:</b> <span class="pill new">7.7</span><br>
  (1) <b>Cart\xF5es \xD7 custo de vida.</b> R$ 12.000 BRB + R$ 3.500 BTG = R$ 15.500 \u2248 os R$ 15.000 declarados de custo de vida. Assumi que s\xE3o <b>a mesma coisa</b>. Se forem gastos <i>adicionais</i>, o modelo inteiro desce R$ 15.500/m\xEAs e o plano quebra. <b>Continua sendo a confirma\xE7\xE3o mais importante do documento</b> \u2014 est\xE1 aberta desde a rev. 7.<br>
  (2) <b>Adiantamento do 13\xBA</b> est\xE1 dentro dos R$ 21.033 de novembro? Pelo valor, n\xE3o. Se cair por fora, nov vira +R$ 21.843.</div>
  <div class="note good"><b>Resolvido em 17/08:</b> a amortiza\xE7\xE3o Minozzo \xE9 <b>R$ 5.000/m\xEAs at\xE9 jan/27</b>, exatamente como o modelo assumiu. Era a linha com R$ 25.000 de incerteza em mar/27 \u2014 deixa de ser risco. <b>O empr\xE9stimo continua tendo data de morte em jan/27</b>, e a partir de fev/27 a curva perde R$ 5.000/m\xEAs. Isso j\xE1 est\xE1 na grade.</div>
  <div class="note"><b>Riscos de renda:</b> (1) <b>vac\xE2ncia</b> \u2014 dois im\xF3veis alugados sustentam R$ 8.400/m\xEAs bruto; vac\xE2ncia simult\xE2nea tira ~R$ 6.900 l\xEDquidos/m\xEAs; (2) <b>vari\xE1vel</b> \u2014 outubro carrega vari\xE1vel, e sem ela a curva inteira desce ~R$ 6.800.<br><b>Ponto cego declarado:</b> os R$ 3.500/m\xEAs de custo de posse podem j\xE1 estar dentro dos R$ 15.000 de custo de vida. Modelei somando, que \xE9 o conservador.</div>

<!-- ============ 12B. FLUXO DE PARCELAMENTOS + RECORRENTES ============ -->
<section id="fluxo-mensal-parcelamentos">
  <h3>12B \xB7 Fluxo mensal \u2014 parcelamentos + despesas recorrentes <span class="pill new">10.10</span></h3>
  <p style="color:var(--dim);font-size:14px">Todos os parcelamentos em aberto <b>+ despesas fixas mensais</b> (financiamento CAIXA + condom\xEDnio). Marcenaria fora da grade. Datas: fatura fecha ~1 m\xEAs depois da compra.</p>

  <h4 style="margin-top:22px">A \xB7 Parcelamentos ativos (18 itens)</h4>
  <table>
    <tr><th>Item</th><th class="n">Total</th><th>Condi\xE7\xE3o</th><th>1\xAA parcela</th><th>Meio</th></tr>
    <tr><td>Boiler solar EcoSol</td><td class="n">R$ 18.390</td><td>8\xD7 R$ 2.299</td><td>ago/26</td><td><span class="tag">boleto dia 15</span></td></tr>
    <tr><td>Feijor pedra ilha</td><td class="n">R$ 5.040</td><td>8\xD7 R$ 630</td><td>set/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>AC \u2014 4 aparelhos</td><td class="n">R$ 10.257</td><td>8\xD7 R$ 1.282</td><td>set/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>LYME esquadrias + 2 boxes</td><td class="n">R$ 15.420</td><td>5\xD7 R$ 3.084</td><td>set/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>Lumin\xE1rias (Visa 0700)</td><td class="n">R$ 1.506</td><td>R$ 1.046 entrada + 9\xD7 R$ 51</td><td>out/26</td><td><span class="tag">Visa 0700</span></td></tr>
    <tr><td>Cama Zidi (colch\xF5es+bases)</td><td class="n">R$ 4.914</td><td>R$ 1.059 entrada + 10\xD7 R$ 386</td><td>out/26</td><td><span class="tag">Master 6369</span></td></tr>
    <tr><td>Piso LVT Destro</td><td class="n">R$ 9.696</td><td>12\xD7 R$ 808</td><td>out/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>Nivelante piso</td><td class="n">R$ 509</td><td>8\xD7 R$ 64</td><td>out/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>Deck cumaru material <span class="pill new">10.11</span></td><td class="n">R$ 9.445</td><td>7\xD7 R$ 1.349</td><td>out/26</td><td><span class="tag">BTG Ultra Blue</span></td></tr>
    <tr><td>Duchas + kits banheiros</td><td class="n">R$ 1.781</td><td>1\xD7 R$ 1.781</td><td>set/26</td><td><span class="tag">cart\xE3o \xE0 vista</span></td></tr>
    <tr><td>Assentos sanit\xE1rios</td><td class="n">R$ 737</td><td>1\xD7 R$ 661</td><td>set/26</td><td><span class="tag">cart\xE3o \xE0 vista</span></td></tr>
    <tr><td>Eletros + fechadura</td><td class="n">R$ 3.359</td><td>1\xD7 R$ 3.359</td><td>set/26</td><td><span class="tag">cart\xE3o \xE0 vista</span></td></tr>
    <tr><td>Cortinas</td><td class="n">R$ 6.725</td><td>6\xD7 R$ 1.121</td><td>out/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr><td>Spa Infl\xE1vel Rome</td><td class="n">R$ 6.780</td><td>10\xD7 R$ 678</td><td>out/26</td><td><span class="tag">Master 3619</span></td></tr>
    <tr><td>Carrinho ML (\xE0 vista)</td><td class="n">R$ 1.674</td><td>R$ 1.674 entrada + \xE0 vista no cart\xE3o</td><td>out/26</td><td><span class="tag">Master 3619</span></td></tr>
    <tr><td>Carrinho ML (parcelado)</td><td class="n">R$ 190</td><td>6\xD7 R$ 32</td><td>out/26</td><td><span class="tag">Master 3619</span></td></tr>
    <tr><td>Aspirador Arno X-Pert</td><td class="n">R$ 430</td><td>10\xD7 R$ 43</td><td>out/26</td><td><span class="tag">Master 6369</span></td></tr>
    <tr><td>LYME 3\xBA box (fora contr.)</td><td class="n">R$ 1.532</td><td>5\xD7 R$ 306</td><td>out/26</td><td><span class="tag">cart\xE3o</span></td></tr>
    <tr class="tot"><td>Total contratado <span class="pill new">10.11</span></td><td class="n"><b>R$ 98.385</b></td><td colspan="3">valor bruto dos parcelamentos \xB7 <b>\u2212R$ 1.194</b> deck real vs estimado</td></tr>
  </table>

  <h4 style="margin-top:22px">A2 \xB7 Despesas mensais recorrentes <span class="pill new">10.10</span></h4>
  <table>
    <tr><th>Item</th><th class="n">Valor mensal</th><th>Observa\xE7\xE3o</th><th>In\xEDcio</th><th>Meio</th></tr>
    <tr><td><b>Financiamento CAIXA (SAC 420\xD7)</b></td><td class="n">R$ 1.700/m\xEAs</td><td>1\xAA em 21/09/26 \xB7 <b>R$ 1.700 \xE9 estimativa</b> (SAC 420\xD7, cai gradualmente) \xB7 continua at\xE9 09/2061</td><td>set/26 (dia 21)</td><td><span class="tag">d\xE9bito autom\xE1tico</span></td></tr>
    <tr><td><b>Condom\xEDnio + \xE1reas comuns + fundo obra</b></td><td class="n">R$ 700/m\xEAs</td><td>R$ 700 fixo mensal \xB7 come\xE7a set/26 \xB7 recorrente permanente</td><td>set/26 (dia 15)</td><td><span class="tag">boleto dia 15</span></td></tr>
    <tr class="tot"><td>Total recorrente/m\xEAs</td><td class="n"><b>R$ 2.400</b></td><td colspan="3">se soma ao fluxo permanentemente enquanto durar</td></tr>
  </table>

  <h4 style="margin-top:22px">B \xB7 Desembolso mensal (ago/26 \u2192 set/27)</h4>
  <table>
    <tr><th style="width:80px">M\xEAs</th><th class="n" style="width:100px">Total</th><th>Intensidade</th><th class="n">N\xBA itens</th></tr>
    <tr>
      <td><b>ago/26</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 2.299</b></td>
      <td><div style="background:var(--ok);width:12%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">1 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>set/26</b></td>
      <td class="n" style="color:var(--alert)"><b>R$ 19.275</b></td>
      <td><div style="background:var(--alert);width:100%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">12 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>out/26</b></td>
      <td class="n" style="color:var(--alert)"><b>R$ 14.532</b></td>
      <td><div style="background:var(--alert);width:75%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">16 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>nov/26</b></td>
      <td class="n" style="color:var(--alert)"><b>R$ 14.532</b></td>
      <td><div style="background:var(--alert);width:75%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">16 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>dez/26</b></td>
      <td class="n" style="color:var(--alert)"><b>R$ 14.532</b></td>
      <td><div style="background:var(--alert);width:75%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">16 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>jan/27</b></td>
      <td class="n" style="color:var(--alert)"><b>R$ 14.532</b></td>
      <td><div style="background:var(--alert);width:75%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">16 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>fev/27</b></td>
      <td class="n" style="color:var(--warm)"><b>R$ 11.448</b></td>
      <td><div style="background:var(--warm);width:59%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">15 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>mar/27</b></td>
      <td class="n" style="color:var(--warm)"><b>R$ 11.142</b></td>
      <td><div style="background:var(--warm);width:58%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">14 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>abr/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 7.690</b></td>
      <td><div style="background:var(--ok);width:40%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">11 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>mai/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 4.429</b></td>
      <td><div style="background:var(--ok);width:23%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">8 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>jun/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 4.366</b></td>
      <td><div style="background:var(--ok);width:23%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">7 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>jul/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 4.315</b></td>
      <td><div style="background:var(--ok);width:22%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">6 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>ago/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 3.208</b></td>
      <td><div style="background:var(--ok);width:17%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">3 lan\xE7amentos</td>
    </tr>
    <tr>
      <td><b>set/27</b></td>
      <td class="n" style="color:var(--ok)"><b>R$ 3.208</b></td>
      <td><div style="background:var(--ok);width:17%;height:14px;border-radius:3px;opacity:0.55"></div></td>
      <td class="n" style="color:var(--dim);font-size:12px">3 lan\xE7amentos</td>
    </tr>
  </table>

  <div class="note bad" style="margin-top:16px"><b>\u26A0 Pico do fluxo: set/26 \u2192 R$ 19.275.</b> \xC9 o m\xEAs de arrancada (LYME, AC, Feijor, boiler todos com parcelas simult\xE2neas + cart\xE3o da fatura + <b>1\xAA parcela CAIXA R$ 1.700 dia 21</b> + <b>1\xBA condom\xEDnio R$ 700 dia 15</b>). Depois: <b>plat\xF4 R$ 14.532/m\xEAs por 4 meses (out/26 \u2192 jan/27)</b> <span class="pill new">10.11</span> e curva descendente \u2014 deck real (7\xD7) achatou o pico anterior de R$ 15.311. A partir de mai/27 estabiliza em ~R$ 4.400/m\xEAs porque s\xF3 sobram parcelamentos residuais + CAIXA + condom\xEDnio.<br><br>
  <b>Top itens do pico (set/26):</b><br>\u2022 Condom\xEDnio + \xE1reas comuns + fundo obra R$ 700<br>\u2022 Assentos sanit\xE1rios 1/1 R$ 661<br>\u2022 Feijor pedra ilha 1/8 R$ 630<br>\u2022 Eletros + fechadura 1/1 R$ 3,359<br>\u2022 LYME esquadrias + 2 boxes 1/5 R$ 3,084<br>\u2022 Boiler solar EcoSol 2/8 R$ 2,299<br>\u2022 Duchas + kits banheiros 1/1 R$ 1,781<br>\u2022 Financiamento CAIXA (SAC 420\xD7) R$ 1,700<br>\u2022 Carrinho ML (\xE0 vista) (entrada) R$ 1,674<br>\u2022 AC \u2014 4 aparelhos 1/8 R$ 1,282<br>\u2022 Cama Zidi (colch\xF5es+bases) (entrada) R$ 1,059<br>\u2022 Lumin\xE1rias (Visa 0700) (entrada) R$ 1,046</div>

  <div class="note info" style="margin-top:12px"><b>Como ler:</b> este fluxo agora inclui as duas despesas fixas mensais permanentes (financiamento CAIXA + condom\xEDnio). N\xE3o inclui: \xE0 vista futura (R$ 4.000 MO deck), luz Elektro, IPTU, internet (R$ 109,90/m\xEAs), nem marcenaria. Se somar essas, adiciona ~R$ 400\u2013600/m\xEAs fixos.</div>

  <div class="note good" style="margin-top:12px"><b>Estimativas assumidas</b> (me avisa se algum t\xE1 errado):
  <ul>
    <li><b>Financiamento CAIXA: R$ 1.700 \xE9 ESTIMATIVA</b> \u2014 SAC 420\xD7 de R$ 143.966,50, faixa real R$ 1.435\u20131.602 dependendo da taxa exata. Ajusto quando cair o 1\xBA boleto em 21/09.</li>
    <li>Piso Destro: 12\xD7 (n\xBA parcelas n\xE3o 100% confirmado)</li>
    <li>Deck material: 1\xAA parcela out/26</li>
    <li>LYME 3\xBA box: 5\xD7 R$ 306 (mesmo padr\xE3o do contrato 1412)</li>
    <li>Fatura fecha ~15-20 do m\xEAs \u2192 compras de 13/09 caem em out/26</li>
    <li>Marcenaria: <b>fora da grade</b></li>
  </ul></div>
</section>
</section>
<!-- ============ 12C. FLUXO MENSAL DIN\xC2MICO (rev 10.12) ============ -->
<section id="sec-12c">
  <h3>12C \xB7 Fluxo mensal DIN\xC2MICO <span class="pill new">10.12</span> <button class="fab" style="position:static;padding:6px 12px;font-size:11px;margin-left:8px;box-shadow:none" onclick="openExpenseModal()">+ despesa</button></h3>
  <p style="color:var(--dim);font-size:13px;margin-bottom:8px">Baseline da \xA712B (18 parcelamentos + CAIXA + condom\xEDnio) <b>somado</b> \xE0s despesas que voc\xEA adicionar pelo bot\xE3o. Barras proporcionais ao m\xEAs de maior desembolso. Clique numa linha pra ver o desdobramento por item.</p>
  <div class="legend">
    <span><em style="background:rgba(224,112,95,.7)"></em>Pico (&gt; 90% do maior)</span>
    <span><em style="background:rgba(232,162,92,.7)"></em>Plat\xF4 (60\u201390%)</span>
    <span><em style="background:linear-gradient(90deg,var(--ok),var(--cool))"></em>Curva descendente</span>
    <span><em style="background:rgba(255,255,255,.15)"></em>Passado</span>
  </div>
  <div class="month-grid" id="month-grid"><div style="color:var(--dim2);padding:20px;text-align:center">carregando\u2026</div></div>
  <div class="custom-list" id="custom-list">
    <h4>Despesas customizadas (adicionadas pelo bot\xE3o)</h4>
    <div id="custom-rows"><div class="empty">nenhuma despesa customizada ainda \u2014 clique em <b>"+ despesa"</b> pra come\xE7ar</div></div>
  </div>
</section>

<!-- ============ 13. MARCENARIA ============ -->
<section>
  <h3>13 \xB7 Marcenaria planejada</h3>
  <p><b>Estado:</b> projeto contratado em 11/08 por R$ 5.000 (R$ 2.500 pagos, 2\xAA parcela no bloco \xE0 vista). Entrega em 45 dias \u2192 <b>~28/09</b>. Execu\xE7\xE3o ainda n\xE3o contratada.</p>
  <h4>Medi\xE7\xE3o in loco \u2014 su\xEDte m\xE1ster \xB7 17/08 \xB7 trena a laser <span class="pill new">7.8</span></h4>
  <table>
    <tr><th>Face</th><th class="n">Medida</th><th>Leitura</th></tr>
    <tr><td>Parede da cabeceira</td><td class="n mono">3,552 m</td><td>king de 1,93 centralizada deixa <b>81 cm de cada lado</b> \u2014 criados cabem folgados</td></tr>
    <tr><td>Parede da TV</td><td class="n mono">3,709 m</td><td><b>15,7 cm a mais que a oposta</b> \u2014 trap\xE9zio ou prumada contornada</td></tr>
    <tr><td>Lateral direita da cama</td><td class="n mono">2,653 m</td><td>cama de 2,03 deixa <b>62,3 cm</b>; com painel de 10 cm cai pra 52,3 \u2014 abaixo dos 60 de circula\xE7\xE3o</td></tr>
    <tr><td>Lateral esquerda</td><td class="n mono" style="color:var(--alert)">N\xC3O MEDIDA</td><td>\u2014</td></tr>
    <tr><td>Closet \u2014 largura</td><td class="n mono">3,149 m</td><td>sobram 0,403 m em rela\xE7\xE3o \xE0 cabeceira (hip\xF3tese, n\xE3o medido)</td></tr>
    <tr><td>Closet \u2014 profundidade</td><td class="n mono" style="color:var(--alert)">0,525 m</td><td>do batente do banho ao fundo \xB7 <b>\u224849 cm \xFAteis</b> contra os 55\u201360 que um cabide frontal exige</td></tr>
    <tr><td>Closet \u2014 altura</td><td class="n mono">1,201 m</td><td>contrapiso \u2192 teto \xB7 com vin\xEDlico ~1,198 \xFAtil</td></tr>
    <tr class="tot"><td>\xC1rea do quarto</td><td class="n mono">\u2248 9,63 m\xB2</td><td>m\xE9dia das larguras \xD7 2,653</td></tr>
  </table>
  <div class="note bad"><b>O closet n\xE3o \xE9 closet.</b> 49 cm \xFAteis n\xE3o penduram de frente, e 1,201 m de altura com barra a 1,05 d\xE1 1,05 m de queda \u2014 camisa e palet\xF3 passam justo, cal\xE7a inteira e vestido longo n\xE3o. <b>\xC9 um gaveteir\xE3o excelente</b> (4 n\xEDveis \xD7 3,149 \xD7 0,525 = <b>6,6 m\xB2 de prateleira</b>) e um closet ruim. Consequ\xEAncia: <b>o pendurar migra pro quarto</b>. Na parede da TV n\xE3o cabe (2,653 \u2212 2,03 de cama \u2212 0,60 de arm\xE1rio = 2,3 cm) \u2014 tem que ir pra uma lateral e custa 60 cm da largura (3,552 \u2192 ~2,95, ainda ~51 cm de cada lado da king).</div>
  <div class="note bad"><b>Conflito de piso \u2014 barato de conferir, caro de descobrir tarde.</b> A planta declara PA 2,97 / PC 2,92 = <b>5 cm de contrapiso</b>. O vin\xEDlico soma 2 mm + autonivelante + cola \u2248 <b>4\u20136 mm</b>. Se o contrapiso existente j\xE1 estiver na cota 2,92, o piso acabado fica <b>~4,5 cm abaixo do projeto</b> \u2014 mexe em fundo de porta, altura de arm\xE1rio e rodap\xE9. Conferir o n\xEDvel do contrapiso contra a laje antes de a projetista cotar altura de m\xF3vel.</div>
  <div class="note info"><b>Falta medir \u2014 4 de 8 faces.</b> Lateral esquerda \xB7 as 4 diagonais (s\xE3o elas que provam o esquadro e decidem o 15,7 cm) \xB7 p\xE9-direito do quarto em 3 pontos \xB7 v\xE3os J-06, P-08, P-09 e a passagem closet\u2192quarto \xB7 peitoril \xB7 desn\xEDvel do contrapiso \xB7 e todas as instala\xE7\xF5es (tomadas, interruptores, ponto de TV, dreno e ponto do split).</div>
  <h4>Benchmark do vizinho \u2014 mesma projetista</h4>
  <p style="color:var(--dim);font-size:14px">Fez o projeto completo e executou s\xF3 cozinha + lavanderia: madeira R$ 15.000 + montador R$ 5.000 = <b>R$ 20.000</b>. Split madeira/montador <b>75/25</b>. E os R$ 15.000 de madeira <b>inclu\xEDam bancada e cuba</b> \u2014 por isso a escala precisa separar as duas coisas.</p>
  <table>
    <tr><th>Ambiente</th><th class="n">Marcenaria</th><th class="n">Bancada/cuba</th><th class="n">Total</th></tr>
    <tr><td>Cozinha + lavanderia <span class="tag">ancorado</span></td><td class="n">15.500</td><td class="n">4.500</td><td class="n"><b>20.000</b></td></tr>
    <tr><td>3 guarda-roupas retos</td><td class="n">13.100</td><td class="n">\u2014</td><td class="n">13.100</td></tr>
    <tr><td>Closet</td><td class="n">8.300</td><td class="n">\u2014</td><td class="n">8.300</td></tr>
    <tr><td>Gourmet superior + inferior</td><td class="n">5.500</td><td class="n">2.500</td><td class="n">8.000</td></tr>
    <tr><td>3 gabinetes de banheiro</td><td class="n">5.300</td><td class="n">3.000</td><td class="n">8.300</td></tr>
    <tr><td>3 mesas de estudo c/ gaveteiro</td><td class="n">5.500</td><td class="n">\u2014</td><td class="n">5.500</td></tr>
    <tr><td>3 cabeceiras c/ criado</td><td class="n">5.200</td><td class="n">\u2014</td><td class="n">5.200</td></tr>
    <tr><td>Sala \u2014 painel com rack</td><td class="n">3.600</td><td class="n">\u2014</td><td class="n">3.600</td></tr>
    <tr class="tot"><td>Estimativa central</td><td class="n">62.000</td><td class="n">10.000</td><td class="n">R$ 72.000</td></tr>
  </table>
  <p style="color:var(--dim);font-size:14px">Faixa R$ 60.000 \u2013 85.000. Gap contra os R$ 65.000 provisionados: <b>~R$ 7.000</b>. E os R$ 72.000 j\xE1 s\xE3o pre\xE7o de <i>spec bom</i> \u2014 o vizinho \xE9 exigente, prov\xE1vel 18/25 mm e acabamento acima do b\xE1sico. Fazendo b\xE1sico, cai 20\u201325% (~R$ 55\u201358k).</p>
  <h4 style="margin-top:18px">Execu\xE7\xE3o por ondas</h4>
  <table>
    <tr><th>Onda</th><th>Escopo</th><th class="n">Valor</th><th>Quando</th></tr>
    <tr><td><b>1 \u2014 morar</b></td><td>Cozinha + lavanderia</td><td class="n">R$ 20.000</td><td>depois do piso</td></tr>
    <tr><td><b>2 \u2014 guardar roupa</b></td><td>3 guarda-roupas + closet</td><td class="n">R$ 21.400</td><td>2026</td></tr>
    <tr><td>3 \u2014 completar</td><td>3 banheiros + painel da sala</td><td class="n">R$ 11.900</td><td>2027</td></tr>
    <tr><td>4 \u2014 conforto</td><td>Gourmet + cabeceiras + mesas de estudo</td><td class="n">R$ 18.700</td><td>2027</td></tr>
  </table>
  <p style="color:var(--dim);font-size:14px">Ondas 1+2 = <b>R$ 41.300</b> contra R$ 65.000 provisionados. Folga confort\xE1vel.</p>
  <div class="note"><b>Pedido \xFAnico \xD7 fatiado \u2014 s\xE3o tr\xEAs decis\xF5es, n\xE3o uma:</b> (a) o corte na madeireira, (b) a entrega/armazenagem, (c) a montagem.<br>
  <b>A favor do corte \xFAnico:</b> desconto de volume 8\u201312%, trava o pre\xE7o do MDF, e \u2014 o argumento mais forte e menos lembrado \u2014 <b>lote de cor/veio</b>: chapa varia entre lotes de produ\xE7\xE3o, e closet cortado 8 meses depois da cozinha no mesmo padr\xE3o pode sair com tom visivelmente diferente. Defeito permanente e caro.<br>
  <b>Contra:</b> armazenagem. Casa inteira \u2248 60\u201380 chapas cortadas, que precisam ficar <b>planas, secas, fora do ch\xE3o e cobertas</b>. Atibaia \xE9 serra e \xFAmida; empenamento \xE9 irrevers\xEDvel. Sem c\xF4modo seco, isso mata a ideia sozinho.<br>
  <b>Caminho do meio (\xE9 o que pedir):</b> fechar o <b>pre\xE7o de tudo de uma vez</b>, com tabela travada e <b>reserva do lote de chapa</b>, mas <b>liberar o corte e a entrega por onda</b>.</div>
  <div class="note bad"><b>Duas coisas t\xEAm de chegar na projetista antes do t\xE9cnico fechar:</b> (1) o <b>nicho do forno Midea</b> \u2014 585\u2013595 \xD7 590 \xD7 550 mm + 35 mm, sem porta decorativa, tomada exclusiva 20 A; (2) os <b>200 mm livres abaixo do cooktop</b>, que obrigam divis\xF3ria na gaveta sob a ilha. Altera\xE7\xE3o de t\xE9cnico depois custa <b>R$ 70 cada</b> \u2014 e altera\xE7\xE3o de nicho arrasta a torre inteira.</div>
  <p style="color:var(--dim);font-size:13px"><b>Tabela de honor\xE1rios (confirmada):</b> cozinha op\xE7\xE3o 2 c/ mesa na ilha 650 \xB7 lavanderia 2 paredes 500 \xB7 closet 500 \xB7 gourmet sup+inf 250 \xB7 3 gabinetes de banheiro 750 \xB7 3 quartos (GR reto + cabeceira c/ criado + mesa de estudo) 1.650 \xB7 sala painel c/ rack 300 \xB7 design 400 \u2192 <b>R$ 5.000</b>. Inclui <b>2 altera\xE7\xF5es de design</b>; depois R$ 30 por altera\xE7\xE3o de design e <b>R$ 70 por altera\xE7\xE3o de t\xE9cnico</b>. Rasgo de LED reto: R$ 20 cada.</p>
</section>
<!-- ============ 14. FORNECEDORES ============ -->
<section>
  <h3>14 \xB7 Fornecedores</h3>
  <table>
    <tr><th>Fornecedor</th><th>Contato</th><th>Escopo</th><th style="width:130px">Status</th></tr>
    <tr><td>Projetista dos planejados</td><td>\u2014</td><td>Projeto da casa toda \xB7 R$ 5.000</td><td><span class="pill ok">fechado 11/08</span><br><span class="tag">entrega ~28/09</span></td></tr>
    <tr><td><b>JKV Madeiras</b></td><td>Natily Santos \xB7 (11) 94710-9419</td><td>Produ\xE7\xE3o/corte das l\xE2minas</td><td><span class="pill go">aguarda projeto</span></td></tr>
    <tr><td>Muda M\xF3veis Sob Medida</td><td>(94) 99115-2759</td><td>Alternativa a cotar</td><td><span class="pill go">cotar</span></td></tr>
    <tr><td><b>Felipe Uemuri</b></td><td>\u2014</td><td>Montagem + adapta\xE7\xF5es \xB7 <b>montou a casa do Anderson (Resid\xEAncia 7, vizinho)</b></td><td><span class="pill go">aguarda projeto</span></td></tr>
    <tr><td><b>LYME Esquadrias \u2014 Cris</b><br><span class="tag">CNPJ 34.178.214/0001-74 \xB7 Estr. Mun. Juca Sanches 211, Atibaia</span></td><td>(11) 97289-3421</td><td>Contrato 1412 \xB7 janela 4120\xD72680 + porta de correr 3100\xD72680 + cobertura do pergolado + <b>2 boxes</b> \xB7 R$ 30.840,11</td><td><span class="pill ok">assinado 17/08</span></td></tr>
    <tr><td><b>EcoSol</b></td><td>Leandro Ramos / Jo\xE3o Azevedo \xB7 (11) 95912-0183 \xB7 (11) 4411-4138 \xB7 contato@ecosolaquecedores.com.br</td><td>Sistema solar alta press\xE3o \xB7 homologado no condom\xEDnio</td><td><span class="pill ok">fechado R$ 18.390</span></td></tr>
    <tr><td><b>Destro</b></td><td>vendedor Gildailton</td><td><b>LVT colado 2 mm Magnifique Sophie \xB7 62,86 m\xB2 faturados + nivelador + primer \xB7 pedido 470049</b></td><td><span class="pill no">estorno hoje</span><br><span class="tag">entrega 01/09</span></td></tr>
    <tr><td><b>Feijor Marmoraria</b></td><td>(11) 94005-2784 \xB7 (11) 94767-5188 \xB7 feijormarmoraria@gmail.com \xB7 R. Ant\xF4nio da Costa Ratto 145, Jd. Alvin\xF3polis II, Atibaia</td><td>Ilha completa em granito preto S\xE3o Gabriel polido, 5,63 m\xB2 \u2014 fechamentos laterais, acabamentos, apliques, corte p/ cooktop e instala\xE7\xE3o</td><td><span class="pill warm">R$ 5.040 em 8\xD7</span><br><span class="tag">vence 26/08 \xB7 15 d.\xFA.</span></td></tr>
    <tr><td>Instalador dos ACs</td><td>\u2014</td><td>4 splits (2\xD7 9k, 1\xD7 12k, 1\xD7 24k, todos Q/F R-32 220V) + instala\xE7\xE3o</td><td><span class="pill ok">fechado R$ 13.256,68</span></td></tr>
    <tr><td>Eletricista</td><td>\u2014</td><td>Circuitos 220V, <b>balanceamento de fases</b>, ilumina\xE7\xE3o, prepara\xE7\xE3o do boiler, circuito exclusivo do cooktop (32 A/6 mm\xB2) e do forno (20 A/2,5 mm\xB2)</td><td><span class="pill go">cotar</span></td></tr>
  </table>
  <div class="note"><b>Feijor \u2014 condi\xE7\xF5es a respeitar:</b> materiais de instala\xE7\xE3o (argamassa, areia, cimento) por conta do cliente, <b>+R$ 150\u2013300 n\xE3o inclu\xEDdos</b>. Exigir que a Feijor <b>me\xE7a a ilha no local</b> antes de cortar \u2014 assim o recorte \xE9 responsabilidade dela. <b>N\xE3o autorizar o corte sem o cooktop f\xEDsico presente.</b></div>
</section>
<!-- ============ 15. ACABAMENTOS ============ -->
<section>
  <h3>15 \xB7 Acabamentos entregues pela construtora \u2014 fotos de 13/07/2026</h3>
  <div class="grid g2">
    <div class="kpi"><h4>T\xE9rreo</h4><small>Porcelanato cinza claro ~90\xD790 j\xE1 instalado. <b>Laje de concreto aparente na \xE1rea social</b> \u2014 n\xE3o aceita spot embutido, a ilumina\xE7\xE3o tem de ser de sobrepor, trilho ou pendente. <b>Granito preto j\xE1 instalado em L na cozinha</b> \u2014 conferir se casa com o S\xE3o Gabriel da ilha.</small></div>
    <div class="kpi"><h4>Superior</h4><small><b>Contrapiso cru.</b> \xC9 onde entra o LVT colado \u2014 e por isso o nivelamento vira caminho cr\xEDtico, n\xE3o detalhe.</small></div>
    <div class="kpi"><h4>Esquadrias e portas</h4><small>Alum\xEDnio preto. <b>Porta de entrada em madeira maci\xE7a ripada</b> \u2014 relevante para a fechadura digital (fura\xE7\xE3o em maci\xE7a \xE9 irrevers\xEDvel). Pergolado met\xE1lico preto j\xE1 montado.</small></div>
    <div class="kpi"><h4>Dinheiro ainda n\xE3o descoberto</h4><small>Autonivelante da \xE1rea social <b>R$ 2.000\u20133.500</b> \xB7 revestimento da escada <b>R$ 2.000\u20135.000</b>. Nenhum dos dois est\xE1 no or\xE7amento.</small></div>
  </div>
  <div class="note info"><b>Orienta\xE7\xE3o solar ainda n\xE3o confirmada no local.</b> O registro diz estar/cozinha voltados a <b>norte</b> (sol o dia todo, portas de vidro do piso ao teto) e a lateral <b>noroeste</b> pegando sol forte \xE0 tarde \u2014 o que define <b>lumin\xE1rias externas em alum\xEDnio, nunca PVC</b>, naquela face. Confirmar com b\xFAssola na visita.</div>
</section>
<!-- ============ 16. CONVEN\xC7\xC3O ============ -->
<section>
  <h3>16 \xB7 Conven\xE7\xE3o \u2014 o que a obra tem de respeitar</h3>
  <ul>
    <li><b>Teto de 50 A por unidade.</b> Ver o or\xE7amento de carga na se\xE7\xE3o 9.</li>
    <li><b>Fachada n\xE3o se altera</b> sem aprova\xE7\xE3o. A fechadura digital fica na porta de entrada \u2014 risco baixo, mas vale registrar que a porta \xE9 elemento de fachada.</li>
    <li><b>\xC1gua:</b> po\xE7o artesiano via servid\xE3o (matr. 135.463) at\xE9 o SAAE ligar. O <b>rateio do bombeamento entra no condom\xEDnio</b>.</li>
    <li><b>Condom\xEDnio:</b> fra\xE7\xE3o ideal 5,606%, rateio em 1/15 avos. Estreia junto com a parcela CAIXA e o IPTU \u2014 \xE9 o que forma o pico de nov\u2013dez/26.</li>
    <li>S\xEDndica/administradora: <b>Evid\xEAncia</b> \u2014 Kaue Henrique Pereira Ferreira \xB7 mandato at\xE9 24/02/2027.</li>
    <li>Registro: matr\xEDcula <b>158.854</b> \u2014 RI Atibaia (CNS 12.048-5) \xB7 Conven\xE7\xE3o registro <b>15.453</b>, Livro 3.</li>
  </ul>
  <div class="note"><b>Diverg\xEAncia de n\xFAmero, resolvida:</b> o projeto executivo traz "n\xBA 305"; matr\xEDcula, Conven\xE7\xE3o, Ata e o cadastro da Elektro trazem <b>605</b>. Usar sempre 605 \u2014 est\xE1 quadruplamente confirmado.<br>
  <b>Diverg\xEAncia de logradouro \u2014 RESOLVIDA:</b> a Elektro concluiu a liga\xE7\xE3o em 03/09 (UC 49211331). Endere\xE7o reconciliado na pr\xE1tica.</div>
</section>
<!-- ============ 17. ORDEM ============ -->
<section>
  <h3>17 \xB7 Ordem de execu\xE7\xE3o \u2014 o encadeamento que n\xE3o se inverte</h3>
  <table>
    <tr><th style="width:34px">#</th><th>Etapa</th><th>Depende de</th><th>Janela</th></tr>
    <tr><td>1</td><td>Vistoria + medidor Elektro</td><td>endere\xE7o confirmado</td><td>at\xE9 18/08</td></tr>
    <tr><td>2</td><td>Medi\xE7\xE3o da ilha pela Feijor <b>com o cooktop presente</b></td><td>cooktop chegar (18/08)</td><td>19\u201321/08</td></tr>
    <tr><td>3</td><td>ITBI \u2192 protocolo no RI \u2192 registro</td><td>contrato + guias</td><td>agosto</td></tr>
    <tr><td>4</td><td><b>Liga\xE7\xE3o de energia \u2014 Elektro</b> <span class="pill new">8.1</span></td><td>vistoria + endere\xE7o da UC</td><td><b>24/08</b></td></tr>
    <tr><td>5</td><td><b>Instala\xE7\xE3o dos 4 ACs</b> <span class="pill new">8.1</span></td><td><b>energia energizada</b> + local da 4\xAA condensadora</td><td><b>24/08</b></td></tr>
    <tr><td>6</td><td><b>Ara\xFAjo \u2014 banheiros, 1\xAA ida</b> (ducha \xB7 registro \xB7 nicho \xB7 bacia \xB7 assento) <span class="pill new">8.1</span></td><td>bacias na casa</td><td><b>25/08</b></td></tr>
    <tr><td>7</td><td><b>Pedra da ilha \u2014 Feijor</b> <span class="pill new">8.2</span></td><td><b>recorte 56\xD749 conferido</b> \xB7 200 mm sob o cooktop</td><td><b>26/08</b></td></tr>
    <tr><td>8</td><td><b>Boiler EcoSol</b> <span class="pill new">8.1</span></td><td>energia (apoio el\xE9trico)</td><td><b>27/08</b></td></tr>
    <tr><td>9</td><td><b>Nivelamento do contrapiso do superior</b></td><td>medi\xE7\xE3o \xB7 i\xE7amento resolvido</td><td><b>antes de 08/09</b></td></tr>
    <tr><td>10</td><td><b>Boxes + vidro do gourmet \u2014 LYME</b> <span class="pill new">8.1</span></td><td>3\xBA box confirmado</td><td><b>~04/09</b></td></tr>
    <tr><td>11</td><td><b>Instala\xE7\xE3o do LVT colado</b> <span class="pill new">8.1</span></td><td>contrapiso \xB7 i\xE7amento \xB7 primer \xB7 cola</td><td><b>08/09</b></td></tr>
    <tr><td>12</td><td><b>Restante das esquadrias \u2014 LYME</b> <span class="pill new">8.1</span></td><td><b>piso forrado</b></td><td><b>~14/09</b></td></tr>
    <tr><td>13</td><td><b>Marceneiro mede in loco</b> <span class="pill new">8.2</span></td><td><b>LVT j\xE1 instalado</b></td><td>set</td></tr>
    <tr><td>14</td><td>Projeto executivo da marcenaria fechado</td><td>medi\xE7\xE3o + nicho do forno</td><td>~28/09</td></tr>
    <tr><td>15</td><td><b>Instala\xE7\xE3o dos arm\xE1rios</b> <span class="pill new">8.2</span></td><td>projeto + produ\xE7\xE3o (~60 d)</td><td><b>~19/10</b></td></tr>
    <tr><td>16</td><td><b>Ara\xFAjo \u2014 banheiros, 2\xAA ida</b> (kit 5 pe\xE7as \xB7 torneira de bancada) <span class="pill new">8.1</span></td><td><b>gabinete e bancada instalados</b></td><td><b>ap\xF3s ~19/10</b></td></tr>
    <tr><td>17</td><td>Instala\xE7\xE3o de cooktop e forno</td><td>marcenaria + el\xE9trica</td><td>out/nov</td></tr>
  </table>
  <div class="note bad"><b>Os tr\xEAs encadeamentos que quebram tudo se invertidos:</b> (1) <b>cooktop definido \u2192 recorte \u2192 pedra</b>; (2) <b>piso instalado \u2192 marceneiro mede \u2192 marcenaria</b> \u2014 medir antes do piso gera erro de altura de rodap\xE9 e de gaveta em toda a cozinha; (3) <b>gabinete instalado \u2192 cota do acess\xF3rio \u2192 furo no porcelanato</b>. \xC9 esse terceiro que a data de 25/08 do Ara\xFAjo inverte \u2014 e com os arm\xE1rios em <b>~19/10</b>, a 2\xAA ida dele fica <b>quase dois meses</b> depois da primeira. Ver \xA72B.</div>
</section>
<!-- ============ 18. PEND\xCANCIAS ============ -->
<section>
  <h3>18 \xB7 Pend\xEAncias abertas</h3>
  <table>
    <tr><th style="width:80px">Prazo</th><th>Pend\xEAncia</th><th>Quem resolve</th></tr>
    <tr><td><span class="pill no">HOJE</span></td><td>Ligar pra Destro \u2014 estorno de 12 caixas + acerto de insumos + combinar subida da carga</td><td>Lucas</td></tr>
    <tr><td><span class="pill ok">\u2713 FEITO</span></td><td>Endere\xE7o reconciliado \u2014 Elektro concluiu a liga\xE7\xE3o em 03/09 (UC 49211331)</td><td>Lucas</td></tr>
    <tr><td><span class="pill no">HOJE</span></td><td>Agendar medi\xE7\xE3o da Feijor para 19\u201321/08, com cooktop presente</td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">HOJE</span></td><td>CAIXA: o que \xE9 a taxa de R$ 4.000 e <b>qual a validade da aprova\xE7\xE3o de cr\xE9dito</b></td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">HOJE</span></td><td>Prefeitura: al\xEDquota de ITBI, al\xEDquota reduzida SFH, base de c\xE1lculo, prazo da guia</td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">HOJE</span></td><td>RI Atibaia: emolumentos + <b>pedir o desconto de 50% do art. 290</b> no protocolo</td><td>Lucas</td></tr>
    <tr><td><span class="pill bad">HOJE</span></td><td><b>LYME: cobrar o 3\xBA box</b> (contrato s\xF3 tem 2) + confirmar cor do box do item 5 (saiu BRANCO) + passar a restri\xE7\xE3o dos 200 mm sob o cooktop</td><td>Lucas</td></tr>
    <tr><td><span class="pill go">15\u201316/08</span></td><td>Visita: 8 medi\xE7\xF5es da se\xE7\xE3o 7</td><td>Lucas</td></tr>
    <tr><td><span class="pill ok">FECHADO</span></td><td><s>Fechadura extraviada</s> \u2014 <b>chegou e est\xE1 instalada</b> <span class="pill new">8.2</span></td><td>\u2014</td></tr>
    <tr><td><span class="pill ok">\u2713 FEITO 26/08</span></td><td><b>Feijor: pedra instalada</b> \u2014 recorte 56\xD749 conferido no cooktop f\xEDsico funcionou, chapa cortada e assentada. Ficou \xF3tima. <b>Gargalo n\xBA 1 encerrado</b> <span class="pill new">8.7</span></td><td>Lucas</td></tr>
    <tr><td><span class="pill no">ANTES DE 25/08</span></td><td><b>Listar o que a casa J\xC1 ENTREGA</b> \u2014 bacias, cubas, v\xE1lvula de descarga, chuveiros, sif\xF5es, tanque. Pode apagar a d\xEDvida de R$ 1.800\u20133.600 das bacias <span class="pill new">8.2</span></td><td>Lucas</td></tr>
    <tr><td><span class="pill no">ANTES DE 25/08</span></td><td><b>Combinar com o Ara\xFAjo as DUAS idas</b> \u2014 a 2\xAA s\xF3 depois de ~19/10, quando os arm\xE1rios estiverem montados <span class="pill new">8.2</span></td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">~28/09</span></td><td><b>Cobrar data firme da f\xE1brica dos arm\xE1rios</b> \u2014 "60 dias" \xE9 seu chute, n\xE3o compromisso <span class="pill new">8.2</span></td><td>Lucas</td></tr>
    <tr><td><span class="pill go">assim que puder</span></td><td><b>Os R$ 250 de instala\xE7\xE3o da fechadura sa\xEDram ou n\xE3o?</b> Se voc\xEA instalou, o total cai R$ 250 <span class="pill new">8.2</span></td><td>Lucas</td></tr>
    <tr><td><span class="pill new">assim que puder</span></td><td><b>Confirmar se a ducha \xE9 R$ 664,71 no total ou por unidade</b> \u2014 swing de R$ 1.329. E de onde v\xEAm os <b>R$ 288,01</b> entre produtos e valor cobrado</td><td>Lucas</td></tr>
    <tr><td><span class="pill new">assim que puder</span></td><td>Conferir se o frete dos 3 kits foi cobrado <b>3 vezes</b> (3 pedidos separados, mesmo vendedor)</td><td>Lucas</td></tr>
    <tr><td><span class="pill ok">FECHADO</span></td><td><s>Conferir a M\xC3O da fechadura</s> \u2014 <b>bateu, est\xE1 instalada</b> <span class="pill new">8.2</span></td><td>\u2014</td></tr>
    <tr><td><span class="pill new">assim que puder</span></td><td>Confirmar <b>data de fechamento do cart\xE3o</b> \u2014 define se as compras caem em ago ou set</td><td>Lucas</td></tr>
    <tr><td><span class="pill go">at\xE9 28/09</span></td><td>Mandar pra projetista: nicho do forno + divis\xF3ria da gaveta sob o cooktop</td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">estrutural</span></td><td><b>Cart\xF5es s\xE3o o custo de vida ou s\xE3o adicionais?</b> Resposta muda o modelo inteiro</td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">estrutural</span></td><td>Amortiza\xE7\xE3o do pai: R$ 5.000/m\xEAs at\xE9 jan/27 ou R$ 5.000 uma vez?</td><td>Lucas</td></tr>
    <tr><td><span class="pill warm">estrutural</span></td><td>Confirmar que os R$ 218.000 do CDB est\xE3o <b>fora</b> dos R$ 58.349,94 do BTG. Se estiverem dentro, todo o bloco \xE0 vista muda</td><td>Lucas</td></tr>
    <tr><td><span class="pill go">antes de colar</span></td><td>Cotar autonivelante da \xE1rea social e revestimento da escada \u2014 R$ 4.000\u20138.500 fora do or\xE7amento</td><td>Lucas</td></tr>
    <tr><td><span class="pill go">out</span></td><td>Testar o cooktop assim que houver circuito 32 A energizado \u2014 antes que a garantia seja a \xFAnica sa\xEDda</td><td>Lucas</td></tr>
  </table>
</section>
<div class="foot">
  <b>Controle \u2014 Resid\xEAncia 8 \xB7 La Reserva II-B \xB7 Rev. 7 \xB7 14/08/2026</b><br>
  Substitui a rev. 6 (13/08/2026). Datas e dias \xFAteis calculados contra o calend\xE1rio de 2026 com feriados nacionais.<br>
  Pre\xE7os de mercado apurados ao vivo em 14/08/2026. Especifica\xE7\xF5es do forno extra\xEDdas do manual de instala\xE7\xE3o do fabricante (TC-80P2 Rev.03), n\xE3o de p\xE1gina de varejo.<br>
  Valores marcados "est." s\xE3o estimativa; valores marcados "premissa" precisam de confirma\xE7\xE3o antes da rev. 8.
</div>
</div>

<!-- ============ BOT\xC3O FLUTUANTE + MODAL (rev 10.12) ============ -->
<button class="fab" onclick="openExpenseModal()">\uFF0B Nova despesa</button>

<div class="modal-backdrop" id="modal-backdrop" onclick="if(event.target===this)closeExpenseModal()">
  <div class="modal">
    <button class="close" onclick="closeExpenseModal()">\xD7</button>
    <h3 id="modal-title">Nova despesa</h3>
    <input type="hidden" id="f-id">
    <div class="field">
      <label>Descri\xE7\xE3o</label>
      <input type="text" id="f-desc" placeholder="Ex.: Marcenaria JKV \u2014 1\xAA parcela" maxlength="120">
    </div>
    <div class="field row">
      <div>
        <label>Data da compra</label>
        <input type="date" id="f-date">
      </div>
      <div>
        <label>Valor total (R$)</label>
        <input type="number" id="f-amount" step="0.01" min="0" placeholder="0,00">
      </div>
    </div>
    <div class="field row">
      <div>
        <label>Categoria</label>
        <select id="f-cat">
          <option value="avista">\xC0 vista</option>
          <option value="parcelado" selected>Parcelado</option>
          <option value="recorrente">Recorrente (mensal)</option>
        </select>
      </div>
      <div>
        <label>Meio de pagamento</label>
        <input type="text" id="f-method" placeholder="Ex.: BTG Ultra Blue, Pix, boleto">
      </div>
    </div>
    <div class="field row" id="parc-row">
      <div>
        <label>N\xBA de parcelas</label>
        <input type="number" id="f-parc" min="1" max="60" value="1">
      </div>
      <div>
        <label>M\xEAs da 1\xAA parcela</label>
        <input type="month" id="f-first">
        <small>Ex.: 2026-10 para outubro/26</small>
      </div>
    </div>
    <div class="field">
      <label>Nota (opcional)</label>
      <textarea id="f-note" rows="2" placeholder="Contexto, pedido, contrato\u2026" maxlength="240"></textarea>
    </div>
    <div class="actions">
      <button class="btn danger" id="f-delete" style="display:none" onclick="deleteExpense()">Apagar</button>
      <button class="btn" onclick="closeExpenseModal()">Cancelar</button>
      <button class="btn primary" onclick="saveExpense()">Salvar</button>
    </div>
  </div>
</div>

<script>
// =========================================================
// Baseline (\xA712B hardcoded) \u2014 do rev 10.11
// Formato: {month:"2026-08", total:2299, items:[{name,value}]}
// =========================================================
const BASELINE = [
  {m:"2026-08", items:[["Boiler solar EcoSol 1/8",2299]]},
  {m:"2026-09", items:[
        ["Deck vigas + madeiramento extra (PIX 23/09) \u2014 \xE0 vista",3700],
    ["Deck alvenaria/cimento \u2014 \xE0 vista",1133],
    ["Deck MO Elson 1/2 (50% adiantamento) \u2014 \xE0 vista",2500],
    ["Projetor sala BTG 1/10",300],
["Condom\xEDnio + \xE1reas comuns + fundo obra",700],
    ["Assentos sanit\xE1rios 1/1",661],
    ["Feijor pedra ilha 1/8",630],
    ["Eletros + fechadura 1/1",3359],
    ["LYME esquadrias 1/5",3084],
    ["Boiler solar EcoSol 2/8",2299],
    ["Duchas + kits banheiros 1/1",1781],
    ["Financiamento CAIXA (SAC 420\xD7)",1700],
    ["Carrinho ML (entrada)",1674],
    ["AC \u2014 4 aparelhos 1/8",1282],
    ["Cama Zidi (entrada)",1059],
    ["Lumin\xE1rias (entrada)",1046],
  ]},
  {m:"2026-10", items:[
            ["Tino corte + produ\xE7\xE3o planejados (\xE0 vista sexta 03/10)",3351],
["Projetor sala BTG 2/10",300],
["Enxoval ML cama (len\xE7\xF3is) 1/1",307],["Enxoval ML cozinha (jantar+faqueiro+copos+panelas) 1/1",730],["Enxoval ML banho (clinks+toalha+lixeira+PH) 1/1",404],
    ["Condom\xEDnio",700],["CAIXA",1700],["Boiler 3/8",2299],["Feijor 2/8",630],["AC 2/8",1282],["LYME 2/5",3084],
    ["Lumin\xE1rias 1/9",51],["Cama Zidi 1/10",386],["Piso Destro 1/12",808],["Nivelante 1/8",64],
    ["Deck cumaru 1/7",1349],["Cortinas 1/6",1121],["Spa Rome 1/10",678],["Carrinho ML 1/6",32],
    ["Aspirador Arno 1/10",43],["LYME 3\xBA box 1/5",306],
  ]},
  {m:"2026-11", items:[
        ["Projetor sala BTG 3/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Boiler 4/8",2299],["Feijor 3/8",630],["AC 3/8",1282],["LYME 3/5",3084],
    ["Lumin\xE1rias 2/9",51],["Cama Zidi 2/10",386],["Piso Destro 2/12",808],["Nivelante 2/8",64],
    ["Deck cumaru 2/7",1349],["Cortinas 2/6",1121],["Spa Rome 2/10",678],["Carrinho ML 2/6",32],
    ["Aspirador Arno 2/10",43],["LYME 3\xBA box 2/5",306],
  ]},
  {m:"2026-12", items:[
        ["Projetor sala BTG 4/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Boiler 5/8",2299],["Feijor 4/8",630],["AC 4/8",1282],["LYME 4/5",3084],
    ["Lumin\xE1rias 3/9",51],["Cama Zidi 3/10",386],["Piso Destro 3/12",808],["Nivelante 3/8",64],
    ["Deck cumaru 3/7",1349],["Cortinas 3/6",1121],["Spa Rome 3/10",678],["Carrinho ML 3/6",32],
    ["Aspirador Arno 3/10",43],["LYME 3\xBA box 3/5",306],
  ]},
  {m:"2027-01", items:[
        ["Projetor sala BTG 5/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Boiler 6/8",2299],["Feijor 5/8",630],["AC 5/8",1282],["LYME 5/5",3084],
    ["Lumin\xE1rias 4/9",51],["Cama Zidi 4/10",386],["Piso Destro 4/12",808],["Nivelante 4/8",64],
    ["Deck cumaru 4/7",1349],["Cortinas 4/6",1121],["Spa Rome 4/10",678],["Carrinho ML 4/6",32],
    ["Aspirador Arno 4/10",43],["LYME 3\xBA box 4/5",306],
  ]},
  {m:"2027-02", items:[
        ["Projetor sala BTG 6/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Boiler 7/8",2299],["Feijor 6/8",630],["AC 6/8",1282],
    ["Lumin\xE1rias 5/9",51],["Cama Zidi 5/10",386],["Piso Destro 5/12",808],["Nivelante 5/8",64],
    ["Deck cumaru 5/7",1349],["Cortinas 5/6",1121],["Spa Rome 5/10",678],["Carrinho ML 5/6",32],
    ["Aspirador Arno 5/10",43],["LYME 3\xBA box 5/5",306],
  ]},
  {m:"2027-03", items:[
        ["Projetor sala BTG 7/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Boiler 8/8",2299],["Feijor 7/8",630],["AC 7/8",1282],
    ["Lumin\xE1rias 6/9",51],["Cama Zidi 6/10",386],["Piso Destro 6/12",808],["Nivelante 6/8",64],
    ["Deck cumaru 6/7",1349],["Cortinas 6/6",1121],["Spa Rome 6/10",678],["Carrinho ML 6/6",32],
    ["Aspirador Arno 6/10",43],
  ]},
  {m:"2027-04", items:[
        ["Projetor sala BTG 8/10",300],
["Condom\xEDnio",700],["CAIXA",1700],["Feijor 8/8",630],["AC 8/8",1282],
    ["Lumin\xE1rias 7/9",51],["Cama Zidi 7/10",386],["Piso Destro 7/12",808],["Nivelante 7/8",64],
    ["Deck cumaru 7/7",1349],["Spa Rome 7/10",678],["Aspirador Arno 7/10",43],
  ]},
  {m:"2027-05", items:[
        ["Projetor sala BTG 9/10",300],
["Condom\xEDnio",700],["CAIXA",1700],
    ["Lumin\xE1rias 8/9",51],["Cama Zidi 8/10",386],["Piso Destro 8/12",808],["Nivelante 8/8",64],
    ["Spa Rome 8/10",678],["Aspirador Arno 8/10",43],
  ]},
  {m:"2027-06", items:[
        ["Projetor sala BTG 10/10",300],
["Condom\xEDnio",700],["CAIXA",1700],
    ["Lumin\xE1rias 9/9",51],["Cama Zidi 9/10",386],["Piso Destro 9/12",808],
    ["Spa Rome 9/10",678],["Aspirador Arno 9/10",43],
  ]},
  {m:"2027-07", items:[
    ["Condom\xEDnio",700],["CAIXA",1700],
    ["Cama Zidi 10/10",386],["Piso Destro 10/12",808],
    ["Spa Rome 10/10",678],["Aspirador Arno 10/10",43],
  ]},
  {m:"2027-08", items:[["Condom\xEDnio",700],["CAIXA",1700],["Piso Destro 11/12",808]]},
  {m:"2027-09", items:[["Condom\xEDnio",700],["CAIXA",1700],["Piso Destro 12/12",808]]},
  {m:"2027-10", items:[["Condom\xEDnio",700],["CAIXA",1700]]},
  {m:"2027-11", items:[["Condom\xEDnio",700],["CAIXA",1700]]},
  {m:"2027-12", items:[["Condom\xEDnio",700],["CAIXA",1700]]},
];

// =========================================================
// localStorage helpers
// =========================================================
const KEY = 'casa-la-reserva-expenses';
const STAMP_KEY = 'casa-la-reserva-updated';
function loadCustom(){try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){return[]}}
function saveCustom(arr){localStorage.setItem(KEY,JSON.stringify(arr));localStorage.setItem(STAMP_KEY,new Date().toISOString());renderAll()}
function loadStamp(){return localStorage.getItem(STAMP_KEY)}

// =========================================================
// Fluxo por m\xEAs \u2014 soma baseline + custom
// =========================================================
function monthKey(y,m){return y+"-"+String(m).padStart(2,"0")}
function parseMonth(mk){const [y,m]=mk.split("-").map(Number);return {y,m}}
function nextMonth(mk){const {y,m}=parseMonth(mk);return m===12?monthKey(y+1,1):monthKey(y,m+1)}
function monthLabel(mk){const {y,m}=parseMonth(mk);const names=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];return names[m-1]+"/"+String(y).slice(2)}
function currentMonthKey(){const d=new Date();return monthKey(d.getFullYear(),d.getMonth()+1)}

function expandCustom(exp){
  // retorna [{month,item,value}]
  const out=[];
  const total=parseFloat(exp.amount)||0;
  if(!total) return out;
  if(exp.cat==='avista'){
    const mk=exp.date?exp.date.slice(0,7):currentMonthKey();
    out.push({month:mk, item:exp.desc+" (\xE0 vista)", value:total});
  } else if(exp.cat==='parcelado'){
    const n=Math.max(1,parseInt(exp.parc)||1);
    const per=total/n;
    let mk=exp.first||currentMonthKey();
    for(let i=1;i<=n;i++){
      out.push({month:mk, item:exp.desc+" "+i+"/"+n, value:per});
      mk=nextMonth(mk);
    }
  } else if(exp.cat==='recorrente'){
    let mk=exp.first||currentMonthKey();
    // 24 meses de proje\xE7\xE3o
    for(let i=0;i<24;i++){
      out.push({month:mk, item:exp.desc+" (recorrente)", value:total});
      mk=nextMonth(mk);
    }
  }
  return out;
}

function buildMonthMatrix(){
  const custom=loadCustom();
  const matrix={};
  // baseline
  BASELINE.forEach(row=>{
    matrix[row.m]=matrix[row.m]||{total:0,items:[]};
    row.items.forEach(([name,val])=>{
      matrix[row.m].total+=val;
      matrix[row.m].items.push({name,val,src:'baseline'});
    });
  });
  // custom
  custom.forEach(exp=>{
    expandCustom(exp).forEach(({month,item,value})=>{
      matrix[month]=matrix[month]||{total:0,items:[]};
      matrix[month].total+=value;
      matrix[month].items.push({name:item,val:value,src:'custom',id:exp.id});
    });
  });
  // ordena por m\xEAs
  const keys=Object.keys(matrix).sort();
  return keys.map(k=>({month:k, ...matrix[k]}));
}

// =========================================================
// Render
// =========================================================
const BRL=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:0,maximumFractionDigits:0});
const BRL2=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:0,maximumFractionDigits:2});

function renderMonthGrid(){
  const grid=document.getElementById('month-grid');
  if(!grid) return;
  const matrix=buildMonthMatrix();
  if(!matrix.length){grid.innerHTML='<div style="color:var(--dim2);padding:20px;text-align:center">sem dados</div>';return}
  const max=Math.max(...matrix.map(r=>r.total));
  const today=currentMonthKey();
  grid.innerHTML=matrix.map(row=>{
    const pct=Math.round((row.total/max)*100);
    let cls='mrow';
    if(row.month<today)cls+=' past';
    else if(pct>=90)cls+=' peak';
    else if(pct>=60)cls+=' plateau';
    else cls+=' calm';
    const items=row.items.sort((a,b)=>b.val-a.val);
    const detailsRows=items.map(it=>{
      const del=it.src==='custom'?\`<button class="del-item" title="apagar despesa custom" onclick="event.stopPropagation();editExpense('\${it.id}')">\u270E</button>\`:'';
      const tag=it.src==='custom'?'<span class="pill new" style="font-size:9px;padding:0 5px;margin-right:5px">custom</span>':'';
      return \`<tr><td style="width:70%">\${tag}\${it.name}</td><td class="n" style="text-align:right;font-family:Archivo;font-weight:700">\${BRL(it.val)}</td><td style="width:30px">\${del}</td></tr>\`;
    }).join('');
    return \`<div class="\${cls}" onclick="this.querySelector('.mdetails').classList.toggle('open');this.querySelector('.mtoggle').textContent=this.querySelector('.mdetails').classList.contains('open')?'\u25B4':'\u25BE'">
      <div class="mlabel">\${monthLabel(row.month)}</div>
      <div class="mbar"><span style="width:\${pct}%"></span></div>
      <div class="mval">\${BRL(row.total)}</div>
      <button class="mtoggle">\u25BE</button>
      <div class="mdetails"><table>\${detailsRows}</table></div>
    </div>\`;
  }).join('');
}

function renderCustomList(){
  const wrap=document.getElementById('custom-rows');
  if(!wrap) return;
  const custom=loadCustom();
  if(!custom.length){wrap.innerHTML='<div class="empty">nenhuma despesa customizada ainda \u2014 clique em <b>"+ despesa"</b> pra come\xE7ar</div>';return}
  wrap.innerHTML=custom.sort((a,b)=>(b.date||'').localeCompare(a.date||'')).map(e=>{
    const catLabel={avista:'\xE0 vista',parcelado:\`\${e.parc}\xD7 a partir de \${monthLabel(e.first||currentMonthKey())}\`,recorrente:\`\${BRL(parseFloat(e.amount)||0)}/m\xEAs desde \${monthLabel(e.first||currentMonthKey())}\`}[e.cat];
    const pillCls={avista:'ok',parcelado:'new',recorrente:'warm'}[e.cat];
    return \`<div class="custom-row">
      <div class="desc">\${e.desc}\${e.note?\`<small>\${e.note}</small>\`:''}</div>
      <div class="amt">\${BRL2(parseFloat(e.amount)||0)}</div>
      <div class="cond">\${catLabel||''}</div>
      <div><span class="pill \${pillCls}">\${e.method||'\u2014'}</span></div>
      <button class="del" title="editar" onclick="editExpense('\${e.id}')">\u270E</button>
    </div>\`;
  }).join('');
}

function renderStamp(){
  const el=document.getElementById('update-time');
  if(!el) return;
  const iso=loadStamp();
  if(!iso){el.textContent='sem edi\xE7\xF5es \u2014 s\xF3 rev 10.16 baseline';return}
  const d=new Date(iso);
  const dt=d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'});
  const tm=d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  el.textContent=\`\${dt} \${tm}\`;
}

function renderAll(){renderMonthGrid();renderCustomList();renderStamp()}

// =========================================================
// Modal
// =========================================================
function openExpenseModal(id){
  const back=document.getElementById('modal-backdrop');
  document.getElementById('f-id').value='';
  document.getElementById('f-desc').value='';
  document.getElementById('f-date').value=new Date().toISOString().slice(0,10);
  document.getElementById('f-amount').value='';
  document.getElementById('f-cat').value='parcelado';
  document.getElementById('f-method').value='';
  document.getElementById('f-parc').value='1';
  document.getElementById('f-first').value=currentMonthKey();
  document.getElementById('f-note').value='';
  document.getElementById('modal-title').textContent='Nova despesa';
  document.getElementById('f-delete').style.display='none';
  if(id){
    const e=loadCustom().find(x=>x.id===id);
    if(e){
      document.getElementById('f-id').value=e.id;
      document.getElementById('f-desc').value=e.desc||'';
      document.getElementById('f-date').value=e.date||'';
      document.getElementById('f-amount').value=e.amount||'';
      document.getElementById('f-cat').value=e.cat||'parcelado';
      document.getElementById('f-method').value=e.method||'';
      document.getElementById('f-parc').value=e.parc||1;
      document.getElementById('f-first').value=e.first||'';
      document.getElementById('f-note').value=e.note||'';
      document.getElementById('modal-title').textContent='Editar despesa';
      document.getElementById('f-delete').style.display='inline-block';
    }
  }
  back.classList.add('open');
}
function closeExpenseModal(){document.getElementById('modal-backdrop').classList.remove('open')}
function editExpense(id){openExpenseModal(id)}

function saveExpense(){
  const id=document.getElementById('f-id').value||('e_'+Date.now()+'_'+Math.random().toString(36).slice(2,7));
  const desc=document.getElementById('f-desc').value.trim();
  const amount=parseFloat(document.getElementById('f-amount').value);
  if(!desc){alert('Descri\xE7\xE3o obrigat\xF3ria');return}
  if(!amount||amount<=0){alert('Valor precisa ser > 0');return}
  const exp={
    id, desc,
    date:document.getElementById('f-date').value,
    amount,
    cat:document.getElementById('f-cat').value,
    method:document.getElementById('f-method').value.trim(),
    parc:parseInt(document.getElementById('f-parc').value)||1,
    first:document.getElementById('f-first').value||currentMonthKey(),
    note:document.getElementById('f-note').value.trim(),
  };
  const all=loadCustom().filter(x=>x.id!==id);
  all.push(exp);
  saveCustom(all);
  closeExpenseModal();
}

function deleteExpense(){
  const id=document.getElementById('f-id').value;
  if(!id) return;
  if(!confirm('Apagar essa despesa?')) return;
  saveCustom(loadCustom().filter(x=>x.id!==id));
  closeExpenseModal();
}

// Init
document.addEventListener('DOMContentLoaded',renderAll);
<\/script>

</body>
</html>`;
var worker_default = {
  async fetch(request, env, ctx) {
    return new Response(HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache, must-revalidate",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "referrer-policy": "no-referrer"
      }
    });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
