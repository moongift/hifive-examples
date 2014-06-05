// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var controller;
    controller = {
      __name: "NumListController",
      __templates: "./views/list.ejs",
      "#output click": function() {
        var e, numList, to;
        to = $("#to").val();
        if (!to) {
          return;
        }
        try {
          to = parseInt(to);
        } catch (_error) {
          e = _error;
          return;
        }
        numList = this.view.get("list", {
          num: to
        });
        return $("#list").html(numList);
      }
    };
    return h5.core.controller("#container", controller);
  });

}).call(this);