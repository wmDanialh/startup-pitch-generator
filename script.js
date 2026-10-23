// 1. Set up the data structure with at least 3 different data sets
const startupIdeaParts = {
    productType: [
        'a dating app', 
        'a blockchain network', 
        'a smart toaster', 
        'a subscription box', 
        'a VR headset',
        'a social media platform'
    ],
    targetAudience: [
        'dogs', 
        'babies', 
        'time-travelers', 
        'aliens', 
        'tired software engineers',
        'indoor plants'
    ],
    sellingPoint: [
        'but it runs entirely on potatoes.', 
        'that passively insults you.', 
        'powered by aggressive AI.', 
        'with artificial gravity.', 
        'that only works in the dark.',
        'and it accepts payment in hugs.'
    ]
};

// 2. Create a helper function to generate a random index based on an array's length
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

// 3. Create the main function to compile the message
const generateStartupPitch = () => {
    // Create an array to store the generated message pieces
    let pitchParts = [];

    // Loop through the object to grab one random string from each array
    for (let key in startupIdeaParts) {
        let randomIndex = generateRandomNumber(startupIdeaParts[key].length);
        
        switch(key) {
            case 'productType':
                pitchParts.push(`Pitch: We are building ${startupIdeaParts[key][randomIndex]}`);
                break;
            case 'targetAudience':
                pitchParts.push(`exclusively for ${startupIdeaParts[key][randomIndex]},`);
                break;
            case 'sellingPoint':
                pitchParts.push(`${startupIdeaParts[key][randomIndex]}`);
                break;
            default:
                pitchParts.push('Not enough info.');
        }
    }

    // Join the array into a single formatted string and return it
    return pitchParts.join(' ');
};

// 4. Run the function and log the output to the console
console.log("===============================");
console.log(generateStartupPitch());
console.log("===============================");