$(document).ready(function() {
  var aud = document.getElementById("myAudio");
  aud.volume = 0.5;
  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function(event) {
    event.preventDefault();
    aud.play();
    aud.setAttribute("controls", true);

    var item = $("#todo-list-item").val();

    if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox'/>" +
          item +
          "<a class='remove'>x</a><hr></li>"
      );
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    } else {
      alert("Mission Invalid");
    }
  });

  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
      alert("Mission Success");
    }

    $(this)
      .parent()
      .toggleClass("completed");

    localStorage.setItem("listItems", $("#list-items").html());
  });

  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();
    //alert("Mission Failed");

    localStorage.setItem("listItems", $("#list-items").html());
  });

  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
});
