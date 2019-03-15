defmodule TaskTracker.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do

    create table(:users) do
      add :name, :string
      add :email, :string, null: false
      add :manager_id, references(:users, on_delete: :delete_all), default: nil

      timestamps()
    end

    create unique_index(:users, [:email])

  end
end
