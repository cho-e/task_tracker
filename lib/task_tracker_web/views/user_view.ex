defmodule TaskTrackerWeb.UserView do
  use TaskTrackerWeb, :view

  def is_manager?(user_id) do
    length(get_underlings(user_id)) > 0
  end

  def get_underlings(user_id) do
    TaskTracker.Users.get_underlings_for_user(user_id)
  end

  def get_tasks_for_user(user_id) do
    TaskTracker.Tasks.get_tasks_for_user(user_id)
  end
end
