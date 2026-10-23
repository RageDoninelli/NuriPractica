/* Nuri practica — teoría de los 21 módulos (explicaciones en español) */
(function (g) {
  'use strict';
  var M = [];
  function add(m) { M.push(m); }

  /* ================= INDICATIVO ================= */
  add({ id: 'ind_pres', grp: 'Indicativo', title: 'Presente', tenses: ['ind_pres'], kind: 'fin', src: 'clase',
    theory:
    '<h3>Los 3 grupos de verbos regulares</h3>' +
    '<p>Los verbos regulares italianos se dividen en 3 grupos según su terminación: <b>-are, -ere, -ire</b>.</p>' +
    '<ul><li><b>Grupo 1 · -are:</b> parlare → <i>Parlo inglese e francese.</i> (comprare → Compro un giornale · giocare → Simona gioca a tennis · lavorare → Lavoriamo in banca · ascoltare → Ascoltate la radio · suonare → Suonano la chitarra)</li>' +
    '<li><b>Grupo 2 · -ere:</b> vedere → <i>Vedo un film.</i> (chiudere → Chiudi la porta · scrivere → Signora, a chi scrive? · mettere → Mettiamo un maglione · leggere → Leggete un libro · rispondere → Rispondono bene)</li>' +
    '<li><b>Grupo 3a · -ire:</b> partire → <i>Parto alle 16.00.</i> (dormire → Dormi sempre troppo · sentire → Carlo sente la musica · aprire → Apriamo la finestra · offrire → Offrite voi il caffè? · seguire → Seguono le istruzioni)</li>' +
    '<li><b>Grupo 3b · -ire (-isc-):</b> capire → <i>Non capisco.</i> (finire → La lezione finisce alle 13.00 · pulire → Puliamo il bagno · preferire → Preferite vino o birra? · costruire → Costruiscono una casa)</li></ul>' +
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
    '<h3>Usos</h3><ul><li>Acciones actuales y habituales: <i>Ogni giorno mangio alle due.</i></li><li>Verdades generales: <i>L\'acqua bolle a cento gradi.</i></li><li>Futuro próximo: <i>Domani parto per Roma.</i></li><li><b>stare + gerundio</b>: acción en curso: <i>Sto studiando.</i></li>' +
    '<li><b>Lo sai che…</b> Se la frase lleva una expresión de tiempo (<i>domani, il mese prossimo, fra qualche mese</i>…), el presente se usa en lugar del futuro: <i>Domani parto per le vacanze. · Giovedì prossimo arrivano i miei amici.</i></li></ul>' });

  add({ id: 'ind_pp', grp: 'Indicativo', title: 'Passato prossimo', tenses: ['ind_pp'], kind: 'fin', src: 'clase',
    theory:
    '<h3>Formación</h3><p><b>Presente de avere o essere + participio passato del verbo.</b></p>' +
    '<table><tr><th></th><th>avere + participio</th><th>essere + participio</th></tr>' +
    '<tr><td>io</td><td>ho parlato</td><td>sono andato/a</td></tr><tr><td>tu</td><td>hai parlato</td><td>sei andato/a</td></tr>' +
    '<tr><td>lui/lei/Lei</td><td>ha parlato</td><td>è andato/a</td></tr><tr><td>noi</td><td>abbiamo parlato</td><td>siamo andati/e</td></tr>' +
    '<tr><td>voi</td><td>avete parlato</td><td>siete andati/e</td></tr><tr><td>loro</td><td>hanno parlato</td><td>sono andati/e</td></tr></table>' +
    '<h3>El participio passato</h3><ul><li>-are → <b>-ato</b> (mangiare → mangiato) · -ere → <b>-uto</b> (conoscere → conosciuto) · -ire → <b>-ito</b> (finire → finito).</li>' +
    '<li>Con <b>avere</b> el participio <b>termina siempre en -o</b>: <i>Franco ha capito. Francesca ha capito. Ennio e Franco hanno capito.</i></li>' +
    '<li>Con <b>essere</b> el participio funciona como un adjetivo, con 4 terminaciones (-o, -a, -i, -e) y <b>concuerda con el sujeto</b>: <i>Franco è andato · Francesca è andata · Ennio e Franco sono andati · Francesca e Lilli sono andate.</i></li></ul>' +
    '<h3>¿Avere o essere?</h3>' +
    '<ul><li><b>Todos los verbos transitivos</b> (los que llevan objeto directo: «¿qué?», «¿a quién?») usan <b>avere</b>: <i>Il bambino ha finito il gelato (cosa?). Mario ha sposato Marella (chi?). Ho studiato italiano. Abbiamo incontrato Anna.</i></li>' +
    '<li><b>Todos los verbos reflexivos</b> usan <b>essere</b>: <i>Mi sono alzata alle 6.00. Ci siamo conosciuti un mese fa.</i></li>' +
    '<li><b>Casi todos los verbos intransitivos</b> (sin objeto directo) usan <b>essere</b>: <i>Questa borsa è costata molto. L\'ascensore è salito al primo piano. Le vacanze sono cominciate ieri.</i> Entre ellos:' +
    '<ul><li><b>a) De estado:</b> (re)stare, rimanere… <i>Renata è restata a casa. Oliviero è rimasto in albergo.</i></li>' +
    '<li><b>b) De movimiento:</b> andare, venire, arrivare, partire, tornare, entrare, uscire, cadere… <i>Siamo andati al mare. Il treno è partito un\'ora fa.</i></li>' +
    '<li><b>c) De cambio:</b> diventare, morire, nascere, invecchiare, iniziare, cominciare, finire… <i>Mio nonno è morto. Ieri è nata mia nipote. La festa è finita a mezzanotte.</i></li>' +
    '<li><b>d) Impersonales:</b> piacere, dispiacere, bastare, parere, succedere, sembrare… <i>L\'Islanda mi è piaciuta moltissimo. Luca mi è sembrato triste. Che è successo?</i></li></ul></li>' +
    '<li>Ojo con <b>finire / cominciare</b>: con objeto usan avere (<i>Ho finito il lavoro</i>), sin objeto usan essere (<i>La festa è finita</i>).</li>' +
    '<li><b>Muchos verbos tienen participio irregular.</b></li></ul>' +
    '<h3>Verbos modales: volere, potere, dovere, sapere</h3><ul>' +
    '<li><b>Solos</b> usan normalmente <b>avere</b>: <i>«Hai telefonato al dottore?» — «No, non ho potuto / No, non ho voluto.»</i></li>' +
    '<li><b>Seguidos de otro verbo</b> toman, por lo general, <b>el ausiliare del verbo que sigue</b>: <i>Non sono potuto andare a teatro</i> (porque andare usa essere). <i>Non siamo voluti tornare a casa da soli</i> (tornare usa essere). <i>Non ho potuto mangiare</i> (mangiare usa avere).</li>' +
    '<li>En el italiano de hoy también se acepta avere con los modales (<i>Non ho potuto andare</i>), pero en el examen sigue la regla del libro: el ausiliare del verbo que sigue.</li></ul>' +
    '<h3>Participios irregulares (tabla del libro)</h3>' +
    '<table><tr><th>verbo</th><th>participio</th><th>verbo</th><th>participio</th></tr>' +
    '<tr><td>accendere</td><td><b>acceso</b></td><td>offrire</td><td><b>offerto</b></td></tr>' +
    '<tr><td>accorgersi</td><td><b>accorto</b></td><td>perdere</td><td><b>perso</b></td></tr>' +
    '<tr><td>aprire</td><td><b>aperto</b></td><td>prendere</td><td><b>preso</b></td></tr>' +
    '<tr><td>bere</td><td><b>bevuto</b></td><td>rimanere</td><td><b>rimasto</b></td></tr>' +
    '<tr><td>chiedere</td><td><b>chiesto</b></td><td>rispondere</td><td><b>risposto</b></td></tr>' +
    '<tr><td>chiudere</td><td><b>chiuso</b></td><td>rompere</td><td><b>rotto</b></td></tr>' +
    '<tr><td>correre</td><td><b>corso</b></td><td>scegliere</td><td><b>scelto</b></td></tr>' +
    '<tr><td>decidere</td><td><b>deciso</b></td><td>scendere</td><td><b>sceso</b></td></tr>' +
    '<tr><td>dire</td><td><b>detto</b></td><td>scrivere</td><td><b>scritto</b></td></tr>' +
    '<tr><td>dividere</td><td><b>diviso</b></td><td>spegnere</td><td><b>spento</b></td></tr>' +
    '<tr><td>essere</td><td><b>stato</b></td><td>stare</td><td><b>stato</b></td></tr>' +
    '<tr><td>fare</td><td><b>fatto</b></td><td>succedere</td><td><b>successo</b></td></tr>' +
    '<tr><td>leggere</td><td><b>letto</b></td><td>tradurre</td><td><b>tradotto</b></td></tr>' +
    '<tr><td>mettere</td><td><b>messo</b></td><td>vedere</td><td><b>visto</b></td></tr>' +
    '<tr><td>morire</td><td><b>morto</b></td><td>venire</td><td><b>venuto</b></td></tr>' +
    '<tr><td>nascere</td><td><b>nato</b></td><td>vincere</td><td><b>vinto</b></td></tr>' +
    '<tr><td>offendere</td><td><b>offeso</b></td><td>vivere</td><td><b>vissuto</b></td></tr></table>' +
    '<p>Otros frecuentes: introdurre <b>introdotto</b> · produrre <b>prodotto</b> · comporre <b>composto</b> · ottenere <b>ottenuto</b> · riconoscere <b>riconosciuto</b> · spendere <b>speso</b> · conoscere <b>conosciuto</b> · cadere <b>caduto</b>.</p>' +
    '<h3>Con pronombres</h3><p>Con los pronombres de objeto directo lo, la, li, le el participio concuerda con ellos: <i>Ho comprato le mele → Le ho comprate.</i> Los reflexivos usan essere: <i>Mi sono svegliato/a.</i></p>' +
    '<h3>Usos y marcadores</h3><ul><li>Acción terminada, relacionada con el presente: <i>Ieri ho visto un film.</i></li><li>Marcadores: ieri, stamattina, la settimana scorsa, due anni fa, già, non… ancora, mai, un mese fa.</li>' +
    '<li><b>Passato prossimo vs imperfetto:</b> el prossimo cuenta el hecho puntual y terminado; el imperfetto describe el fondo, la costumbre o lo que estaba pasando.</li></ul>' });

  add({ id: 'ind_imperf', grp: 'Indicativo', title: 'Imperfetto', tenses: ['ind_imperf'], kind: 'fin', src: 'clase',
    theory:
    '<h3>Forme dell\'imperfetto</h3><p>Casi todos los verbos tienen un imperfetto <b>regular</b>: <i>Da bambina giocavo con le bambole. · Una volta i ragazzi leggevano più libri. · Ieri sera non riuscivo a dormire per il caldo. · Aldo e Giorgio venivano spesso a trovarmi.</i></p>' +
    '<p>Los verbos <b>essere, fare, dire y bere</b> tienen un imperfetto <b>irregular</b>: <i>Stamattina c\'era il sole ma faceva freddo. · Non ho capito che cosa diceva Carlo. · Quando ero piccolo non bevevo vino.</i></p>' +
    '<h3>Verbos regulares</h3>' +
    '<table><tr><th></th><th>am-are</th><th>ved-ere</th><th>apr-ire</th></tr>' +
    '<tr><td>io</td><td>am<b>avo</b></td><td>ved<b>evo</b></td><td>apr<b>ivo</b></td></tr>' +
    '<tr><td>tu</td><td>am<b>avi</b></td><td>ved<b>evi</b></td><td>apr<b>ivi</b></td></tr>' +
    '<tr><td>lui/lei/Lei</td><td>am<b>ava</b></td><td>ved<b>eva</b></td><td>apr<b>iva</b></td></tr>' +
    '<tr><td>noi</td><td>am<b>avamo</b></td><td>ved<b>evamo</b></td><td>apr<b>ivamo</b></td></tr>' +
    '<tr><td>voi</td><td>am<b>avate</b></td><td>ved<b>evate</b></td><td>apr<b>ivate</b></td></tr>' +
    '<tr><td>loro</td><td>am<b>avano</b></td><td>ved<b>evano</b></td><td>apr<b>ivano</b></td></tr></table>' +
    '<h3>Verbos irregulares</h3>' +
    '<table><tr><th></th><th>essere</th><th>fare</th><th>dire</th><th>bere</th></tr>' +
    '<tr><td>io</td><td>ero</td><td>facevo</td><td>dicevo</td><td>bevevo</td></tr>' +
    '<tr><td>tu</td><td>eri</td><td>facevi</td><td>dicevi</td><td>bevevi</td></tr>' +
    '<tr><td>lui/lei/Lei</td><td>era</td><td>faceva</td><td>diceva</td><td>beveva</td></tr>' +
    '<tr><td>noi</td><td>eravamo</td><td>facevamo</td><td>dicevamo</td><td>bevevamo</td></tr>' +
    '<tr><td>voi</td><td>eravate</td><td>facevate</td><td>dicevate</td><td>bevevate</td></tr>' +
    '<tr><td>loro</td><td>erano</td><td>facevano</td><td>dicevano</td><td>bevevano</td></tr></table>' +
    '<p>Otros con raíz latina: <b>porre</b> → ponevo · <b>tradurre</b> → traducevo · <b>produrre</b> → producevo · <b>comporre</b> → componevo.</p>' +
    '<h3>Uso del imperfetto</h3><p>El imperfetto se usa normalmente:</p><ul>' +
    '<li><b>a)</b> en una <b>descripción física o atmosférica</b>: <i>Da bambina avevo i capelli biondi. · Faceva così freddo ieri!</i></li>' +
    '<li><b>b)</b> para indicar una <b>repetición o un hábito</b>: <i>D\'estate andavamo al mare tutti i giorni. · Ricordo che di solito dicevi molte bugie.</i></li>' +
    '<li><b>c)</b> en una <b>descripción psicológica</b>, una sensación o un sentimiento: <i>Non sono venuto perché ero depresso. · Anna non si sentiva bene ieri.</i></li>' +
    '<li><b>d)</b> al <b>inicio de una fábula</b>: <i>C\'era una volta un re che aveva una figlia bellissima.</i></li>' +
    '<li><b>e)</b> con las expresiones <b>stare + gerundio</b> y <b>stare per</b>: <i>Stavate mangiando? · Stavano per uscire quando siamo entrati.</i></li>' +
    '<li><b>f)</b> después de la palabra <b>mentre</b>: <i>Mentre guardavamo la TV è saltata la luce.</i></li>' +
    '<li><b>g)</b> cuando se expresa una <b>acción continuada</b>, que no ha terminado o no ha sido limitada en el tiempo: <i>Aspettavo l\'autobus già da mezz\'ora quando è passato mio padre in macchina. · Anna era in casa e leggeva il giornale.</i></li></ul>' +
    '<p>Si la acción está <b>delimitada en el tiempo</b>, se prefiere el <b>passato prossimo</b>: <i>Ieri ho studiato tutto il giorno. · Abbiamo lavorato dalle 9 alle 5.</i></p>' +
    '<h3>Lo sai che…</h3><p>En el italiano coloquial se usa a menudo el imperfetto en lugar del indicativo o del condicional presente cuando queremos expresar una <b>petición de manera más amable</b>, sobre todo en una tienda: <i>Buongiorno, <b>volevo</b> tre etti di prosciutto.</i> (volevo = voglio / vorrei).</p>' +
    '<h3>Passato prossimo o imperfetto de algunos verbos</h3><p>Algunos verbos <b>cambian de significado</b> según estén en passato prossimo o en imperfetto.</p>' +
    '<p><b>Dovere, potere, volere</b> (verbos modales):</p><ul>' +
    '<li><b>a) Imperfetto:</b> indican una <b>incertidumbre</b> (la acción quizá ocurrió y quizá no): <i>Dovevo studiare (e forse ho studiato o forse no). · Mia sorella voleva comprare un motorino (e forse lo ha comprato o forse no). · Non potevo rispondere al telefono (e forse non ho risposto o forse sì).</i></li>' +
    '<li><b>b) Passato prossimo:</b> la acción ocurrió <b>con seguridad</b>: <i>Ieri ho dovuto studiare 3 capitoli di storia (e li ho studiati). · Ieri non ho voluto lavorare (e non ho lavorato). · Non siamo potuti andare in vacanza per mancanza di soldi (e non ci siamo andati).</i></li></ul>' +
    '<p><b>Conoscere:</b></p><ul>' +
    '<li><b>Imperfetto</b> = «conocer a alguien desde hace tiempo»: <i>Conoscevi i miei genitori?</i></li>' +
    '<li><b>Passato prossimo</b> = «que me han presentado a alguien, que he encontrado a alguien por primera vez»: <i>Ho conosciuto tuo fratello ieri.</i></li></ul>' +
    '<p><b>Sapere:</b></p><ul>' +
    '<li><b>Imperfetto</b> = «conocer una cosa desde hace tiempo»: <i>Lo sapevi che ho una casa a Roma?</i></li>' +
    '<li><b>Passato prossimo</b> = «enterarse de algo por medio de alguien»: <i>Ho appena saputo che ti sei sposato!</i></li></ul>' +
    '<h3>Passato prossimo vs imperfetto</h3><p>El passato prossimo cuenta el hecho puntual y terminado; el imperfetto describe el fondo, la costumbre o lo que estaba pasando: <i>Mentre Silvia si trovava all\'ospedale, il padre era al lavoro e aspettava una telefonata. Appena è arrivata la buona notizia, si è alzato ed è uscito di corsa.</i></p>' +
    '<p>Los dos tiempos conviven en un mismo relato: <b>imperfetto</b> para describir la escena (tiempo, lugar, personas, estados de ánimo) y <b>passato prossimo</b> para los hechos que hacen avanzar la historia.</p>' });

  add({ id: 'ind_trap_pross', grp: 'Indicativo', title: 'Trapassato prossimo', tenses: ['ind_trap_pross'], kind: 'fin', src: 'clase',
    theory:
    '<h3>Uso</h3><p>El trapassato prossimo se usa para expresar <b>una acción en el pasado que sucedió antes de otra acción pasada</b>:</p>' +
    '<ul><li><i>I miei nonni mi raccontavano sempre di quando <b>erano andati</b> in viaggio di nozze a Roma.</i> (prima: erano andati → dopo: mi raccontavano)</li>' +
    '<li><i>Ugo ha detto a Paolo che <b>aveva visto</b> sua moglie con un altro uomo.</i> (prima: aveva visto → dopo: ha detto)</li>' +
    '<li><i>Mario ha detto che <b>aveva mangiato</b> troppo e ha ordinato un digestivo.</i></li>' +
    '<li><i>Quando sono arrivato alla stazione, il treno <b>era</b> già <b>partito</b>.</i></li></ul>' +
    '<h3>Formación</h3><p>El trapassato prossimo se forma con el <b>imperfetto de avere o essere + el participio passato</b> del verbo.</p>' +
    '<table><tr><th></th><th>imperfetto de avere + participio</th><th>imperfetto de essere + participio</th></tr>' +
    '<tr><td>io</td><td>avevo parlato</td><td>ero andato/a</td></tr><tr><td>tu</td><td>avevi parlato</td><td>eri andato/a</td></tr>' +
    '<tr><td>lui/lei/Lei</td><td>aveva parlato</td><td>era andato/a</td></tr><tr><td>noi</td><td>avevamo parlato</td><td>eravamo andati/e</td></tr>' +
    '<tr><td>voi</td><td>avevate parlato</td><td>eravate andati/e</td></tr><tr><td>loro</td><td>avevano parlato</td><td>erano andati/e</td></tr></table>' +
    '<p>La elección de <b>avere / essere</b> y la <b>concordancia</b> del participio son las mismas que en el passato prossimo. Reflexivos: <i>mi ero alzato/a, si erano conosciuti.</i></p>' +
    '<h3>Para reconocerlo</h3><ul><li>Explica la causa de algo ocurrido en el pasado: <i>Ero stanco perché avevo lavorato tutto il giorno.</i></li>' +
    '<li>Marcadores frecuentes: già, appena, non… ancora, prima di, dopo che, quando.</li></ul>' +
    '<h3>Passato prossimo, imperfetto y trapassato prossimo en un mismo relato</h3>' +
    '<ul><li><b>Trapassato prossimo</b>: lo que ocurrió <b>antes</b>: <i>Paolo aveva deciso di fare una sorpresa alla moglie.</i></li>' +
    '<li><b>Imperfetto</b>: descripción, situación, costumbre: <i>Era l\'8 marzo. Voleva fare qualcosa di particolare.</i></li>' +
    '<li><b>Passato prossimo</b>: los hechos que hacen avanzar la historia: <i>Sono andati in discoteca. Sono usciti.</i></li></ul>' +
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
