FROM node:16.15.0
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/app
COPY package*.json ./
RUN npm  install --only=prod
COPY . . 

#EXPOSE 3015
CMD ["npm","start"]