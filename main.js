document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements - Navigation
    const navRural = document.getElementById('nav-rural');
    const navLecture = document.getElementById('nav-lecture');
    const navBtns = document.querySelectorAll('.nav-btn');
    
    // DOM Elements - Scenes
    const sceneRural = document.getElementById('scene-rural');
    const sceneLecture = document.getElementById('scene-lecture');
    
    // DOM Elements - Rural Chat
    const ruralInput = document.getElementById('rural-input');
    const ruralSendBtn = document.getElementById('rural-send');
    const ruralMessage = document.getElementById('rural-message');
    
    // DOM Elements - Lecture Chat
    const lectureInput = document.getElementById('lecture-input');
    const lectureSendBtn = document.getElementById('lecture-send');
    const lectureChatHistory = document.getElementById('lecture-chat-history');

    // Kawaiiko-chan dummy responses
    const kawaiikoResponses = [
        "ふふ、そうなんだね。",
        "風の音が少し変わった気がする。新しい手続きの芽生えかな……？",
        "この道端で待ってるとね、時々すごく面白い世界の構造がふっと浮かんでくるんだよ。",
        "なんだか嬉しいな。次はどんな景色が見られるのかな。"
    ];

    // シーン切り替え関数
    function switchScene(targetSceneId, activeButton) {
        // 全シーンを非表示
        document.querySelectorAll('.scene').forEach(scene => {
            scene.classList.remove('active');
        });
        
        // 対象シーンを表示
        document.getElementById(targetSceneId).classList.add('active');
        
        // ナビゲーションのActive状態更新
        navBtns.forEach(btn => btn.classList.remove('active'));
        if(activeButton) activeButton.classList.add('active');
    }

    // ナビゲーションイベントリスナー
    navRural.addEventListener('click', () => switchScene('scene-rural', navRural));
    navLecture.addEventListener('click', () => switchScene('scene-lecture', navLecture));

    // 農村でのチャット処理（かわい子ちゃん）
    function handleRuralChat() {
        const text = ruralInput.value.trim();
        if (!text) return;

        // ユーザー入力をクリア
        ruralInput.value = '';

        // 少し遅れてかわい子ちゃんがランダム返答（将来的にAI連携を想定）
        setTimeout(() => {
            const randomReply = kawaiikoResponses[Math.floor(Math.random() * kawaiikoResponses.length)];
            ruralMessage.textContent = randomReply;
        }, 500);
    }

    ruralSendBtn.addEventListener('click', handleRuralChat);
    ruralInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleRuralChat();
    });

    // 講義画面でのチャット履歴追加関数
    function addChatMessage(text, isUser = false) {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        if (isUser) {
            bubble.classList.add('user');
        }
        bubble.textContent = text;
        lectureChatHistory.appendChild(bubble);
        
        // 最新のメッセージまでスクロール
        lectureChatHistory.scrollTop = lectureChatHistory.scrollHeight;
    }

    // 講義画面でのチャット処理（先生）
    function handleLectureChat() {
        const text = lectureInput.value.trim();
        if (!text) return;

        // ユーザーの質問を履歴に追加
        addChatMessage(text, true);
        lectureInput.value = '';

        // 少し遅れて先生のダミー返答
        setTimeout(() => {
            addChatMessage("なるほど、良い質問ですね。『関係の網の目』というのは、対象そのものよりも、対象間の「射（プロセス）」に注目するということです。");
        }, 1000);
    }

    lectureSendBtn.addEventListener('click', handleLectureChat);
    lectureInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLectureChat();
    });

    // 初期状態のダミーチャット履歴（画像に合わせる）
    addChatMessage("先生、関係の網の目ってどういうことですか？", true);
    addChatMessage("先生、関係の網の目ってどういうことですか？", true);
    addChatMessage("先生、関係のWぃ込みですか？", true);
    addChatMessage("先生、関係の網の目ってどういうことですか？", true);

    // デフォルトは農村シーン
    // switchScene('scene-rural', navRural); // HTML側でactiveクラスを付与しているため省略可
});
