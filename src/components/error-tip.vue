<template>
    <div class="main" v-show="visible">
        <div class="title">{{title}}</div>
        <slot></slot>
        <i @click="close" class="close el-icon-close"></i>
    </div>
</template>
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '错误信息'
        }
    },
    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.main{
    
    margin: 10px auto;
    padding: 10px;
    position: relative;
    background-color: #fef0f0;
    color: #f56c6c;
}
.close{
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
}
.title{
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #f56c6c;
    font-weight: 700;
}
</style>
