var courseAPI = "http://localhost:3000/iphone";
function start() {
  getCourse(function (iphones) {
    renderCourse(iphones);
  });
}
start();
// get course
function getCourse(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
// render course
var renderCourse = function (courses) {
  var listCourseBlock = document.querySelector("#list-itemp");
  var htmls = courses.map(function (course) {
    return `
    <div class="grid__column-2-4">
                                    <!-- Sản phẩm bán hàng -->
                                        <a class="home-product-item">
                                            <div class="home-product-item__img" style="background-image: url(https://cdn.tgdd.vn/Products/Images/42/230529/s16/iphone-13-pro-max-gold-650x650.png);"></div>
                                            <h4 class="home-product-item__name">${course.name_item}</h4>
                                            <span class="home-product-item__price">
                                                <span class="home-product-item__price-old">${course.price_iphone}</span>
                                                <span class="home-product-item__price-current">${course.voucher}</span>
                                            </span>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class=" home-product-item__like-icon-empty fa-regular fa-heart"></i>
                                                    <i class=" home-product-item__like-icon-fill fa-solid fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item-star fa-solid fa-star"></i>
                                                    <i class="home-product-item-star fa-solid fa-star"></i>
                                                    <i class="home-product-item-star fa-solid fa-star"></i>
                                                    <i class="home-product-item-star fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <span class="home-product-item-sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">Iphone</span>
                                                <span class="home-product-item__origin-name">${course.made_in}</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fa-solid fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">10%</span>
                                                <span class="home-product-item__sale-off-label">Giảm</span>
                                            </div> 
                                        </a>
                                </div>
    `;
  });
  listCourseBlock.innerHTML = htmls.join(" ");
};
