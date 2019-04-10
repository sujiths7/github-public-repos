var Repositories = (function() {
  return {
    showLoader: function(){
      $('#loader').removeClass('d-none')
      $('#no_search_results').hide()
      $('#repositories_table').hide()
    },

    loaderOnSubmit: function(){
      $('.query_form').submit(function(){
        Repositories.showLoader()
      })
    },

    loaderOnPaginationClick: function(){
      $('.page-item a').click(function(){
        Repositories.showLoader()
      })
    }
  }
})();

$(function() {
  Repositories.loaderOnSubmit()
})
