
document.addEventListener('DOMContentLoaded', () => {
  // Counter logic
  const countEl = document.getElementById('count');
  const incBtn = document.getElementById('increment');
  const decBtn = document.getElementById('decrement');

  let count = Number(localStorage.getItem('demo_count') || 0);
  countEl.textContent = count;

  function renderCount() {
    countEl.textContent = count;
    localStorage.setItem('demo_count', String(count));
  }

  incBtn.addEventListener('click', () => { count += 1; renderCount(); });
  decBtn.addEventListener('click', () => { count -= 1; renderCount(); });

  // Note save logic
  const noteEl = document.getElementById('note');
  const saveBtn = document.getElementById('save');
  const savedMsg = document.getElementById('savedMsg');

  // load saved note
  noteEl.value = localStorage.getItem('demo_note') || '';

  saveBtn.addEventListener('click', () => {
    localStorage.setItem('demo_note', noteEl.value);
    savedMsg.textContent = 'Saved locally ✅';
    setTimeout(()=> savedMsg.textContent = '', 1600);
  });
});
