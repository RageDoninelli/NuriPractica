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
  add({ id: 'imp_pres', grp: 'Imperativo', title: 'Imperativo presente', tenses: ['imp_pres'], kind: 'imp',
    theory:
    '<h3>Formación</h3>' +
    '<table><tr><th></th><th>-ARE</th><th>-ERE</th><th>-IRE</th><th>-IRE (-isc-)</th></tr>' +
    '<tr><td>tu</td><td>parl<b>a</b></td><td>vend<b>i</b></td><td>dorm<b>i</b></td><td>fin<b>isci</b></td></tr>' +
    '<tr><td>Lei</td><td>parl<b>i</b></td><td>vend<b>a</b></td><td>dorm<b>a</b></td><td>fin<b>isca</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>iamo</b></td><td>vend<b>iamo</b></td><td>dorm<b>iamo</b></td><td>fin<b>iamo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>ate</b></td><td>vend<b>ete</b></td><td>dorm<b>ite</b></td><td>fin<b>ite</b></td></tr>' +
    '<tr><td>Loro</td><td>parl<b>ino</b></td><td>vend<b>ano</b></td><td>dorm<b>ano</b></td><td>fin<b>iscano</b></td></tr></table>' +
    '<p>El imperativo tiene forma propia solo en <b>tu, noi y voi</b>. Lei y Loro (formas de cortesía) toman el congiuntivo presente. En <b>noi</b> equivale a «vamos a…».</p>' +
    '<h3>Irregulares (tu / Lei / noi / voi / Loro)</h3>' +
    '<ul><li><b>essere</b>: sii · sia · siamo · siate · siano</li><li><b>avere</b>: abbi · abbia · abbiamo · abbiate · abbiano</li><li><b>andare</b>: va\' / vai · vada · andiamo · andate · vadano</li><li><b>fare</b>: fa\' / fai · faccia · facciamo · fate · facciano</li><li><b>dare</b>: da\' / dai · dia · diamo · date · diano</li><li><b>stare</b>: sta\' / stai · stia · stiamo · state · stiano</li><li><b>dire</b>: di\' · dica · diciamo · dite · dicano</li><li><b>sapere</b>: sappi · sappia · sappiamo · sappiate · sappiano</li><li><b>venire</b>: vieni · venga · veniamo · venite · vengano</li><li><b>uscire</b>: esci · esca · usciamo · uscite · escano</li></ul>' +
    '<h3>Negativo</h3><ul><li><b>tu</b>: <b>non + infinitivo</b>: <i>Non parlare! Non mangiare!</i></li><li>Lei, noi, voi, Loro: simplemente <b>non</b> + la misma forma: <i>Non parli. Non mangiate.</i></li></ul>' +
    '<h3>Con pronombres</h3><ul><li><b>tu, noi, voi</b>: pronombres <b>pegados</b> al final: <i>Alzati! Alziamoci! Alzatevi! Dimmi! Dallo!</i> (con va\', fa\', da\', sta\', di\' se duplica la consonante: <i>dammi, dimmi, fallo, dillo</i>; excepto con gli).</li><li><b>Lei y Loro</b>: pronombre <b>antes</b>: <i>Si accomodi! Mi dica!</i></li><li>En negativo con tu, el pronombre puede ir antes o pegado: <i>Non ti alzare / Non alzarti.</i></li></ul>' });

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
