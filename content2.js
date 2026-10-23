/* Nuri practica — teoría: congiuntivo, condizionale, imperativo y formas no personales */
(function (g) {
  'use strict';
  var M = g.MODULES;
  function add(m) { M.push(m); }

  /* ================= CONGIUNTIVO ================= */
  add({ id: 'cong_pres', grp: 'Congiuntivo', title: 'Congiuntivo presente', tenses: ['cong_pres'], kind: 'fin',
    theory:
    '<h3>Formación</h3>' +
    '<table><tr><th></th><th>-ARE</th><th>-ERE</th><th>-IRE</th><th>-IRE (-isc-)</th></tr>' +
    '<tr><td>che io</td><td>parl<b>i</b></td><td>vend<b>a</b></td><td>dorm<b>a</b></td><td>fin<b>isca</b></td></tr>' +
    '<tr><td>che tu</td><td>parl<b>i</b></td><td>vend<b>a</b></td><td>dorm<b>a</b></td><td>fin<b>isca</b></td></tr>' +
    '<tr><td>che lui/lei</td><td>parl<b>i</b></td><td>vend<b>a</b></td><td>dorm<b>a</b></td><td>fin<b>isca</b></td></tr>' +
    '<tr><td>che noi</td><td>parl<b>iamo</b></td><td>vend<b>iamo</b></td><td>dorm<b>iamo</b></td><td>fin<b>iamo</b></td></tr>' +
    '<tr><td>che voi</td><td>parl<b>iate</b></td><td>vend<b>iate</b></td><td>dorm<b>iate</b></td><td>fin<b>iate</b></td></tr>' +
    '<tr><td>che loro</td><td>parl<b>ino</b></td><td>vend<b>ano</b></td><td>dorm<b>ano</b></td><td>fin<b>iscano</b></td></tr></table>' +
    '<p>Las <b>tres personas del singular son iguales</b>; por eso conviene poner el pronombre (che io, che tu, che lui).</p>' +
    '<h3>Irregulares</h3>' +
    '<p>essere: <b>sia, sia, sia, siamo, siate, siano</b> · avere: <b>abbia</b>, abbia, abbia, abbiamo, abbiate, abbiano · andare: <b>vada</b>… vadano · fare: <b>faccia</b>… · dire: <b>dica</b>… · venire: <b>venga</b>… · potere: <b>possa</b>… · volere: <b>voglia</b>… · dovere: <b>debba</b>… (noi dobbiamo) · sapere: <b>sappia</b>… · stare: <b>stia</b>… · dare: <b>dia</b>… · uscire: <b>esca</b>… · bere: <b>beva</b>… · scegliere: <b>scelga</b>… · rimanere: <b>rimanga</b>…</p>' +
    '<h3>¿Cuándo se usa el congiuntivo?</h3><ul>' +
    '<li>Tras verbos de <b>opinión / duda</b>: credo, penso, immagino, mi sembra, dubito che… <i>Penso che lui sia a casa.</i></li>' +
    '<li>Tras verbos de <b>deseo / voluntad / orden</b>: voglio, desidero, spero, preferisco, ordino che… <i>Voglio che tu venga.</i></li>' +
    '<li>Tras verbos de <b>sentimiento</b>: sono contento, ho paura, mi dispiace che… <i>Mi dispiace che tu stia male.</i></li>' +
    '<li>Tras <b>conjunciones</b>: affinché, perché (finalidad), benché, sebbene, nonostante, a patto che, a meno che non, prima che, purché, senza che.</li>' +
    '<li>Tras expresiones impersonales: è necessario, è importante, bisogna, è possibile, è meglio, basta che… <i>Bisogna che tu studi.</i></li>' +
    '<li>Con superlativos relativos y <i>il primo, l\'unico, l\'ultimo</i>: <i>È il film più bello che io abbia visto.</i></li></ul>' +
    '<p><b>Regla de oro:</b> si el sujeto de las dos oraciones es el mismo, se usa <b>di + infinitivo</b>, no congiuntivo: <i>Penso di essere pronto</i> (no «penso che io sia pronto»).</p>' +
    '<p><b>Concordancia:</b> el congiuntivo presente expresa contemporaneidad o futuro respecto a la principal en presente.</p>' });

  add({ id: 'cong_pass', grp: 'Congiuntivo', title: 'Congiuntivo passato', tenses: ['cong_pass'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Congiuntivo presente de essere o avere + participio passato</b>: che io abbia mangiato, che lei sia andata. Cuidado con essere: noi <b>siamo</b>, voi <b>siate</b> (che noi siamo andati, che voi siate andati). Reflexivos: che io mi sia alzato/a.</p>' +
    '<table><tr><th></th><th>mangiare</th><th>andare</th></tr>' +
    '<tr><td>che io</td><td>abbia mangiato</td><td>sia andato/a</td></tr>' +
    '<tr><td>che tu</td><td>abbia mangiato</td><td>sia andato/a</td></tr>' +
    '<tr><td>che lui/lei</td><td>abbia mangiato</td><td>sia andato/a</td></tr>' +
    '<tr><td>che noi</td><td>abbiamo mangiato</td><td>siamo andati/e</td></tr>' +
    '<tr><td>che voi</td><td>abbiate mangiato</td><td>siate andati/e</td></tr>' +
    '<tr><td>che loro</td><td>abbiano mangiato</td><td>siano andati/e</td></tr></table>' +
    '<h3>Uso</h3><ul><li>Expresa una acción <b>anterior</b> a la de la principal cuando esta está en presente o futuro: <i>Penso che lui abbia già mangiato.</i> · <i>Credo che siano arrivati ieri.</i></li>' +
    '<li>También para un pasado que sigue siendo relevante: <i>Spero che tu abbia dormito bene.</i></li></ul>' +
    '<p>Mismos disparadores que el congiuntivo presente (credo che, spero che, è possibile che, benché…).</p>' });

  add({ id: 'cong_imperf', grp: 'Congiuntivo', title: 'Congiuntivo imperfetto', tenses: ['cong_imperf'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p>Raíz + vocal temática + <b>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</b>:</p>' +
    '<table><tr><th></th><th>parlare</th><th>vendere</th><th>dormire</th></tr>' +
    '<tr><td>che io</td><td>parla<b>ssi</b></td><td>vende<b>ssi</b></td><td>dormi<b>ssi</b></td></tr>' +
    '<tr><td>che tu</td><td>parla<b>ssi</b></td><td>vende<b>ssi</b></td><td>dormi<b>ssi</b></td></tr>' +
    '<tr><td>che lui/lei</td><td>parla<b>sse</b></td><td>vende<b>sse</b></td><td>dormi<b>sse</b></td></tr>' +
    '<tr><td>che noi</td><td>parla<b>ssimo</b></td><td>vende<b>ssimo</b></td><td>dormi<b>ssimo</b></td></tr>' +
    '<tr><td>che voi</td><td>parla<b>ste</b></td><td>vende<b>ste</b></td><td>dormi<b>ste</b></td></tr>' +
    '<tr><td>che loro</td><td>parla<b>ssero</b></td><td>vende<b>ssero</b></td><td>dormi<b>ssero</b></td></tr></table>' +
    '<h3>Irregulares</h3><p><b>essere</b>: fossi, fossi, fosse, fossimo, foste, fossero · <b>fare</b>: facessi… · <b>dire</b>: dicessi… · <b>bere</b>: bevessi… · <b>dare</b>: dessi, dessi, desse, dessimo, deste, dessero · <b>stare</b>: stessi, stessi, stesse, stessimo, steste, stessero.</p>' +
    '<h3>Usos</h3><ul>' +
    '<li><b>Periodo ipotetico de la irrealidad (presente)</b>: <i>Se io avessi tempo, viaggerei di più.</i> (se + cong. imperfetto → condizionale presente)</li>' +
    '<li>Tras verbo principal en <b>pasado o condicional</b> (contemporaneidad): <i>Pensavo che lui fosse a casa. Vorrei che tu venissi.</i></li>' +
    '<li><b>Desiderio irrealizable</b>: <i>Magari fossi ricco! Se solo avessi più tempo!</i></li>' +
    '<li>Tras <i>come se</i>: <i>Parla come se sapesse tutto.</i></li></ul>' });

  add({ id: 'cong_trap', grp: 'Congiuntivo', title: 'Congiuntivo trapassato', tenses: ['cong_trap'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Congiuntivo imperfetto de essere o avere + participio passato</b>: avessi mangiato, fossi andato/a, mi fossi alzato/a.</p>' +
    '<table><tr><th></th><th>mangiare</th><th>andare</th></tr>' +
    '<tr><td>che io</td><td>avessi mangiato</td><td>fossi andato/a</td></tr>' +
    '<tr><td>che tu</td><td>avessi mangiato</td><td>fossi andato/a</td></tr>' +
    '<tr><td>che lui/lei</td><td>avesse mangiato</td><td>fosse andato/a</td></tr>' +
    '<tr><td>che noi</td><td>avessimo mangiato</td><td>fossimo andati/e</td></tr>' +
    '<tr><td>che voi</td><td>aveste mangiato</td><td>foste andati/e</td></tr>' +
    '<tr><td>che loro</td><td>avessero mangiato</td><td>fossero andati/e</td></tr></table>' +
    '<h3>Usos</h3><ul>' +
    '<li><b>Periodo ipotetico de la irrealidad (pasado)</b>: <i>Se avessi studiato, avrei superato l\'esame.</i> (se + cong. trapassato → condizionale passato)</li>' +
    '<li>Tras verbo principal en pasado o condicional, para acción <b>anterior</b>: <i>Pensavo che avesse già mangiato.</i> · <i>Avrei voluto che tu fossi venuto.</i></li>' +
    '<li>Lamento o deseo imposible: <i>Magari fossi partito prima!</i></li>' +
    '<li>Con <i>come se</i> en pasado: <i>Mi guardava come se non mi avesse mai visto.</i></li></ul>' +
    '<h3>Tabla de concordancia (consecutio temporum)</h3>' +
    '<table><tr><th>Principal</th><th>Subordinada contemporánea</th><th>Subordinada anterior</th></tr>' +
    '<tr><td>presente / futuro</td><td>cong. presente</td><td>cong. passato</td></tr>' +
    '<tr><td>passato / condizionale</td><td>cong. imperfetto</td><td>cong. trapassato</td></tr></table>' });

  /* ================= CONDIZIONALE ================= */
  add({ id: 'cond_pres', grp: 'Condizionale', title: 'Condizionale presente', tenses: ['cond_pres'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p>Misma raíz que el <b>futuro semplice</b> + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>.</p>' +
    '<table><tr><th></th><th>parlare</th><th>vendere</th><th>dormire</th></tr>' +
    '<tr><td>io</td><td>parl<b>erei</b></td><td>vend<b>erei</b></td><td>dorm<b>irei</b></td></tr>' +
    '<tr><td>tu</td><td>parl<b>eresti</b></td><td>vend<b>eresti</b></td><td>dorm<b>iresti</b></td></tr>' +
    '<tr><td>lui/lei</td><td>parl<b>erebbe</b></td><td>vend<b>erebbe</b></td><td>dorm<b>irebbe</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>eremmo</b></td><td>vend<b>eremmo</b></td><td>dorm<b>iremmo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>ereste</b></td><td>vend<b>ereste</b></td><td>dorm<b>ireste</b></td></tr>' +
    '<tr><td>loro</td><td>parl<b>erebbero</b></td><td>vend<b>erebbero</b></td><td>dorm<b>irebbero</b></td></tr></table>' +
    '<p>Mismas irregularidades y ortografía que el futuro: essere sarei · avere avrei · andare andrei · potere potrei · dovere dovrei · volere vorrei · fare farei · venire verrei · vedere vedrei · sapere saprei · dare darei · stare starei · bere berrei · cercare cercherei · mangiare mangerei.</p>' +
    '<h3>Usos</h3><ul>' +
    '<li><b>Cortesía</b>: <i>Vorrei un caffè. Potrebbe aiutarmi?</i></li>' +
    '<li><b>Deseo</b>: <i>Mi piacerebbe viaggiare.</i></li>' +
    '<li><b>Consejo</b>: <i>Dovresti dormire di più.</i></li>' +
    '<li><b>Hipótesis</b> (periodo ipotetico, irrealidad en el presente): <i>Se avessi soldi, comprerei una casa.</i></li>' +
    '<li>Noticia no confirmada: <i>Secondo i giornali, il ministro si dimetterebbe.</i></li></ul>' });

  add({ id: 'cond_pass', grp: 'Condizionale', title: 'Condizionale passato', tenses: ['cond_pass'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Condizionale presente de essere o avere + participio passato</b>: avrei mangiato, sarei andato/a, mi sarei alzato/a.</p>' +
    '<table><tr><th></th><th>mangiare</th><th>andare</th></tr>' +
    '<tr><td>io</td><td>avrei mangiato</td><td>sarei andato/a</td></tr>' +
    '<tr><td>tu</td><td>avresti mangiato</td><td>saresti andato/a</td></tr>' +
    '<tr><td>lui/lei</td><td>avrebbe mangiato</td><td>sarebbe andato/a</td></tr>' +
    '<tr><td>noi</td><td>avremmo mangiato</td><td>saremmo andati/e</td></tr>' +
    '<tr><td>voi</td><td>avreste mangiato</td><td>sareste andati/e</td></tr>' +
    '<tr><td>loro</td><td>avrebbero mangiato</td><td>sarebbero andati/e</td></tr></table>' +
    '<h3>Usos</h3><ul>' +
    '<li><b>Hipótesis irreal en el pasado</b>: <i>Se avessi studiato, avrei superato l\'esame.</i></li>' +
    '<li><b>Deseo no cumplido / reproche</b>: <i>Avrei voluto venire. Avresti dovuto avvisarmi.</i></li>' +
    '<li><b>Futuro en el pasado</b> (después de un verbo de decir en pasado): <i>Ha detto che sarebbe arrivato alle otto. Mi promise che avrebbe telefonato.</i></li>' +
    '<li>Noticia no confirmada en el pasado: <i>Secondo la polizia, il ladro sarebbe fuggito.</i></li></ul>' });

  /* ================= IMPERATIVO ================= */
  add({ id: 'imp_pres', grp: 'Imperativo', title: 'Imperativo presente', tenses: ['imp_pres'], kind: 'imp', src: 'clase',
    theory:
    '<h3>Imperativo diretto (tu · noi · voi)</h3>' +
    '<p>El imperativo diretto se usa para <b>dar órdenes o consejos</b>: <i>Aprite la finestra, fa caldo! · Per andare a Firenze, prendi il treno, non la macchina.</i></p>' +
    '<p>El imperativo de <b>tu, noi y voi</b> es normalmente <b>igual al presente indicativo</b> del verbo:</p>' +
    '<ul><li><i>Telefoniamo a Fabio! · Comprate quel libro. È bellissimo! · Metti a posto quel libro! · Vediamo quel film che è più interessante. · Chiudete la porta, per favore. Fa freddo. · Finisci di studiare! · Partiamo domani. · Pulite la cucina dopo che l\'avete usata.</i></li></ul>' +
    '<p>El imperativo de la <b>2ª persona singolare (tu)</b> de los verbos en <b>-are</b>, en cambio, termina en <b>-a</b>: <i>Parla più lentamente che non capisco. · Mangia la frutta che ti fa bene! · Scusa, ma non posso venire con te oggi.</i></p>' +
    '<h3>Formación</h3>' +
    '<table><tr><th></th><th>am-are</th><th>ved-ere</th><th>apr-ire</th><th>fin-ire (-isc-)</th></tr>' +
    '<tr><td>tu</td><td>am<b>a</b></td><td>ved<b>i</b></td><td>apr<b>i</b></td><td>fin<b>isci</b></td></tr>' +
    '<tr><td>(Lei)</td><td>am<b>i</b></td><td>ved<b>a</b></td><td>apr<b>a</b></td><td>fin<b>isca</b></td></tr>' +
    '<tr><td>noi</td><td>am<b>iamo</b></td><td>ved<b>iamo</b></td><td>apr<b>iamo</b></td><td>fin<b>iamo</b></td></tr>' +
    '<tr><td>voi</td><td>am<b>ate</b></td><td>ved<b>ete</b></td><td>apr<b>ite</b></td><td>fin<b>ite</b></td></tr>' +
    '<tr><td>(Loro)</td><td>am<b>ino</b></td><td>ved<b>ano</b></td><td>apr<b>ano</b></td><td>fin<b>iscano</b></td></tr></table>' +
    '<p>Lei y Loro (cortesía) toman el congiuntivo presente. En <b>noi</b> equivale a «vamos a…».</p>' +
    '<h3>Verbos con imperativo irregular</h3>' +
    '<table><tr><th></th><th>tu</th><th>voi</th></tr>' +
    '<tr><td>essere</td><td><b>sii</b></td><td><b>siate</b></td></tr><tr><td>avere</td><td><b>abbi</b></td><td><b>abbiate</b></td></tr><tr><td>sapere</td><td><b>sappi</b></td><td><b>sappiate</b></td></tr></table>' +
    '<p>Los verbos <b>avere, essere y sapere</b> tienen el imperativo irregular en la 2ª persona singular (tu) y en la 2ª persona plural (voi). (noi: abbiamo, siamo, sappiamo.)</p>' +
    '<table><tr><th></th><th>tu</th></tr>' +
    '<tr><td>andare</td><td><b>va\' / vai</b></td></tr><tr><td>dare</td><td><b>da\' / dai</b></td></tr><tr><td>fare</td><td><b>fa\' / fai</b></td></tr><tr><td>stare</td><td><b>sta\' / stai</b></td></tr><tr><td>dire</td><td><b>di\'</b></td></tr></table>' +
    '<p>Los verbos <b>andare, dare, fare y stare</b> tienen una <b>doble forma</b> para el imperativo de 2ª persona singular (tu). El verbo <b>dire</b>, en cambio, tiene una sola forma: <b>di\'</b>. (voi: andate, date, fate, state, dite.) Otros irregulares: <b>venire</b> vieni · <b>uscire</b> esci · <b>tenere</b> tieni.</p>' +
    '<h3>Imperativo diretto negativo</h3>' +
    '<p>El imperativo negativo es normalmente igual a la <b>forma negativa del presente indicativo</b>: <i>Non telefoniamo a Fabio, è antipatico. · Non comprate quel libro. È davvero brutto! · Non vediamo quel film, è noiosissimo! · Non chiudete la porta per favore. Fa caldo. · Non partiamo domani. C\'è troppo traffico. · Non pulite la cucina. Lo faccio io.</i></p>' +
    '<p>La <b>2ª persona singolare (tu)</b>, en cambio, se forma con <b>non + el infinitivo del verbo</b>: <i>Non parlare così veloce che non capisco. · Non mettere a posto quel libro! · Non finire di studiare!</i></p>' +
    '<table><tr><th></th><th>am-are</th><th>ved-ere</th><th>apr-ire</th></tr>' +
    '<tr><td>tu</td><td>non am<b>are</b></td><td>non ved<b>ere</b></td><td>non apr<b>ire</b></td></tr>' +
    '<tr><td>noi</td><td>non am<b>iamo</b></td><td>non ved<b>iamo</b></td><td>non apr<b>iamo</b></td></tr>' +
    '<tr><td>voi</td><td>non am<b>ate</b></td><td>non ved<b>ete</b></td><td>non apr<b>ite</b></td></tr></table>' +
    '<h3>Imperativo diretto y pronombres</h3>' +
    '<p>Los pronombres directos, indirectos y combinados y las partículas <b>ci</b> y <b>ne</b> van <b>siempre unidos, como sufijo</b>, al imperativo diretto: <i>Andiamoci! · Guardali! · Compralo subito! · Parlatene! · Ditemi!</i></p>' +
    '<p>Con los verbos irregulares <b>andare, dare, fare, stare, dire</b>, los pronombres y las partículas <b>duplican la consonante inicial</b>: <i>Non sei andato alla biblioteca? <b>Vacci</b> domani. · <b>Dammi</b> una mano a cucinare, per favore. · Se non lo usi, <b>fanne</b> quello che vuoi. · Maria è molto malata, <b>stalle</b> vicino. · Che c\'è, cara? <b>Dimmi</b> tutto!</i></p>' +
    '<p>Con el pronombre <b>gli</b> no hay duplicación: <i>Va\' da tuo padre e <b>digli</b> tutto.</i> (También: <i>fagli, dagli</i>.)</p>' +
    '<p>Con <b>loro</b> no se pega el pronombre: <i>da\' loro · fa\' loro · di\' loro</i>.</p>' +
    '<p>Cuando el imperativo diretto es <b>negativo</b> hay <b>dos posibilidades</b>:</p>' +
    '<ul><li><b>a)</b> la partícula o el pronombre <b>precede</b> al imperativo: <i>Non ti piace il vino? Allora non <b>lo</b> bere! · Il cinema è pieno. Non <b>ci</b> andiamo! · Quel formaggio non è fresco. Non <b>lo</b> comprate!</i></li>' +
    '<li><b>b)</b> la partícula o el pronombre <b>se une</b> al imperativo: <i>Allora non berlo! · Non andiamoci! · Non compratelo!</i></li></ul>' +
    '<h3>Reflexivos</h3><p>También van pegados: <i>Alzati! Alziamoci! Alzatevi!</i> Negativo: <i>Non ti alzare / Non alzarti.</i></p>' +
    '<h3>Lo sai che…</h3><p>Cuando se quiere dar una orden o sugerir un comportamiento <b>general</b> (por ejemplo en las etiquetas de algunos productos) se usa a menudo el <b>infinitivo</b>, que funciona como un imperativo impersonal: <i>Conservare al fresco</i> (en un envase de comida). <i>Prendere dopo i pasti</i> (en una medicina).</p>' });

  /* ================= FORMAS NO PERSONALES ================= */
  add({ id: 'inf_pres', grp: 'Infinito', title: 'Infinito presente', tenses: ['inf_pres'], kind: 'nf',
    theory:
    '<h3>Formación</h3><p>Es la forma del diccionario: <b>-are / -ere / -ire</b> (y -arre, -orre, -urre: trarre, porre, tradurre). Los reflexivos terminan en <b>-si</b>: alzarsi, divertirsi.</p>' +
    '<h3>Usos</h3><ul><li><b>Como sustantivo</b>, con artículo: <i>Il mangiare è un piacere.</i> · <i>Il viaggiare stanca.</i></li>' +
    '<li><b>Después de preposiciones</b>: di, a, da, per, senza, prima di, invece di… <i>Penso di partire. Comincio a studiare. Esco senza mangiare.</i></li>' +
    '<li><b>Tras verbos modales</b>: potere, volere, dovere, sapere + inf.: <i>Posso entrare? Devo studiare.</i></li>' +
    '<li><b>Imperativo negativo (tu)</b>: <i>Non fumare!</i> · Instrucciones: <i>Mescolare bene.</i></li>' +
    '<li><b>Fare / lasciare / vedere / sentire + infinito</b>: <i>Lo faccio venire. Ti lascio dormire.</i></li>' +
    '<li><b>Prima di + infinito</b> (mismo sujeto): <i>Prima di uscire, chiudi la porta.</i></li></ul>' +
    '<p>Con pronombres, el infinitivo pierde la -e y los pega: <i>vederti, mangiarlo, alzarsi → Voglio alzarmi.</i></p>' });

  add({ id: 'inf_pass', grp: 'Infinito', title: 'Infinito passato', tenses: ['inf_pass'], kind: 'nf',
    theory:
    '<h3>Formación</h3><p><b>Infinitivo de essere o avere + participio passato</b>: avere mangiato (aver mangiato), essere andato/a, essersi alzato/a.</p>' +
    '<p>Es posible el truncamiento: <i>aver mangiato</i>, <i>esser partito</i>. El participio concuerda si el ausiliare es essere.</p>' +
    '<h3>Usos</h3><ul><li><b>Después di</b> (mismo sujeto, acción anterior): <i>Penso di aver fatto bene. Credo di essere arrivato in tempo.</i></li>' +
    '<li><b>Dopo + infinito passato</b> (mismo sujeto): <i>Dopo aver mangiato, sono uscito.</i> · <i>Dopo essere arrivata, ha chiamato.</i></li>' +
    '<li><b>Per</b> + inf. passato (causa): <i>Mi scuso per essere arrivato tardi.</i></li>' +
    '<li><b>Senza</b> / <b>Grazie a</b>: <i>Grazie per avermi aiutato.</i></li></ul>' +
    '<p><b>Clave:</b> «Dopo» exige infinito <b>passato</b> (dopo aver mangiato), mientras «prima di» exige infinito <b>presente</b> (prima di mangiare).</p>' });

  add({ id: 'part_pres', grp: 'Participio', title: 'Participio presente', tenses: ['part_pres'], kind: 'nf',
    theory:
    '<h3>Formación</h3><p>-are → <b>-ante</b> · -ere / -ire → <b>-ente</b> (a veces <b>-iente</b>).</p>' +
    '<p>parlare → parl<b>ante</b> · cantare → cant<b>ante</b> · studiare → studi<b>ante</b> · credere → cred<b>ente</b> · dipendere → dipend<b>ente</b> · dormire → dorm<b>iente</b> · divertire → divert<b>ente</b> · obbedire → obbedi<b>ente</b> · seguire → segu<b>ente</b> · partire → part<b>ente</b>.</p>' +
    '<h3>Características</h3><ul><li>Es poco frecuente como verbo; la mayoría de las veces funciona como <b>sustantivo</b> o <b>adjetivo</b>: <i>lo studente, il cantante, il dirigente, un film divertente, l\'anno seguente, la settimana prossima.</i></li>' +
    '<li>Tiene <b>género invariable</b> y plural en -i: il cantante / i cantanti, la cantante / le cantanti.</li>' +
    '<li>Se usa en el lenguaje burocrático / jurídico con valor verbal: <i>le persone aventi diritto, i fondi spettanti.</i></li></ul>' +
    '<p>No confundir con el <b>gerundio</b> (parlando) ni con el estar + gerundio.</p>' });

  add({ id: 'part_pass', grp: 'Participio', title: 'Participio passato', tenses: ['part_pass'], kind: 'nf', src: 'clase',
    theory:
    '<h3>Formación regular</h3><p>-are → <b>-ato</b> · -ere → <b>-uto</b> · -ire → <b>-ito</b>: parlato, venduto, dormito, finito.</p>' +
    '<h3>Irregulares frecuentes</h3>' +
    '<p>fare <b>fatto</b> · dire <b>detto</b> · scrivere <b>scritto</b> · leggere <b>letto</b> · prendere <b>preso</b> · mettere <b>messo</b> · chiudere <b>chiuso</b> · aprire <b>aperto</b> · vedere <b>visto</b> · venire <b>venuto</b> · essere/stare <b>stato</b> · rimanere <b>rimasto</b> · scegliere <b>scelto</b> · bere <b>bevuto</b> · vivere <b>vissuto</b> · nascere <b>nato</b> · morire <b>morto</b> · chiedere <b>chiesto</b> · rispondere <b>risposto</b> · decidere <b>deciso</b> · perdere <b>perso</b> · rompere <b>rotto</b> · offrire <b>offerto</b> · correre <b>corso</b> · spendere <b>speso</b> · accendere <b>acceso</b> · conoscere <b>conosciuto</b> · vincere <b>vinto</b> · dipingere <b>dipinto</b> · accorgersi <b>accorto</b> · dividere <b>diviso</b> · offendere <b>offeso</b> · spegnere <b>spento</b> · succedere <b>successo</b> · tradurre <b>tradotto</b>.</p>' +
    '<h3>Usos</h3><ul><li><b>Tiempos compuestos</b>: ho mangiato, sono andato.</li>' +
    '<li><b>Voz pasiva</b> (essere / venire + participio): <i>La casa è stata venduta.</i></li>' +
    '<li><b>Adjetivo</b>, concordando en género y número: <i>una porta chiusa, i libri letti.</i></li>' +
    '<li><b>Proposición participial</b> (valor temporal): <i>Finita la lezione, uscimmo. Arrivato a casa, telefonò.</i></li></ul>' +
    '<h3>Concordancia</h3><ul><li>Con <b>essere</b>: concuerda con el sujeto (Maria è partita).</li><li>Con <b>avere</b>: concuerda con los pronombres lo/la/li/le (Le ho viste) y no con el sujeto.</li></ul>' });

  add({ id: 'ger_pres', grp: 'Gerundio', title: 'Gerundio presente', tenses: ['ger_pres'], kind: 'nf',
    theory:
    '<h3>Formación</h3><p>-are → <b>-ando</b> · -ere / -ire → <b>-endo</b>: parlando, vendendo, dormendo, finendo.</p>' +
    '<p>Irregulares (raíz latina): fare → <b>facendo</b> · dire → <b>dicendo</b> · bere → <b>bevendo</b> · porre → <b>ponendo</b> · tradurre → <b>traducendo</b>. essere → <b>essendo</b> · avere → <b>avendo</b>.</p>' +
    '<p>Reflexivos: pronombre <b>pegado</b> al final: alzarsi → alzandosi · divertirsi → divertendosi.</p>' +
    '<h3>Usos</h3><ul><li><b>Stare + gerundio</b>: acción en curso: <i>Sto mangiando. Stavo dormendo.</i></li>' +
    '<li><b>Modo</b>: <i>Impara l\'italiano ascoltando musica.</i></li>' +
    '<li><b>Causa</b>: <i>Essendo stanco, sono andato a letto.</i></li>' +
    '<li><b>Tiempo (simultaneidad)</b>: <i>Camminando, ho incontrato un amico.</i></li>' +
    '<li><b>Condición</b>: <i>Studiando di più, passeresti l\'esame.</i></li></ul>' +
    '<p><b>Regla:</b> el sujeto del gerundio debe ser el mismo que el de la oración principal (salvo si se explicita: <i>Essendo il treno in ritardo, abbiamo aspettato</i>).</p>' });

  add({ id: 'ger_pass', grp: 'Gerundio', title: 'Gerundio passato', tenses: ['ger_pass'], kind: 'nf',
    theory:
    '<h3>Formación</h3><p><b>Gerundio de essere o avere + participio passato</b>: avendo mangiato, essendo andato/a, essendosi alzato/a.</p>' +
    '<h3>Usos</h3><ul><li><b>Anterioridad</b> respecto a la oración principal (valor temporal): <i>Avendo finito il lavoro, sono uscito.</i> (= Dopo che ho finito…)</li>' +
    '<li><b>Causa</b>: <i>Essendo arrivata tardi, ho perso il treno.</i></li>' +
    '<li><b>Concesión</b> (con pur): <i>Pur avendo studiato, non ha superato l\'esame.</i></li></ul>' +
    '<p>El participio concuerda con el sujeto cuando el ausiliare es essere: <i>Essendo arrivate presto, …</i></p>' +
    '<p><b>Contraste:</b> «dopo aver mangiato» (infinito passato) y «avendo mangiato» (gerundio passato) son casi equivalentes.</p>' });

  g.MODULES = M;
})(typeof window !== 'undefined' ? window : globalThis);
