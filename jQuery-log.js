(function ($) {

    /**
     * Pipeline logging for jQuery
     *
     * @returns {jQuery}
     */
    $.fn.log = function () {

        console.log.apply(console, arguments);

        return this;

    };

})(jQuery);
