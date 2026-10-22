/* Nuri practica — motor de conjugación italiano */
(function (g) {
  'use strict';

  var P = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
  var IP = ['tu', 'Lei', 'noi', 'voi', 'Loro'];
  var RP = ['mi', 'ti', 'si', 'ci', 'vi', 'si'];

  var TENSES = {
    ind_pres:      { mode: 'Indicativo',   it: 'Presente',          es: 'Presente' },
    ind_pp:        { mode: 'Indicativo',   it: 'Passato prossimo',  es: 'Pretérito perfecto compuesto' },
    ind_imperf:    { mode: 'Indicativo',   it: 'Imperfetto',        es: 'Pretérito imperfecto' },
    ind_trap_pross:{ mode: 'Indicativo',   it: 'Trapassato prossimo', es: 'Pretérito pluscuamperfecto' },
    ind_pass_rem:  { mode: 'Indicativo',   it: 'Passato remoto',    es: 'Pretérito indefinido (literario)' },
    ind_trap_rem:  { mode: 'Indicativo',   it: 'Trapassato remoto', es: 'Pretérito anterior' },
    ind_fut:       { mode: 'Indicativo',   it: 'Futuro semplice',   es: 'Futuro simple' },
    ind_fut_ant:   { mode: 'Indicativo',   it: 'Futuro anteriore',  es: 'Futuro perfecto' },
    cong_pres:     { mode: 'Congiuntivo',  it: 'Congiuntivo presente',   es: 'Subjuntivo presente' },
    cong_pass:     { mode: 'Congiuntivo',  it: 'Congiuntivo passato',    es: 'Subjuntivo pretérito perfecto' },
    cong_imperf:   { mode: 'Congiuntivo',  it: 'Congiuntivo imperfetto', es: 'Subjuntivo imperfecto' },
    cong_trap:     { mode: 'Congiuntivo',  it: 'Congiuntivo trapassato', es: 'Subjuntivo pluscuamperfecto' },
    cond_pres:     { mode: 'Condizionale', it: 'Condizionale presente',  es: 'Condicional simple' },
    cond_pass:     { mode: 'Condizionale', it: 'Condizionale passato',   es: 'Condicional compuesto' },
    imp_pres:      { mode: 'Imperativo',   it: 'Imperativo presente',    es: 'Imperativo' }
  };
  var NONFIN = {
    inf_pres:  { mode: 'Infinito',   it: 'Infinito presente',   es: 'Infinitivo simple' },
    inf_pass:  { mode: 'Infinito',   it: 'Infinito passato',    es: 'Infinitivo compuesto' },
    part_pres: { mode: 'Participio', it: 'Participio presente', es: 'Participio de presente' },
    part_pass: { mode: 'Participio', it: 'Participio passato',  es: 'Participio pasado' },
    ger_pres:  { mode: 'Gerundio',   it: 'Gerundio presente',   es: 'Gerundio simple' },
    ger_pass:  { mode: 'Gerundio',   it: 'Gerundio passato',    es: 'Gerundio compuesto' }
  };
  var COMPOUND = {
    ind_pp: 'ind_pres', ind_trap_pross: 'ind_imperf', ind_trap_rem: 'ind_pass_rem',
    ind_fut_ant: 'ind_fut', cong_pass: 'cong_pres', cong_trap: 'cong_imperf', cond_pass: 'cond_pres'
  };

  var END = {
    are: { pres: ['o', 'i', 'a', 'iamo', 'ate', 'ano'], imp: ['avo', 'avi', 'ava', 'avamo', 'avate', 'avano'],
           pr: ['ai', 'asti', 'ò', 'ammo', 'aste', 'arono'], cp: ['i', 'i', 'i', 'iamo', 'iate', 'ino'],
           ci: ['assi', 'assi', 'asse', 'assimo', 'aste', 'assero'] },
    ere: { pres: ['o', 'i', 'e', 'iamo', 'ete', 'ono'], imp: ['evo', 'evi', 'eva', 'evamo', 'evate', 'evano'],
           pr: ['ei|etti', 'esti', 'é|ette', 'emmo', 'este', 'erono|ettero'], cp: ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
           ci: ['essi', 'essi', 'esse', 'essimo', 'este', 'essero'] },
    ire: { pres: ['o', 'i', 'e', 'iamo', 'ite', 'ono'], imp: ['ivo', 'ivi', 'iva', 'ivamo', 'ivate', 'ivano'],
           pr: ['ii', 'isti', 'ì', 'immo', 'iste', 'irono'], cp: ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
           ci: ['issi', 'issi', 'isse', 'issimo', 'iste', 'issero'] },
    isc: { pres: ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono'], cp: ['isca', 'isca', 'isca', 'iamo', 'iate', 'iscano'] }
  };
  var FUT = ['ò', 'ai', 'à', 'emo', 'ete', 'anno'];
  var CON = ['ei', 'esti', 'ebbe', 'emmo', 'este', 'ebbero'];

  var byInf = {};

  function A(s) { return Array.isArray(s) ? s : String(s).trim().split(/\s+/); }
  function alts(s) { return String(s).split('|'); }

  function join(stem, end, kind) {
    var s = stem;
    if (/^[ie]/.test(end)) {
      if (kind === 'care' && /c$/.test(s)) s += 'h';
      else if (kind === 'gare' && /g$/.test(s)) s += 'h';
      else if (/[cg]i$/.test(s)) s = s.slice(0, -1);
      else if (/i$/.test(s) && end.charAt(0) === 'i') s = s.slice(0, -1);
    }
    return s + end;
  }

  function prep(v) {
    if (v._ok) return v;
    v.refl = /rsi$/.test(v.inf);
    v._b = v.refl ? v.inf.slice(0, -2) + 'e' : v.inf;
    var e3 = v._b.slice(-3);
    v._k = e3 === 'are' ? 'are' : e3 === 'ere' ? 'ere' : (v.isc ? 'isc' : 'ire');
    v._cls = e3 === 'are' ? 'are' : e3 === 'ere' ? 'ere' : 'ire';
    v._s = v._b.slice(0, -3);
    v._kind = /care$/.test(v._b) ? 'care' : /gare$/.test(v._b) ? 'gare' : '';
    v.aux = v.aux || (v.refl ? 'essere' : 'avere');
    if (!v.pp) v.pp = join(v._s, v._cls === 'are' ? 'ato' : v._cls === 'ere' ? 'uto' : 'ito', v._kind);
    v._ok = true;
    return v;
  }

  function lists(arr) { return arr.map(alts); }

  function simple(v, t) {
    prep(v);
    var k = v._k, c = v._cls, s = v._s, kd = v._kind, i, out;
    if (t === 'ind_pres') {
      if (v.pres) return lists(A(v.pres));
      return END[k].pres.map(function (e) { return [join(s, e, kd)]; });
    }
    if (t === 'ind_imperf') {
      if (v.impA) return lists(A(v.impA));
      if (v.imp && !/\s/.test(v.imp)) return END.ere.imp.map(function (e) { return [v.imp + e]; });
      return END[c].imp.map(function (e) { return [join(s, e, kd)]; });
    }
    if (t === 'ind_pass_rem') {
      if (v.pr && /\s/.test(v.pr)) return lists(A(v.pr));
      if (v.pr) {
        var r = END[c].pr, st = v.pr;
        return [
          [st + 'i'], [join(s, r[1], kd)], [st + 'e'],
          [join(s, r[3], kd)], [join(s, r[4], kd)], [st + 'ero']
        ];
      }
      return END[c].pr.map(function (e) { return alts(e).map(function (x) { return join(s, x, kd); }); });
    }
    if (t === 'ind_fut' || t === 'cond_pres') {
      var fs = v.fut || (c === 'are' ? join(s, 'er', kd) : c === 'ere' ? s + 'er' : s + 'ir');
      return (t === 'ind_fut' ? FUT : CON).map(function (e) { return [fs + e]; });
    }
    if (t === 'cong_pres') {
      if (v.cp) return lists(A(v.cp));
      if (v.pres) {
        var p0 = alts(A(v.pres)[0])[0].slice(0, -1), p3 = alts(A(v.pres)[3])[0];
        return [[p0 + 'a'], [p0 + 'a'], [p0 + 'a'], [p3], [p3.replace(/iamo$/, 'iate')], [p0 + 'ano']];
      }
      return END[k].cp.map(function (e) { return [join(s, e, kd)]; });
    }
    if (t === 'cong_imperf') {
      if (v.cimp) return lists(A(v.cimp));
      if (v.imp && !/\s/.test(v.imp)) return END.ere.ci.map(function (e) { return [v.imp + e]; });
      return END[c].ci.map(function (e) { return [join(s, e, kd)]; });
    }
    if (t === 'imp_pres') {
      if (v.noImp) return null;
      if (v.impv) return lists(A(v.impv));
      var pr = simple(v, 'ind_pres'), cp = simple(v, 'cong_pres');
      return [c === 'are' ? pr[2] : pr[1], cp[2], cp[3], pr[4], cp[5]];
    }
    return null;
  }

  function withRefl(list, i, isImp) {
    return list.map(function (x) {
      if (!isImp) return RP[i] + ' ' + x;
      var j = i; // imperativo: 0 tu,1 Lei,2 noi,3 voi,4 Loro
      if (j === 0) return x + 'ti';
      if (j === 1 || j === 4) return 'si ' + x;
      if (j === 2) return x + 'ci';
      return x + 'vi';
    });
  }

  function ent(list) { return { d: list[0], a: list.slice(), m: list.slice(), f: list.slice() }; }

  function ppForms(v) {
    // devuelve {m:[], f:[], mp:[], fp:[], dsg, dpl} (para essere) con alternativas
    var pps = alts(v.pp);
    return {
      m: pps, f: pps.map(function (p) { return p.slice(0, -1) + 'a'; }),
      mp: pps.map(function (p) { return p.slice(0, -1) + 'i'; }),
      fp: pps.map(function (p) { return p.slice(0, -1) + 'e'; }),
      dsg: pps[0] + '/' + pps[0].slice(-1).replace('o', 'a'),
      dpl: pps[0].slice(0, -1) + 'i/e'
    };
  }

  function compound(v, t) {
    prep(v);
    var AUX = byInf[v.aux], at = COMPOUND[t];
    var af = simple(AUX, at), pf = ppForms(v), res = [];
    for (var i = 0; i < 6; i++) {
      var ax = af[i][0], pre = v.refl ? RP[i] + ' ' : '';
      var plural = i >= 3;
      if (v.aux === 'essere') {
        var M = plural ? pf.mp : pf.m, F = plural ? pf.fp : pf.f;
        var d = pre + ax + ' ' + (v.pp.slice(0, -1) + (plural ? 'i/e' : 'o/a'));
        d = pre + ax + ' ' + (plural ? pf.dpl : pf.dsg).replace(/^(.*?)(\/.*)$/, function (_, a, b) { return alts(v.pp)[0].slice(0, -1) + (plural ? 'i/e' : 'o/a'); });
        var mm = M.map(function (x) { return pre + ax + ' ' + x; }), ff = F.map(function (x) { return pre + ax + ' ' + x; });
        res.push({ d: d, a: mm.concat(ff), m: mm, f: ff });
      } else {
        var l = alts(v.pp).map(function (x) { return pre + ax + ' ' + x; });
        res.push(ent(l));
      }
    }
    return res;
  }

  function forms(v, t) {
    prep(v);
    if (COMPOUND[t]) return compound(v, t);
    var s = simple(v, t);
    if (!s) return null;
    var isImp = t === 'imp_pres';
    return s.map(function (list, i) { return ent(v.refl ? withRefl(list, i, isImp) : list); });
  }

  function nonfinite(v, id) {
    prep(v);
    var s = v._s, c = v._cls, kd = v._kind, r, pp = ppForms(v), pre;
    if (id === 'inf_pres') return ent([v.inf]);
    if (id === 'inf_pass') {
      var ax = v.aux === 'essere' ? 'essere' : 'avere', ax2 = v.aux === 'essere' ? 'esser' : 'aver';
      var rp = v.refl ? 'essersi' : ax;
      if (v.refl) { rp = 'essersi'; ax2 = 'essersi'; }
      if (v.aux === 'essere') {
        var m = [], f = [];
        pp.m.forEach(function (x) { m.push(rp + ' ' + x); if (!v.refl) m.push(ax2 + ' ' + x); });
        pp.f.forEach(function (x) { f.push(rp + ' ' + x); if (!v.refl) f.push(ax2 + ' ' + x); });
        return { d: rp + ' ' + pp.dsg, a: m.concat(f), m: m, f: f };
      }
      return ent([].concat.apply([], alts(v.pp).map(function (x) { return [ax + ' ' + x, ax2 + ' ' + x]; })));
    }
    if (id === 'part_pres') {
      if (v.ppres === null) return null;
      if (v.ppres) return ent(alts(v.ppres));
      if (c === 'ire') return null;
      return ent([c === 'are' ? join(s, 'ante', kd) : s + 'ente']);
    }
    if (id === 'part_pass') return ent(alts(v.pp));
    if (id === 'ger_pres') {
      var g1 = v.ger || (v.imp && !/\s/.test(v.imp) ? v.imp + 'endo' : (c === 'are' ? join(s, 'ando', kd) : s + 'endo'));
      return ent([v.refl ? g1 + 'si' : g1]);
    }
    if (id === 'ger_pass') {
      var au = v.aux === 'essere' ? 'essendo' : 'avendo';
      if (v.refl) au = 'essendosi';
      if (v.aux === 'essere') {
        var mm = pp.m.map(function (x) { return au + ' ' + x; }), ff = pp.f.map(function (x) { return au + ' ' + x; });
        return { d: au + ' ' + pp.dsg, a: mm.concat(ff), m: mm, f: ff };
      }
      return ent(alts(v.pp).map(function (x) { return au + ' ' + x; }));
    }
    return null;
  }

  function norm(s, strict) {
    s = String(s || '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim();
    if (!strict) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s;
  }
  // devuelve 'ok' | 'accent' | 'no'
  function check(input, entry, gender, strict) {
    var list = gender && entry[gender] ? entry[gender] : entry.a;
    var x = norm(input, true), y = norm(input, false);
    if (!x) return 'no';
    for (var i = 0; i < list.length; i++) if (norm(list[i], true) === x) return 'ok';
    for (var j = 0; j < list.length; j++) if (norm(list[j], false) === y) return strict ? 'accent' : 'ok';
    return 'no';
  }

  function find(inf) { return byInf[inf]; }
  function load(list) { list.forEach(function (v) { prep(v); byInf[v.inf] = v; }); }

  g.IT = {
    P: P, IP: IP, RP: RP, TENSES: TENSES, NONFIN: NONFIN, COMPOUND: COMPOUND,
    forms: forms, nonfinite: nonfinite, check: check, norm: norm, find: find, load: load, prep: prep, join: join
  };
})(typeof window !== 'undefined' ? window : globalThis);
