select "g"."name" as "genre",
       count(*) as "numberOfGenre"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" as "g" using ("genreId")
 where "actorId" = 178
group by "g"."name";
