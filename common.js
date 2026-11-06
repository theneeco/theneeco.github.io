/*
  Don't edit this file — it just takes the words from content.js and
  places them on the page. All your edits go in content.js.
*/
(function () {
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ----- Every page: the site name in the header -----
  document.querySelectorAll('.site-name').forEach(function (el) {
    el.textContent = CONTENT.name;
  });

  // ----- Home page -----
  setText('hero-headline', CONTENT.heroHeadline);
  setText('hero-intro-1', CONTENT.heroIntro1);
  setText('hero-intro-2', CONTENT.heroIntro2);
  var employersEl = document.getElementById('employers-line');
  if (employersEl && CONTENT.employers && CONTENT.employers.length) {
    employersEl.innerHTML = 'Previously at ' +
      CONTENT.employers.map(function (e) { return '<b>' + e + '</b>'; }).join(', ') + '.';
  }

  // ----- Journey page -----
  var journeyList = document.getElementById('journey-list');
  if (journeyList && CONTENT.journey) {
    CONTENT.journey.forEach(function (stage) {
      var li = document.createElement('li');
      if (stage.current) li.className = 'now';
      var when = document.createElement('p'); when.className = 'when-label'; when.textContent = stage.when;
      var h3 = document.createElement('h3'); h3.textContent = stage.title;
      var p = document.createElement('p'); p.textContent = stage.body;
      li.append(when, h3, p);
      journeyList.appendChild(li);
    });
  }

  // ----- Philosophy page -----
  var philosophyWrap = document.getElementById('philosophy-list');
  if (philosophyWrap && CONTENT.philosophy) {
    CONTENT.philosophy.forEach(function (item) {
      var section = document.createElement('section'); section.className = 'principle';
      var h2 = document.createElement('h2'); h2.textContent = item.title;
      var p = document.createElement('p'); p.textContent = item.body;
      section.append(h2, p);
      philosophyWrap.appendChild(section);
    });
  }

  // ----- Work page -----
  var register = document.getElementById('work-register');
  if (register && CONTENT.work) {
    CONTENT.work.forEach(function (proj) {
      var article = document.createElement('article'); article.className = 'item';
      var left = document.createElement('div');
      var h3 = document.createElement('h3');
      if (proj.status === 'live' && proj.link) {
        var a = document.createElement('a'); a.href = proj.link; a.textContent = proj.title;
        h3.appendChild(a);
      } else {
        h3.textContent = proj.title;
      }
      var body = document.createElement('p'); body.textContent = proj.body;
      var proves = document.createElement('p'); proves.className = 'proves';
      var b = document.createElement('b'); b.textContent = 'Shows: ';
      proves.appendChild(b);
      proves.appendChild(document.createTextNode(proj.proves));
      left.append(h3, body, proves);

      var statusLabel = proj.status === 'live' ? 'Live' : (proj.status === 'building' ? 'Building' : 'Planned');
      var statusP = document.createElement('p'); statusP.className = 'status ' + proj.status;
      statusP.textContent = statusLabel;
      if (proj.due) {
        var due = document.createElement('span'); due.className = 'due'; due.textContent = proj.due;
        statusP.appendChild(due);
      }
      article.append(left, statusP);
      register.appendChild(article);
    });
  }

  // ----- Contact page -----
  var linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink && CONTENT.linkedin) {
    linkedinLink.href = CONTENT.linkedin;
    linkedinLink.textContent = CONTENT.linkedin.replace(/^https?:\/\//, '');
  }
  var githubLink = document.getElementById('github-link');
  if (githubLink && CONTENT.github) {
    githubLink.href = CONTENT.github;
    githubLink.textContent = CONTENT.github.replace(/^https?:\/\//, '');
  }
})();
