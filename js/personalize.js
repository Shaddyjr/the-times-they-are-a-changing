
function compile(){
	//Personalization

	// name of person
	var firstName = $("#firstName").val();
	var lastName = $("").val();
	var fullName = firstName + " " + lastName;

	//pic of person
	var benefitImageURL = $("benefitImageURL").val();

	// decription for image
	var benefitPhotoDescription = fullName + "named best photographer of the year.";

	// Paragraph 1 Info

	//net worth of person
	var netWorth = "$10,000,000";

	//movements/causes they support
	var movement1 = "Music education";
	var movement2 = "Cultural education";

	// Paragraph 2 Info

	//activities
	var activity1 = "attending the theater";
	var activity2 = "hiking in mountains";
	var activity3 = "eating out at fancy restaurants";

	//favorite food & drink
	var food = "";
	var drink = "";

	//area person lives in
	var area = "Upper West Side in New York City";
	var areaReason = "";

	// interesting fact
	var interestingFact = "";

	//Paragraph 3 Info

	//what person finds inpsiration from & reason for that
	var inspirationThing = "";
	var inspirationReason = "";

	// what person likes the most about all star Code
	var favoriteThing = "";
	var favoriteThingReason = "";

	// heading for benefitPhotoDescription
	var benefitHeading = fullName + "Wows at All Star Code Benefit";


	//benefit pargraph one
	var benefitParagraph1 = "August 6th," + fullName + " was named the top benefactor of the All Star Code 2016 Benefit." + lastName + "had donated a grand total of over" + netWorth + ".";
	benefitParagraph1 += "Hosted at Christina Lewis Halpern’s summer home in the East Hamptons," + lastName + "is well known for their participation in various movements, including" + movement1 + ",and" + movement2 + ".";
	benefitParagraph1 += "They have shown unwavering support, and have been a huge proponent of All Star Code since the beginning.";

	//benefit paragraph two
	var benefitParagraph2 = "On the weekends and in their freetime," + firstName + "can be found" + activity1 + ".";
	benefitParagraph2 += "They also enjoy" + activity2 + "and" + activity3 + "." + firstName + "enjoys" + food + "with a refreshing" + drink+ ".";
	benefitParagraph2 += name + "lives in" + area + ", which they enjoy living in because" + areaReason + "." + "One thing that many don't know about" + firstName + "is that" + interestingFact + ".";

	//benefit paragraph three
	var benefitParagraph3 = "One of the things that" + lastName + "finds inspiration from is" + inspirationThing + "because" + inspirationReason + ".";
	benefitParagraph3 += lastName + "uses this inspiration to help out different causes, such as that of All Star Code.";
	benefitParagraph3 += "One of" + lastName + "'s'" + "favorite things about All Star Code is that" + favoriteThing + ".";
	benefitParagraph3 += "They find this so great because" + favoriteThingReason + ".";


	// DONT PUT ANYTHING HERE!
	var hobbiesSubheading = '';
	$("#uniqueFiller").remove();
}