// http://www.fiveminuteargument.com/blog/scrolling-list
// http://www.fiveminuteargument.com/smooth-add.js

function initAdd(id)
{
    var el = $('#' + id);
    el.prepend('<li>&nbsp</li>');
}

function smoothAdd(id, text)
{
    var el = $('#' + id);

    var h = el.height();

    el.css({
        height:   h,
        overflow: 'hidden'
    });

    var ulPaddingTop    = parseInt(el.css('padding-top'));
    var ulPaddingBottom = parseInt(el.css('padding-bottom'));

    el.prepend('<li>' + text + '</li>');

    var first = $('li:first', el);
    var last  = $('li:last',  el);

    var foh = first.outerHeight();

    var heightDiff = foh - last.outerHeight();

    var oldMarginTop = first.css('margin-top');

    first.css({
        marginTop: 0 - foh,
        position:  'relative',
        top:       0 - ulPaddingTop
    });

    last.css('position', 'relative');

    el.animate({ height: h + heightDiff }, 1500)

    first.animate({ top: 0 }, 250, function() {
        first.animate({ marginTop: oldMarginTop }, 700, function() {
            last.animate({ top: ulPaddingBottom }, 250, function() {
                while (el[0].childNodes.length > 10) {
                var last  = $('li:last',  el);
                    last.remove()
                }
                el.css({
                    height:   'auto',
                    overflow: 'visible'
                });
            });
        });
    });
}
