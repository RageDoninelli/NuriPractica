/* Nuri practica — ejercicios del LIBRO DE CLASE: passato prossimo, presente regular e imperfetto.
   Formato de fila: [texto con ___, verbo, persona 0-5, género 'm'/'f'/null, ausiliare]
   · ausiliare: 'essere' | 'avere' | 'essere|avere' (acepta ambas, la primera es la principal).
   · En part_pass: [texto, verbo, respuestas|alternativas] (concordancia).
   Las respuestas las calcula siempre el motor. */
(function (g) {
  'use strict';
  var S = g.SENTENCES, NF = g.SENTENCES_NF, FC = g.SENTENCES_FC = g.SENTENCES_FC || [];

  S.ind_pp = S.ind_pp.concat([
    /* — Avere o essere? (cuadro de la teoría) — */
    ['Il bambino ___ (finire) il gelato.', 'finire', 2], ['Mario ___ (sposare) Marella.', 'sposare', 2],
    ['Io ___ (studiare) italiano tutto il giorno.', 'studiare', 0], ['Noi ___ (incontrare) Anna.', 'incontrare', 3],
    ['Io ___ (alzarsi) alle 6.00.', 'alzarsi', 0, 'f'], ['Noi ___ (conoscersi) un mese fa.', 'conoscersi', 3],
    ['Questa borsa ___ (costare) molto.', 'costare', 2, 'f'], ['L\'ascensore ___ (salire) al primo piano.', 'salire', 2, 'm'],
    ['Le vacanze ___ (cominciare) ieri.', 'cominciare', 5, 'f', 'essere'], ['Renata ___ (restare) a casa.', 'restare', 2, 'f'],
    ['Oliviero ___ (rimanere) in albergo.', 'rimanere', 2, 'm'], ['Noi ___ (andare) al mare.', 'andare', 3],
    ['Il treno ___ (partire) un\'ora fa.', 'partire', 2, 'm'], ['La festa ___ (finire) a mezzanotte.', 'finire', 2, 'f', 'essere'],
    ['L\'Islanda mi ___ (piacere) moltissimo.', 'piacere', 2, 'f'], ['Luca mi ___ (sembrare) un po\' triste.', 'sembrare', 2, 'm'],
    ['Io ___ (vedere) un bellissimo film.', 'vedere', 0], ['Voi ___ (venire) alla festa?', 'venire', 4],
    /* — Verbos modales (recuadro «Lo sai che…») — */
    ['Ieri io non ___ (potere) andare a teatro.', 'potere', 0, null, 'essere|avere'],
    ['Noi non ___ (volere) tornare a casa da soli.', 'volere', 3, null, 'essere|avere'],
    ['Maria non ___ (dovere) partire.', 'dovere', 2, 'f', 'essere|avere'],
    ['I ragazzi ___ (volere) uscire con noi.', 'volere', 5, 'm', 'essere|avere'],
    ['Hai telefonato al dottore? No, non ___ (potere).', 'potere', 0], ['Hai telefonato al dottore? No, non ___ (volere).', 'volere', 0],
    ['Luca ___ (volere) mangiare la pizza.', 'volere', 2], ['Ieri noi ___ (dovere) lavorare tutto il giorno.', 'dovere', 3],
    /* — Tabla de participios irregulares (frases del libro) — */
    ['Non ___ (accendere) la luce perché è ancora chiaro.', 'accendere', 0], ['Tu non ___ (accorgersi) che il gatto è uscito?', 'accorgersi', 1],
    ['Lei ___ (aprire) la porta?', 'aprire', 2], ['Quanto ___ (bere) voi?', 'bere', 4],
    ['Noi ___ (chiedere) informazioni a un vigile.', 'chiedere', 3], ['I negozi ___ (chiudere) alle 19.00.', 'chiudere', 5],
    ['Io ___ (correre) qui appena ho saputo dell\'incidente.', 'correre', 0, 'f', 'essere'], ['Allora tu ___ (decidere) dove andare in vacanza?', 'decidere', 1],
    ['Io ___ (dire) già tutto alla polizia.', 'dire', 0], ['Loro ___ (dividere) l\'appartamento.', 'dividere', 5],
    ['Ieri noi ___ (essere) al cinema.', 'essere', 3, 'f'], ['Il bambino ___ (fare) la pipì a letto.', 'fare', 2],
    ['Mio padre ___ (leggere) tutta l\'enciclopedia.', 'leggere', 2], ['Tu ___ (mettere) i soldi in banca?', 'mettere', 1],
    ['Suo nonno ___ (morire) tre anni fa.', 'morire', 2, 'm'], ['Dante ___ (nascere) a Firenze.', 'nascere', 2, 'm'],
    ['Aldo ___ (offendere) Beppe.', 'offendere', 2], ['Gigi ___ (offrire) il pranzo.', 'offrire', 2],
    ['Io ___ (perdere) due milioni a carte.', 'perdere', 0], ['Voi ___ (prendere) tanto sole questa estate.', 'prendere', 4],
    ['Tu ___ (rimanere) in città a Ferragosto?', 'rimanere', 1], ['Lei non ___ (rispondere) alla mia domanda, Signor Rossi.', 'rispondere', 2],
    ['Io ___ (rompere) il computer.', 'rompere', 0], ['Alla fine io ___ (scegliere) la gonna blu.', 'scegliere', 0],
    ['Noi ___ (scendere) al pianterreno.', 'scendere', 3, null, 'essere'], ['Noi ___ (scrivere) a casa.', 'scrivere', 3],
    ['Loro ___ (spegnere) tutte le luci.', 'spegnere', 5], ['Lui ___ (stare) in casa tutto il giorno.', 'stare', 2, 'm'],
    ['Che cosa ___ (succedere)?', 'succedere', 2], ['Loro ___ (tradurre) il libro di Queneau.', 'tradurre', 5],
    ['Tu ___ (vedere) l\'ultimo film di Benigni?', 'vedere', 1], ['Non ___ (venire) quasi nessuno alla festa.', 'venire', 2, 'm'],
    ['La Francia ___ (vincere) i Mondiali del 1998.', 'vincere', 2], ['Io ___ (vivere) due anni in Germania.', 'vivere', 0, null, 'avere|essere'],
    /* — Ejercicio: avere y essere (la macchina nuova) — */
    ['Ieri io ___ (comprare) una nuova auto.', 'comprare', 0], ['Appena ho ritirato la macchina, io ___ (partire) subito.', 'partire', 0],
    ['Poi io ___ (andare) a fare un giro in campagna.', 'andare', 0], ['La benzina ___ (finire) quando io ero in aperta campagna.', 'finire', 2, 'f', 'essere'],
    ['Così io ___ (dovere) lasciare la macchina lì e fare l\'autostop.', 'dovere', 0, null, 'avere'],
    ['___ (passare) tre ragazzi che mi hanno portato fino in città.', 'passare', 5, 'm', 'essere'], ['Tre ragazzi mi ___ (portare) fino in città.', 'portare', 5],
    ['Quando io ___ (arrivare) a casa, ho telefonato alla mia ragazza.', 'arrivare', 0], ['Quando sono arrivato a casa, io ___ (telefonare) alla mia ragazza.', 'telefonare', 0],
    ['Amelia ___ (venire) a prendermi con la sua macchina.', 'venire', 2, 'f'], ['Poi noi ___ (andare) insieme a comprare la benzina.', 'andare', 3],
    /* — La festa del papà — */
    ['Nel 1977 il 19 marzo ___ (diventare) un giorno feriale.', 'diventare', 2, 'm'], ['Per questo l\'importanza di questa festa ___ (diminuire).', 'diminuire', 2, 'f', 'essere'],
    ['La festa del papà ___ (avere) origine nel 1908 negli Stati Uniti.', 'avere', 2], ['Una signora ___ (volere) festeggiare suo padre.', 'volere', 2],
    ['Poi questa festa ___ (arrivare) anche in Europa.', 'arrivare', 2, 'f'], ['Oggi Daniele ___ (andare) a scuola.', 'andare', 2, 'm'],
    ['Daniele ___ (scrivere) una letterina di auguri per il babbo.', 'scrivere', 2], ['La mamma ___ (cucinare) le frittelle di riso.', 'cucinare', 2],
    ['Daniele ___ (infilare) il biglietto sotto il piatto del babbo.', 'infilare', 2], ['Tutti ___ (sedersi) a tavola per cenare.', 'sedersi', 5, 'm'],
    /* — La lettera di Carolina — */
    ['In questi ultimi tempi io ___ (avere) davvero molto da fare.', 'avere', 0], ['Ora finalmente io ___ (trovare) un po\' di tempo per scrivere.', 'trovare', 0],
    ['Io ___ (laurearsi) nel giugno scorso.', 'laurearsi', 0, 'f'], ['Dopo la laurea io ___ (partire) con alcune amiche per un giro d\'Europa.', 'partire', 0, 'f'],
    ['Noi ___ (andare) in Austria, Germania, Danimarca e Norvegia.', 'andare', 3, 'f'], ['Noi ___ (arrivare) fino a Capo Nord.', 'arrivare', 3, 'f'],
    ['Poi noi ___ (tornare) verso sud.', 'tornare', 3, 'f'], ['Noi ___ (divertirsi) un mondo.', 'divertirsi', 3, 'f'],
    ['Noi ___ (incontrare) tantissima gente.', 'incontrare', 3], ['In Svezia ___ (succedere) una cosa davvero strana!', 'succedere', 2, 'f'],
    ['In un ostello di Stoccolma noi ___ (dormire) per due notti.', 'dormire', 3], ['Lì noi ___ (conoscere) un gruppetto di italiani.', 'conoscere', 3],
    ['Noi ___ (passare) un paio di giorni con loro.', 'passare', 3], ['Io ___ (innamorarsi) di Salvo!', 'innamorarsi', 0, 'f'],
    ['Ora hai capito perché io ___ (venire) a vivere qui.', 'venire', 0, 'f'], ['Quando io ___ (tornare) dalla vacanza, ho cominciato a cercare lavoro.', 'tornare', 0, 'f'],
    ['Quando sono tornata, io ___ (cominciare) a cercare lavoro.', 'cominciare', 0], ['Alla fine io ___ (trovare) un posto come traduttrice.', 'trovare', 0],
    ['Io ___ (fare) le valigie.', 'fare', 0], ['Poi io ___ (trasferirsi) qui.', 'trasferirsi', 0, 'f'],
    ['Per me ___ (essere) una grossa decisione.', 'essere', 2, 'f'], ['Non ___ (essere) facile lasciare Perugia.', 'essere', 2, 'm'],
    /* — Tangentopoli — */
    ['Durante i primi anni \'90 ___ (scoppiare) un grave scandalo nella vita politica italiana.', 'scoppiare', 2, 'm'],
    ['La polizia e i magistrati ___ (cominciare) a controllare gli affari di personaggi politici.', 'cominciare', 5],
    ['I magistrati ___ (trovare) le prove delle relazioni illegali tra politica e mafia.', 'trovare', 5],
    ['Molti uomini di governo corrotti ___ (diventare) ricchissimi grazie ai soldi della mafia.', 'diventare', 5, 'm'],
    ['Dopo questo periodo i maggiori partiti politici ___ (sparire).', 'sparire', 5, 'm'], ['Alcuni ___ (fondare) nuove organizzazioni politiche.', 'fondare', 5],
    ['Altri ___ (cercare) di rifondare i vecchi partiti.', 'cercare', 5], ['Da allora ___ (cominciare) la Seconda Repubblica.', 'cominciare', 2, 'f', 'essere'],
    /* — Ah! L'amore! — */
    ['Un uomo di 34 anni ___ (passare) diversi anni in carcere.', 'passare', 2], ['A ottobre lui ___ (ottenere) il permesso di uscire per sette giorni.', 'ottenere', 2],
    ['Quando lui ___ (uscire), non è più ritornato.', 'uscire', 2, 'm'], ['Dopo essere uscito, lui non ___ (ritornare) più.', 'ritornare', 2, 'm'],
    ['La polizia lo ___ (cercare) per mesi.', 'cercare', 2], ['Ma la polizia non ___ (trovare) nessuna traccia.', 'trovare', 2],
    ['L\'uomo non ___ (sapere) resistere alla tentazione.', 'sapere', 2], ['L\'uomo ___ (andare) a trovare la sua donna.', 'andare', 2, 'm'],
    ['I poliziotti ___ (controllare) i suoi documenti.', 'controllare', 5], ['Quando lui ___ (entrare) nel carcere, i poliziotti lo hanno riconosciuto.', 'entrare', 2, 'm'],
    ['I poliziotti lo ___ (riconoscere).', 'riconoscere', 5], ['I poliziotti lo ___ (arrestare).', 'arrestare', 5], ['I poliziotti lo ___ (riportare) dentro.', 'riportare', 5],
    /* — Cosa hanno fatto? — */
    ['Giuliano ___ (correre) a dividere i due.', 'correre', 2, 'm', 'essere'], ['Giuliano ___ (dire) a sua moglie di smettere.', 'dire', 2],
    ['I bambini ___ (accendere) la luce.', 'accendere', 5], ['I bambini ___ (chiamare) i genitori.', 'chiamare', 5],
    ['Paola ___ (decidere) di non dire niente a nessuno.', 'decidere', 2], ['Paola ___ (stare) a casa.', 'stare', 2, 'f'],
    ['Nel 1943 gli italiani ___ (perdere) la guerra.', 'perdere', 5], ['Gli italiani ___ (chiedere) l\'aiuto degli americani.', 'chiedere', 5],
    ['Nel 1996 ___ (morire) Marcello Mastroianni.', 'morire', 2, 'm'], ['Quando io ___ (uscire) di casa, non ho spento il gas.', 'uscire', 0],
    ['Io non ___ (spegnere) il gas.', 'spegnere', 0], ['Così ___ (scoppiare) un incendio.', 'scoppiare', 2, 'm'],
    ['Quando è nato suo figlio, Sergio ___ (scegliere) il miglior champagne.', 'scegliere', 2], ['Sergio ___ (offrire) da bere a tutti.', 'offrire', 2],
    ['Sergio ___ (fare) festa.', 'fare', 2], ['Amelia ___ (scrivere) una lettera al giornale.', 'scrivere', 2], ['Nessuno ___ (leggere) la lettera di Amelia.', 'leggere', 2],
    ['Simona ___ (andare) troppo veloce.', 'andare', 2, 'f'], ['Simona ___ (avere) un incidente.', 'avere', 2], ['Simona ___ (prendere) una multa.', 'prendere', 2],
    ['Simona ___ (perdere) la patente.', 'perdere', 2], ['Valerio e Ugo ___ (rimanere) in Germania.', 'rimanere', 5, 'm'],
    ['Valerio e Ugo ___ (vivere) a Stoccarda.', 'vivere', 5, null, 'avere|essere'], ['Valerio e Ugo ___ (aprire) un ristorante.', 'aprire', 5],
    ['Valerio e Ugo ___ (fare) i soldi.', 'fare', 5], ['Valerio e Ugo ___ (venire) in Italia.', 'venire', 5, 'm'], ['Valerio e Ugo ___ (comprare) una casa al loro paese.', 'comprare', 5],
    /* — La giornata della signora X — */
    ['Alle 8.00 la signora X ___ (alzarsi).', 'alzarsi', 2, 'f'], ['Poi la signora X ___ (fare) colazione.', 'fare', 2],
    ['Alle 9.00 la signora X ___ (prendere) l\'auto.', 'prendere', 2], ['Poi la signora X ___ (uscire) per andare al lavoro.', 'uscire', 2, 'f'],
    ['Alle 10.30 la signora X ___ (avere) un appuntamento con alcuni avvocati.', 'avere', 2], ['Alle 12.00 la signora X ___ (studiare) un caso importante.', 'studiare', 2],
    ['Alle 13.00 la signora X ___ (fare) una pausa pranzo con i colleghi.', 'fare', 2], ['Alle 14.00 la signora X ___ (occuparsi) di un omicidio.', 'occuparsi', 2, 'f'],
    ['Alle 15.00 la signora X ___ (parlare) con i giornalisti.', 'parlare', 2], ['Alle 17.00 la signora X ___ (prendere) un caffè con un giudice.', 'prendere', 2],
    ['Alle 18.00 la signora X ___ (dare) gli ordini per il lavoro notturno.', 'dare', 2], ['Alle 19.00 la signora X ___ (andare) al corso di judo.', 'andare', 2, 'f'],
    ['Alle 21.00 la signora X ___ (tornare) a casa stanchissima.', 'tornare', 2, 'f'], ['Alle 22.30 la signora X ___ (andare) a letto.', 'andare', 2, 'f'],
    ['Poi la signora X ___ (leggere) un giallo.', 'leggere', 2],
    /* — La vita di Roberto — */
    ['Trenta anni fa Roberto ___ (innamorarsi) di una compagna del liceo.', 'innamorarsi', 2, 'm'], ['Venti anni fa Roberto ___ (sposare) l\'ex compagna di liceo.', 'sposare', 2],
    ['Cinque anni fa Roberto e la moglie ___ (separarsi).', 'separarsi', 5, 'm'], ['Venticinque anni fa Roberto ___ (laurearsi) in ingegneria.', 'laurearsi', 2, 'm'],
    ['Poi Roberto ___ (trovare) subito un buon lavoro.', 'trovare', 2], ['Quattro anni fa Roberto ___ (licenziarsi).', 'licenziarsi', 2, 'm'],
    ['Roberto ___ (cominciare) una nuova attività.', 'cominciare', 2], ['Un paio di anni fa Roberto ___ (vendere) la casa di famiglia in montagna.', 'vendere', 2],
    ['L\'apertura dell\'agenzia ___ (costare) molto.', 'costare', 2, 'f'], ['Ma Roberto ___ (essere) contento di aprirla.', 'essere', 2, 'm'],
    ['Ieri ___ (cominciare) il torneo di tennis di Wimbledon.', 'cominciare', 2, 'm', 'essere'], ['Ma Roberto non ___ (avere) il tempo di vederlo.', 'avere', 2],
    ['In passato Roberto ___ (giocare) per un po\' di tempo a tennis.', 'giocare', 2],
    /* — Personaggi famosi (Machiavelli, Leone, Vivaldi) — */
    ['Niccolò ___ (nascere) a Firenze nel 1469.', 'nascere', 2, 'm'], ['Niccolò ___ (morire) nella stessa città nel 1527.', 'morire', 2, 'm'],
    ['Per molti, lui ___ (introdurre) la scienza politica moderna.', 'introdurre', 2], ['Lui ___ (interessarsi) molto di politica per tutta la vita.', 'interessarsi', 2, 'm'],
    ['Lui ___ (viaggiare) molto in Italia e in Francia come ambasciatore.', 'viaggiare', 2], ['Nel 1513 lui ___ (finire) in prigione.', 'finire', 2, 'm', 'essere'],
    ['Dopo, lui ___ (andare) in esilio.', 'andare', 2, 'm'], ['In esilio lui ___ (scrivere) «Il Principe».', 'scrivere', 2], ['Lui ___ (comporre) poesie e altre opere.', 'comporre', 2],
    ['Sergio ___ (essere) un regista molto famoso.', 'essere', 2, 'm'], ['Sergio ___ (fare) film con uno stile particolare.', 'fare', 2],
    ['Alcuni ___ (definire) quei film «spaghetti western».', 'definire', 5], ['Con lui ___ (cominciare) la rinascita del western.', 'cominciare', 2, 'f', 'essere'],
    ['Sergio ___ (lanciare) nel cinema l\'attore Clint Eastwood.', 'lanciare', 2], ['Negli anni \'70 lui ___ (trasferirsi) negli Stati Uniti.', 'trasferirsi', 2, 'm'],
    ['Questo regista non ___ (vincere) mai un Oscar.', 'vincere', 2], ['Lui ___ (produrre) anche molti film.', 'produrre', 2],
    ['Vivaldi ___ (vivere) fra il XVII e il XVIII secolo.', 'vivere', 2, 'm', 'essere|avere'], ['Lui ___ (cominciare) a studiare violino con suo padre.', 'cominciare', 2],
    ['Lui ___ (diventare) sacerdote.', 'diventare', 2, 'm'], ['Lui ___ (comporre) molto.', 'comporre', 2], ['Lui ___ (essere) famoso in molte corti d\'Europa.', 'essere', 2, 'm'],
    ['Lui ___ (scrivere) musica per i re e i nobili.', 'scrivere', 2], ['Ma lui ___ (rimanere) povero.', 'rimanere', 2, 'm'], ['Lui ___ (morire) a Vienna, in povertà.', 'morire', 2, 'm'],
    /* — Strane notizie — */
    ['Una donna ___ (cadere) su un binario del treno.', 'cadere', 2, 'f'], ['Pochi minuti dopo ___ (arrivare) un treno.', 'arrivare', 2, 'm'],
    ['La donna ___ (salvarsi).', 'salvarsi', 2, 'f'], ['Poi la donna ___ (uscire) dall\'avventura senza un graffio.', 'uscire', 2, 'f'],
    ['Il macchinista ___ (vedere) la donna.', 'vedere', 2], ['Il macchinista non ___ (fare) in tempo a fermarsi.', 'fare', 2],
    ['Il treno le ___ (passare) sopra.', 'passare', 2, 'm', 'essere'], ['Lei ___ (rimanere) illesa.', 'rimanere', 2, 'f'],
    ['Una sposa ___ (finire) all\'ospedale.', 'finire', 2, 'f', 'essere'], ['Gli invitati ___ (tirare) i chicchi di riso.', 'tirare', 5],
    ['Un chicco ___ (entrare) in un orecchio della sposa.', 'entrare', 2, 'm'], ['La sposa ___ (dovere) andare al pronto soccorso.', 'dovere', 2, 'f', 'essere'],
    ['Una famiglia australiana ___ (rimanere) bloccata per tre ore.', 'rimanere', 2, 'f'], ['Il canguro ___ (rompere) una finestra.', 'rompere', 2],
    ['Il canguro ___ (ferirsi).', 'ferirsi', 2, 'm'], ['Solo dopo tre ore il veterinario ___ (riuscire) a prendere l\'animale.', 'riuscire', 2, 'm'],
    ['La famiglia ___ (tornare) libera.', 'tornare', 2, 'f'], ['Una signora ___ (ricevere) una lettera.', 'ricevere', 2],
    ['Quando lei ___ (aprire) la lettera, ha capito che c\'era qualcosa di strano.', 'aprire', 2], ['Lei ___ (capire) che c\'era qualcosa di strano.', 'capire', 2],
    ['L\'amica le ___ (chiedere) informazioni sulla scuola.', 'chiedere', 2], ['La signora ___ (controllare) il timbro sul francobollo.', 'controllare', 2],
    ['La sua amica ___ (spedire) la lettera nel 1990.', 'spedire', 2], ['Le Poste ___ (impiegare) più di venti anni per recapitarla.', 'impiegare', 5]
  ]);

  /* ---- participio passato: Marconi + tabla de irregulares ---- */
  NF.part_pass = NF.part_pass.concat([
    ['Guglielmo è ___ (diventare) famoso come scienziato e inventore.', 'diventare'], ['Ha ___ (studiare) l\'elettromagnetismo.', 'studiare'],
    ['Ha ___ (inventare) la radio.', 'inventare'], ['È ___ (andare) in Inghilterra a fare le sue ricerche.', 'andare'],
    ['Ha ___ (sposare) un\'irlandese.', 'sposare'], ['Poi è ___ (partire) per l\'America.', 'partire'], ['Ha ___ (continuare) a fare esperimenti.', 'continuare'],
    ['Nel 1909 ha ___ (ricevere) il Premio Nobel per la fisica.', 'ricevere'], ['L\'Inghilterra lo ha ___ (nominare) baronetto.', 'nominare'],
    ['Non ho ___ (accendere) la luce perché è ancora chiaro.', 'accendere'], ['Non ti sei ___ (accorgersi) che il gatto è uscito?', 'accorgersi', 'accorto|accorta'],
    ['Ha ___ (aprire) Lei la porta?', 'aprire'], ['Quanto avete ___ (bere)?', 'bere'], ['Abbiamo ___ (chiedere) informazioni a un vigile.', 'chiedere'],
    ['I negozi hanno ___ (chiudere) alle 19.00.', 'chiudere'], ['Sono ___ (correre) qui appena ho saputo dell\'incidente.', 'correre', 'corso|corsa'],
    ['Allora hai ___ (decidere) dove andare in vacanza?', 'decidere'], ['Ho già ___ (dire) tutto alla polizia.', 'dire'], ['Hanno ___ (dividere) l\'appartamento.', 'dividere'],
    ['Ieri siamo ___ (essere) al cinema.', 'essere', 'stati|state'], ['Il bambino ha ___ (fare) la pipì a letto.', 'fare'],
    ['Mio padre ha ___ (leggere) tutta l\'enciclopedia.', 'leggere'], ['Hai ___ (mettere) i soldi in banca?', 'mettere'], ['Suo nonno è ___ (morire) tre anni fa.', 'morire'],
    ['Dante è ___ (nascere) a Firenze.', 'nascere'], ['Aldo ha ___ (offendere) Beppe.', 'offendere'], ['Gigi ha ___ (offrire) il pranzo.', 'offrire'],
    ['Ho ___ (perdere) due milioni a carte.', 'perdere'], ['Questa estate avete ___ (prendere) tanto sole.', 'prendere'], ['Sei ___ (rimanere) in città a Ferragosto?', 'rimanere', 'rimasto|rimasta'],
    ['Non ha ___ (rispondere) alla mia domanda, Signor Rossi.', 'rispondere'], ['Ho ___ (rompere) il computer.', 'rompere'], ['Alla fine ho ___ (scegliere) la gonna blu.', 'scegliere'],
    ['Siamo ___ (scendere) al pianterreno.', 'scendere', 'scesi|scese'], ['Abbiamo ___ (scrivere) a casa.', 'scrivere'], ['Hanno ___ (spegnere) tutte le luci.', 'spegnere'],
    ['È ___ (stare) in casa tutto il giorno.', 'stare', 'stato|stata'], ['Che è ___ (succedere)?', 'succedere'], ['Hanno ___ (tradurre) il libro di Queneau.', 'tradurre'],
    ['Hai ___ (vedere) l\'ultimo film di Benigni?', 'vedere'], ['Non è ___ (venire) quasi nessuno alla festa.', 'venire'], ['La Francia ha ___ (vincere) i Mondiali del 1998.', 'vincere'],
    ['Ho ___ (vivere) due anni in Germania.', 'vivere']
  ]);

  /* ---- elección entre dos formas (tal como en el libro) · la primera opción es la correcta ---- */
  function fc(text, a, b) { FC.push({ m: 'ind_pp', t: 'ind_pp', text: text, o: [a, b] }); }
  fc('Ieri le ragazze ___ al mare.', 'sono andate', 'sono andati');
  fc('L\'Italia ___ una Repubblica nel 1946.', 'è diventata', 'è diventato');
  fc('Giulia ___ un libro a sua sorella.', 'ha comprato', 'ha comprata');
  fc('I miei ___ questa mattina.', 'sono partiti', 'sono partito');
  fc('La mia amica ___ l\'esame.', 'ha passato', 'ha passata');
  fc('Pierino ___ dalla bicicletta.', 'è caduto', 'è caduta');
  fc('Ieri ___ il tuo regalo.', 'ho ricevuto', 'ho ricevuta');
  fc('Silvia e Ennio ___ poche settimane fa.', 'hanno divorziato', 'sono divorziati');
  fc('Quindi Silvia e Ennio ___ d\'accordo.', 'si sono messi', 'hanno messo');
  fc('Silvia e Ennio ___ una bellissima festa.', 'hanno organizzato', 'sono organizzati');
  fc('Noi amici ___ quasi tutti.', 'siamo andati', 'abbiamo andato');
  fc('Paul e la moglie ___ dalla Germania.', 'sono arrivati', 'hanno arrivato');
  fc('Gli invitati ___ fino alla mattina.', 'hanno ballato', 'sono ballati');
  fc('Gli invitati ___ molto.', 'hanno mangiato', 'sono mangiati');
  fc('Tutti ___ come matti.', 'si sono divertiti', 'hanno divertito');
  fc('Alla fine della festa Silvia e Ennio ___ a casa.', 'sono tornati', 'hanno tornato');
  fc('Mi ___ alle 6.00.', 'sono alzata', 'ho alzata');
  fc('Mario ___ Marella.', 'ha sposato', 'è sposato');
  fc('Questa borsa ___ molto.', 'è costata', 'ha costata');
  fc('Mio nonno ___ molto tempo fa.', 'è morto', 'ha morto');

  /* =================== PRESENTE DE LOS VERBOS REGULARES (libro) =================== */
  S.ind_pres = S.ind_pres.concat([
    /* — Ej. 3 · verbos en -are — */
    ['Io ___ (lavorare) in banca.', 'lavorare', 0], ['Stefano ___ (parlare) bene l\'inglese perché abita in America.', 'parlare', 2],
    ['Stefano parla bene l\'inglese perché ___ (abitare) in America.', 'abitare', 2], ['Quando ___ (giocare) a calcio, voi?', 'giocare', 4],
    ['Io ___ (pensare) spesso alla mia famiglia.', 'pensare', 0], ['Scusi, a che ora ___ (arrivare) il treno?', 'arrivare', 2],
    ['Perché non ___ (comprare) un biglietto della lotteria, tu?', 'comprare', 1], ['Anna ___ (portare) la figlia a scuola.', 'portare', 2],
    ['Normalmente gli italiani ___ (studiare) inglese a scuola.', 'studiare', 5], ['Noi ___ (tornare) a Roma lunedì.', 'tornare', 3],
    ['Signora, Lei ___ (guidare)?', 'guidare', 2],
    /* — Ej. 4 · verbos en -ere — */
    ['Tu ___ (vedere) quella donna? È russa.', 'vedere', 1], ['Io ___ (perdere) sempre le chiavi di casa.', 'perdere', 0],
    ['Scusi, Lei ___ (chiudere) la porta, per piacere?', 'chiudere', 2], ['Io ___ (vivere) in Inghilterra da 4 anni.', 'vivere', 0],
    ['Se voi non ___ (mettere) l\'indirizzo corretto, la lettera non arriva.', 'mettere', 4], ['Loro non ___ (permettere) al figlio di uscire la sera.', 'permettere', 5],
    ['Mia sorella non ___ (vivere) in un appartamento.', 'vivere', 2], ['Paola ___ (cadere) spesso da cavallo.', 'cadere', 2],
    ['Alberto è un pittore e ___ (vendere) molti quadri.', 'vendere', 2], ['Noi ___ (vedere) molti film.', 'vedere', 3],
    /* — Ej. 5 · verbos en -ire — */
    ['"Quale vino ___ (preferire) Lei?" "D\'estate io preferisco il bianco."', 'preferire', 2], ['"Quale vino preferisce Lei?" "D\'estate io ___ (preferire) il bianco."', 'preferire', 0],
    ['L\'aereo per Parigi ___ (partire) alle 18.30.', 'partire', 2], ['A che ora ___ (finire) di lavorare, tu?', 'finire', 1],
    ['___ (sentire) questa musica, tu?', 'sentire', 1], ['Il concerto ___ (finire) fra un\'ora.', 'finire', 2],
    ['Anna ___ (dormire) sempre troppo.', 'dormire', 2], ['Loro non ___ (capire) l\'inglese.', 'capire', 5],
    ['Oggi ___ (offrire) noi!', 'offrire', 3], ['Oggi io ___ (pulire) il bagno.', 'pulire', 0], ['A che ora ___ (partire), voi?', 'partire', 4],
    /* — Ej. 6 · -are, -ere, -ire — */
    ['Paola ___ (vivere) a Venezia e lavora in un negozio di abbigliamento.', 'vivere', 2], ['Paola vive a Venezia e ___ (lavorare) in un negozio di abbigliamento.', 'lavorare', 2],
    ['Quando io ___ (studiare), ascolto sempre la radio.', 'studiare', 0], ['Quando studio, io ___ (ascoltare) sempre la radio.', 'ascoltare', 0],
    ['Ornella e Luca ___ (partire) oggi per le vacanze.', 'partire', 5], ['Loro ___ (prendere) il treno fino a Napoli e poi il traghetto fino a Ischia.', 'prendere', 5],
    ['Perché non ___ (pulire) la cucina, tu, quando mangi?', 'pulire', 1], ['Voi ___ (lavorare) troppo.', 'lavorare', 4],
    ['Signor Fabi, se ___ (preferire) un appuntamento per la prossima settimana, io sono libero martedì pomeriggio.', 'preferire', 2],
    ['Annalisa ___ (giocare) molto bene a tennis.', 'giocare', 2], ['Quando l\'insegnante ___ (parlare) veloce, gli studenti non capiscono quasi niente.', 'parlare', 2],
    ['Quando l\'insegnante parla veloce, gli studenti non ___ (capire) quasi niente.', 'capire', 5], ['Questo esercizio non ___ (finire) mai!', 'finire', 2],
    ['Signora, ___ (vedere) quella fontana?', 'vedere', 2], ['L\'autobus ___ (passare) proprio lì davanti.', 'passare', 2],
    /* — Ej. 9 · Il primo maggio in Italia — */
    ['Il primo maggio nessuno ___ (lavorare) e molti approfittano della giornata libera.', 'lavorare', 2], ['Il primo maggio nessuno lavora e molti ___ (approfittare) della giornata libera.', 'approfittare', 5],
    ['Questa festività ___ (risalire) al 1886, quando, durante una protesta a Chicago, la polizia ha ucciso i protestanti.', 'risalire', 2], ['Durante una protesta a Chicago, la polizia ___ (aggredire) i protestanti.', 'aggredire', 2],
    ['Così ___ (nascere) la festa del 1° maggio.', 'nascere', 2], ['In molti paesi la festa ___ (diventare) ufficiale.', 'diventare', 2],
    ['Il regime fascista ___ (cancellare) questo giorno di festa.', 'cancellare', 2], ['Il regime fascista ___ (inserire) al suo posto la celebrazione della Festa del Lavoro Italiano.', 'inserire', 2],
    ['Dopo la guerra la Repubblica Italiana ___ (riprendere) questo giorno festivo.', 'riprendere', 2], ['Oggi i sindacati ___ (organizzare) a Roma un concerto.', 'organizzare', 5],
    ['Al concerto ___ (partecipare) centinaia di migliaia di persone.', 'partecipare', 5],
    /* — Ej. 10 · città (Venezia, Napoli, Matera) — */
    ['In questa città gli abitanti ___ (viaggiare) con barche, vaporetti o a piedi.', 'viaggiare', 5], ['Ogni anno a febbraio gli abitanti ___ (organizzare) bellissime feste in maschera.', 'organizzare', 5],
    ['La città ___ (ospitare) un famoso Festival Internazionale del Cinema.', 'ospitare', 2], ['Ogni due anni la città ___ (allestire) la Biennale d\'Arte Moderna.', 'allestire', 2],
    ['Quando ___ (visitare) questa città, tu trovi tantissime cose da fare.', 'visitare', 1], ['Se ___ (decidere) di girare il centro, tu scopri degli angoli molto particolari.', 'decidere', 1],
    ['Se decidi di girare il centro, ___ (scoprire) degli angoli molto particolari, tu.', 'scoprire', 1], ['Se ___ (camminare) lungo il mare, tu vedi un vulcano famosissimo.', 'camminare', 1],
    ['Se cammini lungo il mare, ___ (vedere) un vulcano famosissimo, tu.', 'vedere', 1], ['Se ___ (passare) da questa città a Natale, devi visitare via San Gregorio Armeno.', 'passare', 1],
    ['In quel periodo via San Gregorio Armeno ___ (diventare) una strada bellissima.', 'diventare', 2], ['Con molti negozi di artigiani che ___ (vendere) le statue del presepe.', 'vendere', 5],
    ['Gli abitanti di questa città ___ (mangiare) la vera pizza originale.', 'mangiare', 5], ['Gli abitanti ___ (preparare) il caffè più buono d\'Italia.', 'preparare', 5],
    ['Gli abitanti di questa piccola città della Basilicata ___ (abitare) in collina.', 'abitare', 5], ['I turisti ___ (camminare) fra i Sassi.', 'camminare', 5],
    ['I turisti ___ (ammirare) le antiche case della città.', 'ammirare', 5], ['Qui i turisti ___ (visitare) anche la cattedrale medievale.', 'visitare', 5],
    ['Noi ___ (trovare) anche un bel castello, il Castello Tramontano.', 'trovare', 3],
    /* — Ej. 11 · el libro (Io non ho paura) — */
    ['Tutto ___ (succedere) nel 1978.', 'succedere', 2], ['Il protagonista, un ragazzino che ___ (scoprire) un terribile segreto, si chiama Michele.', 'scoprire', 2],
    ['Un giorno, mentre ___ (giocare) con gli amici, lui trova un pozzo.', 'giocare', 2], ['Un giorno, mentre gioca con gli amici, lui ___ (trovare) un pozzo.', 'trovare', 2],
    ['Dentro il pozzo lui ___ (vedere) un bambino come lui, Filippo.', 'vedere', 2], ['Michele e Filippo ___ (diventare) amici.', 'diventare', 5],
    ['Più tardi Michele ___ (capire) che i suoi genitori nascondono Filippo.', 'capire', 2], ['I suoi genitori ___ (nascondere) Filippo per avere dei soldi.', 'nascondere', 5],
    ['Michele ___ (decidere) di aiutare Filippo a fuggire.', 'decidere', 2], ['Michele ___ (agire) con coraggio contro i suoi genitori.', 'agire', 2],
    ['Michele ___ (vincere) la paura.', 'vincere', 2],
    /* — Ej. 12 · palabras del recuadro (cambia, crescono, hanno, sono…) — */
    ['L\'interesse per la lingua italiana nel mondo ___ (cambiare).', 'cambiare', 2], ['Il numero degli studenti ___ (crescere) ogni anno.', 'crescere', 2],
    ['I corsi di italiano ___ (crescere) quasi del doppio.', 'crescere', 5], ['Anche gli studenti dell\'Europa centro-occidentale ___ (amare) molto l\'italiano.', 'amare', 5],
    ['Gli studenti africani ___ (mettere) il lavoro come prima motivazione.', 'mettere', 5], ['Noi ___ (vedere) che i risultati sono molto diversi.', 'vedere', 3],
    ['Perché gli stranieri ___ (preferire) la nostra lingua?', 'preferire', 5], ['Oceania e Nord America ___ (seguire) le preferenze europee.', 'seguire', 5],
    ['Gli Istituti Italiani di Cultura ___ (organizzare) molti corsi.', 'organizzare', 5], ['A Tokyo e a Kyoto ___ (essere) due Istituti Italiani di Cultura.', 'essere', 5],
    ['Gli istituti ___ (avere) circa 1800 corsi di italiano.', 'avere', 5], ['In Giappone la lingua italiana ___ (arrivare) con molti studenti.', 'arrivare', 2],
    /* — Ej. 13 · presentaciones (3ª persona) — */
    ['Andrea ___ (abitare) in centro e lavora in un\'agenzia turistica.', 'abitare', 2], ['Andrea abita in centro, dove ___ (lavorare) in un\'agenzia turistica dal lunedì al venerdì.', 'lavorare', 2],
    ['Di solito Andrea ___ (cominciare) a lavorare alle 9.00 e finisce alle 5.00.', 'cominciare', 2], ['Di solito Andrea comincia alle 9.00 e ___ (finire) alle 5.00.', 'finire', 2],
    ['Tre volte alla settimana Andrea ___ (giocare) a tennis con un amico.', 'giocare', 2], ['Andrea non è fidanzato perché ___ (preferire) rimanere libero e indipendente.', 'preferire', 2],
    ['La sera Andrea ___ (vedere) spesso gli amici.', 'vedere', 2], ['Veronica ___ (insegnare) in una scuola elementare.', 'insegnare', 2],
    ['Veronica ___ (leggere) molto e spende molti soldi nelle librerie.', 'leggere', 2], ['Veronica legge molto e ___ (spendere) molti soldi nelle librerie.', 'spendere', 2],
    ['Qualche volta Veronica ___ (pensare) di scrivere un libro sui bambini.', 'pensare', 2], ['Caterina ___ (lavorare) in una società informatica come designer grafico.', 'lavorare', 2],
    ['Quando non ha idee, Caterina ___ (prendere) la macchina e gira lungo la costa.', 'prendere', 2], ['Quando non ha idee, Caterina prende la macchina e ___ (girare) lungo la costa.', 'girare', 2],
    ['Caterina ___ (viaggiare) volentieri e conosce sempre nuove persone.', 'viaggiare', 2], ['Caterina viaggia volentieri e ___ (conoscere) sempre nuove persone.', 'conoscere', 2]
  ]);

  function fcm(t, text, a, b) { FC.push({ m: 'ind_pres', t: 'ind_pres', text: text, o: [a, b] }); }
  /* Ej. 1 · los oficios */
  fcm('', 'Il postino ___.', 'porta la posta', 'scrive libri'); fcm('', 'Il commesso ___.', 'serve i clienti di un negozio', 'lavora in casa');
  fcm('', 'Lo spazzino ___.', 'pulisce le strade', 'dipinge quadri'); fcm('', 'Il barista ___.', 'lavora in un bar', 'canta le canzoni');
  fcm('', 'Il pittore ___.', 'dipinge quadri', 'prepara da mangiare'); fcm('', 'Il cantante ___.', 'canta le canzoni', 'esegue gli ordini');
  fcm('', 'L\'infermiere ___.', 'lavora in un ospedale', 'lavora in ufficio'); fcm('', 'Il cuoco ___.', 'prepara da mangiare', 'scrive libri');
  fcm('', 'Il militare ___.', 'esegue gli ordini', 'progetta macchine'); fcm('', 'La casalinga ___.', 'lavora in casa', 'serve i clienti di un negozio');
  fcm('', 'L\'impiegato ___.', 'lavora in ufficio', 'lavora in un bar'); fcm('', 'L\'ingegnere ___.', 'progetta macchine', 'porta la posta');
  fcm('', 'Lo scrittore ___.', 'scrive libri', 'pulisce le strade');
  /* Ej. 8 · elige el verbo correcto (Andrea B., il Papa, Giorgio A.) */
  fcm('', 'Sono italiano e ___ tutto il mondo per cantare.', 'giro', 'gira'); fcm('', 'Io ___ in Italia.', 'vivo', 'vive');
  fcm('', 'Gli italiani mi ___ perché vedono i miei concerti.', 'conoscono', 'conosciamo'); fcm('', 'Gli italiani ___ i miei dischi.', 'comprano', 'compra');
  fcm('', 'Mi ___ Andrea.', 'chiamo', 'chiama'); fcm('', 'Io ___ molti tipi di musica.', 'canto', 'canta');
  fcm('', 'Io ___ in un piccolo stato indipendente dentro l\'Italia.', 'abito', 'abita'); fcm('', 'Io ___ un lavoro di responsabilità.', 'ho', 'ha');
  fcm('', 'Io ___ molto.', 'viaggio', 'viaggiamo'); fcm('', 'Di solito io ___ abiti bianchi e lunghi.', 'porto', 'porta');
  fcm('', 'La domenica molta gente ___ di vedermi.', 'aspetta', 'aspettano'); fcm('', 'Quando io ___ la finestra, parlo.', 'apro', 'apre');
  fcm('', 'Le guardie del mio stato ___ tedesco.', 'parlano', 'parlate'); fcm('', 'Io ___ a Milano e lavoro a Milano.', 'vivo', 'vive');
  fcm('', 'Uomini e donne ___ i vestiti che io disegno.', 'indossano', 'indossiamo'); fcm('', 'Molte modelle ___ per me.', 'lavorano', 'lavora');
  fcm('', 'I miei vestiti ___ molti soldi.', 'costano', 'costa'); fcm('', 'Mi ___ Giorgio.', 'chiamo', 'chiamano');

  /* =================== IMPERFETTO (libro) =================== */
  S.ind_imperf = S.ind_imperf.concat([
    /* — Ej. 2 (a) · el hermano — */
    ["Quando ___ (essere) piccola, tutti mi dicevano che sembravo mio fratello.", "essere", 0],
    ["Quando ero piccola, tutti mi ___ (dire) che sembravo mio fratello.", "dire", 5],
    ["Quando ero piccola, tutti mi dicevano che ___ (sembrare) mio fratello.", "sembrare", 0],
    ["Io non ___ (essere) contenta, prima di tutto perché lui era un maschio.", "essere", 0],
    ["Io non ero contenta, prima di tutto perché lui ___ (essere) un maschio.", "essere", 2],
    ["Mio fratello non mi ___ (piacere).", "piacere", 2],
    ["Mio fratello ___ (essere) antipatico.", "essere", 2],
    ["Mio fratello non ___ (volere) mai giocare con me.", "volere", 2],
    ["Mio fratello mi ___ (fare) sempre gli scherzi.", "fare", 2],
    ["Mio fratello mi faceva sempre gli scherzi e ___ (ridere) di me con i suoi amici.", "ridere", 2],
    ["E tu, ___ (andare) d'accordo con tuo fratello o con tua sorella?", "andare", 1],
    /* — Ej. 2 (b) · la abuela — */
    ["Mia nonna mi racconta che quando lei ___ (essere) giovane viveva in campagna.", "essere", 2],
    ["Mia nonna mi racconta che quando lei era giovane ___ (vivere) in campagna.", "vivere", 2],
    ["Mia nonna dice che la vita non ___ (essere) molto facile.", "essere", 2],
    ["I contadini ___ (mangiare) carne solo una volta la settimana.", "mangiare", 5],
    ["I contadini mangiavano carne solo una volta la settimana, quando ___ (essere) fortunati.", "essere", 5],
    ["Di solito ___ (essere) carne di coniglio allevato da loro.", "essere", 2],
    ["I giovani ___ (dovere) aiutare in casa.", "dovere", 5],
    ["Solo le famiglie meno povere ___ (potere) permettersi di far studiare qualche figlio.", "potere", 5],
    ["Come ___ (vivere) i contadini nel tuo paese 70 anni fa?", "vivere", 5],
    /* — Ej. 3 · leyendas italianas — */
    ["Ad Alassio, molto tempo fa, ___ (vivere) alcune streghe chiamate «bazure».", "vivere", 5],
    ["Nelle notti di tempesta, le streghe ___ (ritrovarsi) sulla spiaggia.", "ritrovarsi", 5],
    ["Le streghe ___ (mettere) in mare le barche che i pescatori avevano lasciato.", "mettere", 5],
    ["Le streghe mettevano in mare le barche che i pescatori ___ (avere) lasciato.", "avere", 5],
    ["Le streghe ___ (andare) con le barche verso l'Africa.", "andare", 5],
    ["Prima dell'alba, però, le streghe ___ (tornare) con enormi quantità di datteri.", "tornare", 5],
    ["Un tempo le ragazze che non ___ (trovare) marito chiedevano l'aiuto della Madonna.", "trovare", 5],
    ["Un tempo le ragazze che non trovavano marito ___ (chiedere) l'aiuto della Madonna.", "chiedere", 5],
    ["Una volta nelle grotte del monte Riventino ___ (vivere) delle fate.", "vivere", 5],
    ["Queste fate ___ (volere) costruire una chiesa sul monte.", "volere", 5],
    ["Le fate volevano costruire una chiesa sul monte perché ___ (essere) molto religiose.", "essere", 5],
    ["Solo un uomo ___ (potere) comunicare con le fate.", "potere", 2],
    ["Il ragazzo che ogni giorno ___ (portare) il pranzo agli uomini era l'unico che parlava con le fate.", "portare", 2],
    ["Il ragazzo portava il pranzo agli uomini che ___ (lavorare) alla costruzione della chiesa.", "lavorare", 5],
    ["Ogni giorno il ragazzo ___ (parlare) con le fate.", "parlare", 2],
    ["Ogni giorno il ragazzo parlava con le fate e poi ___ (andare) a dare ai muratori le istruzioni.", "andare", 2],
    ["Gli uomini, che ___ (essere) curiosi e volevano vedere le fate, uccisero il ragazzo.", "essere", 5],
    ["Gli uomini, che erano curiosi e ___ (volere) vedere le fate, uccisero il ragazzo.", "volere", 5],
    ["Il ragazzo, che ___ (cercare) di proteggerle, fu ucciso.", "cercare", 2],
    /* — Usos del imperfetto (a–g) — */
    ["Da bambina io ___ (avere) i capelli biondi.", "avere", 0], ["Ieri ___ (fare) così freddo!", "fare", 2],
    ["D'estate noi ___ (andare) al mare tutti i giorni.", "andare", 3], ["Ricordo che di solito tu ___ (dire) molte bugie.", "dire", 1],
    ["Non sono venuto perché ___ (essere) depresso.", "essere", 0], ["Ieri Anna non ___ (sentirsi) bene.", "sentirsi", 2],
    ["C'___ (essere) una volta un re che aveva una figlia bellissima.", "essere", 2], ["C'era una volta un re che ___ (avere) una figlia bellissima.", "avere", 2],
    ["Loro ___ (stare) per uscire quando siamo entrati.", "stare", 5], ["Mentre noi ___ (guardare) la TV, è saltata la luce.", "guardare", 3],
    ["Io ___ (aspettare) l'autobus già da mezz'ora quando è passato mio padre in macchina.", "aspettare", 0],
    ["Anna era in casa e ___ (leggere) il giornale.", "leggere", 2], ["Buongiorno, ___ (volere) tre etti di prosciutto.", "volere", 0],
    /* — Ej. «Una nascita nella famiglia Rossi» (partes en imperfetto) — */
    ["Era un giorno caldo e c'___ (essere) una luce così chiara e uniforme sulla città.", "essere", 2],
    ["C'era una luce così chiara che ___ (sembrare) un giorno di primavera.", "sembrare", 2],
    ["Il bambino ___ (essere) grande e aveva dei capelli lunghi e neri.", "essere", 2], ["Il bambino era grande e ___ (avere) dei capelli lunghi e neri.", "avere", 2],
    ["Per fortuna il bambino ___ (essere) tranquillo e non piangeva.", "essere", 2], ["Per fortuna il bambino era tranquillo e non ___ (piangere).", "piangere", 2],
    ["Mentre Silvia ___ (trovarsi) all'ospedale, a partorire, il padre era al lavoro.", "trovarsi", 2],
    ["Il padre, Piero, ___ (essere) al lavoro e aspettava nervoso una telefonata dall'infermiera.", "essere", 2],
    ["Piero era al lavoro e ___ (aspettare) nervoso una telefonata dall'infermiera.", "aspettare", 2],
    ["Piero non si è accorto che la donna che ___ (stare) nel letto non era sua moglie.", "stare", 2],
    ["Piero non si è accorto che la donna che stava nel letto non ___ (essere) sua moglie.", "essere", 2],
    ["La pancia ___ (essere) ancora grossa e la donna era bionda, non castana come Silvia.", "essere", 2],
    ["La donna ___ (essere) bionda, non castana come Silvia.", "essere", 2],
    ["La moglie ___ (trovarsi) in quella stanza accanto.", "trovarsi", 2], ["Giacomo ___ (essere) lì con lei, addormentato nella culla.", "essere", 2],
    ["Silvia ___ (ridere) perché era la prima volta che vedeva suo marito così confuso.", "ridere", 2],
    ["Silvia rideva perché era la prima volta che ___ (vedere) suo marito così confuso.", "vedere", 2],
    /* — Ej. 4 · el empresario — */
    ["Quando ___ (essere) più giovane, io lavoravo come animatore sulle navi da crociera.", "essere", 0],
    ["Quando ero più giovane ___ (lavorare) come animatore sulle navi da crociera.", "lavorare", 0],
    ["Io ___ (avere) molti amici politici.", "avere", 0], ["Il paese ___ (avere) bisogno di un volto nuovo e onesto.", "avere", 2],
    /* — Ej. Basilicata (ultracentenaria) — */
    ["Una signora che ___ (compiere) 103 anni è stata festeggiata dal comune.", "compiere", 2],
    ["Alla festa ___ (essere) presenti i parenti e molti amici.", "essere", 5], ["La signora ___ (essere) molto emozionata.", "essere", 2],
    ["La signora non ___ (avere) problemi a rispondere alle interviste.", "avere", 2],
    ["La signora rispondeva a tutti gli ospiti che ___ (volere) parlare con lei.", "volere", 5],
    ["Da giovane la nonna ___ (occuparsi) della famiglia.", "occuparsi", 2], ["Il sindaco ha dato appuntamento alla nonnina mentre ___ (uscire).", "uscire", 2],
    /* — Ej. Vittoria Colonna — */
    ["Vittoria ___ (essere) figlia di nobili.", "essere", 2], ["Quando ___ (avere) cinque anni, Vittoria è stata promessa in sposa a Francesco D'Avalos.", "avere", 2],
    ["Prima delle nozze Vittoria e Francesco non ___ (conoscersi) quasi per niente.", "conoscersi", 5],
    ["Vittoria e Francesco ___ (essere) molto felici insieme.", "essere", 5], ["Vittoria, per la tristezza, ___ (volere) suicidarsi.", "volere", 2],
    /* — Ej. Una domenica — */
    ["Domenica il tempo non ___ (essere) per niente buono.", "essere", 2], ["Il tempo non era buono: c'___ (essere) un gran vento.", "essere", 2],
    ["Il tempo non era buono: c'era un gran vento e ___ (fare) molto freddo.", "fare", 2], ["Carla non ___ (sentirsi) molto bene.", "sentirsi", 2],
    ["Federica non ___ (essere) in casa.", "essere", 2], ["Il figlio ha risposto che non ___ (sapere) dove era la madre.", "sapere", 2],
    ["Il figlio ha risposto che non sapeva dove ___ (essere) la madre.", "essere", 2], ["Carla ha pensato che forse non ___ (essere) una cattiva idea.", "essere", 2],
    /* — Passato prossimo o imperfetto de algunos verbos (imperfetto) — */
    ["Da bambina io non ___ (potere) uscire da sola la sera.", "potere", 0], ["Davvero Franca si è fatta suora? Non lo ___ (sapere)!", "sapere", 0],
    ["Io ___ (volere) telefonarti, ma non ho avuto tempo.", "volere", 0], ["A quei tempi Sonia non ___ (conoscere) ancora suo marito.", "conoscere", 2],
    ["Non ___ (dovere) lasciare la porta aperta! Ora il gatto è scappato.", "dovere", 1],
    ["I Rossi ___ (dovere) fare dei lavori in casa, ma hanno deciso di usare i soldi per andare in vacanza.", "dovere", 5],
    ["Lo ___ (sapere) che ho una casa a Roma?", "sapere", 1], ["I miei genitori ___ (conoscere) Pino da molti anni.", "conoscere", 5],
    ["Volevamo comprare un'auto, ma ___ (costare) troppo.", "costare", 2], ["Da bambina io ___ (avere) i capelli rossi.", "avere", 0],
    ["Noi ___ (volere) comprare un'auto, ma costava troppo.", "volere", 3], ["Mentre io ___ (telefonare), si è scaricata la batteria del cellulare.", "telefonare", 0],
    ["Mentre lei ___ (parlare), l'hanno interrotta.", "parlare", 2],
    /* — Ej. ciudad italiana (Torino) — */
    ["Nell'antichità ___ (essere) una città romana.", "essere", 2], ["Nell'antichità era una città romana e i romani la ___ (chiamare) Augusta Taurinorum.", "chiamare", 5],
    ["Negli anni '60 la fabbrica ___ (essere) un simbolo del boom economico italiano.", "essere", 2]
  ]);

  /* ---- passato prossimo en los textos mixtos (passato prossimo o imperfetto?) ---- */
  S.ind_pp = S.ind_pp.concat([
    ["Giacomo ___ (nascere) il 4 marzo, di giovedì.", "nascere", 2, "m"],
    ["Subito dopo la nascita la madre, Silvia, ___ (volere) vedere il bambino.", "volere", 2, null, "avere"],
    ["Subito dopo la nascita Silvia lo ___ (tenere) un po' lì con sé.", "tenere", 2],
    ["Appena è arrivata la buona notizia, Piero ___ (alzarsi).", "alzarsi", 2, "m"],
    ["Piero ___ (smettere) di lavorare ed è uscito di corsa.", "smettere", 2],
    ["Piero ha smesso di lavorare ed ___ (uscire) di corsa per andare a vedere la moglie.", "uscire", 2, "m"],
    ["Per strada Piero ___ (fermarsi) a comprare un mazzo di fiori.", "fermarsi", 2, "m"],
    ["Appena ___ (arrivare) la buona notizia, Piero si è alzato.", "arrivare", 2, "f"],
    ["Quando finalmente ___ (arrivare) all'ospedale, Piero ha salito le scale di corsa.", "arrivare", 2, "m"],
    ["Piero ___ (salire) le scale di corsa.", "salire", 2, null, "avere"],
    ["Per la confusione Piero ___ (entrare) nella stanza sbagliata.", "entrare", 2, "m"],
    ["Dapprima Piero non ___ (accorgersi) che la donna nel letto non era sua moglie.", "accorgersi", 2, "m"],
    ["Piero ___ (andare) vicino alla donna per baciarla.", "andare", 2, "m"],
    ["Quando ___ (vedere) che la pancia era ancora grossa, Piero si è scusato.", "vedere", 2],
    ["Piero ___ (scusarsi), imbarazzato, ed è uscito dalla stanza.", "scusarsi", 2, "m"],
    ["Piero ___ (piangere) di commozione.", "piangere", 2],
    ["Come ___ (fare) a diventare un imprenditore così importante, Lei?", "fare", 2],
    ["Io ___ (avere) la fortuna di conoscere le persone giuste al momento giusto.", "avere", 0],
    ["Poi io ___ (incontrare) delle persone che mi hanno aiutato nei miei progetti.", "incontrare", 0],
    ["Poi ho incontrato delle persone che mi ___ (aiutare) nei miei progetti.", "aiutare", 5],
    ["Come gli americani anche io ___ (farsi) da solo.", "farsi", 0, "m"],
    ["Lei ___ (costruire) un impero.", "costruire", 2], ["Perché Lei ___ (entrare) in politica?", "entrare", 2, "m"],
    ["I miei amici politici mi ___ (consigliare) di presentarmi alle elezioni.", "consigliare", 5],
    ["Da quando sono in politica io ___ (risolvere) i problemi di tutta la famiglia.", "risolvere", 0],
    ["Io ___ (trovare) lavoro a tutti.", "trovare", 0], ["Io ___ (comprare) tante belle cose anche alla mia mammina!", "comprare", 0],
    ["Il 15 febbraio scorso il comune di Cancellara ___ (festeggiare) una anziana signora che compiva 103 anni.", "festeggiare", 2],
    ["Le autorità della cittadina ___ (organizzare) una bella festa per la nonna.", "organizzare", 5],
    ["Alla festa ___ (venire) anche il sindaco della città e il parroco.", "venire", 2, "m"],
    ["La nonna ___ (raccontare) della sua vita passata.", "raccontare", 2], ["Il sindaco ___ (parlare) dell'importanza di una vita sana.", "parlare", 2],
    ["Il sindaco ___ (fare) gli auguri alla nonnina.", "fare", 2], ["Il sindaco ___ (congratularsi) per le sue condizioni di salute.", "congratularsi", 2, "m"],
    ["Il sindaco le ___ (dare) appuntamento per l'anno seguente!", "dare", 2],
    ["Vittoria ___ (nascere) nel 1490.", "nascere", 2, "f"], ["Quando Vittoria aveva cinque anni, la sua famiglia ___ (promettere) Vittoria in sposa a Francesco D'Avalos.", "promettere", 2],
    ["Prima di sposarsi, Vittoria ___ (passare) molti anni nell'isola di Ischia.", "passare", 2],
    ["Vittoria e Francesco D'Avalos ___ (sposarsi).", "sposarsi", 5, "m"], ["Vittoria e Francesco ___ (innamorarsi).", "innamorarsi", 5, "m"],
    ["Francesco ___ (morire) giovane, nel 1525.", "morire", 2, "m"], ["Vittoria ___ (decidere) di entrare in convento.", "decidere", 2],
    ["In convento Vittoria ___ (rimanere) per molti anni.", "rimanere", 2, "f"], ["Vittoria ___ (cominciare) a comporre poesie dolcissime sul suo amore.", "cominciare", 2, null, "avere"],
    ["Domenica Carla ___ (decidere) di telefonare a qualche amica.", "decidere", 2], ["Carla ___ (dovere) lasciare un messaggio sulla segreteria telefonica.", "dovere", 2, null, "avere"],
    ["Monica ___ (rispondere) che non poteva venire.", "rispondere", 2], ["A casa di Piera ___ (rispondere) il figlio.", "rispondere", 2],
    ["Carla ___ (farsi) una cioccolata calda.", "farsi", 2, "f"], ["Carla ___ (mettere) un dvd di un film romantico.", "mettere", 2],
    ["Carla ___ (passare) una delle più belle domeniche degli ultimi anni.", "passare", 2],
    ["Proprio ora io ___ (sapere) che Anna ha telefonato.", "sapere", 0], ["Nessuno ___ (volere) invitare Franco per Capodanno, e così è rimasto da solo a casa.", "volere", 2],
    ["Sergio è triste perché ___ (sapere) che non ha passato l'esame.", "sapere", 2],
    ["Mi dispiace, ma ho avuto così tanto da fare che non ___ (potere) finire quel lavoro!", "potere", 0],
    ["I miei genitori ___ (conoscere) Pino a una festa di Carnevale.", "conoscere", 5], ["Per punizione oggi io ___ (dovere) restare in casa!", "dovere", 0, null, "essere|avere"],
    ["Ieri ___ (sapere) da Susi che Franca si è fatta suora.", "sapere", 0], ["Ieri io ___ (conoscere) tuo fratello.", "conoscere", 0],
    ["Ieri io non ___ (volere) lavorare, e non ho lavorato.", "volere", 0], ["Ieri io ___ (dovere) studiare tre capitoli di storia.", "dovere", 0, null, "avere"],
    ["La famiglia Agnelli ___ (aprire) una grande fabbrica di auto.", "aprire", 2], ["La fabbrica ___ (diventare) molto famosa in Italia e all'estero.", "diventare", 2, "f"],
    ["Per molti anni Torino ___ (essere) la sede dei Duchi di Savoia.", "essere", 2, "f"],
    ["Ieri io ___ (studiare) dalle 10 alle 14.", "studiare", 0], ["Ieri io ___ (studiare) tutto il giorno.", "studiare", 0],
    ["Ieri noi ___ (lavorare) dalle 9 alle 5.", "lavorare", 3], ["Ieri io ___ (lavorare) 10 ore!", "lavorare", 0],
    ["Per 5 anni io ___ (studiare) inglese.", "studiare", 0], ["Solo ora io ___ (sapere) da mio padre che mamma si è sentita male.", "sapere", 0],
    ["Mentre dormivo ___ (entrare) i ladri.", "entrare", 5, "m"], ["Paola ___ (conoscere) suo marito su Internet.", "conoscere", 2],
    ["Oggi volevo fare la dieta, ma non ___ (resistere).", "resistere", 0],
    ["Mentre guardavamo la TV ___ (saltare) la luce.", "saltare", 2, "f"], ["Aspettavo l'autobus quando ___ (passare) mio padre in macchina.", "passare", 2, "m", "essere"],
    ["Stavano per uscire quando noi ___ (entrare).", "entrare", 3], ["Non ___ (venire) perché ero depresso.", "venire", 0, "m"]
  ]);

  /* ---- Imperfetto: elegir la forma (libro) ---- */
  function fci(text, a, b) { FC.push({ m: "ind_imperf", t: "ind_imperf", text: text, o: [a, b] }); }
  fci("Una volta la Corsica ___ italiana.", "era", "erano"); fci("Nel Medioevo gli intellettuali italiani ___ latino.", "parlavano", "parlavamo");
  fci("Prima della Repubblica gli italiani ___ un re.", "avevano", "abbiamo"); fci("Una volta nel Sud Italia ___ i greci.", "c'erano", "c'eri");
  fci("I fondatori di Roma si ___ Romolo e Remo.", "chiamavano", "chiamava"); fci("Prima dell'eruzione del Vesuvio, Pompei ___ un importante centro commerciale e culturale.", "rappresentava", "rappresentavi");
  fci("L'antica Roma si ___ su dieci colli.", "trovava", "trovavamo"); fci("Le quattro repubbliche marinare ___ Pisa, Venezia, Genova e Amalfi.", "erano", "eri");
  fci("La famiglia Medici ___ da Bologna.", "veniva", "venivano");
  /* tiempos mezclados: la forma correcta puede ser passato prossimo o imperfetto (sin pista del tiempo) */
  function fct(t, text, a, b, w) { ["ind_imperf", "ind_pp"].forEach(function (m) { FC.push({ m: m, t: t, text: text, o: [a, b], h: 1, w: w }); }); }
  var DEL = "Acción delimitada o puntual (terminada) → passato prossimo.", DES = "Descripción, estado o acción continuada/habitual en el pasado → imperfetto.";
  fct("ind_pp", "Proprio ora io ___ che Anna ha telefonato.", "ho saputo", "sapevo", "Sapere en passato prossimo = enterarse de algo.");
  fct("ind_pp", "Nessuno ___ invitare Franco per Capodanno, e così è rimasto da solo a casa.", "ha voluto", "voleva", "Modal en passato prossimo: la acción ocurrió (o no) con seguridad.");
  fct("ind_imperf", "A quei tempi Sonia non ___ ancora suo marito.", "conosceva", "ha conosciuto", "Conoscere en imperfetto = conocer a alguien desde hace tiempo (aquí: todavía no lo conocía).");
  fct("ind_pp", "Sergio è triste perché ___ che non ha passato l'esame.", "ha saputo", "sapeva", "Sapere en passato prossimo = enterarse.");
  fct("ind_imperf", "Non ___ lasciare la porta aperta! Ora il gatto è scappato.", "dovevi", "hai dovuto", "Modal en imperfetto: «deberías» (no era una necesidad cumplida).");
  fct("ind_imperf", "Da bambina non ___ uscire da sola la sera.", "potevo", "ho potuto", "Hábito/situación habitual de la infancia → imperfetto.");
  fct("ind_pp", "Mi dispiace, ma ho avuto così tanto da fare che non ___ finire quel lavoro!", "ho potuto", "potevo", "Modal en passato prossimo: la acción no se realizó con seguridad.");
  fct("ind_pp", "I miei genitori ___ Pino a una festa di Carnevale.", "hanno conosciuto", "conoscevano", "Conoscere en passato prossimo = conocer por primera vez, que me presentaron a alguien.");
  fct("ind_imperf", "___ telefonarti, ma non ho avuto tempo.", "Volevo", "Ho voluto", "Intención sin resultado seguro → imperfetto del modal.");
  fct("ind_pp", "Per punizione oggi ___ restare in casa!", "sono dovuto", "dovevo", "Modal en passato prossimo: tuvo que quedarse y se quedó.");
  fct("ind_imperf", "I Rossi ___ fare dei lavori in casa, ma hanno deciso di usare i soldi per andare in vacanza.", "dovevano", "hanno dovuto", "Modal en imperfetto: tenían la intención/necesidad, pero cambiaron de plan.");
  fct("ind_imperf", "Davvero Franca si è fatta suora? Non lo ___!", "sapevo", "ho saputo", "Sapere en imperfetto = no tenía conocimiento de ello.");
  fct("ind_pp", "Ieri ___ da Susi che Franca si è fatta suora.", "ho saputo", "sapevo", "Sapere en passato prossimo = enterarse por medio de alguien.");
  fct("ind_pp", "___ appena ora della partenza di Mario.", "Ho saputo", "Sapevo", "«Appena ora» + enterarse → passato prossimo.");
  fct("ind_imperf", "Mentre ___, sono entrati i ladri.", "dormivo", "ho dormito", "Después de «mentre», acción en curso → imperfetto.");
  fct("ind_pp", "Per 5 anni io ___ inglese.", "ho studiato", "studiavo", DEL);
  fct("ind_pp", "Paola ___ suo marito su Internet.", "ha conosciuto", "conosceva", "Conoscere en passato prossimo = conocer por primera vez.");
  fct("ind_imperf", "Oggi ___ fare la dieta, ma non ho resistito.", "volevo", "ho voluto", "Intención que no se cumplió → imperfetto.");
  fct("ind_pp", "Ieri ___ 10 ore!", "ho lavorato", "lavoravo", "«10 ore» = tiempo delimitado → passato prossimo.");
  fct("ind_pp", "Ieri ___ dalle 10 alle 14.", "ho studiato", "studiavo", DEL);
  fct("ind_pp", "Solo ora ___ da mio padre che mamma si è sentita male.", "ho saputo", "sapevo", "Sapere en passato prossimo = enterarse.");
  fct("ind_imperf", "Da bambina ___ i capelli rossi.", "avevo", "ho avuto", "Descripción física en el pasado → imperfetto.");
  fct("ind_imperf", "Noi ___ comprare un'auto, ma costava troppo.", "volevamo", "abbiamo voluto", "Intención sin resultado → imperfetto del modal.");
  fct("ind_imperf", "Mentre ___, si è scaricata la batteria del cellulare.", "telefonavo", "ho telefonato", "Después de «mentre», acción en curso → imperfetto.");
  fct("ind_imperf", "Mentre ___, l'hanno interrotta.", "parlava", "ha parlato", "Después de «mentre», acción en curso → imperfetto.");
  fct("ind_imperf", "Nell'antichità ___ una città romana.", "era", "è stata", DES);
  fct("ind_pp", "Per molti anni Torino ___ la sede dei Duchi di Savoia.", "è stata", "era", "«Per molti anni» marca un periodo delimitado y terminado → passato prossimo.");
  fct("ind_pp", "Proprio in questa città la famiglia Agnelli ___ una grande fabbrica di auto.", "ha aperto", "apriva", "Hecho puntual → passato prossimo.");
  fct("ind_pp", "La fabbrica ___ molto famosa in Italia e all'estero.", "è diventata", "diventava", "Cambio de estado terminado → passato prossimo.");
  fct("ind_imperf", "Domenica il tempo non era buono: ___ un gran vento.", "c'era", "c'è stato", DES);
  fct("ind_imperf", "Domenica faceva freddo e Carla non ___ molto bene.", "si sentiva", "si è sentita", DES);
  fct("ind_imperf", "Federica non ___ in casa.", "era", "è stata", DES);
  fct("ind_pp", "Carla ___ lasciare un messaggio sulla segreteria telefonica.", "ha dovuto", "doveva", "Modal en passato prossimo: lo hizo con seguridad.");
  fct("ind_pp", "Monica ___ che non poteva venire.", "ha risposto", "rispondeva", DEL);
  fct("ind_imperf", "Il figlio ha risposto che non ___ dove era la madre.", "sapeva", "ha saputo", DES);
  fct("ind_pp", "Carla ___ una delle più belle domeniche degli ultimi anni.", "ha passato", "passava", DEL);
})(typeof window !== 'undefined' ? window : globalThis);
