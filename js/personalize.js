
function compile(){
	//Personalization

	// name of person
	if ($("#firstName").val()!=""){
		var firstName = $("#firstName").val();
	}else{
		var firstName = "Bob";
	};
	
	var lastName = $("").val();
	var fullName = firstName + " " + lastName;

	//pic of person
	var benefitImageURL = $("benefitImageURL").val();

	//Look into
	// https://api.imgur.com/endpoints/image


	// decription for image
	var benefitPhotoDescription = fullName + "named best photographer of the year.";

	// Paragraph 1 Info

	//net worth of person
	var netWorth = $("netWorth").val();

	//movements/causes they support
	var movement1 = $("movement1").val();
	var movement2 = $("movement2").val();

	// Paragraph 2 Info

	//activities
	var activity1 = $("activity1").val();
	var activity2 = $("activity2").val();
	var activity3 = $("activity3").val();

	//favorite food & drink
	var food = $("food").val();
	var drink = $("drink").val();

	//area person lives in
	var area = $("area").val();
	var areaReason = $("areaReason").val();

	// interesting fact
	var interestingFact = $("interestingFact").val();

	//Paragraph 3 Info

	//what person finds inpsiration from & reason for that
	var inspirationThing = $("inspirationThing").val();
	var inspirationReason = $("inspirationReason").val();

	// what person likes the most about all star Code
	var favoriteThing = $("favoriteThing").val();
	var favoriteThingReason = $("favoriteThingReason").val();

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

	$("#benefitParagraph1").text(benefitParagraph1);
	$("#benefitParagraph2").text(benefitParagraph2);
	$("#benefitParagraph3").text(benefitParagraph3);


	$("#uniqueFiller").remove();
}