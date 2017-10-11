window.fbAsyncInit = function () {
    FB.init({
        appId: '910362229072694',
        status: true,
        xfbml: true,
        oauth: true,
        cookie: true,
        version: 'v2.5'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/fr_FR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {
    $('.facebookConnect').click(function () {
        var url = $(this).attr('href');

        FB.login(function (response) {
            if (response.authResponse) {
                window.location = url;
            }
        });
        return false;
    });
});


