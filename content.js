/* Nuri practica — teoría de los 21 módulos (explicaciones en español) */
(function (g) {
  'use strict';
  var M = [];
  function add(m) { M.push(m); }

  /* ================= INDICATIVO ================= */
  add({ id: 'ind_pres', grp: 'Indicativo', title: 'Presente', tenses: ['ind_pres'], kind: 'fin',
    theory:
    '<h3>Formación</h3>' +
    '<p>Se quita <b>-are / -ere / -ire</b> y se añaden las terminaciones:</p>' +
    '<table><tr><th></th><th>-ARE</th><th>-ERE</th><th>-IRE</th><th>-IRE (-isc-)</th></tr>' +
    '<tr><td>io</td><td>parl<b>o</b></td><td>vend<b>o</b></td><td>dorm<b>o</b></td><td>fin<b>isco</b></td></tr>' +
    '<tr><td>tu</td><td>parl<b>i</b></td><td>vend<b>i</b></td><td>dorm<b>i</b></td><td>fin<b>isci</b></td></tr>' +
    '<tr><td>lui/lei</td><td>parl<b>a</b></td><td>vend<b>e</b></td><td>dorm<b>e</b></td><td>fin<b>isce</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>iamo</b></td><td>vend<b>iamo</b></td><td>dorm<b>iamo</b></td><td>fin<b>iamo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>ate</b></td><td>vend<b>ete</b></td><td>dorm<b>ite</b></td><td>fin<b>ite</b></td></tr>' +
    '<tr><td>loro</td><td>parl<b>ano</b></td><td>vend<b>ono</b></td><td>dorm<b>ono</b></td><td>fin<b>iscono</b></td></tr></table>' +
    '<h3>Ortografía</h3><ul>' +
    '<li>Verbos en <b>-care / -gare</b> añaden <b>h</b> antes de <i>i</i> y <i>e</i>: cercare → cerc<b>h</b>i, cerc<b>h</b>iamo; pagare → pag<b>h</b>i.</li>' +
    '<li>Verbos en <b>-ciare / -giare / -iare</b> pierden la <i>i</i>: mangiare → mang<b>i</b> (no «mangii»), mangiamo.</li></ul>' +
    '<h3>Verbos -ire con -isc-</h3><p>finire, capire, preferire, pulire, costruire, spedire, restituire… llevan <b>-isc-</b> en io, tu, lui/lei y loro (no en noi y voi). Dormire, partire, sentire, aprire, servire, seguire <b>no</b> lo llevan.</p>' +
    '<h3>Irregulares clave</h3>' +
    '<table><tr><th></th><th>essere</th><th>avere</th><th>fare</th><th>andare</th><th>venire</th><th>dare</th><th>stare</th></tr>' +
    '<tr><td>io</td><td>sono</td><td>ho</td><td>faccio</td><td>vado</td><td>vengo</td><td>do</td><td>sto</td></tr>' +
    '<tr><td>tu</td><td>sei</td><td>hai</td><td>fai</td><td>vai</td><td>vieni</td><td>dai</td><td>stai</td></tr>' +
    '<tr><td>lui/lei</td><td>è</td><td>ha</td><td>fa</td><td>va</td><td>viene</td><td>dà</td><td>sta</td></tr>' +
    '<tr><td>noi</td><td>siamo</td><td>abbiamo</td><td>facciamo</td><td>andiamo</td><td>veniamo</td><td>diamo</td><td>stiamo</td></tr>' +
    '<tr><td>voi</td><td>siete</td><td>avete</td><td>fate</td><td>andate</td><td>venite</td><td>date</td><td>state</td></tr>' +
    '<tr><td>loro</td><td>sono</td><td>hanno</td><td>fanno</td><td>vanno</td><td>vengono</td><td>danno</td><td>stanno</td></tr></table>' +
    '<p>Otros: <b>dire</b> dico, dici, dice, diciamo, dite, dicono · <b>potere</b> posso, puoi, può, possiamo, potete, possono · <b>volere</b> voglio, vuoi, vuole, vogliamo, volete, vogliono · <b>dovere</b> devo, devi, deve, dobbiamo, dovete, devono · <b>sapere</b> so, sai, sa, sappiamo, sapete, sanno · <b>uscire</b> esco, esci, esce, usciamo, uscite, escono · <b>bere</b> bevo, bevi… · <b>tenere</b> tengo, tieni… · <b>salire</b> salgo, sali… · <b>scegliere</b> scelgo, scegli… · <b>rimanere</b> rimango, rimani…</p>' +
    '<h3>Usos</h3><ul><li>Acciones actuales y habituales: <i>Ogni giorno mangio alle due.</i></li><li>Verdades generales: <i>L\'acqua bolle a cento gradi.</i></li><li>Futuro próximo: <i>Domani parto per Roma.</i></li><li><b>stare + gerundio</b>: acción en curso: <i>Sto studiando.</i></li></ul>' });

  add({ id: 'ind_pp', grp: 'Indicativo', title: 'Passato prossimo', tenses: ['ind_pp'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Presente de essere o avere + participio passato.</b></p>' +
    '<p>Participio regular: -are → <b>-ato</b> · -ere → <b>-uto</b> · -ire → <b>-ito</b>.</p>' +
    '<h3>¿Essere o avere?</h3><ul>' +
    '<li><b>Essere</b>: verbos de movimiento y de cambio de estado (andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, nascere, morire, diventare, rimanere, restare, stare, essere, piacere, cadere), y <b>todos los reflexivos</b>. El participio <b>concuerda</b> con el sujeto: <i>Maria è andata; i ragazzi sono arrivati.</i></li>' +
    '<li><b>Avere</b>: verbos transitivos (con objeto directo) y la mayoría de los intransitivos: <i>Ho mangiato una mela. Ho dormito bene.</i> El participio no concuerda con el sujeto.</li></ul>' +
    '<h3>Participios irregulares frecuentes</h3>' +
    '<p>fare <b>fatto</b> · dire <b>detto</b> · scrivere <b>scritto</b> · leggere <b>letto</b> · prendere <b>preso</b> · mettere <b>messo</b> · chiudere <b>chiuso</b> · aprire <b>aperto</b> · vedere <b>visto</b> · venire <b>venuto</b> · essere/stare <b>stato</b> · rimanere <b>rimasto</b> · scegliere <b>scelto</b> · bere <b>bevuto</b> · vivere <b>vissuto</b> · nascere <b>nato</b> · morire <b>morto</b> · chiedere <b>chiesto</b> · rispondere <b>risposto</b> · decidere <b>deciso</b> · perdere <b>perso</b> · rompere <b>rotto</b> · offrire <b>offerto</b> · correre <b>corso</b> · spendere <b>speso</b> · accendere <b>acceso</b>.</p>' +
    '<h3>Con pronombres</h3><p>Con los pronombres lo, la, li, le el participio concuerda con ellos: <i>Ho comprato le mele → Le ho comprate.</i> Los reflexivos usan essere: <i>Mi sono svegliato/a.</i></p>' +
    '<h3>Usos</h3><ul><li>Acción terminada, con relación al presente: <i>Ieri ho visto un film.</i></li><li>Marcadores: ieri, stamattina, la settimana scorsa, due anni fa, già, ancora non.</li></ul>' });

  add({ id: 'ind_imperf', grp: 'Indicativo', title: 'Imperfetto', tenses: ['ind_imperf'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p>Raíz del infinitivo + <b>-vo, -vi, -va, -vamo, -vate, -vano</b> con la vocal temática (a/e/i):</p>' +
    '<table><tr><th></th><th>parlare</th><th>vendere</th><th>dormire</th></tr>' +
    '<tr><td>io</td><td>parl<b>avo</b></td><td>vend<b>evo</b></td><td>dorm<b>ivo</b></td></tr>' +
    '<tr><td>tu</td><td>parl<b>avi</b></td><td>vend<b>evi</b></td><td>dorm<b>ivi</b></td></tr>' +
    '<tr><td>lui/lei</td><td>parl<b>ava</b></td><td>vend<b>eva</b></td><td>dorm<b>iva</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>avamo</b></td><td>vend<b>evamo</b></td><td>dorm<b>ivamo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>avate</b></td><td>vend<b>evate</b></td><td>dorm<b>ivate</b></td></tr>' +
    '<tr><td>loro</td><td>parl<b>avano</b></td><td>vend<b>evano</b></td><td>dorm<b>ivano</b></td></tr></table>' +
    '<h3>Irregulares</h3><p><b>essere</b>: ero, eri, era, eravamo, eravate, erano.</p>' +
    '<p>Raíz latina: <b>fare</b> → facevo · <b>dire</b> → dicevo · <b>bere</b> → bevevo · <b>porre</b> → ponevo · <b>tradurre</b> → traducevo.</p>' +
    '<h3>Usos</h3><ul><li>Costumbres del pasado: <i>Da bambino giocavo ogni giorno.</i></li><li>Descripciones (físicas, de estado, del tiempo): <i>Era una bella giornata e faceva caldo.</i></li><li>Acción en curso interrumpida por otra: <i>Mangiavo quando è arrivato Marco.</i></li><li>Dos acciones simultáneas: <i>Mentre io leggevo, lei cucinava.</i></li><li>Edad y hora en el pasado: <i>Avevo dieci anni. Erano le tre.</i></li></ul>' +
    '<p><b>Passato prossimo vs imperfetto:</b> el prossimo cuenta el hecho puntual y terminado; el imperfetto describe el fondo, la costumbre o lo que estaba pasando.</p>' });

  add({ id: 'ind_trap_pross', grp: 'Indicativo', title: 'Trapassato prossimo', tenses: ['ind_trap_pross'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Imperfetto de essere o avere + participio passato</b>: avevo mangiato, ero andato/a, mi ero alzato/a.</p>' +
    '<p>La elección de ausiliare y la concordancia son las mismas que en el passato prossimo.</p>' +
    '<h3>Usos</h3><ul><li>Acción pasada <b>anterior</b> a otra acción también pasada: <i>Quando sono arrivato, il film era già cominciato.</i></li>' +
    '<li>Explica la causa de algo ocurrido en el pasado: <i>Ero stanco perché avevo lavorato tutto il giorno.</i></li>' +
    '<li>Marcadores: già, appena, non… ancora, prima di, dopo che, quando.</li></ul>' +
    '<p>Equivale al pretérito pluscuamperfecto español: «había comido» → <i>avevo mangiato</i>.</p>' });

  add({ id: 'ind_pass_rem', grp: 'Indicativo', title: 'Passato remoto', tenses: ['ind_pass_rem'], kind: 'fin',
    theory:
    '<h3>Formación regular</h3>' +
    '<table><tr><th></th><th>parlare</th><th>vendere</th><th>dormire</th></tr>' +
    '<tr><td>io</td><td>parl<b>ai</b></td><td>vend<b>ei / etti</b></td><td>dorm<b>ii</b></td></tr>' +
    '<tr><td>tu</td><td>parl<b>asti</b></td><td>vend<b>esti</b></td><td>dorm<b>isti</b></td></tr>' +
    '<tr><td>lui/lei</td><td>parl<b>ò</b></td><td>vend<b>é / ette</b></td><td>dorm<b>ì</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>ammo</b></td><td>vend<b>emmo</b></td><td>dorm<b>immo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>aste</b></td><td>vend<b>este</b></td><td>dorm<b>iste</b></td></tr>' +
    '<tr><td>loro</td><td>parl<b>arono</b></td><td>vend<b>erono / ettero</b></td><td>dorm<b>irono</b></td></tr></table>' +
    '<h3>Irregulares: regla «1ª, 3ª y 6ª»</h3>' +
    '<p>Muchos verbos en -ere son irregulares solo en <b>io, lui/lei y loro</b>; tu, noi y voi son regulares: prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b>.</p>' +
    '<p>essere: <b>fui, fosti, fu, fummo, foste, furono</b> · avere: <b>ebbi</b>, avesti, <b>ebbe</b>, avemmo, aveste, <b>ebbero</b> · fare: <b>feci</b>, facesti, <b>fece</b>, facemmo, faceste, <b>fecero</b> · dire: <b>dissi</b>, dicesti, <b>disse</b>… · venire: <b>venni</b>, venisti, <b>venne</b>… · volere: <b>volli</b>… · sapere: <b>seppi</b>… · vedere: <b>vidi</b>… · dare: <b>diedi/detti</b>… · stare: <b>stetti</b>… · bere: <b>bevvi</b>… · scrivere: <b>scrissi</b> · leggere: <b>lessi</b> · mettere: <b>misi</b> · chiudere: <b>chiusi</b> · vivere: <b>vissi</b> · nascere: <b>nacqui</b> · conoscere: <b>conobbi</b> · rimanere: <b>rimasi</b> · scegliere: <b>scelsi</b> · chiedere: <b>chiesi</b> · rispondere: <b>risposi</b> · decidere: <b>decisi</b> · cadere: <b>caddi</b> · rompere: <b>ruppi</b> · vincere: <b>vinsi</b>.</p>' +
    '<h3>Usos</h3><ul><li>Hechos históricos ya lejanos, sin relación con el presente: <i>Dante nacque nel 1265. Colombo scoprì l\'America nel 1492.</i></li>' +
    '<li>En la narración escrita (cuentos, novelas), y en el habla de algunas regiones del sur.</li>' +
    '<li>En el italiano hablado del norte se sustituye por el passato prossimo.</li></ul>' });

  add({ id: 'ind_trap_rem', grp: 'Indicativo', title: 'Trapassato remoto', tenses: ['ind_trap_rem'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Passato remoto de essere o avere + participio passato</b>: ebbi mangiato, fui andato/a, ebbe finito.</p>' +
    '<h3>Uso (muy literario)</h3><ul><li>Solo después de <b>dopo che, appena, non appena, quando, finché non</b> + <b>passato remoto</b> en la principal.</li>' +
    '<li>Expresa que la acción ocurrió inmediatamente <b>antes</b> de otra acción en passato remoto: <i>Dopo che ebbe finito di mangiare, uscì.</i> · <i>Appena fu arrivato, telefonò.</i></li></ul>' +
    '<p>En la lengua actual se reemplaza por el trapassato prossimo: <i>Dopo che aveva finito di mangiare, uscì.</i></p>' +
    '<p><b>Clave:</b> ausiliare en passato remoto (ebbi / fui…), nunca en imperfetto; la oración principal debe estar en passato remoto.</p>' });

  add({ id: 'ind_fut', grp: 'Indicativo', title: 'Futuro semplice', tenses: ['ind_fut'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p>Infinitivo sin la -e final (y <b>-are → -er-</b>) + <b>-ò, -ai, -à, -emo, -ete, -anno</b>.</p>' +
    '<table><tr><th></th><th>parlare</th><th>vendere</th><th>dormire</th></tr>' +
    '<tr><td>io</td><td>parl<b>erò</b></td><td>vend<b>erò</b></td><td>dorm<b>irò</b></td></tr>' +
    '<tr><td>tu</td><td>parl<b>erai</b></td><td>vend<b>erai</b></td><td>dorm<b>irai</b></td></tr>' +
    '<tr><td>lui/lei</td><td>parl<b>erà</b></td><td>vend<b>erà</b></td><td>dorm<b>irà</b></td></tr>' +
    '<tr><td>noi</td><td>parl<b>eremo</b></td><td>vend<b>eremo</b></td><td>dorm<b>iremo</b></td></tr>' +
    '<tr><td>voi</td><td>parl<b>erete</b></td><td>vend<b>erete</b></td><td>dorm<b>irete</b></td></tr>' +
    '<tr><td>loro</td><td>parl<b>eranno</b></td><td>vend<b>eranno</b></td><td>dorm<b>iranno</b></td></tr></table>' +
    '<h3>Ortografía</h3><ul><li>-care / -gare: añaden <b>h</b>: cercare → cer<b>ch</b>erò; pagare → pa<b>gh</b>erò.</li><li>-ciare / -giare pierden la i: mangiare → mang<b>erò</b>; cominciare → comin<b>cerò</b>. (Pero studiare → studierò.)</li></ul>' +
    '<h3>Raíces irregulares (comunes al condizionale)</h3>' +
    '<p><b>essere</b> sarò · <b>avere</b> avrò · <b>andare</b> andrò · <b>potere</b> potrò · <b>dovere</b> dovrò · <b>sapere</b> saprò · <b>vedere</b> vedrò · <b>vivere</b> vivrò · <b>cadere</b> cadrò · <b>venire</b> verrò · <b>volere</b> vorrò · <b>rimanere</b> rimarrò · <b>tenere</b> terrò · <b>bere</b> berrò · <b>fare</b> farò · <b>dare</b> darò · <b>stare</b> starò · <b>dire</b> dirò.</p>' +
    '<h3>Usos</h3><ul><li>Acciones futuras: <i>Domani partirò.</i></li><li><b>Futuro de probabilidad / suposición</b> sobre el presente: <i>Che ore sono? Saranno le tre.</i> · <i>Avrà trent\'anni.</i></li><li>Órdenes atenuadas: <i>Mi farai un favore.</i></li></ul>' });

  add({ id: 'ind_fut_ant', grp: 'Indicativo', title: 'Futuro anteriore', tenses: ['ind_fut_ant'], kind: 'fin',
    theory:
    '<h3>Formación</h3><p><b>Futuro semplice de essere o avere + participio passato</b>: avrò mangiato, sarò andato/a, mi sarò alzato/a.</p>' +
    '<h3>Usos</h3><ul><li>Acción futura <b>anterior</b> a otra acción futura: <i>Quando avrò finito, ti telefonerò.</i> · <i>Appena sarai arrivato, scrivimi.</i></li>' +
    '<li><b>Probabilidad</b> sobre un hecho pasado: <i>Non risponde: sarà già uscito.</i> · <i>Avrà dimenticato l\'appuntamento.</i></li>' +
    '<li>Marcadores: quando, appena, dopo che, una volta che + futuro anteriore, con el futuro semplice en la principal.</li></ul>' +
    '<p>Ojo: en español se usa el presente de subjuntivo («cuando termine»); en italiano va con <b>indicativo</b>: <i>quando avrò finito</i>.</p>' });

  g.MODULES = M;
})(typeof window !== 'undefined' ? window : globalThis);
