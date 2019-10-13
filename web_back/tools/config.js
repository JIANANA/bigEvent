// 由于需要用到大量的接口文档,如果后台修改的时候,可能会修改特别麻烦,所以这里可以专门定义一个文件,作为文件配置

// 由于基地址都一样,所以可以专门定义一个变量来存储基地址

var baseUrl='http://localhost:8000';

var USERLOGIN=baseUrl+'/admin/login';//用户登录接口

var USERLOGOUT=baseUrl+'/admin/logout';//用户退出接口

var USERINFO=baseUrl+'/admin/getuser';//简单获取用户信息接口

var USERALLINFO=baseUrl+'/admin/userinfo_get';//获取所有用户接口信息

var USEREDIT=baseUrl+'/admin/userinfo_edit'



