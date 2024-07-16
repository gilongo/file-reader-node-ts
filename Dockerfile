# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled JavaScript code from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy package.json and package-lock.json to install only production dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/app.js"]