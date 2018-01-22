<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require $_SERVER["DOCUMENT_ROOT"].'/libs/vendor/autoload.php';
    require 'conf.php';

    $app=new \Slim\App;

    $app->get('/list/{codigo}', function(Request $request, Response $response, array $args){
        $codigo=$args['codigo'];
        $op="";
        if(!empty($codigo)){
            $op=" and codigo like '".$codigo."%'";
        }
        $sql="
            SELECT
                CODIGO as codigo,
                Grupo as grupo,
                Grupo2 as grupo2,
                Familia1 as familia1,
                Familia2 as familia2,
                Familia3 as familia3,
                Supraarticulo as nombre
            FROM
                Articulos2
            WHERE
                LENGTH(CODIGO)<=5
                ".$op."
            ORDER BY
                CODIGO
        ";
        try{
            $db=getConnection();
            $sth=$db->prepare($sql);
            $sth->execute();
            $all = $sth->fetchAll();
            return $response->withJson($all);
        }
        catch(PDOException $e) {
            $err='{"error":{"text":'. $e->getMessage() .'}}';
            return $response->withJson($err);
        }

    });

    $app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
        $name = $args['name'];
        $response->getBody()->write("Hello, $name");

        return $response;
    });
    $app->run();

    function getConnection() {
        global $conf;
    	$dbhost=$conf['db']['host'];
    	$dbuser=$conf['db']['dbuser'];
    	$dbpass=$conf['db']['dbpass'];
    	$dbname=$conf['db']['dbname'];
    	$pdo = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass);
    	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    	return $pdo;
    }

?>
