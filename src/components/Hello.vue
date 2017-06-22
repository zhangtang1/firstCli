<template>
    <div>
        <div v-if="error" class="error">
            网络错误
        </div>

        <!--loading-->
        <div v-show="loading" class="loading">
            <ztLoading mainColor="rgba(220, 20, 60, .9)" shadowColor="rgba(220, 20, 60, .5)"></ztLoading>
        </div>


        <!--h5弹窗tip-->
        <div v-if="myCoin" class="bigTipBox" @touchstart.stop.prevent="">
            <div class="tipBox">
                <p>如需查看奖品请登录官方网站或者官方APP</p>
                <a v-active @touchstart="closeMyCoin">我知道了</a>
            </div>
        </div>

        <div v-if="isShow" class="shadow" @touchstart="stop">
            <img src="../assets/bgSd.png" alt="">
            <ul class="prizeBox">
                <li v-if="should[0] != null">
                    <span>{{ prizeMsg[should[0]].cnt }}</span>
                    <i>{{ prizeMsg[should[0]].type }}</i>
                    <img src="../assets/red.png" alt="">
                </li>
                <li v-if="should[1] != null">
                    <span>{{ prizeMsg[should[1]].cnt }}</span>
                    <i>{{ prizeMsg[should[1]].type }}</i>
                    <img src="../assets/blue.png" alt="">
                </li>
                <li v-if="should[2] != null">
                    <span>{{ prizeMsg[should[2]].cnt }}</span>
                    <i>{{ prizeMsg[should[2]].type }}</i>
                    <img src="../assets/yellow.png" alt="">
                </li>
            </ul>

            <a v-active @touchstart.stop.prevent="checkGift" class="check">
                <img src="../assets/noLoginBtn.png" alt="">
            </a>
        </div>

        <img class="topBan" src="../assets/topBanr.png" alt="">
    
        <div class="box">   
            <ul class="lineBox">
                <li>今年是爱投资与您携手共度的第四年，</li>
                <li>因为有您的支持与信任，</li>
                <li>爱投资才可以突破投资总额300亿大关。</li>
                <li>在此，爱投资奉上一份您的专属礼包，</li>
                <li>快来领取吧~</li>
            </ul>

            <!--未开始-->
            <div v-if="data.activity_status == 1" class="weikaishi">
                <img src="../assets/noStart.png" alt="">
                <p class="line">活动暂未开始，敬请期待</p>
            </div>
            <!--已结束-->
            <div v-if="data.activity_status == 2" class="yijieshu">
                <img src="../assets/yjs.jpg" alt="">
                <p class="line">活动已结束</p>
            </div>
            <!--进行中-->
            <div v-if="data.activity_status == 0" class="jinxingzhong">
                <!--未登录-->
                <div v-if="data.login == 0">
                    <img src="../assets/noLoginRed.png" alt="">
                    
                    <a @touchstart="denglu" class="noLoginBtn">
                        <img src="../assets/noLoginBtn.png" alt="">
                    </a>
                </div>
                <!--已登录-->
                <div v-else>
                    <!--可领奖-->
                    <div v-if="data.qualification == 1">
                        <!--未领券-->
                        <div class="gifBox" v-if="data.is_have == 0">
                            <div @touchstart="takePrize">
                                <img class="img-one" src="../assets/content_enabled_icon_1.png" alt="">
                                <img class="img-two" src="../assets/content_enabled_icon_2.png" alt="">
                                <img class="gitImg" src="../assets/timg.gif" alt="">
                            </div>

                            <div class="sbar">
                                <p>恭喜您成功击败 <span class="tip">{{ data.beat }}%</span> 的用户</p>

                                <div class="sbarBox">
                                    <img src="../assets/sbar.jpg" alt="">
                                    <div class="gray">
                                        <div class="green" :style="barStyle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--已领券-->
                        <div v-else>
                            <div class="checkGift">
                                <p class="word">您已经领过奖品了</p>
                                <a class="blackA" @touchstart="checkGift" href="javascript:;">
                                    <img src="../assets/checkGift.png" alt="">
                                </a>
                            </div>

                            <img src="../assets/lgj.jpg" alt="">

                            <div class="sbar">
                                <p>恭喜您成功击败 <span class="tip">{{ data.beat }}%</span> 的用户</p>

                                <div class="sbarBox">
                                    <img src="../assets/sbar.jpg" alt="">
                                    <div class="gray">
                                        <div class="green" :style="barStyle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--不可领奖-->
                    <div v-else>
                        <img src="../assets/redPack.png" alt="">
                        <p class="line">仅限{{ data.end_time }}前投资的爱亲领取</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rules">
            <img src="../assets/bantop.png" alt="">
            <ul class="cnt">
                <li>
                  <span>1</span>
                  本次活动仅限{{ data.end_time }}（300亿时间节点）前投资的爱亲领取，每位用户仅可领取一次。
                </li> 
                <li>
                  <span>2</span>
                  本次活动数据以各位爱亲（在300亿中）所贡献的投资金额综合排名。
                </li> 
                <li>
                  <span>3</span>
                  本次活动礼包以排名顺序为参考，进行发放。
                </li> 
                <li>
                  <span>4</span>
                  请各位爱亲务必在活动结束前领取礼包，逾期不予补偿。
                </li> 
                <li>
                  <span>5</span>
                  若无法领取礼包，请联系爱投资客服：400-0088-100。
                </li> 
                <li>
                  <span>6</span>
                  本次活动法律范围内最终解释权归爱投资所有。
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
import ztLoading from './zt-loading.vue'

