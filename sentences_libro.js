/* Nuri practica — ejercicios del LIBRO DE CLASE: passato prossimo.
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
})(typeof window !== 'undefined' ? window : globalThis);
