const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send("A search for a needle in a haystack” is what, perhaps, best describes the experience of a 68-year-old mixed-race Briton, Mr Paul Bolton, looking for his Nigerian father, who he has never met. Bolton, a chartered structural consultant, living in Surrey, South-East England, began the search for his father, believed to be a Nigerian of Yoruba extraction, in 1993 but for 29 years he made but very little progress. The much information he had about his father did not avail him and his mother, whom he could have turned to for help, was unwilling to meet him, let alone offer any help. Till date, he has set eyes on neither of his parents.");
})

module.exports = router;