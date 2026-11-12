/*
 * Maindsteel Automotive — request sheet ("ficha de solicitud").
 * Used by the chatbot (assets/ChatbotQuotationView-*.js) through window.MSFicha:
 *   html(rfq)            -> HTML preview (white letterhead sheet), user data escaped
 *   download(rfq, jsPDF) -> builds the A4 PDF as real text and saves it
 *   print(rfq, jsPDF)    -> opens the same PDF with the print dialog
 *   copy(rfq)            -> copies a plain-text summary to the clipboard
 * jsPDF is passed in by the chatbot bundle, which already includes it.
 */
(function () {
  'use strict';

  var BASE = '/maindsteel-automotive-site/';
  var LOGO_SCREEN = BASE + 'assets/logo-automotive.webp';
  var LOGO_PRINT = BASE + 'assets/logo%20automotive-CTztQJmY.webp'; // full-size source for the PDF
  var LOGO_RATIO = 2079 / 756;

  var COMPANY = 'Maindsteel Automotive de México S.A. de C.V.';
  var ADDRESS = 'Calle Municipio de Calvillo #103, Parque Industrial del Valle de Aguascalientes (PIVA), San Francisco de los Romo, Ags., México';
  var PHONE = '+52 449 158 17 09';
  var EMAIL = 'contacto@maindsteel.com.mx';

  // Values the chatbot fills in when the client did not give the data.
  var PLACEHOLDERS = ['empresa solicitante', 'empresa automotriz', 'plataforma automotriz', 'proyecto industrial',
    'sin especificar', 'cliente', 'cliente industrial', 'general', 'no especificado', 'sin clasificar'];

  function val(v) {
    var s = (v == null ? '' : String(v)).trim();
    return !s || PLACEHOLDERS.indexOf(s.toLowerCase()) !== -1 ? 'No indicado' : s;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // "12/11/2026, 09:48 a.m. hrs" -> "12/11/2026, 09:48 a.m." (keeps "hrs" only for 24-hour times)
  function when(rfq) {
    var s = String(rfq.timestamp || '');
    return /[ap]\.\s?m\./i.test(s) ? s.replace(/\s*hrs\.?\s*$/i, '') : s;
  }

  function sendFailed(rfq) { return /^No se pudo enviar/i.test(rfq.status || ''); }

  function note(rfq) {
    return sendFailed(rfq)
      ? 'Esta solicitud no se pudo enviar. Llámanos al ' + PHONE + ' o escríbenos a ' + EMAIL + ' y menciona el folio.'
      : 'Recibimos tu solicitud. Te contactaremos en menos de 5 minutos en horario hábil o a primera hora del siguiente día hábil para revisar planos y preparar la cotización.';
  }

  function itemMeta(rfq) {
    var parts = [];
    if (rfq.itemCode) parts.push('Código ' + rfq.itemCode);
    if (rfq.itemNumber) parts.push('No. ' + rfq.itemNumber + ' del catálogo');
    return parts.join(' · ');
  }

  function rows(rfq) {
    return [
      ['Proceso o producto', val(rfq.itemName), itemMeta(rfq)],
      ['Empresa', val(rfq.clientCompany), ''],
      ['Nombre del contacto', val(rfq.clientName), ''],
      ['Teléfono o correo', val(rfq.clientEmail), ''],
      ['Proyecto', val(rfq.clientProject), ''],
      ['País o región de destino', val(rfq.shippingCountry), '']
    ];
  }

  // ---------- HTML preview ----------
  function html(rfq) {
    var body = rows(rfq).map(function (r) {
      return '<tr><th>' + esc(r[0]) + '</th><td><span class="msf-v">' + esc(r[1]) + '</span>' +
        (r[2] ? '<span class="msf-meta">' + esc(r[2]) + '</span>' : '') + '</td></tr>';
    }).join('');
    return '' +
      '<article class="msf-sheet">' +
        '<header class="msf-head">' +
          '<img class="msf-logo" src="' + LOGO_SCREEN + '" alt="Maindsteel Automotive">' +
          '<div class="msf-doc">' +
            '<div class="msf-title">Solicitud de cotización</div>' +
            '<div class="msf-folio">Folio ' + esc(rfq.id || '') + '</div>' +
            '<div class="msf-date">' + esc(when(rfq)) + '</div>' +
          '</div>' +
        '</header>' +
        '<div class="msf-rule"></div>' +
        '<section class="msf-body">' +
          '<h3 class="msf-h">Datos de la solicitud</h3>' +
          '<table class="msf-table"><tbody>' + body + '</tbody></table>' +
          '<h3 class="msf-h">Seguimiento</h3>' +
          '<p class="msf-note' + (sendFailed(rfq) ? ' msf-note-warn' : '') + '">' + esc(note(rfq)) + '</p>' +
        '</section>' +
        '<footer class="msf-foot">' +
          '<strong>' + esc(COMPANY) + '</strong>' +
          '<span>' + esc(ADDRESS) + '</span>' +
          '<span>Tel. ' + PHONE + ' · ' + EMAIL + ' · Certificación IATF 16949</span>' +
        '</footer>' +
      '</article>';
  }

  // ---------- PDF ----------
  var logoPromise = null;
  function logoDataUrl() {
    if (!logoPromise) {
      logoPromise = new Promise(function (resolve) {
        var im = new Image();
        im.onload = function () {
          try {
            var c = document.createElement('canvas');
            c.width = 1100; c.height = Math.round(1100 / LOGO_RATIO);
            var ctx = c.getContext('2d');
            ctx.fillStyle = '#0f1014'; // same as the PDF band, so the logo can be stored as a small JPEG
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(im, 0, 0, c.width, c.height);
            resolve(c.toDataURL('image/jpeg', 0.9));
          } catch (e) { resolve(null); }
        };
        im.onerror = function () { resolve(null); };
        im.src = LOGO_PRINT;
      });
    }
    return logoPromise;
  }

  function build(rfq, JsPDF, logo) {
    var doc = new JsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    var W = 210, M = 16;
    var gold = [201, 162, 39], ink = [24, 24, 27], mute = [113, 113, 122], line = [222, 222, 226];

    // Letterhead band
    doc.setFillColor(15, 16, 20); doc.rect(0, 0, W, 40, 'F');
    doc.setFillColor(gold[0], gold[1], gold[2]); doc.rect(0, 40, W, 1.2, 'F');
    var logoH = 23, logoW = logoH * LOGO_RATIO;
    if (logo) doc.addImage(logo, 'JPEG', M - 3, 8.5, logoW, logoH);
    else { doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(255, 255, 255); doc.text('MAINDSTEEL AUTOMOTIVE', M, 23); }

    doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor(255, 255, 255);
    doc.text('SOLICITUD DE COTIZACIÓN', W - M, 17, { align: 'right' });
    doc.setFontSize(10.5); doc.setTextColor(gold[0], gold[1], gold[2]);
    doc.text('Folio ' + (rfq.id || ''), W - M, 24.5, { align: 'right' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(190, 190, 196);
    doc.text(when(rfq), W - M, 31, { align: 'right' });

    // Section title helper
    var y = 56;
    function section(title) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(10.5); doc.setTextColor(ink[0], ink[1], ink[2]);
      doc.text(title.toUpperCase(), M, y);
      doc.setDrawColor(gold[0], gold[1], gold[2]); doc.setLineWidth(0.5); doc.line(M, y + 2.2, M + 22, y + 2.2);
      y += 9;
    }

    section('Datos de la solicitud');
    var labelW = 52, valueX = M + labelW, valueW = W - M - valueX;
    rows(rfq).forEach(function (r, i) {
      doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
      var vLines = doc.splitTextToSize(r[1], valueW);
      var h = vLines.length * 5 + (r[2] ? 5 : 0) + 6;
      if (i % 2 === 0) { doc.setFillColor(247, 247, 248); doc.rect(M, y - 4.5, W - 2 * M, h, 'F'); }
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(mute[0], mute[1], mute[2]);
      doc.text(r[0], M + 3, y);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(ink[0], ink[1], ink[2]);
      doc.text(vLines, valueX, y);
      if (r[2]) {
        doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(mute[0], mute[1], mute[2]);
        doc.text(r[2], valueX, y + vLines.length * 5);
      }
      doc.setDrawColor(line[0], line[1], line[2]); doc.setLineWidth(0.2);
      doc.line(M, y - 4.5 + h, W - M, y - 4.5 + h);
      y += h;
    });

    y += 10;
    section('Seguimiento');
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    if (sendFailed(rfq)) doc.setTextColor(185, 28, 28); else doc.setTextColor(63, 63, 70);
    doc.text(doc.splitTextToSize(note(rfq), W - 2 * M), M, y);

    // Footer
    var fy = 274;
    doc.setDrawColor(line[0], line[1], line[2]); doc.setLineWidth(0.3); doc.line(M, fy - 6, W - M, fy - 6);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5); doc.setTextColor(ink[0], ink[1], ink[2]);
    doc.text(COMPANY, M, fy);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(mute[0], mute[1], mute[2]);
    var addr = doc.splitTextToSize(ADDRESS, W - 2 * M);
    doc.text(addr, M, fy + 4.5);
    doc.text('Tel. ' + PHONE + '  ·  ' + EMAIL + '  ·  Certificación IATF 16949', M, fy + 4.5 + addr.length * 3.8);
    return doc;
  }

  function fileName(rfq) { return 'Maindsteel_Solicitud_' + String(rfq.id || 'cotizacion').replace(/[^\w-]+/g, '_') + '.pdf'; }

  function download(rfq, JsPDF) {
    return logoDataUrl().then(function (logo) { build(rfq, JsPDF, logo).save(fileName(rfq)); });
  }

  function print(rfq, JsPDF) {
    var win = window.open('', '_blank'); // open synchronously so pop-up blockers allow it
    return logoDataUrl().then(function (logo) {
      var doc = build(rfq, JsPDF, logo);
      doc.autoPrint();
      var url = doc.output('bloburl');
      if (win) win.location.href = url; else doc.save(fileName(rfq));
    });
  }

  function text(rfq) {
    return [
      'Solicitud de cotización · Maindsteel Automotive',
      'Folio: ' + (rfq.id || ''),
      'Fecha: ' + when(rfq)
    ].concat(rows(rfq).map(function (r) { return r[0] + ': ' + r[1] + (r[2] ? ' (' + r[2] + ')' : ''); })).join('\n');
  }

  function copy(rfq) {
    var t = text(rfq);
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t);
    var ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } finally { document.body.removeChild(ta); }
    return Promise.resolve();
  }

  window.MSFicha = { html: html, download: download, print: print, copy: copy, text: text };
})();
