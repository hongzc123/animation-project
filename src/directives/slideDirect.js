const DISTANCE = 150;
const DURATION = 1000;
// 避免内存泄漏
const animationMap = new WeakMap();

// 监听元素, 跟某一个东西有没有重叠
// 默认就是判断跟视口有没有重叠
const ob = new IntersectionObserver((entries) => {
    console.log(entries)
    for (const entry of entries) {
        if (entry.isIntersecting) {
            // entry.target.getAnimations()
            const animation = animationMap.get(entry.target)
            animation.play();
            ob.unobserve(entry.target)
        }
    }
})

// 判断是否在视口之下
const isBelowViewport = (el) => {
    const rect = el.getBoundingClientRect();
    console.log(el)
    console.log(rect)
    return rect.top > window.innerHeight;
}

export default {
    name: 'slide-in',
    mounted(el) {
        if (!isBelowViewport(el)) {
            return;
        }
        const animation = el.animate([
            // 关键帧
            {
                transform: `translateY(${DISTANCE}px)`,
                opacity: 0.5
            },
            {
                transfrom: `translateY(0)`,
                opacity: 1
            }
        ], {
            duration: DURATION,
            easing: 'ease'
        })
        // 动画暂停
        animation.pause();
        // 元素和animation做映射
        animationMap.set(el, animation)
        // 监听元素
        ob.observe(el)
    },
    unmounted(el) {
        ob.unobserve(el)
    }
}