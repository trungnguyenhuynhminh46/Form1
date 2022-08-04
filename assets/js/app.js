$(document).ready(function () {
  //Xử lỷ phần multi-tabs
  $(".wp-tab-contents .tab-content").hide();
  $(".wp-tab-contents .tab-content:first-child").show();
  $("#menu-1 ul.list-clothes").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  })
  $(".nav-tabs li.tab").click(function () {
    let id_tab_content = $(this).children('a').attr("href");
    // Active tab vừa nhấn
    $(".nav-tabs li.tab").removeClass("active");
    $(this).addClass("active");
    // Show tab content
    $(".wp-tab-contents .tab-content").hide();
    $(id_tab_content).show();
    //Kích hoạt slider
    //Slider clothes - multitabs
    $(id_tab_content).children('ul.list-clothes').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
    });
    return false;
  });
  // Thêm caret down sau những mục có sub-menu
  $(".sub-menu").parent("li.opt").children("a").addClass("has-child");
  // Slider brand
  $(".brand.slider-multiple-items").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
  //Slider clothes
  $(".new-arrivals .list-clothes.slider-multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
