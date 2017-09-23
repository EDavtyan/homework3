const volumeOfCuboid = function(width, length, height) {
	const calculation = width * length * height;
	return calculation;
};

const noInput = function() {
	return "Hi, I am a useless fuction. Guess what? I have no purpose!!!";
};

const LifePurpose = function(YourThoughts) {
	YourThoughts = "Potato.";
};

const fullName = function(firstName, lastName) {
	return firstName + " " + lastName;
};


const LongerGuy = function(string1, string2) {
	if(string1.length > string2.length) {
		return string1;
	} else if string2.length > string1.length {
		return string2;
	} else {
		return "I know nothing.";
	}
};

const theLongestGuy = function(string1, string2, string3) {
	return LongerGuy(LongerGuy(string1, string2), string3);
};
 

const zeroOneOrMinusOne = function(num1, num2) {
	if(num1 > num2) {
		return 1;
	} else if (num1 < num2) {
		return -1;
	} else {
		return 0;
	}
};

const ifTrue = function(input1, input2) {
	if (!!input1) {
		return input1;
	} else if (!!input2) {
		return input2;
	}

};

const firstTruethy = function(input1, input2, input3) {
	return ifTrue(ifTrue(input1, input2), input3);
};