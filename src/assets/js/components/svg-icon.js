// @ts-check
import Vue from 'vue';

export default Vue.extend({

    name: 'SvgIcon',

    props: {
        size: {
            type: String,
            default: undefined
        },
        icon: {
            type: String,
            default: undefined
        }
    },

    render(h) {
        // @ts-ignore
        return h('div', {
            staticClass: ['svg-icon'],
            domProps: {
                innerHTML: require(`../../svg/${this.icon}.svg`)
            }
        })
    }
});
