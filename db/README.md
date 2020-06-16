# DB for D4D project

Migration tool: [db-migrate](https://db-migrate.readthedocs.io/)


Attention:
You have to install db-migrate globally also to use `db-migrate` command
```
npm install -g db-migrate
```


## Installation


### Install and setup mysql

#### Install mysql

https://dev.mysql.com/doc/refman/8.0/en/installing.html


#### Create user and DB


Login as root (`mysql -u root -p`) and run follow commands:

```
CREATE USER 'sammy'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
CREATE DATABASE d4d;

```

### Create config file.

Copy dababase.json.example to database.json and replace username and password fields.

### Run migrations

```
db-migrate up
```


## HOWTO


### Create new sql migration


```
db-migrate create NAME-OF-MIGRATION --sql-file
```


See db-migrations documentation for other commands: [Documentation](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/)
