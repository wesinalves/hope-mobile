# base image
FROM node:12.20.2

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @ionic/cli cordova

# add app
COPY . /app

# start app
CMD ionic serve --host 0.0.0.0
