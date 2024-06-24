const styles = [
  { class: "sb_payments", content: "Thanh Toán Nè" },
  { class: "sb_opportunities", content: "Quy Trình Bán Hàng" },
  { class: "sb_contacts", content: "Liên Hệ" },
  { class: "sb_conversations", content: "Hội Thoại" },
  { class: "sb_settings", content: "Cài Đặt" },

  // Thêm các đối tượng khác nếu cần
];

function applyStyles() {
  styles.forEach((style) => {
    const css = `
          #${style.class} span {
            text-indent: -999999999px;
            line-height: 0;
          }

          #${style.class} span::after {
            content: "${style.content}";
            line-height: initial;
            display: block;
            text-indent: 0;
          }
        `;

    // Tạo thẻ style và thêm vào head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
  });
}

document.addEventListener("DOMContentLoaded", applyStyles);
