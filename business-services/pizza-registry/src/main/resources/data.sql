insert into ingredient(id, name) values (1, 'Pizza sauce');
insert into ingredient(id, name) values (2, 'BBQ sauce');
insert into ingredient(id, name) values (3, 'Mozzarella');
insert into ingredient(id, name) values (4, 'Bacon');
insert into ingredient(id, name) values (5, 'Salami');
insert into ingredient(id, name) values (6, 'Prosciutto');
insert into ingredient(id, name) values (7, 'Hunting sausages');
insert into ingredient(id, name) values (8, 'Vienna sausages');
insert into ingredient(id, name) values (9, 'Ham');
insert into ingredient(id, name) values (10, 'Smoked chicken');
insert into ingredient(id, name) values (11, 'Chili pepper');
insert into ingredient(id, name) values (12, 'Bulgarian pepper');
insert into ingredient(id, name) values (13, 'Mushrooms');
insert into ingredient(id, name) values (14, 'Fried mushrooms');
insert into ingredient(id, name) values (15, 'Onions');
insert into ingredient(id, name) values (16, 'Pickled onions');
insert into ingredient(id, name) values (17, 'Olives');
insert into ingredient(id, name) values (18, 'Tomato');
insert into ingredient(id, name) values (19, 'Pickled cucumbers');
insert into ingredient(id, name) values (20, 'Greens');

insert into pizza(id, name, price, img_link) values (1, 'Bavaria', 100.00, '/bavaria.png');
insert into pizza(id, name, price, img_link) values (2, 'BBQ', 90.00, '/bbq.png');
insert into pizza(id, name, price, img_link) values (3, 'Neapol', 80.00, '/neapol.png');
insert into pizza(id, name, price, img_link) values (4, 'Venskaya', 105.00, '/venskaya.png');

insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 1);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 3);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 4);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 5);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 7);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 16);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 11);
insert into pizza_ingredient(pizza_id, ingredient_id) values (1, 20);

insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 2);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 3);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 6);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 4);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 7);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 14);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 17);
insert into pizza_ingredient(pizza_id, ingredient_id) values (2, 19);

insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 1);
insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 3);
insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 9);
insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 18);
insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 17);
insert into pizza_ingredient(pizza_id, ingredient_id) values (3, 20);

insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 1);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 3);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 8);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 10);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 7);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 13);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 12);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 15);
insert into pizza_ingredient(pizza_id, ingredient_id) values (4, 20);

--- пицца-соус, моцарелла, бекон, салями, охотничьи колбаски, лук маринованный, перец чили, зелень
--- соус BBQ, моцарелла, прошутто, бекон, колбаски охотничьи, грибы жареные, маслины, огурцы соленые
--- пицца-соус, моцарелла, ветчина, томат, маслины, зелень
--- пицца-соус, моцарелла, сосиски венские, курица копченая, колбаски охотничьи, грибы, перец болгарский, лук, зелень

--- pizza sauce, mozzarella, bacon, salami, hunting sausages, pickled onions, chili pepper, greens
--- BBQ sauce, mozzarella, prosciutto, bacon, hunting sausages, fried mushrooms, olives, pickled cucumbers
--- pizza sauce, mozzarella, ham, tomato, olives, greens
--- pizza sauce, mozzarella, Vienna sausages, smoked chicken, hunting sausages, mushrooms, Bulgarian pepper, onions, greens
