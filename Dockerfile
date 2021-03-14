# base image
FROM node:14.15.5

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.6 @ionic/cli cordova

# add app
COPY . /app

# start app
CMD ionic serve --host 0.0.0.0
