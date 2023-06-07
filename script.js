var quoteLists = [
    "Knowledge is power. -Francis Bacon", 
    "We cannot learn without suffering. -Aristotle", 
    "The secret to progress is to start. -Mark Twain", 
    "Talking is free, show me the code! - Linus Torvalds", 
    "Simplicity is a prerequisite for reliability. -Edsger W. Dijkstra", 
    "Focus is being able to say no to 1000 good ideas. -Steve Jobs", 
    "I never let my school interfere with my education. -Mark Twain", 
    "Our great ideal is to raise our nation to the highest standards of civilization and prosperity. -M.Kemal Atatürk",
    "If there is no struggle, there is no progress. -Frederick Douglass"
];

var quotePassage = document.getElementById('random-quote');

var random_quote_number = Math.floor(Math.random() * 9);

var changePassage = quotePassage.innerHTML = quoteLists[random_quote_number];
