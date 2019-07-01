<template>
    <div>
        <Select :placeholder="placeholder" v-model="selectValue" @on-change="onchange">
            <Option v-for="item in list" :value="item._id" :label="item.name">
                <span><view-scaler-image :url="item.url"></view-scaler-image></span>
                <span style="float:right;color:#ccc">{{item.name}}</span>
            </Option>
        </Select>
    </div>
</template>

<script>
    import ViewScalerImage from '../components/view-scaler-image'

    export default {
        name: "image-select",
        data() {
            return {
                selectValue: ''
            }
        },
        props: ['list', 'placeholder','value'],
        components: {ViewScalerImage},
        watch:{
          value(v){
              this.selectValue = v
          }
        },
        methods: {
            onchange() {
                this.$emit('on-change', this.selectValue)
            }
        },
        created(){
            this.selectValue = this.value
        },
        mounted(){
            this.selectValue = this.value
        }
    }
</script>

<style scoped>
    .placeholder {
        color: #797979;
    }

    .select {
        width: 100%;
        border: 1px solid #d9d9d9;
    }
</style>