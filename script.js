// 公開前に、下記2項目を実際の連絡先へ変更してください。
const contact = {
  email: "", // 例: "example@example.com"
  lineUrl: "", // 例: "https://line.me/R/ti/p/@your-id"
};

const emailLink = document.querySelector('.contact-email');
const lineLink = document.querySelector('.contact-line');
const subject = encodeURIComponent('蜂針療法についての問い合わせ');

if (contact.email) {
  emailLink.href = `mailto:${contact.email}?subject=${subject}`;
} else {
  emailLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('メールアドレスを設定後にご利用いただけます。');
  });
}

if (contact.lineUrl) {
  lineLink.href = contact.lineUrl;
} else {
  lineLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('LINEの連絡先を設定後にご利用いただけます。');
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

// モバイルでの横方向のスワイプによる画面移動を防ぎ、縦スクロールを優先します。
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

document.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  const moveX = Math.abs(touch.clientX - touchStartX);
  const moveY = Math.abs(touch.clientY - touchStartY);
  if (moveX > moveY && moveX > 8) event.preventDefault();
}, { passive: false });
