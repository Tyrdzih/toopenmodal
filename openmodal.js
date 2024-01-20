window.onload = function () {
  // https://getbootstrap.com/docs/5.0/components/modal/#via-javascript
  let myModal = new bootstrap.Modal(
    document.getElementById("myModal"),
    {}
  );
  $('#myModal').modal({backdrop: 'static', keyboard: false});
  // https://getbootstrap.com/docs/5.0/components/modal/#show
  myModal.show();
};
console.log("success");
