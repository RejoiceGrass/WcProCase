var common={
  getStrlen:function (str,len) {
    if(str.length>len){
      return str.substr(0,len)+"..."
    } else{
      return str
    }
  
},
  getMyData:function timestampToTime(timestamp,number) {
    var date = new Date(timestamp)
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
    
    var res = Y + M + D + h + m + s
    if(number){
        return res.substring(0,number)
    }
    return res
}  
}
module.exports=common
