<?php
    require_once 'database.php';
    use Controller\Database\Database as DB;
    $dbObj = new DB();
    $sql = "CREATE TABLE IF NOT EXISTS category (
    category_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(20)
    );";
    $dbObj->Query($sql);

    $sql = "CREATE TABLE IF NOT EXISTS role(
        role_id INT (6) AUTO_INCREMENT PRIMARY KEY,
        role_name VARCHAR(20)
        );";
        $dbObj->Query($sql);
        
    $sql = "CREATE TABLE IF NOT EXISTS user(
    user_id INT(6) AUTO_INCREMENT,
    username VARCHAR(20) UNIQUE,
    uFirstName VARCHAR (50),
    uLastName VARCHAR (50),
    uEmail VARCHAR(255) UNIQUE,
    uPhone VARCHAR (20) UNIQUE,
    address VARCHAR (256),
    role INT(1) NOT NULL  DEFAULT 2 ,
    PRIMARY KEY(user_id),
    FOREIGN KEY(role) REFERENCES role(role_id)
    
    );"; // DEFAULT 2 for normal user
    $dbObj->Query($sql);    
    
    
    