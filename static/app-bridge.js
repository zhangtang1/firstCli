window.iTouziAPP = (function() {
    function _request(action, params) {
        var iframe = document.createElement("iframe");
 
        var url  = "itouzi://" + action + "";
        if (params) {
            url += "?";
            var pairs = [];
 
            for (var key in params) {
                pairs.push(key + "=" + params[key]);
            }
            url += pairs.join("&");
        };
        iframe.src = url;
        iframe.width = 1;
        iframe.height = 1;
        iframe.style.visibility = "hidden";
 
        iframe.onload = function() {
            document.body.removeChild(iframe);
        }
 
        iframe.onerror = function() {
            document.body.removeChild(iframe);
        }
 
        document.body.appendChild(iframe);
    }
 
    var imps = {
        /*打开智齿客服*/
        openSobot: function() {
            if (window.javaObj) {
                return javaObj.openSobot();
            };
            _request("openSobot");
        },
        /*打开登录页面，如需跳转回（刷新）wap页，要添加跳转目标的url*/
        login: function(url) {
            _request("login", {url: encodeURIComponent(url)});
        },
        /*打开注册页面*/
        register: function() {
            if (window.javaObj) {
                return javaObj.register();
            };
            _request("register");
        },
        /*回到主页, 停用*/
        goHome: function() {
            if (window.javaObj) {
                return javaObj.goHome();
            };
            _request("goHome");
        },
        /*判断是否登录*/
        hasLogged: function() {
            if (window.javaObj) {
                return javaObj.hasLogged();
            };
            return window.hasLogged;
        },
        /*获取App版本号*/
        getAppVersion: function() {
            if (window.javaObj) {
                return javaObj.getAppVersion();
            };
            return window.appVersion;
        },
        /*打开新的Webview页面, 新页面关闭与老页面没有影响*/
        openPage: function(url) {
            if (window.javaObj) {
                return javaObj.openPage(url);
            };
            _request("openPage", {url: encodeURIComponent(url)});
        },
        /*分享*/
        share: function(text, imageUrl, platform, flag, title, url) {
            if (platform instanceof Array) {
                platform = platform.join(",");
            }
// 1.7.0新增java接口方式调用App分享功能，1.7.0及以上版本可用
            if (window.javaObj) {
                return javaObj.share(text, imageUrl, platform, flag, title, url);
            };
            _request("share", {
                "text" : text,
                "platform" : platform ,
                "imageurl" : imageUrl,
                "flag" : flag,
                "title" : title,
                "url" : url
            });
        },
        /*关闭页面*/
        close: function() {
            _request("close");
        },
        /*打开指定项目*/
        openInvestment: function(id) {
            if (window.javaObj) {
                return javaObj.openInvestment(id);
            };
            _request("openInvestment", {"id": id});
        },
        /*打开指定项目列表*/
        openInvestmentList: function() {
            if (window.javaObj) {
                return javaObj.openInvestmentList();
            };
            _request("openInvestmentList");
        },
        /*打开债券列表*/
        openDebtList: function() {
            if (window.javaObj) {
                return javaObj.openDebtList();
            };
            _request("openDebtList");
        },
// 以下是1.5.5 版本新加功能
        /*打开优惠券列表*/
        openCouponList: function() {
            if (window.javaObj) {
                return javaObj.openCouponList();
            };
            _request("openCouponList");
        },
        /*打开我的账户页面*/
        openMyAccountPage: function() {
            if (window.javaObj) {
                return javaObj.openMyAccountPage();
            };
            _request("openMyAccountPage");
        },
        /*打开账户设置页面 1.7.0*/
        openUserSetPage: function() {
                if (window.javaObj) {
                    return javaObj.openMyAccountPage();
                };
            _request("openUserSetPage");
        },
        /*打开资产明细页面*/
        openCapitalPage: function() {
            if (window.javaObj) {
                return javaObj.openCapitalPage();
            };
            _request("openCapitalPage");
        },
        /*打开充值页面*/
        openRechargePage: function() {
            if (window.javaObj) {
                return javaObj.openRechargePage();
            };
            _request("openRechargePage");
        },
        /*打开提现页面*/
        openWithdrawPage: function() {
            if (window.javaObj) {
                return javaObj.openWithdrawPage();
            };
            _request("openWithdrawPage");
        },
        /*打开投资记录页面*/
        openInvestRecordsPage: function() {
            if (window.javaObj) {
                return javaObj.openInvestRecordsPage();
            };
            _request("openInvestRecordsPage");
        },
        /*打开交易记录页面*/
        openTradeList: function() {
            if (window.javaObj) {
                return javaObj.openTradeList();
            };
            _request("openTradeList");
        },
        /*打开还款日历页面*/
        openRepaymentPage: function() {
            if (window.javaObj) {
                return javaObj.openRepaymentPage();
            };
            _request("openRepaymentPage");
        },
        /*打开项目列表并指向某一类别, type值与直投列表筛选规则相同，2->担保，5->融租，6->保理，7->收藏，100->省心*/
        openInvestListByType: function(type) {
            if (window.javaObj) {
                return javaObj.openInvestListByType(type);
            };
            _request("openInvestListByType", {"type" : encodeURIComponent(type)});
        },
        /*获取设备OPEN-UDID号------iOS 专属*/ // -----------------1.6.0新加
        getDeviceUDID: function() {
            return window.deviceUDID;
        },
        /*获取设备IDFA号，优先使用------iOS 专属*/
        getDeviceIDFA: function() {
            return window.deviceIDFA;
        },
        /*获取设备IMEI号------Android 专属*/
        getDeviceIMEI: function() {
            if (window.javaObj) {
                return javaObj.getDeviceIMEI();
            };
        },
        /*获取设备AndroidID号，优先使用------Android 专属*/
        getDeviceAndroidID: function() {
            if (window.javaObj) {
                return javaObj.getDeviceAndroidID();
            };
        },
// 以下是1.7.0 版本添加
        /*
         打开安全设置页面,data数据请参考/api/user/checkSecurity 接口Reponse内的data数据格式、命名、含义
         */
        openSecuritySettingPage: function(data) {
            if (window.javaObj) {
                return javaObj.openSecuritySettingPage(data);
            };
            _request("openSecuritySettingPage", {"data": data});
        },
        /*打开邀请好友页面*/
        openInvitePage: function() {
            if (window.javaObj) {
                return javaObj.openInvitePage();
            };
            _request("openInvitePage");
        },
// 以下是2.2.0 版本添加
        // 评估风险等级成功
        evaluateSuccess: function() {
            if(window.javaObj) {
                return javaObj.evaluateSuccess();
            };
            _request("evaluateSuccess");
        },
        // 打开积分商城页面
        openIntegral: function() {
            if(window.javaObj) {
                return javaObj.openIntegral();
            };
            _request("openIntegral");
        },
// 以下是2.3.0 版本添加
        // 打开我的积分页面
        openUserIntegrate: function() {
            if(window.javaObj) {
                return javaObj.openUserIntegrate();
            };
            _request("openUserIntegrate");
        },
        // 打开签到中心
        openSignCenter: function() {
           if(window.javaObj) {
                return javaObj.openSignCenter();
            };
            _request("openSignCenter");
        },
        // 启用原生分享并设置原生分享信息
        showUmengShare: function(text, imageUrl, platform, flag, title, url) {
            if (platform instanceof Array) {
                platform = platform.join(",");
            }
            if (window.javaObj) {
                return javaObj.showUmengShare(text, imageUrl, platform, flag, title, url);
            };
            _request("showUmengShare", {
                "text" : text,
                "platform" : platform ,
                "imageurl" : imageUrl,
                "flag" : flag,
                "title" : title,
                "url" : url
            });
        },
        // 打开微信或其他App；例如打开微信appScheme="weixin://"
        openOtherApp: function(appScheme) {
           if(window.javaObj) {
                return javaObj.openOtherApp(appScheme);
            };
            _request("openOtherApp", {"appScheme": appScheme});
        },
        // 复制网页内容到App
        copyText: function(text) {
           if(window.javaObj) {
                return javaObj.copyText(text);
            };
            _request("copyText", {"text": text});
        },
         Platforms: {
            // 朋友圈
            WechatTimeline: "WechatTimeline",
            // 微信
            WechatSession: "WechatSession",
            // 新浪
            Sina: "Sina",
            // 空间
            Qzone: "Qzone",
            // QQ
            QQ: "QQ",
        }
    };
 
    for (var key in imps) {
        if (window.javaObj && window.javaObj[key]) {
             
            imps[key] = (function(mn){
                return function(){
                  return window.javaObj[mn].apply(window.javaObj, arguments);
                }
            })(key);
        }
    }
 
    return imps;
 
})();        
 
 
/// 以下为Android 和 iOS客户端回调js的方法 ///