export default {
    name: 'hello',

    mounted() {
        var that = this; 

        $.ajax({
            url: '/api/msgs/',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(res) {
                that.loading = false;
                if (res.code == 0) {
                    console.log(res);
                    // that.data = res.data;
                    that.data = res.data.data;
                } else {
                    that.error = true;
                    setTimeout(function() {
                        that.error = false;
                    }, 2500);
                }
            },
            error: function(err) {
                that.loading = false;

                that.error = true;
                setTimeout(function() {
                    that.error = false;
                }, 2500);
            },
        });
        

        // 判断app还是h5环境，false代表h5
        var ua = navigator.userAgent;
        var ua_ios = ua.indexOf('ITZ_IOS');
        var ua_and = ua.indexOf('ITZ_ANDROID');

        if (ua_ios>-1 || ua_and>-1) {
            that.ua = true;
        };
    },

    data () {
        return {
            error: false,
            errMsg: '',

            // loading
            loading: true,

            // 我的积分弹窗
            myCoin: false,

            // 奖励弹窗是否隐藏
            isShow: false,

            // 判断环境的UA，false代表h5
            ua: false,

            data: {
                //模板域名
                base_url: 'https://www.itouzi.com',

                // 0 活动状态，0：进行中，1：未开始，2：已结束
                activity_status: 0,

                // 0 是否有资格 0：没有资格，1：有资格
                qualification: 1,
                
                // 击败人数
                beat: 10,
                
                // 排行
                ranking: 0,
                
                // 是否登录 0：未登录，1：已经登录
                login: 1,
                
                // 是否领券 0：未领券 ，1：已经领券
                is_have: 0,
                
                //满300亿的时间点
                end_time: '2017年6月20日23:00:07',
                
                // 奖品状态
                goods: {
                    '0': 0,
                    '1': 0,
                    '2': 0,
                    '3': 0,
                    '4': 0,
                    '5': 0,
                    '6': 0,
                    '7': 0,
                    '8': 0,
                    '9': 0,
                },
            }, 

            prizeMsg: [{
                type: '抵现券',
                cnt: '900',
            },{
                type: '抵现券',
                cnt: '500',
            },{
                type: '抵现券',
                cnt: '300',
            },{
                type: '抵现券',
                cnt: '100',
            },{
                type: '抵现券',
                cnt: '5',
            },{
                type: '加息券',
                cnt: '1%',
            },{
                type: '加息券',
                cnt: '0.5%',
            },{
                type: '加息体验券',
                cnt: '10%',
            },{
                type: '加息体验券',
                cnt: '6%',
            },{
                type: '积分',
                cnt: '30000',
            },]
        }
    },

    computed: {
        should: function() {
            var arr = [null, null, null],
                i = 0;
            for(var key in this.data.goods) {
                if(this.data.goods[key] == 1) {
                    arr[i] = Number(key);
                    i++;
                }
            }
            return arr;
        },

        barStyle: function() {
            return {
                'width': parseFloat(this.data.beat) + '%'
            }
        }
    },

    methods: {
        stop: function(e) {
            this.isShow = false;
        },

        // 登录
        denglu: function() {
            if (this.ua) {
                // app接口
                iTouziAPP.login('/newwap/activity/Million300Entrance');
            } else {
                // h5接口
                window.location.href = this.data.base_url + '/newuser/index/loginWap?ret_url=' + this.data.base_url + '/newwap/activity/Million300Entrance';
            }
        },
        
        // 查看我的礼品
        checkGift: function() {
            if (parseFloat(this.data.ranking) < 90) {
            // 前90%跳优惠券列表
                if (this.ua) {
                    // app接口
                    iTouziAPP.openCouponList();
                } else {
                    // h5接口
                    window.location.href = this.data.base_url + '/wap/user/coupon';
                }
            } else {
            // 90%~100% app跳我的积分，h5提示弹窗
                if (this.ua) {
                    // app接口
                    iTouziAPP.openUserIntegrate();
                } else {
                    // h5接口
                    this.myCoin = true;
                }
            }
        },

        // 关闭我的积分弹窗
        closeMyCoin: function() {
            this.myCoin = false;
        },

        // 领券奖品
        takePrize: function() {
            var that = this;
            that.isShow = true;
            that.data.is_have = 1;

            // $.ajax({
            //     url: '/event/ajax/get300MillionGoods',
            //     type: 'GET',
            //     data: {},
            //     dataType: 'json',
            //     success: function(res) {
            //         if (res.code == 0) {
            //             that.isShow = true;
            //             that.data.is_have = 1;
            //         } else {
            //             that.error = true;
            //             setTimeout(function() {
            //                 that.error = false;
            //             }, 2500);
            //         }
            //     },
            //     error: function(err) {
            //         that.error = true;
            //         setTimeout(function() {
            //             that.error = false;
            //         }, 2500);
            //     },
            // });
        }
    },

    components: {
        ztLoading
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
