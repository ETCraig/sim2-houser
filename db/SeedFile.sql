create table houserUsers(
userid serial PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(20) 
);

INSERT INTO houserUsers
(username, password)
VALUES
('username', 'password') RETURNING *;

SELECT * FROM houserUsers WHERE id = $1;

DROP TABLE IF EXISTS houserProperties;

CREATE TABLE IF NOT EXISTS houserProperties(
    user_id INT,
    prop_id serial PRIMARY KEY,
    prop_name TEXT NOT NULL,
    prop_desc TEXT NOT NULL,
    address VARCHAR(60) NOT NULL,
    city VARCHAR(60) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip INT NOT NULL,
    img_url TEXT NOT NULL,
    loan_amt FLOAT NOT NULL,
    mon_mort FLOAT NOT NULL,
    rent FLOAT NOT NULL,
    foreign key (user_id) references houserUsers (userid)
);

INSERT INTO houserProperties
(user_id, prop_name, prop_desc, address, city, state, zip, img_url, loan_amt, mon_mort, rent)
VALUES
(1, 'The Chartwell Estate', 'Designed by architect Sumner Spauling, showing off grand 18th-century French Neoclassical style over 25,000 square feet. Interior highlights include a ballroom, formal salon, and paneled dining room.', 'Bel Air', 'Los Angeles', 'CA', 21014, 'https://cdn.vox-cdn.com/thumbor/Py90_D2FmQHKzBm-eyGrvmNZoI8=/0x0:1600x842/1200x800/filters:focal(672x293:928x549)/cdn.vox-cdn.com/uploads/chorus_image/image/56092045/1.0.jpeg', 1000000, 25000, 8000),
(1, 'Bel Air Spec House', 'Inside its outer shell of glass, pools, turf, and white walls, youll find endless amenities, including a huge glass candy wall, James Bond-themed home theater, four-lane bowling alley, and more.', 'Bel Air Rd', 'Los Angeles', 'CA', 21014, 'https://cdn.vox-cdn.com/thumbor/WRhuMEIOCZTR24kDn-gmgNqepCo=/0x0:5529x3313/1200x800/filters:focal(2323x1215:3207x2099)/cdn.vox-cdn.com/uploads/chorus_image/image/59411791/01.BelAirRoadBackDAY_300DPI.0.0.jpg', 850000, 21500, 7100),
(1, 'Manalapan Megamansion', 'With 33 bedrooms and 47 bathrooms, you can entertain your entire extended family and then some. The estate features 1,200 feet of private ocean front, a botanic garden with 1,500 species of tropical trees and plants, a sports complex, a treehouse, and so much more.', '2000 S Ocean Blvd', 'Lantana', 'FL', 33462, 'https://cdn.vox-cdn.com/thumbor/PT9SLE1PX-dHdo0PNx7ZYX9pMfk=/205x0:1349x858/1200x800/filters:focal(205x0:1349x858)/cdn.vox-cdn.com/uploads/chorus_image/image/48679791/Screen_20Shot_202016-01-29_20at_201.01.36_20PM.0.png', 740000, 18000, 6100),
(1, 'West Creek Ranch', 'The roughly 7,000-acre property includes not only a huge main residence with a two-level circular stone library and helipad, but also jaw-dropping views of Precambrian rock cliffs.', 'Foy Rd', 'Gateway', 'CO', 81522, 'https://images.gabrielstechnology.com/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fn0rdsanrdfrd4tepctj9vtjcv2i215&option=N&w=1024&permitphotoenlargement=false', 680000, 15000, 5200)