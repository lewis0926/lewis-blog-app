# Use an official Node.js runtime as a parent image
FROM node:lts-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on (e.g., 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
