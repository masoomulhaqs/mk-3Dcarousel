! function(t) {
    t.fn.mkCarousel = function(e) {
        var s = this.selector,
            a = this.selector + ">img",
            n = t(a),
            l = (t(".mk-nav-controls>li>a"), 0),
            o = null,
            r = null,
            c = null,
            v = 0,
            f = 0,
            d = {},
            C = 0;
        c = function() {
            (d = t.extend({
                responsive: !0,
                breakpoint: 768,
                offset: 100,
                mobileOffset: 50,
                beginAt: 1,
                leftClass: "image-left",
                rightClass: "image-right",
                activeClass: "active",
                controlNavs: !0,
                prevText: "Prev",
                nextText: "Next"
            }, e)).controlNavs && t(s).prepend('\t\t\t\t\t<ul class="mk-nav-controls">\t\t\t\t\t    <li><a href="javascript:void(0)" data-mk-direction="prev">' + d.prevText + '</a></li>\t\t\t\t\t    <li><a href="javascript:void(0)" data-mk-direction="next">' + d.nextText + "</a></li>\t\t\t\t\t</ul>\t\t\t\t"), n.hasClass(d.activeClass) ? (n.removeClass(d.activeClass), d.beginAt >= 1 && d.beginAt <= n.length ? n.eq(d.beginAt - 1).addClass(d.activeClass) : n.eq(0).addClass(d.activeClass)) : n.eq(0).addClass(d.activeClass), t(s).show()
        }, r = function() {
            for (i = 0; i <= n.length; i++)
                if (n.eq(i).hasClass(d.activeClass)) return i
        }, o = function(e) {
            if (v = t(window).outerWidth() >= d.breakpoint ? d.offset : d.mobileOffset, l = 0, f = e || r(), n.removeClass(d.leftClass).css({
                    marginLeft: "0px",
                    marginRight: "0px"
                }), t(a + ":lt(" + f + ")").addClass(d.leftClass), n.eq(0).hasClass(d.activeClass)) n.eq(0).css({
                marginLeft: -n.eq(0).outerWidth() / 2 + "px",
                marginRight: v + "px"
            });
            else {
                for (i = 0; i < f; i++) l += n.eq(i).outerWidth();
                n.eq(0).css("marginLeft", -(l + t(a + "." + d.activeClass).outerWidth() / 2 + v) + "px"), n.each(function() {
                    t(this).hasClass(d.activeClass) && t(this).css({
                        marginLeft: v + "px",
                        marginRight: v + "px"
                    })
                })
            }
        }, t(window).resize(function() {
            o()
        }).load(function() {
            n.length > 0 && (c(), o())
        }), "onorientationchange" in window && window.addEventListener("orientationchange", function() {
            o()
        }, !1), n.click(function() {
            n.removeClass(d.activeClass), t(this).addClass(d.activeClass), o()
        }), t(s).on("click", ".mk-nav-controls>li>a", function(e) {
            e.preventDefault(), C = r(), C = "prev" == t(this).data("mk-direction") ? C > 0 ? C - 1 : C : C < n.length - 1 ? C + 1 : C, n.removeClass(d.activeClass), n.eq(C).addClass(d.activeClass), o(C)
        })
    }
}(jQuery);