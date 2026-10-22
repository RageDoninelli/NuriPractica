/* Nuri practica — interfaz, progreso y repetición espaciada */
(function () {
  'use strict';
  var IT = window.IT, Q = window.Q, MODS = window.MODULES;
  var KEY = 'nuri_practica_v1', root = document.getElementById('app');
  var mem = null;

  /* ---------- estado ---------- */
  function fresh() { return { v: 1, stats: {}, weak: {}, daily: { d: '', n: 0 }, streak: { n: 0, last: '' }, tot: { n: 0, ok: 0 }, set: { strict: true, theme: 'auto' } }; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) { s.set = Object.assign({ strict: true, theme: 'auto' }, s.set); return s; } } catch (e) {}
    return mem || fresh();
  }
  var S = load();
  function save() { mem = S; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function today(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function applyTheme() {
    var t = S.set.theme; if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t);
  }
  applyTheme();

  function record(q, ok, retry) {
    var m = S.stats[q.mod] || (S.stats[q.mod] = { n: 0, ok: 0, r: '' });
    if (!retry) { m.n++; if (ok) m.ok++; m.r = (m.r + (ok ? '1' : '0')).slice(-20); S.tot.n++; if (ok) S.tot.ok++; }
    var td = today();
    if (S.daily.d !== td) S.daily = { d: td, n: 0 };
    S.daily.n++;
    if (S.streak.last !== td) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      S.streak.n = S.streak.last === today(y) ? S.streak.n + 1 : 1; S.streak.last = td;
    }
    var k = q.key;
    if (ok) { var w = S.weak[k]; if (w) { w.box++; if (w.box >= 3) delete S.weak[k]; } }
    else { S.weak[k] = { p: q.params, box: 0, t: Date.now() }; }
    save();
  }
  function mastery(id) {
    var st = S.stats[id]; if (!st || !st.r.length) return null;
    var c = 0; for (var i = 0; i < st.r.length; i++) if (st.r[i] === '1') c++;
    return { acc: c / st.r.length, n: st.r.length, total: st.n };
  }
  function weakFor(mod) { return Object.keys(S.weak).filter(function (k) { return !mod || S.weak[k].p.mod === mod; }).sort(function (a, b) { return S.weak[a].box - S.weak[b].box || S.weak[a].t - S.weak[b].t; }); }

  /* ---------- utilidades ---------- */
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function strip(s) { return String(s).replace(/<[^>]+>/g, ''); }
  function $(sel, el) { return (el || root).querySelector(sel); }
  function modById(id) { return Q.modOf(id); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var KIND = { conj: 'Conjugación', choice: 'Elige la correcta', sent: 'Completa la frase', sentc: 'Frase · elige', trans: 'Transformación', ident: 'Identifica el tiempo', table: 'Tabla completa' };

  /* ---------- vista actual ---------- */
  var V = { name: 'home' }, sess = null, scrollTop = true;
  function go(v) { V = v; scrollTop = true; render(); }

  function shell(inner) {
    return '<div class="bar"><div class="in"><button class="brand" data-act="home" aria-label="Inicio"><span class="logo">N</span>Nuri practica</button><span class="sp"></span>' +
      '<button class="icon-btn" data-act="conj">Conjugador</button><button class="icon-btn" data-act="settings" aria-label="Ajustes">⚙</button></div></div><div class="wrap">' + inner + '</div>';
  }

  function render() {
    var fn = { home: vHome, mod: vMod, play: vPlay, result: vResult, conj: vConj, settings: vSettings }[V.name];
    root.innerHTML = shell(fn());
    if (scrollTop) { window.scrollTo(0, 0); scrollTop = false; }
    var inp = $('.ans'); if (inp && V.name === 'play' && !sess.done) { try { inp.focus({ preventScroll: true }); } catch (e) {} }
  }

  /* ---------- HOME ---------- */
  function vHome() {
    var nw = Object.keys(S.weak).length, acc = S.tot.n ? Math.round(100 * S.tot.ok / S.tot.n) : 0;
    var td = today(), dn = S.daily.d === td ? S.daily.n : 0;
    var streakOk = S.streak.last === td || S.streak.last === (function () { var y = new Date(); y.setDate(y.getDate() - 1); return today(y); })();
    var o = '<div class="hero"><h1>Buongiorno! Allenati ogni giorno.</h1><p>Práctica de verbos italianos para el examen final: 21 temas, ejercicios sin fin y repaso automático de tus errores.</p></div>';
    o += '<div class="stats"><div class="stat"><b>' + dn + '</b><span>ejercicios hoy</span></div><div class="stat"><b>' + (streakOk ? S.streak.n : 0) + '</b><span>días seguidos</span></div><div class="stat"><b>' + (S.tot.n ? acc + '%' : '—') + '</b><span>aciertos totales</span></div></div>';
    o += '<div class="actions">' +
      '<button class="act ' + (nw ? 'hot' : '') + '" data-act="review"><b>Repaso de errores' + (nw ? ' · ' + nw : '') + '</b><small>' + (nw ? 'Lo que más te cuesta, hasta que lo domines' : 'Aún no tienes errores guardados') + '</small></button>' +
      '<button class="act main" data-act="sim"><b>Simulacro de examen</b><small>30 preguntas mezcladas, sin ayudas</small></button>' +
      '<button class="act" data-act="conj"><b>Conjugador</b><small>Consulta cualquier verbo en todos los tiempos</small></button></div>';
    var groups = []; MODS.forEach(function (m) { if (groups.indexOf(m.grp) < 0) groups.push(m.grp); });
    groups.forEach(function (gp) {
      var ms = MODS.filter(function (m) { return m.grp === gp; });
      o += '<div class="grp"><h2>' + gp + '</h2><span>' + ms.length + (ms.length === 1 ? ' tema' : ' temas') + '</span></div><div class="grid">';
      ms.forEach(function (m) {
        var ms2 = mastery(m.id), pct = ms2 ? Math.round(ms2.acc * 100) : 0, badge, warn = false;
        if (!ms2) badge = '<span class="badge">Nuevo</span>';
        else if (ms2.n < 10) badge = '<span class="badge gold">' + ms2.n + '/10 para medir</span>';
        else if (ms2.acc >= 0.85 && ms2.n >= 20) badge = '<span class="badge ok">Dominado</span>';
        else if (ms2.acc < 0.65) { badge = '<span class="badge bad">Reforzar</span>'; warn = true; }
        else badge = '<span class="badge gold">En buen camino</span>';
        o += '<button class="mod" data-act="mod" data-id="' + m.id + '"><span class="t">' + m.title + '</span><div class="meter ' + (warn ? 'warn' : '') + '"><i style="width:' + pct + '%"></i></div><span class="s">' + badge + (ms2 ? ' ' + pct + '%' : '') + '</span></button>';
      });
      o += '</div>';
    });
    return o;
  }

  /* ---------- MÓDULO: teoría + ejemplos ---------- */
  function exampleTable(m) {
    var t = m.tenses[0], vs = m.kind === 'nf' ? ['parlare', 'vendere', 'dormire', 'finire', 'fare', 'dire', 'andare', 'prendere'] : (t === 'imp_pres' ? ['parlare', 'andare', 'fare'] : ['parlare', 'andare', 'fare', 'finire']);
    var o = '<h3>Ejemplos conjugados</h3>';
    if (m.kind === 'nf') {
      o += '<table><tr><th>Verbo</th><th>' + Q.label(t) + '</th></tr>';
      vs.forEach(function (n) { var e = IT.nonfinite(IT.find(n), t); if (e) o += '<tr><td>' + n + '</td><td><b>' + h(e.d) + '</b></td></tr>'; });
      return o + '</table>';
    }
    var cols = vs.map(function (n) { return IT.find(n); });
    o += '<table><tr><th></th>' + cols.map(function (v) { return '<th>' + v.inf + '</th>'; }).join('') + '</tr>';
    var n = t === 'imp_pres' ? 5 : 6;
    for (var i = 0; i < n; i++) {
      o += '<tr><td>' + (t === 'imp_pres' ? IT.IP[i] : (/^cong_/.test(t) ? 'che ' : '') + IT.P[i]) + '</td>';
      cols.forEach(function (v) { var f = IT.forms(v, t); o += '<td>' + (f ? h(f[i].d) : '—') + '</td>'; });
      o += '</tr>';
    }
    return o + '</table>';
  }
  function vMod() {
    var m = modById(V.id), tab = V.tab || 'theory';
    var o = '<div class="crumb"><button data-act="home">← Inicio</button><span>/</span><span>' + m.grp + '</span></div><h1 class="title">' + m.title + '</h1>';
    o += '<div class="tabs"><button class="' + (tab === 'theory' ? 'on' : '') + '" data-act="tab" data-tab="theory">Teoría</button><button class="' + (tab === 'practice' ? 'on' : '') + '" data-act="tab" data-tab="practice">Practicar</button></div>';
    if (tab === 'theory') {
      o += '<div class="theory">' + m.theory + exampleTable(m) + '</div><div class="cta"><button class="btn" data-act="start" data-id="' + m.id + '">Practicar este tema →</button></div>';
    } else {
      var st = mastery(m.id), nw = weakFor(m.id).length;
      o += '<div class="card"><h3>Ronda de 10 ejercicios</h3><p class="note">Mezcla: conjugar, elegir, completar frases, transformar, identificar y tablas completas. Lo que falles volverá a salir.</p>' +
        (st ? '<p class="note">Tu nivel reciente: <b>' + Math.round(st.acc * 100) + '%</b> (últimos ' + st.n + ')' + (nw ? ' · ' + nw + ' pendientes de repaso' : '') + '</p>' : '') +
        '<div class="nav"><button class="btn" data-act="start" data-id="' + m.id + '">Empezar ronda</button>' + (nw ? '<button class="btn sec" data-act="review" data-id="' + m.id + '">Solo mis errores (' + nw + ')</button>' : '') + '</div></div>';
    }
    return o;
  }

  /* ---------- sesiones ---------- */
  function build(mod, n) {
    var qs = [], seen = {}, wk = weakFor(mod).slice(0, 3);
    wk.forEach(function (k) {
      try { var q = Q.make(S.weak[k].p); if (q) { q.tag = 'Repaso'; qs.push(q); seen[q.key] = 1; } } catch (e) { delete S.weak[k]; }
    });
    var guard = 0;
    while (qs.length < n && guard++ < 80) { var q2 = Q.rand(mod); if (!seen[q2.key]) { seen[q2.key] = 1; qs.push(q2); } }
    return shuffle(qs);
  }
  function startMod(id) { sess = { mode: 'mod', mod: id, qs: build(id, 10), i: 0, res: [], answered: false, done: false }; go({ name: 'play' }); }
  function startReview(mod) {
    var keys = weakFor(mod).slice(0, 15), qs = [];
    keys.forEach(function (k) { try { var q = Q.make(S.weak[k].p); if (q) { q.tag = 'Repaso'; qs.push(q); } } catch (e) { delete S.weak[k]; } });
    if (!qs.length) { go({ name: 'home' }); return; }
    sess = { mode: 'review', mod: mod || null, qs: shuffle(qs), i: 0, res: [], answered: false, done: false }; go({ name: 'play' });
  }
  function startSim() {
    var ids = shuffle(MODS.map(function (m) { return m.id; })), qs = [], N = 30, k = ['conj', 'conj', 'sent', 'sent', 'sentc', 'trans', 'choice', 'ident'];
    for (var i = 0; i < N; i++) {
      var id = ids[i % ids.length], m = modById(id), kinds = (i % 10 === 9 && m.kind !== 'nf') ? ['table'] : k;
      qs.push(Q.rand(id, { kinds: kinds }));
    }
    sess = { mode: 'sim', mod: null, qs: qs, i: 0, res: [], answered: false, done: false }; go({ name: 'play' });
  }

  /* ---------- JUGAR ---------- */
  function vPlay() {
    var q = sess.qs[sess.i], n = sess.qs.length, base = sess.res.filter(function (r) { return !r.retry; }).length;
    var title = sess.mode === 'sim' ? 'Simulacro' : sess.mode === 'review' ? 'Repaso de errores' : modById(sess.mod).title;
    var o = '<div class="crumb"><button data-act="quit">← Salir</button><span>/</span><span>' + h(title) + '</span></div>';
    o += '<div class="prog"><div class="meter"><i style="width:' + Math.round(100 * sess.i / n) + '%"></i></div><small>' + (sess.i + 1) + ' / ' + n + '</small></div>';
    var tagTxt = (q.retry ? 'Repetición · ' : '') + (KIND[q.params.kind] || '') + (sess.mode !== 'mod' ? ' · ' + modById(q.mod).title : '') + (q.tag && !q.retry ? ' · ' + q.tag : '');
    o += '<div class="card"><div class="tag ' + (q.retry ? 'retry' : '') + '">' + h(tagTxt) + '</div><div class="q">' + q.prompt + '</div><div class="qs">' + q.sub + '</div>';
    if (q.type === 'typed') {
      o += '<input class="ans" id="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Escribe la respuesta" ' + (sess.answered ? 'disabled' : '') + '>' + accRow();
      o += '<div id="fb"></div><div class="nav"><button class="btn" id="go" data-act="check">Comprobar</button></div>';
    } else if (q.type === 'choice') {
      o += '<div class="choices">' + q.choices.map(function (c, i) { return '<button class="ch" data-act="pick" data-i="' + i + '">' + h(c.t) + '</button>'; }).join('') + '</div><div id="fb"></div><div class="nav hide" id="nx"><button class="btn" data-act="next">Siguiente →</button></div>';
    } else if (q.type === 'table') {
      o += '<div class="tbl">' + q.rows.map(function (r, i) { return '<div class="tr"><label for="t' + i + '">' + h(r.pron) + '</label><input class="ans tin" id="t' + i + '" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>'; }).join('') + '</div>' + accRow();
      o += '<div id="fb"></div><div class="nav"><button class="btn" id="go" data-act="check">Comprobar</button></div>';
    }
    return o + '</div>';
  }
  function accRow() { return '<div class="acc">' + ['à', 'è', 'é', 'ì', 'ò', 'ù', "'"].map(function (c) { return '<button type="button" data-act="acc" data-c="' + c + '" tabindex="-1">' + c + '</button>'; }).join('') + '</div>'; }

  var lastInput = null;
  function insertAcc(c) {
    var el = (lastInput && document.body.contains(lastInput)) ? lastInput : $('.ans'); if (!el || el.disabled) return;
    var s = el.selectionStart, e = el.selectionEnd, v = el.value; if (s == null) { s = e = v.length; }
    el.value = v.slice(0, s) + c + v.slice(e); el.focus(); el.setSelectionRange(s + 1, s + 1);
  }

  function finishQ(q, ok, userText, how) {
    var retry = !!q.retry;
    sess.res.push({ q: q, ok: ok, user: userText, retry: retry, mod: q.mod });
    record(q, ok, retry);
    if (!ok && !retry && sess.mode !== 'sim' && sess.qs.length < 16) {
      var again = Q.make(q.params); if (again) { again.retry = true; sess.qs.splice(Math.min(sess.i + 4, sess.qs.length), 0, again); }
    }
  }
  function ruleBox(q) { return q.rule ? '<div class="rule"><b>Recuerda:</b> ' + q.rule + '</div>' : ''; }

  function check() {
    var q = sess.qs[sess.i]; if (sess.answered) return; var fb = $('#fb');
    if (q.type === 'typed') {
      var inp = $('#ans'), val = inp.value; if (!val.trim()) { inp.focus(); return; }
      var gr = Q.grade(q, val, S.set.strict), ok = gr.ok;
      sess.answered = true; inp.disabled = true; inp.classList.add(ok ? 'ok' : 'bad');
      finishQ(q, ok, val, gr.how);
      if (sess.mode === 'sim') { next(); return; }
      var extra = q.fullSentence ? '<div class="rule">' + h(q.fullSentence) + '</div>' : '';
      fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><div class="h">' + (ok ? '¡Correcto!' : gr.how === 'accent' ? 'Casi: revisa los acentos' : 'No es esa') + '</div>' +
        (ok ? '<div class="corr">' + h(Q.answerText(q)) + '</div>' : '<div class="corr">' + h(Q.answerText(q)) + '</div>') + extra + (ok ? '' : ruleBox(q)) + '</div>';
      setGo('Siguiente →', 'next');
    } else if (q.type === 'table') {
      var ins = root.querySelectorAll('.tin'), all = true, wrong = [];
      var vals = []; ins.forEach(function (el) { vals.push(el.value); }); if (!vals.some(function (v) { return v.trim(); })) { ins[0].focus(); return; }
      ins.forEach(function (el, i) {
        var r = IT.check(el.value, q.rows[i].answer, null, S.set.strict), ok1 = r === 'ok';
        el.disabled = true; el.classList.add(ok1 ? 'ok' : 'bad'); if (!ok1) { all = false; wrong.push(i); }
      });
      sess.answered = true; finishQ(q, all, vals.join(' · '), 'no');
      if (sess.mode === 'sim') { next(); return; }
      var ans = wrong.map(function (i) { return '<div><b>' + h(q.rows[i].pron) + '</b> → ' + h(q.rows[i].answer.d) + '</div>'; }).join('');
      fb.innerHTML = '<div class="fb ' + (all ? 'ok' : 'bad') + '"><div class="h">' + (all ? '¡Tabla perfecta!' : wrong.length + ' de ' + q.rows.length + ' por corregir') + '</div>' + ans + (all ? '' : ruleBox(q)) + '</div>';
      setGo('Siguiente →', 'next');
    }
  }
  function setGo(txt, act) { var b = $('#go'); if (b) { b.textContent = txt; b.setAttribute('data-act', act); b.focus(); } }

  function pick(i) {
    var q = sess.qs[sess.i]; if (sess.answered) return; sess.answered = true;
    var c = q.choices[i], ok = c.ok, btns = root.querySelectorAll('.ch');
    btns.forEach(function (b, k) { b.disabled = true; if (q.choices[k].ok) b.classList.add('ok'); else if (k === i) b.classList.add('bad'); });
    finishQ(q, ok, c.t, ok ? 'ok' : 'no');
    if (sess.mode === 'sim') { next(); return; }
    var extra = q.fullSentence ? '<div class="rule">' + h(q.fullSentence) + '</div>' : '';
    $('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><div class="h">' + (ok ? '¡Correcto!' : 'No es esa') + '</div><div class="corr">' + h(q.display) + '</div>' + extra + (ok ? '' : ruleBox(q)) + '</div>';
    $('#nx').classList.remove('hide'); var nb = $('#nx .btn'); if (nb) nb.focus();
  }

  function next() {
    sess.i++; sess.answered = false;
    if (sess.i >= sess.qs.length) { sess.done = true; go({ name: 'result' }); return; }
    scrollTop = true; render();
  }

  /* ---------- RESULTADO ---------- */
  function vResult() {
    var base = sess.res.filter(function (r) { return !r.retry; }), ok = base.filter(function (r) { return r.ok; }).length, n = base.length, pct = n ? Math.round(100 * ok / n) : 0;
    var low = pct < 70, msg = pct >= 90 ? '¡Excelente! Ya lo dominas.' : pct >= 70 ? 'Muy bien, sigue así.' : pct >= 50 ? 'Vas mejorando: repasa los errores y repite la ronda.' : 'Normal al principio. Repasa la teoría y vuelve a intentarlo.';
    var title = sess.mode === 'sim' ? 'Simulacro terminado' : 'Ronda terminada';
    var o = '<div class="crumb"><button data-act="home">← Inicio</button></div><div class="card"><div class="score ' + (low ? 'low' : '') + '"><div class="big">' + ok + '/' + n + '</div><h3>' + title + ' · ' + pct + '%</h3><p>' + msg + '</p></div>';
    var bad = base.filter(function (r) { return !r.ok; });
    if (sess.mode === 'sim') {
      var by = {}; base.forEach(function (r) { var b = by[r.mod] || (by[r.mod] = { n: 0, ok: 0 }); b.n++; if (r.ok) b.ok++; });
      o += '<h3 style="margin-top:18px">Por tema</h3><div class="bm">' + Object.keys(by).sort(function (a, b) { return by[a].ok / by[a].n - by[b].ok / by[b].n; }).map(function (id) {
        var b = by[id], p = Math.round(100 * b.ok / b.n); return '<div><span>' + h(modById(id).title) + ' <small style="color:var(--muted)">' + b.ok + '/' + b.n + '</small></span><div class="meter ' + (p < 70 ? 'warn' : '') + '"><i style="width:' + p + '%"></i></div></div>';
      }).join('') + '</div>';
    }
    if (bad.length) {
      o += '<h3 style="margin-top:18px">Para repasar (' + bad.length + ')</h3><div class="errs">' + bad.map(function (r) {
        var q = r.q; return '<div class="err">' + (q.fullSentence ? h(q.fullSentence.replace(/\s+/g, ' ')) : strip(q.prompt)) + '<br><span style="color:var(--muted)">Tu respuesta: ' + h(r.user || '—') + '</span> · <b>' + h(q.type === 'table' ? q.rows.map(function (x) { return x.answer.d; }).join(', ') : Q.answerText(q)) + '</b></div>';
      }).join('') + '</div><p class="note">Estos ejercicios quedaron guardados en «Repaso de errores» y volverán a aparecer hasta que los domines.</p>';
    }
    o += '<div class="nav">';
    if (sess.mode === 'mod') o += '<button class="btn" data-act="start" data-id="' + sess.mod + '">Otra ronda</button><button class="btn sec" data-act="mod" data-id="' + sess.mod + '">Ver teoría</button>';
    else if (sess.mode === 'sim') o += '<button class="btn" data-act="sim">Otro simulacro</button>';
    else o += '<button class="btn" data-act="review">Seguir repasando</button>';
    if (Object.keys(S.weak).length && sess.mode !== 'review') o += '<button class="btn sec" data-act="review">Repasar errores (' + Object.keys(S.weak).length + ')</button>';
    o += '<button class="btn sec" data-act="home">Inicio</button></div></div>';
    return o;
  }

  /* ---------- CONJUGADOR ---------- */
  function vConj() {
    var inf = V.verb || 'essere', v = IT.find(inf) || IT.find('essere'), g = V.g || '';
    var o = '<div class="crumb"><button data-act="home">← Inicio</button><span>/</span><span>Conjugador</span></div><h1 class="title">Conjugador</h1>';
    o += '<div class="sel"><input id="vq" list="vl" value="' + h(v.inf) + '" placeholder="Escribe un verbo…" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="seg" title="Género para essere"><button class="' + (g === '' ? 'on' : '') + '" data-act="cg" data-g="">o/a</button><button class="' + (g === 'm' ? 'on' : '') + '" data-act="cg" data-g="m">♂</button><button class="' + (g === 'f' ? 'on' : '') + '" data-act="cg" data-g="f">♀</button></div></div>';
    o += '<datalist id="vl">' + window.VERBS.map(function (x) { return '<option value="' + x.inf + '">' + x.es + '</option>'; }).join('') + '</datalist>';
    o += '<div class="chips">' + ['essere', 'avere', 'andare', 'fare', 'venire', 'dire', 'potere', 'volere', 'dovere', 'sapere', 'stare', 'dare', 'uscire', 'alzarsi', 'finire', 'mangiare'].map(function (x) { return '<button class="chip ' + (x === v.inf ? 'on' : '') + '" data-act="cv" data-v="' + x + '">' + x + '</button>'; }).join('') + '</div>';
    o += '<p class="note"><b>' + h(v.inf) + '</b> · ' + h(v.es) + ' · ausiliare: ' + v.aux + ' · participio: ' + h(v.pp.replace('|', ' / ')) + '</p>';
    var modes = ['Indicativo', 'Congiuntivo', 'Condizionale', 'Imperativo'];
    modes.forEach(function (md) {
      Object.keys(IT.TENSES).filter(function (t) { return IT.TENSES[t].mode === md; }).forEach(function (t) {
        var f = IT.forms(v, t); if (!f) return;
        o += '<div class="ctab"><h3>' + IT.TENSES[t].it + (IT.TENSES[t].es !== IT.TENSES[t].it ? '<small>' + IT.TENSES[t].es + '</small>' : '') + '</h3>';
        f.forEach(function (e, i) { var pr = t === 'imp_pres' ? IT.IP[i] : (/^cong_/.test(t) ? 'che ' : '') + IT.P[i]; o += '<div class="r"><span>' + pr + '</span><b>' + h(g && e[g] ? e[g][0] : e.d) + (e.a.length > 1 && !(e.m.join() !== e.f.join()) ? ' <small style="color:var(--muted);font-weight:400">/ ' + h(e.a.slice(1).join(' / ')) + '</small>' : '') + '</b></div>'; });
        o += '</div>';
      });
    });
    o += '<div class="ctab"><h3>Formas no personales</h3>';
    Object.keys(IT.NONFIN).forEach(function (t) { var e = IT.nonfinite(v, t); if (!e || (/^part_/.test(t) && v.refl)) return; o += '<div class="r"><span>' + IT.NONFIN[t].it.replace(/ (presente|passato)$/, ' $1') + '</span><b>' + h(g && e[g] ? e[g][0] : e.d) + '</b></div>'; });
    return o + '</div>';
  }

  /* ---------- AJUSTES ---------- */
  function vSettings() {
    var o = '<div class="crumb"><button data-act="home">← Inicio</button><span>/</span><span>Ajustes</span></div><h1 class="title">Ajustes</h1><div class="set">';
    o += '<div class="l"><div><b>Acentos obligatorios</b><small>En el examen escrito los acentos cuentan (parlò, andrà). Si lo apagas, «parlo» y «parlò» se aceptan igual.</small></div><button class="sw ' + (S.set.strict ? 'on' : '') + '" data-act="strict" aria-label="Acentos obligatorios"></button></div>';
    o += '<div class="l"><div><b>Tema</b><small>Claro, oscuro o según el teléfono.</small></div><div class="seg">' + ['auto', 'light', 'dark'].map(function (t) { return '<button class="' + (S.set.theme === t ? 'on' : '') + '" data-act="theme" data-t="' + t + '">' + { auto: 'Auto', light: 'Claro', dark: 'Oscuro' }[t] + '</button>'; }).join('') + '</div></div></div>';
    o += '<div class="set"><div class="l"><div><b>Tu progreso</b><small>' + S.tot.n + ' ejercicios respondidos · ' + Object.keys(S.weak).length + ' en repaso. Se guarda solo en este teléfono/navegador.</small></div><button class="btn sec" data-act="reset">Borrar</button></div></div>';
    o += '<p class="note"><b>Instalar como app:</b> en Android (Chrome) abre el menú ⋮ → «Instalar aplicación». En iPhone (Safari) pulsa Compartir → «Añadir a pantalla de inicio». Después funciona sin internet.</p>';
    return o;
  }

  /* ---------- eventos ---------- */
  root.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]'); if (!el) return; var a = el.getAttribute('data-act');
    if (a === 'home') { sess = null; go({ name: 'home' }); }
    else if (a === 'mod') go({ name: 'mod', id: el.getAttribute('data-id'), tab: 'theory' });
    else if (a === 'tab') { V.tab = el.getAttribute('data-tab'); render(); }
    else if (a === 'start') startMod(el.getAttribute('data-id'));
    else if (a === 'review') startReview(el.getAttribute('data-id') || null);
    else if (a === 'sim') startSim();
    else if (a === 'check') check();
    else if (a === 'next') next();
    else if (a === 'pick') pick(+el.getAttribute('data-i'));
    else if (a === 'acc') insertAcc(el.getAttribute('data-c'));
    else if (a === 'quit') { if (sess && sess.res.length && !confirm('¿Salir de la ronda? Tu progreso hasta aquí ya quedó guardado.')) return; var back = sess && sess.mode === 'mod' ? { name: 'mod', id: sess.mod, tab: 'practice' } : { name: 'home' }; sess = null; go(back); }
    else if (a === 'conj') go({ name: 'conj', verb: V.verb, g: V.g });
    else if (a === 'cv') { V.verb = el.getAttribute('data-v'); scrollTop = false; render(); }
    else if (a === 'cg') { V.g = el.getAttribute('data-g'); scrollTop = false; render(); }
    else if (a === 'settings') go({ name: 'settings' });
    else if (a === 'strict') { S.set.strict = !S.set.strict; save(); render(); }
    else if (a === 'theme') { S.set.theme = el.getAttribute('data-t'); applyTheme(); save(); render(); }
    else if (a === 'reset') { if (confirm('¿Borrar todo tu progreso y tus errores guardados?')) { S = fresh(); save(); applyTheme(); render(); } }
  });
  root.addEventListener('focusin', function (e) { if (e.target.classList && e.target.classList.contains('ans')) lastInput = e.target; });
  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return; var t = e.target;
    if (V.name === 'conj' && t.id === 'vq') { var q = t.value.trim().toLowerCase(); if (IT.find(q)) { V.verb = q; scrollTop = false; render(); } return; }
    if (V.name !== 'play' || !sess) return;
    if (t.classList && t.classList.contains('tin')) { var all = Array.prototype.slice.call(root.querySelectorAll('.tin')), i = all.indexOf(t); if (i >= 0 && i < all.length - 1 && !sess.answered) { all[i + 1].focus(); e.preventDefault(); return; } }
    e.preventDefault(); if (sess.answered) next(); else if (sess.qs[sess.i].type !== 'choice') check();
  });
  root.addEventListener('change', function (e) { if (V.name === 'conj' && e.target.id === 'vq') { var q = e.target.value.trim().toLowerCase(); if (IT.find(q)) { V.verb = q; scrollTop = false; render(); } } });

  render();
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js').catch(function () {});
})();
