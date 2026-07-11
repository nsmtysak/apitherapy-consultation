// メールアドレスを変更する場合は、ここを編集してください。
const contact = {
  email: "jitianjiansi509@gmail.com",
};

const emailLink = document.querySelector('.contact-email');
const subject = encodeURIComponent('蜂針療法についての問い合わせ');

// メールボタンに件名付きの mailto を設定します。
if (emailLink && contact.email) {
  emailLink.href = `mailto:${contact.email}?subject=${subject}`;
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
