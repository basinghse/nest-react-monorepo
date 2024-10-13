# nest-react-monorepo

## Architecture

TODO: add links
- React frontend built with Vite as a Single Page Application (SPA)
- NestJS backend which serves up the frontend
- Supabase (free Firebase alternative) for user authentication. It can also provide a database
- Turborepo for managing the front and backend together

## Steps

Low level details may be omitted in the steps below. You are encouraged to:

1. Look through the final code or the commit history and try to work it out for yourself
2. Refer to the latest documentation
3. Create an issue or reach out for help

- Initialise project and define package.json
  - `npm init`
- Install turbo monorepo
  - `npm install -D turbo`
- Create a `turbo.json` file in root
  - Read: latest turbo docs
- Setup workspaces folder/s in `package.json`
  - Read: what is workspaces?
- Create the workspace folder in your root directory
