// تأثير الكتابة المتكرر (typing effect)
const typeElem = document.getElementById('typing-text');
const phrase = "تصميم غرافيك | نحول الأفكار بلمسة إبداعية";
let i = 0;
let isDeleting = false;

function typeText() {
  if (isDeleting) {
    typeElem.innerHTML = phrase.substring(0, i - 1);
    i--;
  } else {
    typeElem.innerHTML = phrase.substring(0, i + 1);
    i++;
  }

  let typeSpeed = isDeleting ? 70 : 130;

  if (!isDeleting && i === phrase.length) {
    isDeleting = true;
    typeSpeed = 2500; // وقفة طويلة قبل المسح
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    typeSpeed = 500; // وقفة قصيرة قبل إعادة الكتابة
  }

  setTimeout(typeText, typeSpeed);
}

typeText();

// دوال تحريك المعرض (gallery)
function move(id, direction) {
  const el = document.getElementById(id + '-scroll');
  if (el) {
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  }
}

function updateCount(id) {
  const el = document.getElementById(id + '-scroll');
  const idxSpan = document.getElementById(id + '-idx');
  if (el && idxSpan) {
    const step = Math.round(Math.abs(el.scrollLeft) / el.clientWidth);
    const totalImages = el.children.length;
    idxSpan.innerText = (step + 1) + " / " + totalImages;
  }
}

// تحديث العداد عند تحميل الصفحة
window.addEventListener('load', () => {
  const galleries = ['print', 'identity', 'logos', 'social'];
  galleries.forEach(id => {
    updateCount(id);
  });
});
