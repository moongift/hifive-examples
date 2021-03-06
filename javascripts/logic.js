// Generated by CoffeeScript 1.7.1
$(function() {
  var itemSearchController, itemSearchLogic;
  itemSearchLogic = {
    __name: "ItemSearchLogic",

    /*
    商品リスト(商品名と税込価格)を取得する。
    
    @param categoryId {Number} カテゴリID
    @returns 商品リスト
     */
    getItemList: function(categoryId) {
      var dfd, result;
      dfd = this.deferred();
      result = null;
      this._getItemData(categoryId).done(function(data) {
        result = $.map(data, function(obj) {
          dfd.notify(data.length);
          obj.price = Math.floor(obj.price * 1.05);
          return obj;
        });
        return dfd.resolve(result);
      }).fail(function(error) {
        return dfd.reject(error.message);
      });
      return dfd.promise();
    },

    /*
    カテゴリIDから商品(商品名と税抜価格)リストをサーバから取得する。
    
    @param categoryId {Number} カテゴリID
    @returns 商品リスト
     */
    _getItemData: function(categoryId) {
      return $.ajax({
        type: "GET",
        dataType: "json",
        url: "./itemList" + categoryId
      });
    }
  };
  itemSearchController = {

    /*
    コントローラ名
     */
    __name: "ItemSearchController",

    /*
    テンプレート
     */
    __templates: "template.ejs",

    /*
    商品検索ロジック
     */
    itemSearchLogic: itemSearchLogic,

    /*
    検索ボタン押下アクション
     */
    "#searchBtn click": function(context) {
      var $resultDiv, category, that;
      $resultDiv = this.$find("#resultList");
      that = this;
      $resultDiv.empty();
      category = $("#select-category option:selected").val();
      return this.itemSearchLogic.getItemList(category).done(function(resultData) {
        return that.view.append($resultDiv, "template1", {
          listData: resultData
        });
      }).fail(function(errMsg) {
        return alert("取得に失敗しました" + errMsg);
      });
    }
  };
  h5.core.controller("#container", itemSearchController);
  return h5.core.expose(itemSearchController);
});
