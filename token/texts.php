<?php
  $obj = new stdClass();
  $obj->name = 'john';
  if ($obj->name[0] == "{") echo 1;
  echo "Hello \"$obj->name\" !";
  $js =<<<"EOJ"
  Yo man
EOJ;

  echo 'Yes !';