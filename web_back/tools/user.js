var user = {
    // 1.用户登录功能
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USERLOGIN,
            data: options.data,
            success: options.callback
        });
    },

    // 2.用户退出功能

    logout: function (options) {
        $.ajax({
            type: 'post',
            url: USERLOGOUT,
            success: options.callback
        });
    },

    // 3.简单获取用户信息功能

    getInfo: function (options) {
        $.ajax({
            url: USERINFO,
            success: options.callback,
        });
    },

    // 4.获取所有用户信息功能
    getAllInfo: function (options) {
        $.ajax({
            type: 'get',
            url: USERALLINFO,
            success: options.callback,
        });
    },
    // 5.修改用户信息功能
    edit:function(options){
        $.ajax({
            type: 'post',
            url: USEREDIT,
            data: fd,
            processData: false,
            contentType: false,
            success: options.callback
        });
    }
}