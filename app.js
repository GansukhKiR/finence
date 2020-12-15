//дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();
//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();
//прогграммын холбогч контроллер
var appController = (function (uiCtrl, fnCtrl) {
  var ctrlAddItem = function () {
    console.log("towch daragdlaa  ");
    // 1. оруулах өгөгдлийг дэлгэцээс олж авна.
    // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    // 4. Төсвийг тооцоолно
    // 5. эцсийн үлдэгдэл , тооцоог  дэлгэцэнд гаргана
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    ctrlAddItem();
  });
})(uiController, financeController);
