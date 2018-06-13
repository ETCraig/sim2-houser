INSERT INTO houserUsers ( username, password ) 
VALUES ( $1, $2 ) returning *;