import { createApp, createElementVNode } from 'vue';
// import MessageBox from '@/components/MessageBox.vue';

// 组件的本质就是一个对象，配置对象
// 模板是render函数
const MessageBox = {
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    render() {
        // return createElementVNode('h1', null, 'fdsafadg')
        return <h1>dfssadfds</h1>
    }
}

export const showMsg = (msg, onClick) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    // 渲染组件到页面上
    const app = createApp(MessageBox, {
        msg,
        onClick() {
            onClick(() => {
                app.unmount();
                div.remove();
            })
        }
    })
    app.mount(div);
}
