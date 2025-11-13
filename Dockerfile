# Step 1: Use Node.js to build the app
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx to serve the built files
FROM nginx:alpine

# Copy build output from previous step to Nginx’s web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
