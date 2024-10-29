FROM node:23-alpine3.19
WORKDIR /collage-menegment/frontend
COPY . .
COPY .env env
RUN npm install
RUN npm run build
EXPOSE 5000
CMD [ "npm", "start" ]