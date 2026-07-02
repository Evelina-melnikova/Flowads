// FlowAds — main.js

// ── Scroll reveal ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Phone mask ──
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      let v = this.value.replace(/\D/g, '');
      if (v.startsWith('7') || v.startsWith('8')) v = v.slice(1);
      let formatted = '';
      if (v.length > 0) formatted = '+7 (' + v.slice(0,3);
      if (v.length >= 3) formatted += ') ' + v.slice(3,6);
      if (v.length >= 6) formatted += '-' + v.slice(6,8);
      if (v.length >= 8) formatted += '-' + v.slice(8,10);
      this.value = formatted;
    });
  }

  // ── Form submit ──
  function submitForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const consent = document.getElementById('consent').checked;
    if (!name) { document.getElementById('name').focus(); return; }
    if (phone.length < 10) { document.getElementById('phone').focus(); return; }
    if (!consent) { alert('Пожалуйста, дайте согласие на обработку данных'); return; }
    document.getElementById('leadForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }

  // ── Mobile nav ──
  function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow = ''; }