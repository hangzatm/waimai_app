//封装接口请求函数
// # 接口文档
//
// ## 目录：
import ajax from './ajax'

// [1、根据经纬度获取位置详情]
export const reqAddress=function (geohash) {
  ajax('position/${geohash}');
}
// [2、获取食品分类列表]
export const reqFoodList=function () {
  ajax('index_category');
}
// [3、根据经纬度获取商铺列表]
export const reqShopListByAddress=function (latitude,longitude) {
  ajax('index_category',{latitude,longitude});
}
// [4、根据经纬度和关键字搜索商铺列表]
export const reqShopListByAddressAndKeyWord=function (geohash,keyword) {
  ajax('search_shops',{geohash,keyword});
}
// [5、获取一次性验证码]
export const reqCaptchaOnce=function () {
  ajax('captcha');
}
// [6、用户名密码登陆]
export const reqLogin=function ({name,pwd,captcha}) {
  ajax('login_pwd',{name,pwd,captcha},'POST');
}
// [7、发送短信验证码]
export const reqSendMsgCaptcha=function (phone) {
  ajax('sendcode',{phone});
}
// [8、手机号验证码登陆]
export const reqLoginWithCaptcha=function ({phone,code}) {
  ajax('login_sms',{phone,code},'POST');
}
// [9、根据会话获取用户信息]
export const reqUserMsgByDialog=function () {
  ajax('userinfo');
}
// [10、用户登出](#10用户登出)<br/>
export const reqUserMsgByDialog=function () {
  ajax('Logout');
}
