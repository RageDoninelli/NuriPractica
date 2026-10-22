/* Nuri practica — generador de ejercicios (infinitos). Todas las respuestas salen del motor IT. */
(function (g) {
  'use strict';
  var IT = g.IT, MODS = g.MODULES, VERBS = g.VERBS;

  var NEIGH = {
    ind_pres: ['ind_pp', 'ind_imperf', 'ind_fut'], ind_pp: ['ind_pres', 'ind_imperf', 'ind_trap_pross', 'ind_pass_rem'],
    ind_imperf: ['ind_pres', 'ind_pp', 'ind_trap_pross'], ind_trap_pross: ['ind_pp', 'ind_imperf', 'ind_trap_rem'],
    ind_pass_rem: ['ind_pp', 'ind_imperf', 'ind_trap_rem'], ind_trap_rem: ['ind_trap_pross', 'ind_pass_rem'],
    ind_fut: ['ind_pres', 'ind_fut_ant', 'cond_pres'], ind_fut_ant: ['ind_fut', 'ind_pp', 'cond_pass'],
    cong_pres: ['ind_pres', 'cong_pass', 'cong_imperf'], cong_pass: ['cong_pres', 'cong_trap', 'ind_pp'],
    cong_imperf: ['cong_pres', 'cong_trap', 'cond_pres'], cong_trap: ['cong_imperf', 'cong_pass', 'cond_pass'],
    cond_pres: ['cond_pass', 'ind_fut', 'cong_imperf'], cond_pass: ['cond_pres', 'ind_fut_ant', 'cong_trap']
  };
  var RULES = {
    ind_pres: 'Presente: raíz + -o, -i, -a, -iamo, -ate/-ete/-ite, -ano/-ono (los -isc- en io, tu, lui/lei, loro).',
    ind_pp: 'Passato prossimo = presente de <b>avere</b> o <b>essere</b> + participio passato. Con essere el participio concuerda con el sujeto.',
    ind_imperf: 'Imperfetto: raíz + -avo / -evo / -ivo… (essere: ero; fare: facevo; dire: dicevo; bere: bevevo).',
    ind_trap_pross: 'Trapassato prossimo = <b>imperfetto</b> de avere/essere + participio passato (acción anterior a otra pasada).',
    ind_pass_rem: 'Passato remoto: -ai, -asti, -ò, -ammo, -aste, -arono. Irregulares en 1ª, 3ª y 6ª persona (prendere → presi, prese, presero).',
    ind_trap_rem: 'Trapassato remoto = <b>passato remoto</b> de avere/essere + participio passato (tras dopo che, appena, quando).',
    ind_fut: 'Futuro semplice: raíz del infinitivo (-are → -er-) + -ò, -ai, -à, -emo, -ete, -anno. Raíces irregulares: andrò, avrò, sarò, farò…',
    ind_fut_ant: 'Futuro anteriore = <b>futuro semplice</b> de avere/essere + participio passato.',
    cong_pres: 'Congiuntivo presente: -i (-are) / -a (-ere, -ire); noi -iamo, voi -iate. Las tres personas del singular son iguales.',
    cong_pass: 'Congiuntivo passato = <b>congiuntivo presente</b> de avere/essere + participio passato.',
    cong_imperf: 'Congiuntivo imperfetto: -ssi, -ssi, -sse, -ssimo, -ste, -ssero (essere: fossi; fare: facessi; dire: dicessi; dare: dessi; stare: stessi).',
    cong_trap: 'Congiuntivo trapassato = <b>congiuntivo imperfetto</b> de avere/essere + participio passato.',
    cond_pres: 'Condizionale presente: raíz del futuro + -ei, -esti, -ebbe, -emmo, -este, -ebbero.',
    cond_pass: 'Condizionale passato = <b>condizionale presente</b> de avere/essere + participio passato.',
    imp_pres: 'Imperativo: tu = presente (-are: -a), Lei / Loro = congiuntivo presente, noi y voi = presente. Los pronombres van pegados en tu, noi y voi.',
    inf_pres: 'Infinito presente: -are, -ere, -ire (reflexivos: -arsi, -ersi, -irsi).',
    inf_pass: 'Infinito passato = infinitivo de avere/essere + participio passato (avere mangiato, essere andato/a).',
    part_pres: 'Participio presente: -are → -ante; -ere/-ire → -ente (o -iente).',
    part_pass: 'Participio passato: -ato, -uto, -ito (y muchos irregulares: fatto, detto, preso, scritto, visto…).',
    ger_pres: 'Gerundio presente: -are → -ando; -ere/-ire → -endo (fare: facendo; dire: dicendo; bere: bevendo).',
    ger_pass: 'Gerundio passato = gerundio de avere/essere + participio passato (avendo mangiato, essendo andato/a).'
  };

  function rnd(n) { return Math.floor(Math.random() * n); }
  function pick(a) { return a[rnd(a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function uniq(a) { var s = {}, o = []; a.forEach(function (x) { var k = IT.norm(x, true); if (!s[k]) { s[k] = 1; o.push(x); } }); return o; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function variant(v, aux) { var c = {}; for (var k in v) c[k] = v[k]; c.aux = aux; return c; }
  function mergeEnt(list) {
    var out = { d: list[0].d, a: [], m: [], f: [] };
    list.forEach(function (e) { ['a', 'm', 'f'].forEach(function (k) { (e[k] || []).forEach(function (x) { if (out[k].indexOf(x) < 0) out[k].push(x); }); }); });
    return out;
  }
  function auxEntry(v, t, p, spec) {
    return mergeEnt(spec.split('|').map(function (a) { return entFor(variant(v, a), t, p); }));
  }
  var AMB = ['finire', 'cominciare', 'vivere', 'passare', 'correre', 'salire', 'scendere', 'continuare', 'potere', 'volere', 'dovere', 'stare', 'essere', 'avere', 'divorziare'];
  function whyAux(v) {
    if (v.refl) return '<b>' + v.inf + '</b> es reflexivo: todos los reflexivos usan <b>essere</b>.';
    if (v.aux === 'essere') return '<b>' + v.inf + '</b> es un verbo intransitivo de movimiento, estado, cambio o impersonal: usa <b>essere</b> y el participio concuerda con el sujeto.';
    return '<b>' + v.inf + '</b> usa <b>avere</b> (verbo transitivo o intransitivo sin movimiento/cambio). El participio no concuerda con el sujeto.';
  }

  function modOf(id) { for (var i = 0; i < MODS.length; i++) if (MODS[i].id === id) return MODS[i]; }
  function isNF(t) { return !!IT.NONFIN[t]; }
  function label(t) { var d = IT.TENSES[t] || IT.NONFIN[t]; return d.it; }

  function hasForm(v, t, p) {
    if (isNF(t)) {
      if (/^part_/.test(t) && v.refl) return false;
      return !!IT.nonfinite(v, t);
    }
    var f = IT.forms(v, t);
    return !!(f && f[p || 0]);
  }
  function verbPool(t) {
    return VERBS.filter(function (v) { return !v.noRand && hasForm(v, t, 0); });
  }
  function pickVerb(t) {
    var pool = verbPool(t), irr = pool.filter(function (v) { return v.irr; });
    if (irr.length && Math.random() < 0.5) return pick(irr).inf;
    return pick(pool).inf;
  }
  function np(t) { return t === 'imp_pres' ? 5 : 6; }
  function pronLabel(t, p, g, v) {
    var base = t === 'imp_pres' ? IT.IP[p] : IT.P[p];
    if (/^cong_/.test(t)) base = 'che ' + base;
    var f = IT.forms(v, t);
    if (f && f[p] && f[p].m && f[p].f && f[p].m.join() !== f[p].f.join() && g) base += ' (' + (g === 'f' ? 'f.' : 'm.') + (p >= 3 && t !== 'imp_pres' ? ' pl.' : '') + ')';
    return base;
  }
  function needsG(v, t, p) {
    var f = IT.forms(v, t);
    return !!(f && f[p] && f[p].m.join() !== f[p].f.join());
  }
  function entFor(v, t, p) { return isNF(t) ? IT.nonfinite(v, t) : IT.forms(v, t)[p]; }
  function shown(e, g) { return g && e[g] ? e[g][0] : e.d; }

  /* ---- construcción de distractores ---- */
  function wrongs(v, t, p, g) {
    var ok = entFor(v, t, p), okS = shown(ok, g), out = [];
    var gg = g || 'm';
    function add(s) { if (s && IT.norm(s, true) !== IT.norm(okS, true)) out.push(s); }
    if (isNF(t)) {
      var ids = Object.keys(IT.NONFIN).filter(function (x) { return x !== t; });
      shuffle(ids).forEach(function (id) { if (!/^part_/.test(id) || !v.refl) { var e = IT.nonfinite(v, id); if (e) add(shown(e, gg)); } });
      if (t === 'part_pass') {
        var reg = IT.join(v._s, v._cls === 'are' ? 'ato' : v._cls === 'ere' ? 'uto' : 'ito', v._kind);
        add(reg);
      }
      if (t === 'ger_pres' && v.imp) add(IT.join(v._s, v._cls === 'are' ? 'ando' : 'endo', v._kind));
      if (t === 'inf_pass' || t === 'ger_pass') { var ee = entFor(v, t); (ee.a || []).forEach(function (x) { if (v.aux === 'essere') add(x.replace(/^(essere|essendo|essersi|essendosi)/, function (m) { return m.replace('ess', 'av').replace('avsi', 'avere'); })); }); }
      return uniq(out);
    }
    var comp = IT.COMPOUND[t];
    if (comp) {
      var AUXV = IT.find(v.aux === 'essere' ? 'avere' : 'essere');
      var af = IT.forms(AUXV, comp), pre = v.refl ? IT.RP[p] + ' ' : '';
      var pp = v.pp.split('|')[0];
      var wa = pre + af[p].d + ' ' + (AUXV.inf === 'essere' ? pp.slice(0, -1) + (p >= 3 ? 'i' : (gg === 'f' ? 'a' : 'o')) : pp);
      add(wa);
      if (v.aux === 'essere') {
        var og = gg === 'f' ? 'm' : 'f', ent = IT.forms(v, t)[p];
        add(ent[og][0]);
        var pl = p >= 3 ? 'sing' : 'pl';
        var ax = IT.forms(IT.find('essere'), comp)[p].d;
        var ppx = v.pp.split('|')[0];
        add(pre + ax + ' ' + ppx.slice(0, -1) + (p >= 3 ? 'o' : 'i'));
      } else {
        // participio equivocado: forma regular
        var regp = IT.join(v._s, v._cls === 'are' ? 'ato' : v._cls === 'ere' ? 'uto' : 'ito', v._kind);
        if (regp !== pp) add(pre + IT.forms(IT.find('avere'), comp)[p].d + ' ' + regp);
      }
    }
    // misma persona, otros tiempos
    var cand = (NEIGH[t] || []).concat(Object.keys(IT.TENSES));
    shuffle(cand).forEach(function (t2) {
      if (t2 === t || t2 === 'imp_pres') return;
      var f2 = IT.forms(v, t2);
      if (f2 && f2[p]) add(shown(f2[p], gg));
    });
    // mismo tiempo, otras personas
    var ff = IT.forms(v, t);
    shuffle([0, 1, 2, 3, 4, 5].slice(0, np(t))).forEach(function (q) { if (q !== p && ff[q]) add(shown(ff[q], gg)); });
    return uniq(out);
  }
  function choiceSet(v, t, p, g, correct) {
    var w = wrongs(v, t, p, g);
    var pri = w.slice(0, 2).concat(shuffle(w.slice(2)).slice(0, 1));
    var opts = uniq(pri.slice(0, 3));
    var i = 0; while (opts.length < 3 && i < w.length) { opts.push(w[i++]); opts = uniq(opts); }
    var list = shuffle([{ t: correct, ok: true }].concat(opts.slice(0, 3).map(function (x) { return { t: x, ok: false }; })));
    return list;
  }

  /* ---- ensamblado de preguntas ---- */
  function result(base) { base.key = JSON.stringify(base.params); return base; }

  function make(params) {
    var P = params, m = modOf(P.mod), t = P.t || (m && m.tenses[0]);
    var v = P.verb ? IT.find(P.verb) : null;
    var kind = P.kind;
    var out = { params: P, mod: P.mod, t: t, rule: RULES[t], strictAcc: true };

    if (kind === 'conj') {
      var e = entFor(v, t, P.p);
      out.type = 'typed';
      out.prompt = '<span class="pron">' + (isNF(t) ? '' : pronLabel(t, P.p, P.g, v)) + '</span> <span class="vb">' + v.inf + '</span> <small>(' + v.es + ')</small>';
      out.sub = label(t) + (v.refl ? ' · incluye el pronombre reflexivo' : '') + (isNF(t) ? '' : ' · escribe solo la forma verbal');
      out.answer = e; out.gender = P.g;
      return result(out);
    }
    if (kind === 'choice') {
      var e2 = entFor(v, t, P.p), cor = shown(e2, P.g);
      out.type = 'choice';
      out.prompt = isNF(t) ? '¿Cuál es el <b>' + label(t).toLowerCase() + '</b> de <span class="vb">' + v.inf + '</span> <small>(' + v.es + ')</small>?' :
        '<span class="pron">' + pronLabel(t, P.p, P.g, v) + '</span> <span class="vb">' + v.inf + '</span> <small>(' + v.es + ')</small>';
      out.sub = isNF(t) ? 'Elige la forma correcta' : label(t) + ' · elige la forma correcta';
      out.choices = P.cs ? P.cs : choiceSet(v, t, P.p, P.g, cor);
      if (P.cs) { /* ya fijado */ }
      out.answer = e2; out.gender = P.g; out.display = cor;
      return result(out);
    }
    if (kind === 'sent' || kind === 'sentc') {
      var bank = isNF(t) ? g.SENTENCES_NF[t] : g.SENTENCES[t], row = bank[P.i];
      var text = row[0], vv = IT.find(row[1]), p = isNF(t) ? 0 : row[2], gnd = row[3] || P.g || null, ent, custom = isNF(t) && typeof row[2] === 'string';
      var spec = !isNF(t) ? row[4] : null, vvv = spec ? variant(vv, spec.split('|')[0]) : vv;
      if (spec && spec.indexOf('|') >= 0) kind = 'sent';
      if (custom) { var cl = row[2].split('|'); ent = { d: cl[0], a: cl, m: cl, f: cl }; kind = 'sent'; }
      else if (spec) ent = auxEntry(vv, t, p, spec);
      else ent = entFor(vv, t, p);
      var html = esc(text).replace('___', '<span class="gap">_____</span>');
      out.prompt = html;
      out.sub = label(t) + ' · completa con la forma correcta del verbo entre paréntesis';
      out.answer = ent; out.gender = gnd; out.verb = vv.inf;
      if (kind === 'sent') { out.type = 'typed'; }
      else {
        out.type = 'choice'; out.display = shown(ent, gnd);
        out.choices = P.cs ? P.cs : choiceSet(vvv, t, p, gnd || 'm', shown(ent, gnd || 'm'));
        out.sub = label(t) + ' · elige la forma correcta' + (P.g ? ' · sujeto ' + (P.g === 'f' ? 'femenino' : 'masculino') : '');
      }
      out.fullSentence = text.replace('___', shown(ent, gnd));
      return result(out);
    }
    if (kind === 'fc') {
      var fr = g.SENTENCES_FC[P.i];
      out.type = 'choice'; out.t = fr.t;
      out.prompt = esc(fr.text).replace('___', '<span class="gap">_____</span>');
      out.sub = (fr.h ? '' : label(fr.t) + ' · ') + 'elige la forma correcta';
      var opts = fr.o.map(function (x, k) { return { t: x, ok: k === 0 }; });
      out.choices = P.cs ? P.cs : shuffle(opts);
      out.display = fr.o[0]; out.answer = { d: fr.o[0], a: [fr.o[0]] };
      out.fullSentence = fr.text.replace('___', fr.o[0]); out.rule = fr.w || RULES[fr.t];
      return result(out);
    }
    if (kind === 'aux') {
      var av = IT.find(P.verb);
      out.type = 'choice'; out.t = 'ind_pp';
      out.prompt = 'Passato prossimo de <span class="vb">' + av.inf + '</span> <small>(' + av.es + ')</small>: ¿con qué ausiliare?';
      out.sub = 'Avere o essere';
      out.choices = P.cs ? P.cs : shuffle([{ t: 'avere', ok: av.aux === 'avere' }, { t: 'essere', ok: av.aux === 'essere' }]);
      out.display = av.aux; out.answer = { d: av.aux, a: [av.aux] }; out.rule = whyAux(av);
      return result(out);
    }
    if (kind === 'infin') {
      var iv = IT.find(P.verb), ie = entFor(iv, 'ind_pp', P.p);
      out.type = 'typed'; out.t = 'ind_pp';
      out.prompt = '¿Cuál es el <b>infinitivo</b> de <b>«' + esc(shown(ie, P.g)) + '»</b>?';
      out.sub = 'Passato prossimo · escribe el verbo en infinitivo (' + iv.es + ')';
      out.answer = { d: iv.inf, a: [iv.inf], m: [iv.inf], f: [iv.inf] }; out.gender = null; out.rule = RULES.ind_pp;
      return result(out);
    }
    if (kind === 'trans') {
      var s = P.from, ea = entFor(v, s, P.p), eb = entFor(v, t, P.p);
      out.type = 'typed';
      out.prompt = 'Pasa <b>«' + shown(ea, P.g) + '»</b> a <b>' + label(t) + '</b>';
      out.sub = 'Mismo verbo (<span class="vb">' + v.inf + '</span>) y misma persona (' + pronLabel(s, P.p, P.g, v) + ') · era: ' + label(s);
      out.answer = eb; out.gender = P.g; out.rule = RULES[t];
      return result(out);
    }
    if (kind === 'ident') {
      var ei = entFor(v, t, P.p), form = shown(ei, P.g);
      var ids = Object.keys(isNF(t) ? IT.NONFIN : IT.TENSES), grp = ids.filter(function (x) { return x !== t; });
      var near = (NEIGH[t] || []).filter(function (x) { return grp.indexOf(x) >= 0; });
      var others = uniq(near.concat(shuffle(grp))).slice(0, 3);
      out.type = 'choice';
      out.prompt = '¿Qué tiempo o forma es <b>«' + esc(form) + '»</b>?';
      out.sub = 'Identifica el tiempo verbal (verbo: ' + v.inf + ')';
      out.choices = P.cs ? P.cs : shuffle([{ t: label(t), ok: true }].concat(others.map(function (x) { return { t: label(x), ok: false }; })));
      out.answer = { d: label(t), a: [label(t)] }; out.display = label(t);
      return result(out);
    }
    if (kind === 'table') {
      out.type = 'table';
      out.prompt = 'Conjuga <span class="vb">' + v.inf + '</span> <small>(' + v.es + ')</small>';
      out.sub = label(t) + ' · completa las ' + np(t) + ' personas';
      out.rows = []; var f = IT.forms(v, t);
      for (var i = 0; i < np(t); i++) out.rows.push({ pron: (/^cong_/.test(t) ? 'che ' : '') + (t === 'imp_pres' ? IT.IP[i] : IT.P[i]), answer: f[i], gender: null });
      return result(out);
    }
    return null;
  }

  function uniqueTense(v, t, p, g) {
    var form = IT.norm(shown(entFor(v, t, p), g), true), n = 0, ids = Object.keys(isNF(t) ? IT.NONFIN : IT.TENSES);
    ids.forEach(function (id) {
      var found = false;
      if (isNF(id)) { var e = IT.nonfinite(v, id); if (e && e.a.some(function (x) { return IT.norm(x, true) === form; })) found = true; }
      else { var f = IT.forms(v, id); if (f) f.forEach(function (en) { if (en.a.some(function (x) { return IT.norm(x, true) === form; })) found = true; }); }
      if (found) n++;
    });
    return n === 1;
  }

  var EXTRA = { ind_pp: ['aux', 'infin', 'fc', 'fc'], ind_pres: ['fc', 'fc'], ind_imperf: ['fc', 'fc'], part_pass: [] };
  function rand(modId, opts) {
    opts = opts || {};
    var m = modOf(modId), t = pick(m.tenses), nf = isNF(t);
    var kinds = opts.kinds || (nf ? ['conj', 'choice', 'sent', 'sentc', 'ident', 'table'] : ['conj', 'choice', 'sent', 'sentc', 'trans', 'ident', 'table']);
    if (nf) kinds = kinds.filter(function (k) { return k !== 'trans' && k !== 'table'; }).concat(['table'].slice(0, 0));
    if (!opts.kinds && EXTRA[modId]) kinds = kinds.concat(EXTRA[modId]);
    if (!kinds.length) kinds = ['conj'];
    var kind = pick(kinds), tries = 0, params, q;
    while (tries++ < 30) {
      var v = IT.find(pickVerb(t)), p = nf ? 0 : rnd(np(t)), gnd = !nf && needsG(v, t, p) ? pick(['m', 'f']) : null;
      if (kind === 'fc') {
        var fcs = (g.SENTENCES_FC || []).map(function (r, i) { return r.m === modId ? i : -1; }).filter(function (i) { return i >= 0; });
        if (!fcs.length) { kind = 'conj'; continue; }
        params = { mod: modId, t: t, kind: 'fc', i: pick(fcs) };
      } else if (kind === 'aux') {
        var cand = VERBS.filter(function (x) { return !x.noRand && AMB.indexOf(x.inf) < 0; });
        params = { mod: modId, t: t, kind: 'aux', verb: pick(cand).inf };
      } else if (kind === 'infin') {
        var iv2 = IT.find(pickVerb('ind_pp')), ip = rnd(6), ig = needsG(iv2, 'ind_pp', ip) ? pick(['m', 'f']) : null;
        params = { mod: modId, t: t, kind: 'infin', verb: iv2.inf, p: ip, g: ig };
      } else if (kind === 'sent' || kind === 'sentc') {
        var bank = nf ? g.SENTENCES_NF[t] : g.SENTENCES[t]; if (!bank || !bank.length) { kind = 'conj'; continue; }
        var ix = rnd(bank.length), rw = bank[ix], sv = IT.find(rw[1]), sg = null;
        if (kind === 'sentc' && ((nf && typeof rw[2] === 'string') || (rw[4] && rw[4].indexOf('|') >= 0))) kind = 'sent';
        if (kind === 'sentc' && !rw[3] && !nf && needsG(rw[4] ? variant(sv, rw[4].split('|')[0]) : sv, t, rw[2])) sg = pick(['m', 'f']);
        params = { mod: modId, t: t, kind: kind, i: ix, g: sg };
      } else if (kind === 'trans') {
        var from = pick((NEIGH[t] || []).filter(function (x) { return x !== 'imp_pres'; }));
        if (!from || t === 'imp_pres') { kind = 'conj'; continue; }
        var pt = rnd(6); v = IT.find(pickVerb(t)); if (!hasForm(v, from, pt)) continue;
        gnd = (needsG(v, t, pt) || needsG(v, from, pt)) ? pick(['m', 'f']) : null;
        params = { mod: modId, t: t, kind: 'trans', verb: v.inf, p: pt, g: gnd, from: from };
      } else if (kind === 'ident') {
        if (!nf && t === 'imp_pres') { kind = 'conj'; continue; }
        if (!uniqueTense(v, t, p, gnd)) continue;
        params = { mod: modId, t: t, kind: kind, verb: v.inf, p: p, g: gnd };
      } else if (kind === 'table') {
        params = { mod: modId, t: t, kind: kind, verb: v.inf };
      } else {
        params = { mod: modId, t: t, kind: kind, verb: v.inf, p: p, g: gnd };
      }
      q = make(params);
      if (q) {
        if (q.type === 'choice' && !q.params.cs) { q.params.cs = q.choices; q.key = JSON.stringify(Object.assign({}, q.params, { cs: undefined })); }
        return q;
      }
    }
    return make({ mod: modId, t: t, kind: 'conj', verb: pickVerb(t), p: 0 });
  }

  /* ---- corrección ---- */
  function grade(q, input, strict) {
    var ok = false, how = 'no';
    if (q.type === 'choice') { ok = !!input; return { ok: ok, how: ok ? 'ok' : 'no' }; }
    var r = IT.check(input, q.answer, q.gender, strict);
    return { ok: r === 'ok', how: r };
  }
  function answerText(q) {
    if (q.type === 'choice') return q.display;
    var a = q.answer, g = q.gender, list = (g && a[g]) ? a[g] : a.a;
    if (!g && a.m && a.f && a.m.join() !== a.f.join()) return a.m[0] + '  /  ' + a.f[0];
    var out = [], seen = {};
    list.forEach(function (x) { var k = IT.norm(x, true); if (!seen[k]) { seen[k] = 1; out.push(x); } });
    return out.slice(0, 3).join('  ·  ');
  }

  g.Q = { make: make, rand: rand, grade: grade, answerText: answerText, label: label, modOf: modOf, RULES: RULES, isNF: isNF };
})(typeof window !== 'undefined' ? window : globalThis);
