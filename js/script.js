document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.book-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 使用 setTimeout 创建交错加载的效果
                setTimeout(() => {
                    entry.target.style.animation = `fadeIn 0.6s ease-out forwards`;
                }, index * 100); // 每个卡片延迟 100ms
                observer.unobserve(entry.target); // 动画执行后停止观察
            }
        });
    }, { threshold: 0.1 }); // 当卡片进入视口 10% 时触发

    cards.forEach(card => {
        observer.observe(card);
    });
});
