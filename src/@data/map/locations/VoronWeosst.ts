import { Location } from "../../../@types/Location/Location";
import { DataTypeIds } from "../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../Constants/Ids/LocationIds";
import { dataItemToLinkable } from "../../../Utilities/LinkableString";

export const VoronWeosst: Location = {
  id: LocationIds.VoronWeosst,
  type: DataTypeIds.Location,
  description: [
    "A large city with a population of mostly elves, half elves, and humans, Vorenwööst ('Ringed City' in Elvish) is a city located in the north of Misthalin. The city is a large trade hub for the area, and is well known for its art and famous plays of common occurrances or previous legends.",
    `The city was founded in the second age, but didn't become the place it is today until the Age of Sairina, when a number of powerful transmutation and conjuration mages moved to the area. They spent years erecting 100m high, 10m thick granite walls, around the city,
    with a larger ring many km further out surrounding the first city wall, at the same height.`,
    `Early in its history, Voronwë'osst was a small, partially subterranean city. The city sat on a deposit of beautiful luminous crystals, that locals found could hold a small amount of the Weave's energy.
    The crystals currently serve as a common light source for the city inhabitants and other peoples, as well as a base for many spell storing gems, resulting in flourishing trade.`,
    `The ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfTransmutation)} lies slightly south of the ringed city, within the Agrarian a large teal-crystal colored tree tower that houses most of the most able transmuters within the kingdom.
    The original transmuters that founded the city built this tower after creating the two large walls.`,
    `The outer ring area, known as the Agrarian ring, is a huge area of mostly farmland. The majority of the city exports are foods, such as vegetables, that are often preserved and exported across the country, as
    well as light crystals mined from under the city. The city also exports a large amount of tea, as the Agrarian zone has a near perfect climate for growing many different types of tea in`,
    "Voronwë'osst as been hailed for its insurmountable fortifications, having remained unconquered for centuries prior to the Unification of Misthalin.",
    ["Important locations in or near the the city include:", ""],
    ["Outer Wall:", `The outer wall is 100m high and approx 10m thick, and observation stations are positioned all the way round the outer wall for protection.
    Many people live in suspended houses built into the side of the walls, with most houses being near the north and south entrance gates to the city.`],
    ["Agrarian Zone:", "This area in the city houses many farms belonging to citizens, some of whom live behind the Inner Wall and travel outside to tend to the land every day."],
    ["Fighting Cliffs:", `South-east of the city, the fighting cliffs one white and the other red, face each other with a wide ravine between them.
    Early natives noticed that the ground of the ravine was charred and black, and legend holds that the cliffs were created in an ancient battle between earth and fire elementals, the conflict being so awesome that the very ground they fought on soaked up their power and animosity.
    The cliffs are currently mined for spark rocks, small stones used by Earth Kingdom citizens to start fires.`],
    ["Inner Ring (main city):", "The main part of the city, locations below are within this area."],
    ["Monorail:", `The monorail is an immense mass transit network spanning the entire city that serves as the primary mode of transportation for the city's aristocracy and general population.
    Originally, the cars were pushed from one end of the rail network to the other by magic propulsion, but it was incredibly slow. More recently, the city has been trialing both more powerful magic engines, as well as
    crude steam engines. The monorail was the brainchild of ruler Yi Ming hundreds of years ago, an ingenious but impatient ruler who was tired of having to spend two full days traveling from one end of his city to the other.
    He tasked his engineers with finding a solution to his traveling woes; the result was the best mass-transit system in the entire world, with no equal in speed, safety, or comfort.
    The monorail is cheap to use, and many commoners use it to get around the city.`],
    ["Voronwë'osst University:", `This university is a prominent feature of the main city and is still one of the greatest centers of learning in the world. Music, zoology, architecture, anthropology, art, geography, history, political science, astrology,
    science, engineering, mathematics, and drama are just some of the classes taught here.`],
    ["The Royal Palace:", `The royal palace, located in the Upper Ring of the city, houses the seat of government of the City. It has been the seat of power for every known leader of the City since it was built.
    the palace and surrounding grounds served as the spiritual and political center of the surrounding area for many centuries. The palace grounds also contain the Rauta Prison, a maximum-security jail made entirely of solid metal in order to prevent
    powerful mages and creatures from escaping the city. The prison houses some lower level criminals, and is heavily guarded and fortified against escape as well as infiltration. The prison is overlooked by Long Feng.`],
    ["Crystal Catacombs of Old Voronwë'osst:", `Underneath the palace, and possibly much of the city, lies Old Voronwë'osst, an ancient, small underground city deep within the earth.
    These catacombs are the remnants of the first settlement in the area, carved underground many centuries ago. As the old city spread to the surface,
    the caverns were abandoned and eventually buried beneath the new city. Some crystals are still mined from the caverns, but much less than they used to be.
    Inside the interior of Old Voronwë'osst still lie ancient stone structures, a waterfall and pool, and the luminescent green crystals that gave the city its fame.`],
    ["Firelight Fountain:", `Located in the south of the city, the Firelight Fountain is popular with citizens who come to feed the turtles and ducks in the day, and considered by many to be the most romantic spot in town at night.
    The fountain is encircled by lanterns that brighten the entire area. There is a stone structure in the middle with a top center lamp and a lower level of lamps, and lanterns floating in the water.`],
    ["Fancy Lady Day Spa:", "The Fancy Lady Day Spa is an Upper Ring establishment for pampering noblewomen that has a university attached to it where students can experiment with new ideas on actual customers who, in return, receive a discount on their spa day."],
    ["Voronwë'osst Zoo:", "The zoo is located at the edge of the city, towards the north. It is managed and maintained by Kenji."],
    ["The Middle Ring Tavern:", "Located in the middle ring, this tavern is considered charming to locals and travellers alike, and is well known for its spicy and complex fried foods."],
    ["Pao Family Tea House:", "This Lower Ring establishment, run by Pao and Zuko, is the most famous tea house in the city. It is nearly always busy, and attracts people from all over the world who are enthusiastic about the choices of drink served from here."],
    ["The Jasmine Dragon:", `An upper class tavern in the Upper ring, the Jasmine Dragon is a large, exquisite marble building, tea house and tavern. Two separate, broad stone steps lead up to a neatly tiled patio in front of the tea shop; in the middle of this patio is a large,
    rectangular fountain with a statue in the center of the Emerald Dragon 'Raulothim'. The elevated position of the terrace provides a panoramic view over the city.
    With fine rooms, the guests that stay are refreshed, well fed, and nearly always happy. The tavern is regarded as a fantastic staying place for the wealthier who stay in town. The tavern and tea house serves tea and alcoholic drinks aplenty, and is well known for its cold brewed alcoholic tea`],
  ],
  population: "60,000 (30% elves, 25% human, 25% half-elves, 12% dwarf, 6% gnome, 2% other)",
};

export const VoronWeosstOuterRing: Location = {
  id: LocationIds.VoronWeosstOuterRing,
  type: DataTypeIds.Location,
  description: VoronWeosst.description,
};
