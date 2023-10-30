import { createApp, createElementVNode } from 'vue';
import { styled } from '@styils/vue'
// import MessageBox from '@/components/MessageBox.vue';

const DivModal = styled('div', {
	position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1',
})
const DivBox = styled('div', {
	width: '30%',
    minHeight: '150px',
    borderRadius: '12px',
    background: '#fff',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

// 组件的本质就是一个对象，配置对象
// 模板是render函数
const MessageBox = {
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    // render() {
    //     // return createElementVNode('h1', null, 'fdsafadg')
    //     // return <h1>dfssadfds</h1>
    // }
    render(ctx) {
        const { $props, $emit } = ctx
        return (
            <DivModal>
                <DivBox>
                    <div class="text">{$props.msg}</div>
                    <button click={$emit('onClick')}>确定</button>
                </DivBox>
            </DivModal>
        )
    }
}

export const showMsg = (msg, callBack) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    // 渲染组件到页面上
    const app = createApp(MessageBox, {
        msg,
        onClick() {
            callBack(() => {
                app.unmount();
                div.remove();
            })
        }
    })
    app.mount(div);
}
