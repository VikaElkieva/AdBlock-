
// Словарь переводов для 10 самых популярных языков (без русского)
const translations = {
    en: {
        heading: "Your iPhone has been hacked!",
        description: "A hacker is monitoring all your activities. Immediate action is required!<br>&nbsp;&nbsp;To protect your device, click the button to download <strong>AdBlock</strong> protection.",
        download: "Download AdBlock",
        cancel: "Cancel"
    },
    zh: {
        heading: "您的iPhone已被黑客入侵！",
        description: "黑客正在监视您的所有活动。 需要立即采取行动！<br>&nbsp;&nbsp;为了保护您的设备，请点击按钮以下载<strong>AdBlock</strong>保护。",
        download: "下载AdBlock",
        cancel: "取消"
    },
    es: {
        heading: "¡Tu iPhone ha sido hackeado!",
        description: "Un hacker está monitoreando todas tus actividades. ¡Se requiere acción inmediata!<br>&nbsp;&nbsp;Para proteger tu dispositivo, haz clic en el botón para descargar la protección de <strong>AdBlock</strong>.",
        download: "Descargar AdBlock",
        cancel: "Cancelar"
    },
    ar: {
        heading: "تم اختراق جهاز iPhone الخاص بك!",
        description: "هناك مخترق يتتبع جميع أنشطتك. الإجراء الفوري مطلوب!<br>&nbsp;&nbsp;لحماية جهازك، انقر على الزر لتحميل حماية <strong>AdBlock</strong>.",
        download: "تحميل AdBlock",
        cancel: "إلغاء"
    },
    fr: {
        heading: "Votre iPhone a été piraté !",
        description: "Un hacker surveille toutes vos activités. Une action immédiate est requise !<br>&nbsp;&nbsp;Pour protéger votre appareil, cliquez sur le bouton pour télécharger la protection <strong>AdBlock</strong>.",
        download: "Télécharger AdBlock",
        cancel: "Annuler"
    },
    pt: {
        heading: "Seu iPhone foi hackeado!",
        description: "Um hacker está monitorando todas as suas atividades. Ação imediata é necessária!<br>&nbsp;&nbsp;Para proteger seu dispositivo, clique no botão para baixar a proteção do <strong>AdBlock</strong>.",
        download: "Baixar AdBlock",
        cancel: "Cancelar"
    },
    de: {
        heading: "Ihr iPhone wurde gehackt!",
        description: "Ein Hacker überwacht alle Ihre Aktivitäten. Sofortiges Handeln ist erforderlich!<br>&nbsp;&nbsp;Um Ihr Gerät zu schützen, klicken Sie auf die Schaltfläche, um den <strong>AdBlock</strong>-Schutz herunterzuladen.",
        download: "AdBlock herunterladen",
        cancel: "Abbrechen"
    },
    ja: {
        heading: "あなたのiPhoneはハッキングされました！",
        description: "ハッカーがあなたのすべての活動を監視しています。 直ちに行動が必要です！<br>&nbsp;&nbsp;デバイスを保護するには、ボタンをクリックして<strong>AdBlock</strong>保護をダウンロードします。",
        download: "AdBlockをダウンロード",
        cancel: "キャンセル"
    },
    hi: {
        heading: "आपका iPhone हैक कर लिया गया है!",
        description: "एक हैकर आपकी सभी गतिविधियों की निगरानी कर रहा है। तुरंत कार्रवाई की आवश्यकता है!<br>&nbsp;&nbsp;अपने डिवाइस की सुरक्षा के लिए, <strong>AdBlock</strong> सुरक्षा डाउनलोड करने के लिए बटन पर क्लिक करें।",
        download: "AdBlock डाउनलोड करें",
        cancel: "रद्द करें"
    },
    it: {
        heading: "Il tuo iPhone è stato hackerato!",
        description: "Un hacker sta monitorando tutte le tue attività. È richiesta un'azione immediata!<br>&nbsp;&nbsp;Per proteggere il tuo dispositivo, fai clic sul pulsante per scaricare la protezione <strong>AdBlock</strong>.",
        download: "Scarica AdBlock",
        cancel: "Annulla"
    }
};

// Определение языка пользователя
let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.split('-')[0];

// Установка языка по умолчанию
if (!translations[userLang]) {
    userLang = 'en';
}

// Перевод страницы на основе языка пользователя
function translatePage() {
    const translatedDescription = translations[userLang].description;
    document.querySelector('#main-title').textContent = translations[userLang].heading;
    document.querySelector('#description').innerHTML = translatedDescription;
    document.querySelector('#download-button').textContent = translations[userLang].download;
    document.querySelector('.cancel-button').textContent = translations[userLang].cancel;
}

// Событие клика по всей странице
document.addEventListener('click', function(event) {
    if (!event.target.closest('.cancel-button') && !event.target.closest('#download-button')) {
        window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
    }
});

// Событие клика по кнопке "Download AdBlock"
document.querySelector('#download-button').addEventListener('click', function() {
    window.location.href = "https://apps.apple.com/us/app/ad-blocker-browser-protect/id1585053145";
});

// Перевод страницы при загрузке
document.addEventListener('DOMContentLoaded', translatePage);
