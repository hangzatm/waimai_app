// 发送Ajax请求
//需要把data={username='周业钜',password=123456}与url拼接起来，并且转换为新的格式 url?username='周业钜'&password=123456
import axios from 'axios'
export default function ajax (url='',data={},method="GET") {
  //axios返回的是promise,在外面再套一层promise可以直接返回promise.data，方便调用
  return new Promise ((resolve,reject)=>{
    let promise
    if(method==='GET'){
      let dataStr='';
      //把每一个键值对都跟url拼接在一起,Object.keys(data)返回的是名称为data的数组的包含所有键名的数组
      Object.keys(data).forEach(key=> {
        dataStr+=key+'='+data[key]+'&';
      })
      //得到dataStr='username='周业钜'&password=123456&'
      //去除最后一个多余的'&'。substring() 方法返回的字符串包括 start 处的字符，但不包括 stop 处的字符。
      if(dataStr!=''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('$'));
        url+='?'+dataStr;
      }
      promise= axios.get(url);
    }else{
      promise= axios.post(url,data);
    }
    promise.then(response=>{
      resolve=response.data();
    }).catch(error=>{
      reject(error);
    })
  });

}
