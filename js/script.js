$('.user-plate').addClass('user-plate--disabled');
$('.user-plate').eq(1).removeClass('user-plate--disabled');
$('.user-plate__number').eq(1).css({
    'color': '#EE144E'
})

$('.user-plate').click(function() {
    $(this).removeClass('user-plate--disabled')
    .siblings().addClass('user-plate--disabled')
    .children('.user-plate__number').css({
        'color': 'var(--color-grey)'
    })
    $(this).children('.user-plate__number').css({
        'color': '#EE144E'
    })
});
