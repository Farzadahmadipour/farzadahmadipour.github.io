
  function toggleJobDetail(btn) {
    const panel = btn.nextElementSibling;
    const isOpen = panel.classList.toggle('open');
    btn.textContent = isOpen ? '- بستن' : '+ توضیحات';
  }

  function toggleList(btn, listId) {
    const list = document.getElementById(listId);
    const expanded = list.classList.toggle('expanded');
    btn.textContent = expanded ? 'نمایش کمتر ▲' : 'نمایش بیشتر ▼';
  }

  function toggleCollapsible(btn, contentId) {
    const el = document.getElementById(contentId);
    const expanded = el.classList.toggle('expanded');
    btn.textContent = expanded ? 'نقاط قوت و اهداف ▲' : 'نقاط قوت و اهداف ▼';
  }

  (function(){
    const nav = document.querySelector('.navbar');
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('nav-list');

    if (!nav || !toggle || !navList) return;

    toggle.addEventListener('click', function(){
      const isOpen = nav.classList.toggle('open');
      navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if(isOpen) document.documentElement.style.overflow = 'hidden';
      else document.documentElement.style.overflow = '';
    });

    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navList.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.documentElement.style.overflow = '';
        }
      });
    });
  })();
  
