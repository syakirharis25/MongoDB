# MongoDB
My works related to MongoDB cross-platform, general purpose, document-based, distributed database.

## Table of Contents
1. [Introduction.](#introduction)
2. [Official references websites.](#references)
3. [Running MongoDB as a Windows Service.](#windowservice)
4. [Mongo Daemon, mongod.](#mongod)
5. [GitHub notes.](#github)
6. [GitHub repository calculation.](#calculation)

<a name="introduction"></a>
## 1. Introduction.
<img src="mongodb.jpg" height="200"> 
MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

<a name="references"></a>
## 2. Official references websites. <br />
MongoDB official website : https://www.mongodb.com <br />
MongoDB official documentation : https://docs.mongodb.com <br />
MongoDB Community Server : https://www.mongodb.com/download-center/community <br />

**_MongoDB questions and answers_**
Stack Overflow questions and answers website : https://stackoverflow.com/ <br />

**_MongoDB questions and answers by Stack Overflow_**
mongodb service is not starting up by Stack Overflow : https://stackoverflow.com/questions/9884233/mongodb-service-is-not-starting-up <br />
mongod command not recognized when trying to connect to a mongodb server by Stack Overflow : https://stackoverflow.com/questions/15053893/mongod-command-not-recognized-when-trying-to-connect-to-a-mongodb-server/41507803 <br />

**_MongoDB related technologies_** <br />
MongoDB Stitch : https://www.mongodb.com/cloud/stitch <br />
Mocha : https://mochajs.org, https://github.com/mochajs/mocha <br />
Robo 3T : https://robomongo.org, https://github.com/Studio3T/robomongo <br />
Homebrew package manager : https://brew.sh <br />

**_MongoDB documentation by MongoDB_** <br />
MongoDB Drivers and ODM by MongoDB : https://docs.mongodb.com/ecosystem/drivers/ <br />
Documents by MongoDB : https://docs.mongodb.com/manual/core/document <br />
WiredTiger Storage Engine by MongoDB : https://docs.mongodb.com/manual/core/wiredtiger/ <br />
mongod by MongoDB : https://docs.mongodb.com/manual/reference/program/mongod/ <br />
mongo Shell Quick Reference by MongoDB : https://docs.mongodb.com/manual/reference/mongo-shell/ <br />
MongoDB CRUD Operations by MongoDB : https://docs.mongodb.com/manual/crud/ <br />
BSON Types by MongoDB : https://docs.mongodb.com/manual/reference/bson-types/ <br />

**_MongoDB related articles_** <br />
How to set up MongoChef to ease your MongoDB admin challenges by techrepublic.com : https://www.techrepublic.com/article/how-to-set-up-mongochef-to-ease-your-mongodb-admin-challenges/ <br />
Blending the ORM and MongoDB ODM by doctrine-project.org : https://www.doctrine-project.org/projects/doctrine-mongodb-odm/en/2.0/cookbook/blending-orm-and-mongodb-odm.html <br />

<a name="windowservice"></a>
## 3. Running MongoDB as a Windows Service.
If you installed MongoDB as a service from the server page of https://www.mongodb.com/download-center/community, you need to open the Windows command line program and copy and paste the below command on your command line program.

```
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
```

Make sure the number is as same as what you installed in your local machine.
Make sure the program is always running when you want to use MongoDB database.

Read the official MongoDB documentation for better explanation : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

<a name="mongod"></a>
## 4. Mongo Daemon, mongod.
mongod is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations.

To use mongod, first you need to setup the windows environment, try to find where is your MongoDB binaries installed in your local machine, for example `C:\Program Files\MongoDB\Server\4.2\bin`, copy the address location from the address bar by pressing **[ Ctrl ] + **[ C ]**, then on the task bar, on the left of windows ⊞ logo, type `environment`, under `Best Match` text, find the text `Edit the system environment variables`, then hover the mouse on that text and **[ Mouse Left Click ]** on it, the `System properties` menu will appear on the screen, press **[ N ]** on your keyboard and `Environment Variables` menu will appear on the screen. Press **[ P ]** and make sure the `Path` is highlighted on the screen, then press **[ Tab ]**, **[ E ]** on your keyboard, then press **[ Tab ]**, **[ N ]**, then press **[ Ctrl ]** + **[ V ]** on your keyboard to paste the address of MongoDB binaries into windows environment variable, and then press **[ Enter ]**, **[ Enter ]**, **[ Enter ]**, **[ Tab ]**, **[ Enter ]**.

After setting the windows environment variable, then test the mongod command.
```
$ mongod
```

<a name="github"></a>
## 5. GitHub notes.
Clone the current GitHub remote repository contents into local machine.
```
$ git clone https://github.com/syakirharis25/MongoDB.git
$ cd MongoDB/
$ git remote -v
$ git status
```

<a name="calculation"></a>
## 6. GitHub repository calculation.
```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
Markdown                         1              5              0             29
-------------------------------------------------------------------------------
```
Refer to : https://github.com/syakirharis25/cloc
