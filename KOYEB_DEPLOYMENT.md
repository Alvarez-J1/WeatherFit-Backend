# Koyeb Deployment

## Repository

- Repository root directory: leave blank when deploying the `WeatherFit-Backend` repository directly.
- If deploying from a monorepo that contains both frontend and backend folders, use `WeatherFit-Backend`.

## Runtime

- Runtime: Node.js
- Build command: `npm install`
- Run command: `npm run start`
- Exposed port: leave `PORT` unset in Koyeb; the app reads `process.env.PORT`.
- Health-check path: `/api/health`

## Required Environment Variables

### `MONGODB_URI`

- Required: yes
- What it does: connects the API to MongoDB through Mongoose.
- Where to get it: MongoDB Atlas, from your cluster's **Connect** flow, usually **Drivers**.
- Value format: `mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority`

### `JWT_SECRET`

- Required: yes
- What it does: signs and verifies login tokens.
- Where to get it: create your own long random string. Do not use the example value in production.

### `CLIENT_URL`

- Required: yes for the deployed frontend
- What it does: allows browser requests from the deployed WeatherFit frontend through CORS.
- Where to get it: copy the deployed frontend URL, for example your Render static-site URL.

### `ALLOWED_ORIGIN`

- Required: optional
- What it does: allows one additional frontend origin through CORS.
- Where to get it: use only if you need a second frontend origin, such as a preview URL.

## Notes

- Do not set real secrets in this file.
- `MONGO_URL` is still accepted as a legacy fallback, but new deployments should use `MONGODB_URI`.
- The server binds to `0.0.0.0` for cloud deployment.
