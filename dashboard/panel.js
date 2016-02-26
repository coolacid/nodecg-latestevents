$( document ).ready(function() {
    items = 10;
    while (items > 0) {
        initAdd('dashboard');
        items--;
    }
    nodecg.listenFor('subscription', 'lfg-sublistener', function(payload) {
        if (payload.resub) {
            notice = "Sub: " + payload.name + " x" + payload.months
        } else {
            notice = "Sub: " + payload.name
        }
        smoothAdd('dashboard', notice);
    });
});
