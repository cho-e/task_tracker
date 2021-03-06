defmodule TaskTrackerWeb.Plugs.FetchSession do
  import Plug.Conn

  def init(args), do: args

  def call(conn, _args) do
    user = TaskTracker.Users.get_user(get_session(conn, :user_id) || -1)
    if user do
      assignedTasks = TaskTracker.Tasks.list_tasks_by_user_id(user.id)
      allUsers = TaskTracker.Users.list_users
      assign(conn, :current_user, user)
      |> assign(:tasks, assignedTasks)
      |> assign(:users, allUsers)

    else
      assign(conn, :current_user, nil)
    end
  end
end
