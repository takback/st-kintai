$(function() {
  $('button').on('click', function() {
    var confirmMessage = '登録しますか？';
    if (window.confirm(confirmMessage)) {
        // OK押下時の挙動
    } else {
        // キャンセル押下時の挙動
    }
  });
});