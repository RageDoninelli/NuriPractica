/* Nuri practica — ejercicios del LIBRO DE CLASE: imperativo diretto (tu · noi · voi), negativo, irregulares y pronombres.
   · S.imp_pres  → frases de completar (persona 0 tu, 2 noi, 3 voi). Respuesta: engine.forms(verbo,'imp_pres').
   · SENTENCES_IMP → [texto con ___, verbo, persona, pronombre|null, neg]
        neg 0 = afirmativo · 1 = negativo completo («non …») · 2 = la frase ya trae «non», se escribe lo que falta.
     La respuesta la calcula IT.impVar(verbo, persona, pronombre, neg). */
(function (g) {
  'use strict';
  var S = g.SENTENCES, FC = g.SENTENCES_FC = g.SENTENCES_FC || [], B = g.SENTENCES_IMP = g.SENTENCES_IMP || [];

  S.imp_pres = S.imp_pres.concat([
    /* — ejemplos de la teoría — */
    ['(voi) ___ (aprire) la finestra, fa caldo!', 'aprire', 3], ['Per andare a Firenze, (tu) ___ (prendere) il treno, non la macchina.', 'prendere', 0],
    ['(noi) ___ (telefonare) a Fabio!', 'telefonare', 2], ['(voi) ___ (comprare) quel libro. È bellissimo!', 'comprare', 3],
    ['(tu) ___ (mettere) a posto quel libro!', 'mettere', 0], ['(noi) ___ (vedere) quel film che è più interessante.', 'vedere', 2],
    ['(voi) ___ (chiudere) la porta, per favore. Fa freddo.', 'chiudere', 3], ['(tu) ___ (finire) di studiare!', 'finire', 0],
    ['(noi) ___ (partire) domani.', 'partire', 2], ['(voi) ___ (pulire) la cucina dopo che l\'avete usata.', 'pulire', 3],
    ['(tu) ___ (parlare) più lentamente che non capisco.', 'parlare', 0], ['(tu) ___ (mangiare) la frutta che ti fa bene!', 'mangiare', 0],
    ['(tu) ___ (scusare), ma non posso venire con te oggi.', 'scusare', 0],
    /* — Ej. 1 · Luca e Giulia (noi) — */
    ['(noi) ___ (prenotare) il ristorante.', 'prenotare', 2], ['(noi) ___ (fare) spese.', 'fare', 2], ['(noi) ___ (decidere) chi sono i testimoni.', 'decidere', 2],
    ['(noi) ___ (scegliere) il vestito.', 'scegliere', 2], ['(noi) ___ (organizzare) la lista di nozze.', 'organizzare', 2], ['(noi) ___ (andare) all\'agenzia di viaggi.', 'andare', 2],
    /* — Ej. 3 · «Come ci si comporta?» (voi, afirmativo) y Ej. 4 (tu) — */
    ['Se volete fare bella figura in Italia, ___ (portare) dei fiori in regalo alla padrona di casa.', 'portare', 3],
    ['Se vuoi fare bella figura in Italia, ___ (portare) dei fiori in regalo alla padrona di casa.', 'portare', 0],
    ['Se volete fare bella figura in Italia, ___ (offrire) un rametto di mimosa a una donna l\'otto marzo.', 'offrire', 3],
    ['Se vuoi fare bella figura in Italia, ___ (offrire) un rametto di mimosa a una donna l\'otto marzo.', 'offrire', 0],
    ['Se volete fare bella figura in Italia, ___ (evitare) di bere troppo.', 'evitare', 3], ['Se vuoi fare bella figura in Italia, ___ (evitare) di bere troppo.', 'evitare', 0],
    /* — Ej. 5 · Benessere (tu) — */
    ['___ (camminare) almeno mezz\'ora al giorno.', 'camminare', 0], ['___ (dormire) almeno otto ore ogni notte.', 'dormire', 0],
    ['___ (chiedere) l\'aiuto di un esperto.', 'chiedere', 0], ['___ (usare) luci diffuse quando lavori al computer.', 'usare', 0],
    ['___ (controllare) bene chi ti fa un tatuaggio. È facile prendersi infezioni.', 'controllare', 0], ['___ (rilassarsi) appena puoi.', 'rilassarsi', 0],
    ['___ (mangiare), bevi e cerca di essere felice.', 'mangiare', 0], ['Mangia, ___ (bere) e cerca di essere felice.', 'bere', 0], ['Mangia, bevi e ___ (cercare) di essere felice.', 'cercare', 0],
    /* — Ej. 6 · la nota de Giovanni (tu) — */
    ['Prima di tutto ___ (ricordarsi) di chiudere bene la porta quando esci.', 'ricordarsi', 0], ['Se vuoi fare un bagno, ___ (accendere) la caldaia che si trova sul terrazzino.', 'accendere', 0],
    ['___ (tenere) premuto il pulsante rosso per qualche secondo.', 'tenere', 0], ['Tieni premuto il pulsante rosso e poi ___ (spingere) quello nero.', 'spingere', 0],
    ['___ (usare) pure tutto quello che vuoi.', 'usare', 0],
    /* — Ej. 7 · la carta de Cecilia (voi) — */
    ['___ (voi/sapere) che vi voglio molto bene.', 'sapere', 3], ['___ (voi/cercare) di trovarmi.', 'cercare', 3],
    ['Approfittate di questa situazione: ___ (voi/uscire) e vedete gli amici.', 'uscire', 3], ['Uscite e ___ (voi/vedere) gli amici.', 'vedere', 3],
    ['Se non volete raccontare quello che ho fatto, ___ (voi/dire) pure quello che volete.', 'dire', 3], ['___ (voi/approfittare) di questa situazione per riavvicinarvi un po\' di più.', 'approfittare', 3],
    /* — Ej. 8 · verbos irregulares — */
    ['(tu) ___ (andare) a casa!', 'andare', 0], ['(voi) ___ (andare) a casa!', 'andare', 3], ['(tu) ___ (fare) la spesa.', 'fare', 0], ['(voi) ___ (fare) la spesa.', 'fare', 3],
    ['(tu) ___ (stare) zitto!', 'stare', 0], ['(voi) ___ (stare) zitti!', 'stare', 3], ['(tu) ___ (dare) questo libro a Paolo.', 'dare', 0], ['(voi) ___ (dare) questo libro a Paolo.', 'dare', 3],
    ['(tu) ___ (dire) anche la tua opinione.', 'dire', 0], ['(voi) ___ (dire) anche la vostra opinione.', 'dire', 3],
    ['(tu) ___ (essere) gentile con tutti.', 'essere', 0], ['(voi) ___ (essere) gentili con tutti.', 'essere', 3], ['(tu) ___ (avere) pazienza.', 'avere', 0], ['(voi) ___ (avere) pazienza.', 'avere', 3],
    ['(tu) ___ (sapere) che ti voglio bene.', 'sapere', 0],
    /* — Ej. 2 (pronombres) · conversación de Giuliano: partes sin pronombre — */
    ['___ (fare) come ti dico.', 'fare', 0], ['___ (guardare) che lassù farà più freddo che qui.', 'guardare', 0], ['Guarda che lassù farà più freddo: ___ (mettersi) la maglia di lana se esci dall\'albergo.', 'mettersi', 0],
    ['Anzi, ora che ci penso, che esci a fare? ___ (rimanere) in albergo!', 'rimanere', 0], ['Boh, ___ (fare) come vuoi!', 'fare', 0]
  ]);

  function r(text, verb, p, cl, neg) { B.push([text, verb, p, cl || null, neg || 0]); }
  /* — Ej. 1 (pronombres): imperativo + ci, ne, mi, gli, lo… — */
  r('Non ho tempo di accompagnarti in piscina. ___ (tu/andare/in piscina) solo.', 'andare', 0, 'ci');
  r('Non conosci quel ristorante? ___ (tu/andare/in quel ristorante), è buonissimo.', 'andare', 0, 'ci');
  r('___ (tu/dire/a me) tutta la verità o questa volta sei davvero nei guai!', 'dire', 0, 'mi');
  r('Ho una gran paura di quello che dirà il dottore. ___ (tu/stare/a me) vicino!', 'stare', 0, 'mi');
  r('Non vedete che il cane ha fame? ___ (voi/dare/a lui) qualcosa da mangiare!', 'dare', 3, 'gli');
  r('Non sai che cosa regalare a tuo padre? ___ (tu/fare/a lui) una sorpresa e invitalo a cena.', 'fare', 0, 'gli');
  r('Non sai che cosa regalare a tuo padre? Fagli una sorpresa e ___ (tu/invitare/lui) a cena.', 'invitare', 0, 'lo');
  r('Non hai ancora visto il nuovo film di Salvatore? ___ (tu/andare) a vederlo. È bellissimo.', 'andare', 0);
  r('Lo so che dobbiamo vedere Laura, ma stasera non posso. ___ (noi/andare/da Laura) domani.', 'andare', 2, 'ci');
  r('Ho finito i soldi. ___ (tu/prestare/a me) un po\'.', 'prestare', 0, 'mi');
  r('Anna non sa ancora che non ha passato l\'esame. ___ (tu/dire/a lei) la verità.', 'dire', 0, 'le');
  /* — ejemplos de la teoría con pronombres — */
  r('Non sei andato alla biblioteca? ___ (tu/andare) domani.', 'andare', 0, 'ci');
  r('Quei bambini sono bravissimi. ___ (tu/guardare/loro)!', 'guardare', 0, 'li');
  r('È un libro bellissimo. ___ (tu/comprare/il libro) subito!', 'comprare', 0, 'lo');
  r('Avete un problema? ___ (voi/parlare/di questo)!', 'parlare', 3, 'ne');
  r('Ragazzi, ___ (voi/dire/a me) tutto!', 'dire', 3, 'mi');
  r('Questi soldi sono tuoi. ___ (tu/fare/di questo) quello che vuoi.', 'fare', 0, 'ne');
  r('Maria è molto malata. ___ (tu/stare/a lei) vicino.', 'stare', 0, 'le');
  r('Va\' da tuo padre e ___ (tu/dire/a lui) tutto.', 'dire', 0, 'gli');
  r('Ho bisogno di aiuto in cucina. ___ (tu/dare/a me) una mano, per favore.', 'dare', 0, 'mi');
  /* — Ej. 3 · tabla dare/fare/dire + pronombres indirectos — */
  [['dare', '(tu/dare/a {x}) una mano!'], ['fare', '(tu/fare/a {x}) un favore!'], ['dire', '(tu/dire/a {x}) la verità!']].forEach(function (d) {
    [['mi', 'me'], ['gli', 'lui'], ['le', 'lei'], ['ci', 'noi'], ['loro', 'loro']].forEach(function (c) {
      r('___ ' + d[1].replace('{x}', c[1]), d[0], 0, c[0]);
    });
  });
  /* — negativo (teoría) — */
  r('Fabio è antipatico. ___ (noi/telefonare) a Fabio.', 'telefonare', 2, null, 1); r('Quel libro è davvero brutto! ___ (voi/comprare) quel libro.', 'comprare', 3, null, 1);
  r('Quel film è noiosissimo! ___ (noi/vedere) quel film.', 'vedere', 2, null, 1); r('Fa caldo. ___ (voi/chiudere) la porta, per favore.', 'chiudere', 3, null, 1);
  r('C\'è troppo traffico. ___ (noi/partire) domani.', 'partire', 2, null, 1); r('Lo faccio io. ___ (voi/pulire) la cucina.', 'pulire', 3, null, 1);
  r('___ (tu/parlare) così veloce, che non capisco.', 'parlare', 0, null, 1); r('___ (tu/mettere) a posto quel libro!', 'mettere', 0, null, 1);
  r('___ (tu/finire) di studiare!', 'finire', 0, null, 1);
  r('Non ti piace il vino? Allora ___ (tu/bere/lo).', 'bere', 0, 'lo', 1); r('Il cinema è pieno. ___ (noi/andare/ci).', 'andare', 2, 'ci', 1);
  r('Quel formaggio non è fresco. ___ (voi/comprare/lo).', 'comprare', 3, 'lo', 1);
  /* — Ej. 3 y 4 · «Come ci si comporta?»: tú decides si es afirmativo o negativo — */
  r('Se volete fare bella figura in Italia: ___ (guardare) nel fazzoletto dopo che vi siete puliti il naso.', 'guardare', 3, null, 1);
  r('Se volete fare bella figura in Italia: ___ (portare) in regalo i crisantemi! Si portano solo al cimitero!', 'portare', 3, null, 1);
  r('Se volete fare bella figura in Italia: ___ (togliere) le scarpe quando entrate in casa di qualcuno. Nessuno lo fa.', 'togliere', 3, null, 1);
  r('Se volete fare bella figura in Italia: ___ (ruttare) per dimostrare che avete apprezzato il pranzo.', 'ruttare', 3, null, 1);
  r('Se vuoi fare bella figura in Italia: ___ (guardare) nel fazzoletto dopo che ti sei pulito il naso.', 'guardare', 0, null, 1);
  r('Se vuoi fare bella figura in Italia: ___ (portare) in regalo i crisantemi! Si portano solo al cimitero!', 'portare', 0, null, 1);
  r('Se vuoi fare bella figura in Italia: ___ (togliere) le scarpe quando entri in casa di qualcuno. Nessuno lo fa.', 'togliere', 0, null, 1);
  r('Se vuoi fare bella figura in Italia: ___ (ruttare) per dimostrare che hai apprezzato il pranzo.', 'ruttare', 0, null, 1);
  /* — Ej. 5 · Benessere: negativo con «non» ya en la frase — */
  r('Non ___ (mangiare) troppe cose fritte.', 'mangiare', 0, null, 2); r('Non ___ (fare) un check-up ogni anno se non hai disturbi.', 'fare', 0, null, 2);
  r('Non ___ (usare) le erbe curative a caso.', 'usare', 0, null, 2); r('Non ___ (lavare) i denti più di due volte al giorno. Si rovina lo smalto.', 'lavare', 0, null, 2);
  /* — Ej. 6 · la nota de Giovanni — */
  r('Per favore, non gli ___ (dare) troppo da mangiare, altrimenti ingrassa come un maiale.', 'dare', 0, null, 2);
  r('Non le ___ (dare) troppa acqua, non ne vuole molta.', 'dare', 0, null, 2);
  r('Mi raccomando: non ___ (fare) niente che io non farei!', 'fare', 0, null, 2);
  /* — Ej. 7 · la carta de Cecilia — */
  r('Non ___ (voi/avere) paura per me.', 'avere', 3, null, 2); r('Non ___ (voi/essere) troppo arrabbiati con me.', 'essere', 3, null, 2);
  r('Non ___ (voi/preoccuparsi) per me.', 'preoccuparsi', 3, null, 2); r('Mamma, non ___ (piangere) troppo.', 'piangere', 0, null, 2);
  r('Mamma, non ___ (dare) la colpa a papà come fai di solito.', 'dare', 0, null, 2);
  /* — Ej. 2 · conversación de Giuliano (pronombres) — */
  r('___ (tu/ascoltare/me), Giuliano.', 'ascoltare', 0, 'mi'); r('Non ___ (tu/dimenticarsi) di portare un\'aspirina.', 'dimenticarsi', 0, null, 2);
  r('___ (tu/telefonare/a me) appena arrivi, però!', 'telefonare', 0, 'mi'); r('Non ___ (tu/fare/a me) stare in pensiero.', 'fare', 0, 'mi', 2);
  r('Che ci faccio con le scarpe di lana? ___ (tu/mettere/le), no? Fa freddo lassù!', 'mettere', 0, 'le'); r('___ (tu/stare/a me) a sentire, Giuliano!', 'stare', 0, 'mi');
  r('La macchinetta del caffè? ___ (tu/portare/la) con te, mamma dice.', 'portare', 0, 'la'); r('Ora non ___ (cominciare), mamma. Sono in ritardo!', 'cominciare', 0, null, 2);
  r('Sono in ritardo, mamma, ___ (tu/fare/a me) andare!', 'fare', 0, 'mi'); r('Non ___ (tu/fidarsi) di queste donne nordiche.', 'fidarsi', 0, null, 2);
  r('Ciao Niruccio! ___ (tu/dare/a me) un bacio.', 'dare', 0, 'mi');

  /* ---- Ej. 2 (consejos): elige el consejo correcto ---- */
  var CONS = [
    ['Voglio un uomo!', 'Contatta un\'agenzia per single.'], ['Ho bisogno di soldi.', 'Chiedi un prestito a una banca.'], ['Ho un terribile mal di testa.', 'Prendi un\'aspirina.'],
    ['Sono ingrassato.', 'Comincia a fare un po\' di sport.'], ['Spendo troppo per il lotto.', 'Smetti di giocare.'], ['La donna delle pulizie si è licenziata, perché la pago poco.', 'Prova a offrirle di più.'],
    ['Voglio cambiare lavoro.', 'Metti un annuncio sul giornale.'], ['Odio il Natale!', 'Passa dicembre in un paese musulmano.'], ['Ho paura di prendere l\'aereo.', 'Prendi il treno.'], ['Fumo troppo.', 'Prova con i cerotti anti-fumo.']
  ];
  CONS.forEach(function (c, i) {
    var other = CONS[(i + 3) % CONS.length][1];
    FC.push({ m: 'imp_pres', t: 'imp_pres', text: c[0] + ' ___', o: [c[1], other], s: 'Imperativo · elige el consejo adecuado' });
  });
})(typeof window !== 'undefined' ? window : globalThis);
