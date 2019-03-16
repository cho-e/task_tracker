defmodule TaskTrackerWeb.TaskView do
  use TaskTrackerWeb, :view

  def get_time_blocks_for_task(task_id) do
    TaskTracker.TimeBlocks.get_time_blocks_for_task(task_id)
  end

end
