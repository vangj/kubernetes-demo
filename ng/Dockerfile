FROM node:lts as Builder
COPY ./app /tmp/app
RUN npm install -g @angular/cli  
WORKDIR /tmp/app
RUN npm install
RUN ng build

FROM nginx:alpine  
LABEL Thanos "vangjee@gmail.com"
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=Builder /tmp/app/dist/app /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]