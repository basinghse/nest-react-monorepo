# nest-react-monorepo

## Architecture

- [React](https://react.dev/reference/react) frontend built with Vite as a Single Page Application (SPA)
- [NestJS](https://docs.nestjs.com/first-steps) backend which serves up the frontend
- [Supabase](https://supabase.com/docs) (free Firebase alternative) for user authentication. It can also provide a database
- [Turborepo](https://turbo.build/repo/docs) for managing the frontend and backend together

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
- Create backend
  - Install nest global cli with `npm install -g @nestjs/cli`
  - Navigate to workspace folder
  - Run `nest new api --skip-git`
    - `--skip-git` is important if your project already has git initialised to prevent a nested git repository
- Create frontend
  - Navigate to workspace folder if not already there
  - Clone the following template with your desired folder name and remove the `.git` directory created: <https://github.com/mmvergara/react-supabase-auth-template>
    - `git clone --no-git https://github.com/mmvergara/react-supabase-auth-template web`
    - `rm -rf web/.git`; or navigate and delete via finder/file explorer
- Setup a Supabase project and connect it with the frontend using the instructions [here](apps/web//README.md#getting-started)
- In the backend `package.json` - update `start:dev` script to `dev`
  - This allows both dev scripts to be run together with turbo (`npm run dev`)
