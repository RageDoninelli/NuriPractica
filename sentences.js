/* Nuri practica — frases de contexto. Formato: [texto con ___, verbo, persona (0-5; imperativo 0-4), género opcional 'm'/'f'].
   La respuesta correcta SIEMPRE la calcula el motor, no se escribe a mano. */
(function (g) {
  'use strict';
  var S = {
    ind_pres: [
      ['Ogni mattina io ___ (alzarsi) alle sette.', 'alzarsi', 0],
      ['Marco ___ (lavorare) in un ospedale.', 'lavorare', 2],
      ['Noi ___ (abitare) a Roma da dieci anni.', 'abitare', 3],
      ['Tu ___ (capire) sempre tutto!', 'capire', 1],
      ['Loro ___ (andare) al mare ogni domenica.', 'andare', 5],
      ['Voi ___ (volere) un caffè o un tè?', 'volere', 4],
      ['Io non ___ (sapere) la risposta.', 'sapere', 0],
      ['Stasera noi ___ (uscire) con gli amici.', 'uscire', 3],
      ['Lei ___ (preferire) il vino rosso.', 'preferire', 2],
      ['Tu ___ (dovere) studiare di più.', 'dovere', 1],
      ['Quando fa freddo, io ___ (bere) un tè caldo.', 'bere', 0],
      ['I bambini ___ (dormire) fino a tardi la domenica.', 'dormire', 5]
    ],
    ind_pp: [
      ['Ieri io ___ (mangiare) una pizza buonissima.', 'mangiare', 0],
      ['Maria ___ (andare) al cinema ieri sera.', 'andare', 2, 'f'],
      ['Stamattina noi ___ (alzarsi) alle sei.', 'alzarsi', 3],
      ['Tu ___ (vedere) il film di Fellini?', 'vedere', 1],
      ['Voi ___ (arrivare) tardi alla festa.', 'arrivare', 4],
      ['I miei amici ___ (partire) due giorni fa.', 'partire', 5, 'm'],
      ['Luca ___ (scrivere) una lunga lettera.', 'scrivere', 2],
      ['Ieri io ___ (fare) i compiti per due ore.', 'fare', 0],
      ['La settimana scorsa noi ___ (prendere) il treno.', 'prendere', 3],
      ['Giulia ___ (nascere) a Torino nel 1998.', 'nascere', 2, 'f'],
      ['Tu ___ (dormire) bene stanotte?', 'dormire', 1],
      ['Loro ___ (essere) in vacanza in Sicilia.', 'essere', 5]
    ],
    ind_imperf: [
      ['Da bambino io ___ (giocare) sempre in cortile.', 'giocare', 0],
      ['Quando ero piccola, mia nonna ___ (cucinare) ogni domenica.', 'cucinare', 2],
      ['Mentre noi ___ (mangiare), è squillato il telefono.', 'mangiare', 3],
      ['Ogni estate voi ___ (andare) in montagna.', 'andare', 4],
      ['Tu ___ (studiare) quando sono entrato.', 'studiare', 1],
      ['Da giovani loro ___ (fare) molto sport.', 'fare', 5],
      ['Quando abitavo a Napoli, io ___ (bere) il caffè ogni mattina al bar.', 'bere', 0],
      ['Era una bella giornata e ___ (fare) caldo.', 'fare', 2],
      ['Da piccoli noi ___ (dire) sempre la verità.', 'dire', 3],
      ['Mentre tu ___ (dormire), io leggevo.', 'dormire', 1],
      ['Quand\'ero studente, ___ (essere) sempre stanco.', 'essere', 0],
      ['I nonni ___ (avere) una casa grande in campagna.', 'avere', 5]
    ],
    ind_trap_pross: [
      ['Quando sono entrato, il professore ___ (cominciare) già la lezione.', 'cominciare', 2],
      ['Ero stanco perché io ___ (lavorare) tutto il giorno.', 'lavorare', 0],
      ['Non ho trovato Marta: lei ___ (uscire) già.', 'uscire', 2, 'f'],
      ['Quando siamo arrivati alla stazione, il treno ___ (partire).', 'partire', 2, 'm'],
      ['Tu ___ (mangiare) già quando ti ho chiamato?', 'mangiare', 1],
      ['Noi ___ (finire) i compiti prima di cena.', 'finire', 3],
      ['Loro non ___ (vedere) quel film prima di quella sera.', 'vedere', 5],
      ['Ho capito tutto perché voi mi ___ (spiegare) bene la lezione.', 'spiegare', 4],
      ['Quando sono tornato a casa, mia moglie ___ (addormentarsi) già.', 'addormentarsi', 2, 'f'],
      ['Ero preoccupato perché tu non mi ___ (rispondere).', 'rispondere', 1]
    ],
    ind_pass_rem: [
      ['Dante ___ (nascere) a Firenze nel 1265.', 'nascere', 2, 'm'],
      ['Cristoforo Colombo ___ (scoprire) l\'America nel 1492.', 'scoprire', 2],
      ['I Romani ___ (costruire) strade in tutta Europa.', 'costruire', 5],
      ['Nel 1861 l\'Italia ___ (diventare) un regno unito.', 'diventare', 2],
      ['Manzoni ___ (scrivere) «I promessi sposi».', 'scrivere', 2],
      ['Leonardo ___ (dipingere) la Gioconda.', 'dipingere', 2],
      ['Nel 1969 gli americani ___ (andare) sulla Luna.', 'andare', 5],
      ['Cesare ___ (vincere) molte battaglie.', 'vincere', 2],
      ['Molti anni fa io ___ (vivere) in un piccolo paese.', 'vivere', 0],
      ['Quella sera noi ___ (essere) molto felici.', 'essere', 3],
      ['La regina ___ (avere) cinque figli.', 'avere', 2],
      ['Allora tu ___ (fare) una scelta difficile.', 'fare', 1]
    ],
    ind_trap_rem: [
      ['Dopo che ___ (finire) di mangiare, uscì di casa.', 'finire', 2],
      ['Appena lui ___ (arrivare), telefonò alla madre.', 'arrivare', 2, 'm'],
      ['Quando i soldati ___ (partire), la città tornò tranquilla.', 'partire', 5, 'm'],
      ['Dopo che io ___ (leggere) la lettera, la bruciai.', 'leggere', 0],
      ['Non appena noi ___ (sedersi)… ', 'sedersi', 3],
      ['Appena tu ___ (uscire), la pioggia cominciò.', 'uscire', 1],
      ['Dopo che essi ___ (vedere) il castello, ripartirono.', 'vedere', 5],
      ['Quando ___ (fare) tutto, si riposò.', 'fare', 2]
    ].filter(function (x) { return x[1] !== 'sedersi'; }),
    ind_fut: [
      ['Domani io ___ (andare) dal dottore.', 'andare', 0],
      ['L\'anno prossimo noi ___ (viaggiare) in Spagna.', 'viaggiare', 3],
      ['Tra una settimana tu ___ (avere) i risultati.', 'avere', 1],
      ['Stasera loro ___ (cenare) fuori.', 'cenare', 5],
      ['Quest\'estate voi ___ (venire) a trovarci?', 'venire', 4],
      ['Il prossimo mese Anna ___ (cominciare) un nuovo lavoro.', 'cominciare', 2],
      ['Dopo l\'università io ___ (essere) finalmente libero.', 'essere', 0],
      ['Domani ___ (fare) bel tempo.', 'fare', 2],
      ['Noi ___ (potere) partire solo dopo le otto.', 'potere', 3],
      ['Tu ___ (dovere) pagare il conto domani.', 'dovere', 1],
      ['Loro ___ (cercare) un appartamento più grande.', 'cercare', 5],
      ['Che ore sono? ___ (essere) le tre.', 'essere', 5]
    ],
    ind_fut_ant: [
      ['Quando io ___ (finire) di studiare, uscirò con gli amici.', 'finire', 0],
      ['Appena tu ___ (arrivare), telefonami.', 'arrivare', 1],
      ['Dopo che noi ___ (mangiare), andremo al cinema.', 'mangiare', 3],
      ['Quando loro ___ (tornare), ti racconteranno tutto.', 'tornare', 5],
      ['Non risponde: ___ (uscire) già.', 'uscire', 2],
      ['Quando voi ___ (leggere) il libro, ne parleremo.', 'leggere', 4],
      ['Appena ___ (fare) i compiti, giocherà con la palla.', 'fare', 2],
      ['Avrà trent\'anni: ___ (laurearsi) l\'anno scorso.', 'laurearsi', 2],
      ['Quando io ___ (vedere) il direttore, ti dirò.', 'vedere', 0],
      ['Una volta che tu ___ (decidere), avvisami.', 'decidere', 1]
    ].filter(function (x) { return x[1] !== 'laurearsi'; }),

    cong_pres: [
      ['Penso che lui ___ (essere) a casa.', 'essere', 2],
      ['Voglio che tu ___ (venire) con me.', 'venire', 1],
      ['Credo che loro ___ (avere) ragione.', 'avere', 5],
      ['È necessario che noi ___ (studiare) di più.', 'studiare', 3],
      ['Spero che voi ___ (stare) bene.', 'stare', 4],
      ['Sembra che Maria ___ (partire) domani.', 'partire', 2],
      ['Benché io ___ (essere) stanco, vengo alla festa.', 'essere', 0],
      ['Dubito che tu ___ (potere) farlo da solo.', 'potere', 1],
      ['Mi dispiace che lei ___ (stare) male.', 'stare', 2],
      ['Bisogna che io ___ (finire) il lavoro oggi.', 'finire', 0],
      ['Preferisco che voi ___ (dire) la verità.', 'dire', 4],
      ['Affinché noi ___ (capire), il professore spiega lentamente.', 'capire', 3]
    ],
    cong_pass: [
      ['Penso che lui ___ (mangiare) già.', 'mangiare', 2],
      ['Credo che loro ___ (arrivare) ieri sera.', 'arrivare', 5],
      ['Spero che tu ___ (dormire) bene.', 'dormire', 1],
      ['Non credo che noi ___ (capire) bene la lezione.', 'capire', 3],
      ['È possibile che Anna ___ (uscire) già.', 'uscire', 2, 'f'],
      ['Mi dispiace che voi ___ (perdere) il treno.', 'perdere', 4],
      ['Benché io ___ (studiare), non ho superato l\'esame.', 'studiare', 0],
      ['Dubito che lui ___ (fare) i compiti.', 'fare', 2],
      ['Sono contento che tu ___ (venire).', 'venire', 1],
      ['Pensiamo che i ragazzi ___ (divertirsi) molto.', 'divertirsi', 5, 'm']
    ],
    cong_imperf: [
      ['Pensavo che lui ___ (essere) a casa.', 'essere', 2],
      ['Vorrei che tu ___ (venire) alla mia festa.', 'venire', 1],
      ['Se io ___ (avere) tempo, viaggerei di più.', 'avere', 0],
      ['Se noi ___ (potere), partiremmo subito.', 'potere', 3],
      ['Credevo che voi ___ (stare) meglio.', 'stare', 4],
      ['Se lei ___ (sapere) la verità, sarebbe triste.', 'sapere', 2],
      ['Parla come se ___ (sapere) tutto.', 'sapere', 2],
      ['Se tu ___ (fare) più sport, staresti meglio.', 'fare', 1],
      ['Non sapevo che loro ___ (essere) qui.', 'essere', 5],
      ['Se io ___ (dire) la verità, sarebbe peggio.', 'dire', 0],
      ['Magari voi ___ (volere) venire con noi!', 'volere', 4],
      ['Se Luca ___ (dare) retta a me, non sbaglierebbe.', 'dare', 2]
    ],
    cong_trap: [
      ['Se io ___ (studiare), avrei superato l\'esame.', 'studiare', 0],
      ['Se tu ___ (venire) alla festa, ti saresti divertito.', 'venire', 1],
      ['Pensavo che lui ___ (partire) già.', 'partire', 2, 'm'],
      ['Se noi ___ (partire) prima, avremmo trovato posto.', 'partire', 3],
      ['Credevo che voi ___ (finire) i compiti.', 'finire', 4],
      ['Se loro ___ (sapere) la verità, sarebbero rimasti.', 'sapere', 5],
      ['Magari io ___ (rimanere) a casa!', 'rimanere', 0],
      ['Se lei ___ (arrivare) in tempo, avrebbe visto il film.', 'arrivare', 2, 'f'],
      ['Ti guardava come se non ti ___ (vedere) mai.', 'vedere', 2],
      ['Se tu mi ___ (dire) la verità, non sarei arrabbiato.', 'dire', 1]
    ],

    cond_pres: [
      ['Io ___ (volere) un caffè, per favore.', 'volere', 0],
      ['Tu ___ (potere) aiutarmi?', 'potere', 1],
      ['Se avessi soldi, io ___ (comprare) una casa.', 'comprare', 0],
      ['Mi ___ (piacere) viaggiare di più.', 'piacere', 2],
      ['Se potessimo, noi ___ (andare) in Giappone.', 'andare', 3],
      ['Voi ___ (dovere) dormire di più.', 'dovere', 4],
      ['Se fosse ricco, lui ___ (fare) il giro del mondo.', 'fare', 2],
      ['Loro ___ (mangiare) volentieri una pizza.', 'mangiare', 5],
      ['Secondo i giornali, il ministro ___ (dimettersi).', 'dimettersi', 2],
      ['Se tu studiassi di più, ___ (avere) voti migliori.', 'avere', 1],
      ['Noi ___ (preferire) restare a casa.', 'preferire', 3],
      ['Se piovesse, io ___ (restare) a casa.', 'restare', 0]
    ].filter(function (x) { return x[1] !== 'dimettersi'; }),
    cond_pass: [
      ['Io ___ (volere) venire, ma ero malato.', 'volere', 0],
      ['Se avessi studiato, io ___ (superare) l\'esame.', 'superare', 0],
      ['Tu ___ (dovere) avvisarmi!', 'dovere', 1],
      ['Ha detto che ___ (arrivare) alle otto.', 'arrivare', 2],
      ['Se avessimo avuto tempo, noi ___ (visitare) il museo.', 'visitare', 3],
      ['Mi aveva promesso che ___ (telefonare).', 'telefonare', 2],
      ['Se fosse stata più attenta, lei ___ (capire).', 'capire', 2, 'f'],
      ['Voi ___ (potere) venire con noi.', 'potere', 4],
      ['Se avessero saputo, loro ___ (rimanere).', 'rimanere', 5],
      ['Se fossi stato libero, io ___ (andare) alla festa.', 'andare', 0]
    ],
    imp_pres: [
      ['(tu) ___ (parlare) più piano, per favore!', 'parlare', 0],
      ['Signora, ___ (accomodarsi), prego.', 'accomodarsi', 1],
      ['Ragazzi, ___ (aprire) il libro a pagina dieci.', 'aprire', 3],
      ['(tu) ___ (venire) qui subito!', 'venire', 0],
      ['(noi) ___ (andare) al mare!', 'andare', 2],
      ['Signore, mi ___ (dire) cosa desidera.', 'dire', 1],
      ['(tu) ___ (essere) gentile con tutti.', 'essere', 0],
      ['(voi) ___ (finire) i compiti prima di giocare!', 'finire', 3],
      ['(tu) ___ (alzarsi), è tardi!', 'alzarsi', 0],
      ['(tu) ___ (fare) attenzione!', 'fare', 0],
      ['Professore, ___ (scusare) il ritardo.', 'scusare', 1],
      ['(voi) ___ (stare) zitti!', 'stare', 3]
    ]
  };

  /* No personales: la respuesta la da engine.nonfinite(verbo, tiempo) */
  var NF = {
    inf_pres: [
      ['Penso di ___ (partire) domani.', 'partire'], ['Non posso ___ (venire) alla festa.', 'venire'],
      ['Esco senza ___ (mangiare).', 'mangiare'], ['Prima di ___ (uscire), chiudi la porta.', 'uscire'],
      ['Comincio a ___ (studiare) alle otto.', 'studiare'], ['___ (leggere) fa bene alla mente.', 'leggere'],
      ['Preferisco ___ (cenare) presto.', 'cenare'], ['Devi ___ (dormire) di più.', 'dormire'],
      ['Preferisco ___ (restare) a casa.', 'restare'], ['È importante ___ (capire) la regola.', 'capire']
    ],
    inf_pass: [
      ['Dopo ___ (mangiare), sono uscito.', 'mangiare'], ['Credo di ___ (fare) bene.', 'fare'],
      ['Dopo ___ (arrivare), ha chiamato.', 'arrivare'], ['Grazie per ___ (aiutare) mi.', 'aiutare'],
      ['Mi scuso per ___ (arrivare) in ritardo.', 'arrivare'], ['Dopo ___ (finire) il lavoro, torno a casa.', 'finire'],
      ['Penso di ___ (vedere) quel film.', 'vedere'], ['Dopo ___ (alzarsi), ho fatto colazione.', 'alzarsi'],
      ['Dopo ___ (leggere) il libro, l\'ho restituito.', 'leggere'], ['Ricordo di ___ (andare) a Roma da piccolo.', 'andare']
    ],
    part_pres: [
      ['Il ___ (cantare) è molto famoso.', 'cantare'], ['L\'___ (abitare) del palazzo è molto gentile.', 'abitare'],
      ['La settimana ___ (seguire) partirò.', 'seguire'], ['Un film ___ (divertire).', 'divertire'],
      ['Un bambino ___ (dormire) non va disturbato.', 'dormire'], ['Il ___ (credere) va in chiesa ogni domenica.', 'credere']
    ],
    part_pass: [
      ['Ho ___ (mangiare) una mela.', 'mangiare'], ['Hai ___ (fare) i compiti?', 'fare'],
      ['Abbiamo ___ (scrivere) una lettera.', 'scrivere'], ['Mio padre è ___ (nascere) a Roma.', 'nascere'],
      ['Ha ___ (prendere) il treno.', 'prendere'], ['Avete ___ (vedere) il film?', 'vedere'],
      ['Hanno ___ (vincere) la partita.', 'vincere'],
      ['Ho ___ (chiudere) la finestra.', 'chiudere'], ['Ho ___ (aprire) la porta.', 'aprire']
    ],
    ger_pres: [
      ['Sto ___ (mangiare) in questo momento.', 'mangiare'], ['___ (camminare), ho incontrato Anna.', 'camminare'],
      ['Impara l\'italiano ___ (ascoltare) musica.', 'ascoltare'], ['Stavano ___ (dormire) quando sei arrivato.', 'dormire'],
      ['Sto ___ (fare) i compiti.', 'fare'], ['___ (studiare) di più, passeresti l\'esame.', 'studiare'],
      ['Sta ___ (dire) la verità.', 'dire'], ['Si è tagliato ___ (cucinare).', 'cucinare']
    ],
    ger_pass: [
      ['___ (finire) il lavoro, sono uscito.', 'finire'], ['___ (arrivare) tardi, ho perso il treno.', 'arrivare'],
      ['___ (studiare) molto, ha superato l\'esame.', 'studiare'], ['___ (alzarsi) presto, era già stanca.', 'alzarsi'],
      ['___ (leggere) il libro, ho capito tutto.', 'leggere'], ['___ (vedere) il film, non volevo ripeterlo.', 'vedere']
    ]
  };
  // Pasado de un gerundio con «alzarsi»: 'essendosi alzato/a'
  g.SENTENCES_FC = g.SENTENCES_FC || [];
  g.SENTENCES = S;
  g.SENTENCES_NF = NF;
})(typeof window !== 'undefined' ? window : globalThis);
