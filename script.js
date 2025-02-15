const crocodileFacts = [
    {
        "fact": "Crocodiles are reptiles that belong to the family Crocodylidae."
    },
    {
        "fact": "They are found in tropical and subtropical regions around the world."
    },
    {
        "fact": "Crocodiles can live for over 70 years in the wild."
    },
    {
        "fact": "They are carnivorous and primarily eat fish, birds, and mammals."
    },
    {
        "fact": "Crocodiles have powerful jaws with a bite force that can exceed 3,000 pounds per square inch."
    },
    {
        "fact": "They are excellent swimmers and can hold their breath underwater for over an hour."
    },
    {
        "fact": "Crocodiles are ectothermic, meaning they rely on external sources to regulate their body temperature."
    },
    {
        "fact": "They have a unique ability to see in the dark due to a special membrane in their eyes."
    },
    {
        "fact": "Crocodiles communicate through a variety of vocalizations, including hissing and growling."
    },
    {
        "fact": "Some species of crocodiles can reach lengths of over 20 feet."
    }
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
    return crocodileFacts[randomIndex].fact;
}

document.getElementById('fact').innerText = getRandomFact();

document.getElementById('newFactButton').addEventListener('click', function() {
    document.getElementById('fact').innerText = getRandomFact();
});
