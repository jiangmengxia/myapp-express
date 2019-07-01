<template>
    <div>
        <Alert type="success" v-if="showAlert" closable>
            添加成功
        </Alert>
        <div>
            <Button type="primary" @click="showAddModal">新增用户</Button>
        </div>
        <!--<div class="pull-right" style="width: 350px;padding: 20px">-->
        <!--<Row>-->
        <!--<Col span="5">-->
        <!--<Select v-model="searchValue">-->
        <!--<Option value="id">ID</Option>-->
        <!--<Option value="username">用户名</Option>-->
        <!--</Select>-->
        <!--</Col>-->
        <!--<Col span="13">-->
        <!--<Input v-model="inputText" placeholder="enter...."/>-->
        <!--</Col>-->
        <!--<Col span="6">-->
        <!--<Button type="primary" @click="search">查询</Button>-->
        <!--</Col>-->
        <!--</Row>-->
        <!--</div>-->
        <!--<div class="clx"></div>-->
        <table v-if="list.length>0" style="width: 100%">
            <thead>
            <th>ID</th>
            <th>用户名</th>
            <th>联系方式</th>
            <th>十字介绍</th>
            <th>简单介绍（150字以内)</th>
            <th>专业技能</th>
            <th>操作</th>
            </thead>
            <tbody>
            <tr v-for="item in list">
                <td>{{item._id}}</td>
                <td>{{item.username ||''}}</td>
                <td>{{item.mobile || ''}}</td>
                <td>{{item.intro || ''}}</td>
                <td>{{item.detailIntro || ''}}</td>
                <td>{{item.professionalSkill || ''}}</td>
                <td>
                    <Button type="primary" @click="deleteUser(item)">删除</Button>
                    <Button type="primary" @click="updateUser(item)">修改</Button>
                </td>
            </tr>
            </tbody>
        </table>
        <no-data v-else></no-data>
        <Modal v-model="show" :title="operate==1 ? '修改用户信息':'新增用户'" @on-ok="confirmUpdate">
            <Form ref="formData" :model="formData" :label-width="80">
                <FormItem label="用户名">
                    <Input v-model="formData.username"></Input>
                </FormItem>
                <FormItem label="联系方式">
                    <Input v-model="formData.mobile"></Input>
                </FormItem>
                <FormItem label="十字简介">
                    <Input v-model="formData.intro"></Input>
                </FormItem>
                <FormItem label="简单介绍（150字以内)">
                    <Input type="textarea" :rows=parseInt(5) v-model="formData.detailIntro"></Input>
                </FormItem>
                <FormItem label="专业技能">
                    <Input v-model="formData.professionalSkill"></Input>
                </FormItem>
            </Form>
        </Modal>

    </div>
</template>

<script>
    import API from '../requests/apis/user'

    export default {
        name: "list",
        data() {
            return {
                list: [],
                // searchValue: 'id',
                inputText: '',
                show: false,
                operate: 0,//新增
                formData: {
                    username: '',
                    mobile: '',
                    intro: '',
                    detailIntro: '',
                    professionalSkill: '',
                    _id: ''
                },
                showAlert: false,

            }
        },
        methods: {
            showAddModal() {
                this.show = true
                this.operate = 0
                this.formData.username = ''
                this.formData.mobile = ''
                this.formData._id = ''
                this.formData.intro = ''
                this.formData.detailIntro = ''
                this.formData.professionalSkill = ''
            },
            // search() {
            //     if (this.searchValue === 'id') {
            //         API.getUserById({_id: this.inputText}).then(res => {
            //             if (res.ret === 1) {
            //                 this.list = [res.data]
            //             }
            //         })
            //     } else {
            //         API.getUserByAcc({username: this.inputText}).then(res => {
            //             if (res.ret === 1) {
            //                 this.list = res.data
            //             }
            //         })
            //     }
            // },
            updateUser(item) {
                this.show = true
                this.operate = 1
                this.formData.username = item.username
                this.formData.mobile = item.mobile
                this.formData._id = item._id
                this.formData.intro = item.intro
                this.formData.detailIntro = item.detailIntro
                this.formData.professionalSkill = item.professionalSkill
            },
            confirmUpdate() {
                if (this.operate === 1)
                    API.updateUser(this.formData).then(res => {
                        if (res.ret === 1) {
                            this.fresh()
                        }
                    })
                else
                    API.addUser({
                        username: this.formData.username,
                        mobile: this.formData.mobile,
                        intro: this.formData.intro,
                        detailIntro: this.formData.detailIntro,
                        professionalSkill: this.formData.professionalSkill
                    }).then(res => {
                        if (res.ret === 1) {
                            this.showAlert = true
                            this.fresh()
                        }
                    })
            },
            deleteUser(item) {
                console.log(item)
                API.deleteUser({_id: item._id}).then(res => {
                    if (res.ret === 1) {
                        this.fresh()
                    }
                })
            },
            fresh() {
                API.getUsers({}).then(res => {
                    this.list = res.data
                })
            }
        },
        created() {
            this.fresh()
        }
    }
</script>

<style scoped>

</style>
