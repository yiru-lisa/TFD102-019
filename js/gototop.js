// 點擊按鈕，頁面滑到最上方
$("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

// 頁籤
$("a.tab").on("click", function(e){
    e.preventDefault();
    
    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");
    
    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.tab").removeClass("-on");
    $("div.tab." + $(this).attr("data-target")).addClass("-on");
});
