window.onload = function () {
  // https://getbootstrap.com/docs/5.0/components/modal/#via-javascript
  let myModal = new bootstrap.Modal(
    document.getElementById("myModal"),
    {}
  );
  $('#myModal').modal({'data-bs-backdrop': 'static', 'data-bs-keyboard': false});
  // https://getbootstrap.com/docs/5.0/components/modal/#show
  myModal.show();
};
console.log("success");
