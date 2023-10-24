const map = new WeakMap()

// 监听元素尺寸的变化
const ob = new ResizeObserver((entries) => {
    for (const entry of entries) {
        console.log(entry)
        // 运行entry.targe 对应的回调函数
        const handler = map.get(entry.target)
        if (handler) {
            console.log('first')
            console.log(entry.borderBoxSize[0])
            handler({
                width: entry.borderBoxSize[0].inlineSize,
                height: entry.borderBoxSize[0].blockSize
                // height: entry.contentRect.height
            })
        }
    }
})

export default {
    name: 'resize',
    mounted(el, binding) {
        console.log(el, binding)
        // 监听元素尺寸的变化
        ob.observe(el)
        map.set(el, binding.value)
    },
    unmounted() {
        // 取消监听
        ob.unobserve(el)
    }
}