function switchGirdView() {
    
    var twoGird = $('#twoGird'),
        threeGird = $('#threeGird'),
        productCategory = $('.product-subcategory');

    twoGird.on('click', twoGirdView);
    threeGird.on('click', threeGirdView);

    function twoGirdView() {
        twoGird.addClass('active-op');
        threeGird.removeClass('active-op');
        productCategory.removeClass('col-lg-4 col-md-4 col-sm-4').addClass('col-lg-6 col-md-6 col-sm-6')
    }

    function threeGirdView() {
        threeGird.addClass('active-op');
        twoGird.removeClass('active-op');
        productCategory.removeClass('col-lg-6 col-md-6 col-sm-6').addClass('col-lg-4 col-md-4 col-sm-4')
    }
};

function backToTop() {

    var buttonTop = document.getElementById('backToTop');

    buttonTop.onclick = function() {backTop()};

    function backTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};

switchGirdView(); 
backToTop();
