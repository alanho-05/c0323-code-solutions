delete
  from "films"
 where "rating" = NOT 'G'
returning *;
