// متغيرات لمعلومات الاتصال
let contactInfo = {
    email: 'contact@gamezone.com',
    phone: '+966501234567',
    address: 'Saudi Arabia'
};

// روابط خارجية للألعاب
let externalLinks = {
    'GTA V': 'https://example.com/gta-v'
};

// دالة شراء اللعبة - عند الضغط على زر "اشتري الآن"
function buyGame(gameName) {
    const link = externalLinks[gameName];
    
    // إذا كان الرابط موجود وليس الرابط الافتراضي
    if (link && link !== 'https://example.com/gta-v') {
        window.open(link, '_blank'); // فتح الرابط في تبويب جديد
    } else {
        alert('عذراً، رابط اللعبة غير متوفر حالياً. سيتم تحديثه قريباً!');
    }
}

// دالة تحديث معلومات الاتصال
function updateContactInfo(email, phone, address) {
    contactInfo.email = email;
    contactInfo.phone = phone;
    contactInfo.address = address;
    
    // تحديث الصفحة بالمعلومات الجديدة
    document.getElementById('email').textContent = `البريد الإلكتروني: ${email}`;
    document.getElementById('phone').textContent = `الهاتف: ${phone}`;
    document.getElementById('address').textContent = `العنوان: ${address}`;
}

// دالة إضافة لعبة جديدة
function addGame(gameName, price, imageUrl, externalLink) {
    externalLinks[gameName] = externalLink;
    
    const gamesGrid = document.querySelector('.games-grid');
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
        <div class="game-image">
            <img src="${imageUrl}" alt="${gameName}">
        </div>
        <div class="game-info">
            <h3>${gameName}</h3>
            <p class="price">السعر: $${price}</p>
            <button class="btn-buy" onclick="buyGame('${gameName}')">اشتري الآن</button>
        </div>
    `;
    gamesGrid.appendChild(gameCard);
}
