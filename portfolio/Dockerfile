FROM node:21
LABEL maintainer="Ashton Honnecke <ashton@pixelstub.com>"

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .
USER node

EXPOSE 5173
CMD ["npm", "run", "dev"]
