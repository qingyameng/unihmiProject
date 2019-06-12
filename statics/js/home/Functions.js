

// nav menu
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 



//产品分类导航

var menuids=["suckertree1"] //Enter id(s) of SuckerTree UL menus, separated by commas





function comment_check() {
if ( document.form1.title.value == '' ) {
window.alert('请输入主题^_^');
document.form1.title.focus();
return false;}

if ( document.form1.name.value == '' ) {
window.alert('请输入姓名^_^');
document.form1.name.focus();
return false;}

if ( document.form1.tel.value == '' ) {
window.alert('请输入电话^_^');
document.form1.tel.focus();
return false;}

if ( document.form1.email.value == '' ) {
window.alert('请输入电子邮件^_^');
document.form1.email.focus();
return false;}

if ( document.form1.qq.value == '' ) {
window.alert('请输入QQ^_^');
document.form1.qq.focus();
return false;}

if(document.form1.tel.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("电话只能是数字^_^");   
document.form1.tel.focus();
return false;}

if ( document.form1.email.value.length> 0 &&!document.form1.email.value.indexOf('@')==-1|document.form1.email.value.indexOf('.')==-1 ) {
window.alert('请设置正确的Email地址，如:webmaster@hitux.com');
document.form1.email.focus();
return false;}

if(document.form1.qq.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("QQ只能是数字^_^");   
document.form1.qq.focus();
return false;}

if ( document.form1.content.value == '' ) {
window.alert('请输入内容^_^');
document.form1.content.focus();
return false;}

if ( document.form1.verycode.value == '' ) {
window.alert('请输入验证码^_^');
document.form1.verycode.focus();
return false;}

return true;}


