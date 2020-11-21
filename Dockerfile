FROM node
WORKDIR /app
ADD package*.json ./
RUN npm install
RUN npm install react-scripts
ADD . .
CMD npm start