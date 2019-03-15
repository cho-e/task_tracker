defmodule TaskTrackerWeb.TaskReportController do
  use TaskTrackerWeb, :controller

  alias TaskTracker.Users
  alias TaskTrackerWeb.UserView
  alias TaskTracker.Tasks

  def index(conn, _params) do
    user = conn.assigns[:current_user]
    underlings = UserView.get_underlings(user.id)
    tasks = Enum.map(underlings, fn u -> Tasks.list_tasks_by_user_id(u.id) end)
            |> List.flatten
    render conn, "index.html", currentUser: user, underlings: underlings, tasks: tasks
  end
end
