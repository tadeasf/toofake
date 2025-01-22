FROM oven/bun:latest

WORKDIR /app

# Copy package files and install dependencies
COPY client/package*.json ./
RUN bun install

# Copy the rest of the application
COPY client/ .

# Build the application
ENV PORT=3279
ENV NODE_ENV=production
RUN bun run build

EXPOSE 3279

# Start the application
CMD ["bun", "run", "start"]