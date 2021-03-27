# base image
FROM node:10.24.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.1.4 @ionic/cli cordova \
    && npm cache clear --force

# add app
COPY . /app

# start app
CMD ionic serve --host 0.0.0.0
