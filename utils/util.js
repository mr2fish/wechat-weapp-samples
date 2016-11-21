function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatDate(date, split) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join(split || '')
}

function formatDate(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.getMonth()+1 + "月" + date.getDate() + "日 " + formatWeekday(timestamp);
}
function formatTime(timestamp) {
    var date = new Date(timestamp * 1000);
    return date.getHours() + ":" + date.getMinutes();
}
function formatWeekday(timestamp) {
    var date = new Date(timestamp * 1000);
    var index = date.getDay();
    return getWeekday(index);
}
function getCurrentDate() {
  var date = new Date();
  return {
    date: new Date(),
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay()
  };
}
function getWeekday(d) {
    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return weekday[d];
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function createURL( url, obj ) {
  let props = "";
  let resultURL="";  
  for(let p in obj){  
    if(obj[p])
    props+= "&"+p + "=" + obj[p];  
  }
  resultURL=url+"?"+props.substr(1);
  console.log(resultURL);
  return resultURL;  
}
function _obj2uri(obj){
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}



module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  getCurrentDate: getCurrentDate,
  getWeekday: getWeekday,
  
  createURL: createURL
}
