/*
  Don't edit this file. It just takes the words from content.js and
  places them on the page. All your edits go in content.js.
*/
(function () {
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // ----- Every page: the site name in the header -----
  document.querySelectorAll('.site-name').forEach(function (node) {
    node.textContent = CONTENT.name;
  });

  // ----- Home page -----
  setText('hero-headline', CONTENT.heroHeadline);
  setText('hero-intro-1', CONTENT.heroIntro1);
  setText('hero-intro-2', CONTENT.heroIntro2);
  var employersEl = document.getElementById('employers-line');
  if (employersEl && CONTENT.employers && CONTENT.employers.length) {
    employersEl.innerHTML = 'Previously at ' +
      CONTENT.employers.map(function (e) {
        if (e && typeof e === 'object' && e.url) {
          return '<a href="' + e.url + '" target="_blank" rel="noopener"><b>' + e.name + '</b></a>';
        }
        return '<b>' + (e.name || e) + '</b>';
      }).join(', ') + '.';
  }

  // ----- Journey page (most recent first) -----
  var journeyList = document.getElementById('journey-list');
  if (journeyList && CONTENT.journey) {
    CONTENT.journey.forEach(function (stage) {
      var li = document.createElement('li');
      if (stage.current) li.className = 'now';

      var roleLine = el('p', 'role-line');
      var company = el('span', 'company', stage.company);
      roleLine.appendChild(company);
      roleLine.appendChild(document.createTextNode(' · ' + stage.role + ' · ' + stage.when));
      li.appendChild(roleLine);

      li.appendChild(el('p', 'headline', stage.headline));
      li.appendChild(el('p', 'body-text', stage.body));

      if (stage.learning) {
        var learning = el('div', 'learning');
        learning.appendChild(el('p', 'label', "What I'm learning"));
        learning.appendChild(el('p', null, stage.learning));
        li.appendChild(learning);
      }

      if (stage.highlights && stage.highlights.length) {
        var details = document.createElement('details');
        details.className = 'built';
        var summary = document.createElement('summary');
        summary.textContent = 'What I built';
        details.appendChild(summary);
        var ul = document.createElement('ul');
        stage.highlights.forEach(function (h) { ul.appendChild(el('li', null, h)); });
        details.appendChild(ul);
        li.appendChild(details);
      }

      journeyList.appendChild(li);
    });
  }

  // ----- Philosophy page (numbered cards) -----
  var philosophyWrap = document.getElementById('philosophy-list');
  if (philosophyWrap && CONTENT.philosophy) {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    CONTENT.philosophy.forEach(function (item, i) {
      var section = el('section', 'principle');
      var num = i + 1 < 10 ? '0' + (i + 1) : '' + (i + 1);
      section.appendChild(el('p', 'num', num));
      section.appendChild(el('h2', null, item.title));
      section.appendChild(el('p', null, item.body));
      philosophyWrap.appendChild(section);

      // Tilt the card toward whichever corner the mouse is nearest.
      if (!reduceMotion) {
        var maxTilt = 10;
        section.addEventListener('mousemove', function (e) {
          var rect = section.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width - 0.5;
          var py = (e.clientY - rect.top) / rect.height - 0.5;
          var rotateY = px * maxTilt * 2;
          var rotateX = -py * maxTilt * 2;
          section.style.transform = 'perspective(800px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg)';
        });
        section.addEventListener('mouseleave', function () {
          section.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
        });
      }
    });
  }

  // ----- My Agents page -----
  var register = document.getElementById('agents-register');
  if (register) {
    if (CONTENT.agents && CONTENT.agents.length) {
      CONTENT.agents.forEach(function (proj) {
        var article = el('article', 'item');
        var left = document.createElement('div');
        var h3 = document.createElement('h3');
        if (proj.status === 'live' && proj.link) {
          var a = document.createElement('a'); a.href = proj.link; a.textContent = proj.title;
          h3.appendChild(a);
        } else {
          h3.textContent = proj.title;
        }
        var body = el('p', null, proj.body);
        var proves = el('p', 'proves');
        var b = el('b', null, 'Shows: ');
        proves.appendChild(b);
        proves.appendChild(document.createTextNode(proj.proves));
        left.append(h3, body, proves);

        var statusLabel = proj.status === 'live' ? 'Live' : (proj.status === 'building' ? 'Building' : 'Planned');
        var statusP = el('p', 'status ' + proj.status, statusLabel);
        if (proj.due) statusP.appendChild(el('span', 'due', proj.due));
        article.append(left, statusP);
        register.appendChild(article);
      });
    } else {
      var empty = el('div', 'empty');
      empty.appendChild(el('p', null, "Nothing published here yet. Check back soon."));
      register.replaceWith(empty);
    }
  }

  // ----- Industry Notes page -----
  var notesWrap = document.getElementById('industry-notes-list');
  if (notesWrap) {
    if (CONTENT.industryNotes && CONTENT.industryNotes.length) {
      CONTENT.industryNotes.forEach(function (note) {
        var article = el('article', 'fnote');
        if (note.date) article.id = note.date;
        var time = document.createElement('time');
        if (note.date) time.setAttribute('datetime', note.date);
        time.textContent = note.dateLabel || note.date || '';
        article.appendChild(time);
        article.appendChild(el('h2', null, note.title));
        article.appendChild(el('p', null, note.body));
        if (note.take) {
          var take = el('p', 'take');
          take.appendChild(el('strong', null, 'My take: '));
          take.appendChild(document.createTextNode(note.take));
          article.appendChild(take);
        }
        if (note.sourceUrl) {
          var src = el('p', 'src');
          src.appendChild(document.createTextNode('Source: '));
          var a = document.createElement('a');
          a.href = note.sourceUrl;
          a.textContent = note.sourceLabel || note.sourceUrl;
          src.appendChild(a);
          article.appendChild(src);
        }
        notesWrap.appendChild(article);
      });
    } else {
      var emptyNotes = el('div', 'empty');
      emptyNotes.appendChild(el('p', null, "No notes published yet. Check back soon."));
      notesWrap.replaceWith(emptyNotes);
    }
  }

  // ----- Contact page -----
  var linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink && CONTENT.linkedin) {
    linkedinLink.href = CONTENT.linkedin;
    linkedinLink.textContent = CONTENT.linkedin.replace(/^https?:\/\//, '');
  }

  var emailLink = document.getElementById('email-link');
  if (emailLink && CONTENT.email) {
    emailLink.href = 'mailto:' + CONTENT.email;
    emailLink.textContent = CONTENT.email;
  }

  var emailButton = document.getElementById('email-button');
  if (emailButton && CONTENT.email) {
    emailButton.href = 'mailto:' + CONTENT.email;
  }
})();
