<template>
    <div>
        <transition name="van-slide-down">
            <component :is="currentComponent" v-show="show"></component>
        </transition>

        <transition name="van-slide-up">
            <van-tabbar v-model="currentComponent" active-color="#0061D9" inactive-color="#303133" v-show="show">
                <van-tabbar-item name="signing" @click="to('signing')">
                    <i class="iconfont">&#xeb6a;</i>
                    <span>合同签订</span>
                </van-tabbar-item>
                <van-tabbar-item name="detail" @click="to('detail')">
                    <i class="iconfont">&#xeb69;</i>
                    <span>客户详情</span>
                </van-tabbar-item>
                <van-tabbar-item name="schedule" @click="to('schedule')">
                    <i class="iconfont">&#xeb68;</i>
                    <span>审批轨迹</span>
                </van-tabbar-item>
                <van-tabbar-item name="material" @click="to('material')">
                    <i class="iconfont">&#xec17;</i>
                    <span>影像材料</span>
                </van-tabbar-item>
            </van-tabbar>
        </transition>
    </div>
</template>

<script>
    const detail = resolve => require(['@/components/detail.vue'],resolve);
    const signing = resolve => require(['@/components/contract/signing.vue'],resolve);
    const schedule = resolve => require(['@/components/schedule.vue'],resolve);
    const material = resolve => require(['@/components/material.vue'],resolve);

    export default {
        name: 'contract',
        components: {
            detail,
            signing,
            schedule,
            material
        },
        data() {
            return {
                show: false,
                currentComponent: 'signing',
            }
        },
        created() {
            let _this = this;
            setTimeout(function () {
                _this.show = true;
            },600)
        },
        methods: {
            to(name) {
                this.currentComponent = name;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .van-tabbar-item {
        text-align: center;
        font-size: 13px;
        i {
            font-size: 22px;
        }
        span {
            display: block;
            line-height: 20px;
        }
    }
</style>
