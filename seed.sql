INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Billy", "Bob", "123789", "billy@gmail.com", 5556656655, "none", "none", 0);

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Mary", "Smith", "abc123", "mary@work.com", 1112232233, "peanuts", "peanuts", 0);

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Donald", "Glover", "L33ft!", "d.glover@hotmail.com", 5555555555, "none", "vegetarian preferred", 1);

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Martha", "Stewart", "b055m@m@", "martha@marthastewart.com", 9999999999, "none", "none", 1);

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Snoop", "Dogg", "5pleef", "snoop@dogg.com", 4444564564, "none", "none", 0); 

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Bill", "Gates", "B!llm0n", "bill@microsoft.com", 2222222222, "shellfish", "strict paleo");

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Gordon", "Ramsey", "!t5r@w!", "chef@ramseyrestaurants.com", "none", "make sure it's cooked properly");

INSERT INTO users (firstName, lastName, password, email, phoneNumber, foodAllergies, dietaryRestrictions, admin)
VALUES ("Michael", "Symon", "th3L@nd", "lola@cleveland.com", 2165555555, "none", "none");




INSERT INTO group (groupName, groupSize, admin, groupRules) VALUES ("Lunch Party", 4, "Martha Stewart", "No rules, just right");

INSERT INTO group (firstName, groupSize, admin, groupRules) VALUES ("Bad Meals for Work", 4, "Donald Glover", "We will allow one vegetarian meal a week.  Try not to poison us.");