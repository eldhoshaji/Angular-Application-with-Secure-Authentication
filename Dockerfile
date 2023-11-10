# Use the specific Node.js version as the base image
FROM node:16.18.1 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight Nginx image for serving the built app
FROM nginx:alpine

# Copy the built app from the build container to the nginx container
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Expose port 8080 (the port http-server runs on)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
