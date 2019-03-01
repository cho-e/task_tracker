# TaskTracker

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix


## Design Choices

  One design decision made was for users to assign a task to a user from
  a drop-down selection of the current users in the database. This seemed like
  the most intuitive and user-friendly approach.

  Inputting the time allocated for a task is restricted to 15 minutes increments
  by setting the up/down buttons to increase the time by 15, and if the user
  inputs an invalid number, an error is returned.
