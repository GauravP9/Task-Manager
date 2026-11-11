# Task Manager

A simple task manager built with Node.js, Express, and MongoDB. It provides a browser-based interface and a REST API for creating, viewing, editing, and deleting tasks.

## Features

- Add tasks and view the task list in the browser.
- Edit task details and completion status.
- Delete tasks.
- Persist task data in MongoDB.
- Validate task names (required, trimmed, and limited to 20 characters).

## Requirements

- [Node.js](https://nodejs.org/) and npm
- A MongoDB database, either local or hosted

## Getting started

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/GauravP9/Task-Manager.git
   cd Task-Manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and set your MongoDB connection string:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/task-manager
   PORT=3000
   ```

   Replace `MONGO_URI` with your own connection string if you use a hosted MongoDB database. `PORT` is optional; the application defaults to `3000`.

4. Start the application:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

The task API is mounted at `/api/v1/tasks`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/tasks` | List all tasks |
| `POST` | `/api/v1/tasks` | Create a task |
| `GET` | `/api/v1/tasks/:id` | Get a task by ID |
| `PATCH` | `/api/v1/tasks/:id` | Update a task |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task |

Create a task by sending JSON with a `name` field:

```json
{
  "name": "Wash dishes"
}
```

A task has a `name` (required, maximum 20 characters) and a `completed` flag (defaults to `false`).

## Project structure

- `app.js` — configures and starts the Express application
- `controllers/` — task request handlers
- `db/` — MongoDB connection setup
- `middleware/` — asynchronous and error-handling middleware
- `model/` — Mongoose task model
- `public/` — browser interface and static assets
- `routes/` — API routes

## License

No license is currently specified for this project.
