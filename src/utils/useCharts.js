const map = new WeakMap()

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
    mounted(el, binding) {
        // 监听元素尺寸的变化
        map.set(el, binding.value)
        ob.observer(el)
    },
    unmounted() {
        // 取消监听
        ob.unobserve(el)
    }
}