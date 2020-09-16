# backend-test

libraries and technologies used in this project => Nodejs,Mongodb,Keystonejs(Nodejs CMS which is built on top of expressjs) 

Steps to run this project

1. Put these two keys in .env

COOKIE_SECRET=6dc921121ad5ce341f75fc6c1a2b1626969ab1b908585f00994ba8848a07dc1c6c4c5b21dcb60522ee6bef89843860b41c650db9c6d6a675d957736c0decfe4d
SECRET_KEY= PRIVATEKEYFORTOKENGENERATION

2. npm i

3. npm start

4. navigate localhost:3000/keystone

5. when you run this application first time a new user will be created(you can see updates folder for login credentials).

6. After logging in you can see your database in a presented manner. You can perform any kind of operation(CRUD)