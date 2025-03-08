<?php
    namespace Controller\Database;

use mysqli;

    require_once '../config/config.php';
    class Database{
        private $hostname = HOST;
        private $dbUser = USER;
        private $dbPass = PASSWORD;
        private $dbName = DBNAME;
        private $conn;
        public function __construct(){
            $this->conn = new mysqli($this->hostname, $this->dbUser, $this->dbPass, $this->dbName);
            if($this->conn){
                echo "Connect successful";
            }
        }


        /// Insert Function

        public function Query($query){
            $res = $this->conn->query($query);
            if($res){
                return $res;
            }else{
                return false;
            }
        }

    }