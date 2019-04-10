class RepositoriesController < ApplicationController
  def index
    @repositories =
      if params[:query].present?
        Github.search.repos(
          q: params[:query], per_page: 20, page: params[:page]
        )
      else
        {}
      end
    return unless @repositories.present?
    @paginated_repos =
      Kaminari.paginate_array([], total_count: @repositories.count_pages * 20)
              .page(params[:page]).per(20)
  end
end
