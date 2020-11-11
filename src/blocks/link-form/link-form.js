$(function() {
    $('.link-form').on('reset', function() {
        $('.overlay').hide()
    })

    $('.link-form-trigger').on('click', function() {
        $('.overlay').show()
    })
})