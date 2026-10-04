window.addEventListener('DOMContentLoaded', () => {
    // 生成ボタンのインタラクション制御
    const generateBtn = document.getElementById('generate-btn');
    const speechBubbleP = document.querySelector('.speech-bubble p');

    const kawaiikoLines = [
        "……ねえ、風の音が少し変わった気がする。新しい手続きの芽生えかな……？",
        "ふふ、そうやって話しかけてくれるの、なんだか嬉しいな。次はどんな景色が見られるのかな。",
        "この道端で待ってるとね、時々すごく面白い世界の構造がふっと浮かんでくるんだよ。"
    ];

    generateBtn.addEventListener('click', () => {
        // ランダムにかわい子ちゃんのセリフを変化させ、初期の手触り感を演出
        const randomLine = kawaiikoLines[Math.floor(Math.random() * kawaiikoLines.length)];
        speechBubbleP.textContent = randomLine;
    });

    // ナビゲーションボタンの切り替え演出（ダミー動作確認用）
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
