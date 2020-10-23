FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json package-lock.json ./ ./
RUN npm install
RUN npm install react-scripts serve -g

# add app
COPY . ./

# run app

#RUN npm install
#RUN npm run build
#WORKDIR /app
#COPY --from=builder /app/build .
#CMD ["serve", "-p", "80", "-s", "."]