select "ctry"."name" as "country",
       count(*) as "numberOfCities"
  from "countries" as "ctry"
  join "cities" as "c" using ("countryId")
group by "ctry"."countryId";
