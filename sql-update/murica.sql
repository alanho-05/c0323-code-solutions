update "countries"
   set "name" = 'Merica'
 where "name" = 'United States'
returning *;
