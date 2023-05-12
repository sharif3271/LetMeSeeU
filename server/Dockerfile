FROM node:16.19-slim
RUN mkdir /src
WORKDIR /src
COPY . .
ENV NODE_ENV production
RUN npm install
RUN npm run build
CMD [ "node", "dist/main.js" ]
