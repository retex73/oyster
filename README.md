To create the project
    from the root, type npm install (assuming npm and node is available)
    https://www.npmjs.com/get-npm

To run: 

    -> npm run server

To compile new js: 

    -> npm run webpack

To test: 

    -> karma start



Within the time limits of 2 hours (and truthfully I probably spent a little more than that on and off) I couldn't quite complete the logic of fare calculation but I had to draw a line at the approx 2 hours mark. 

Retrospectively I spent too much time on layout and not enough time on the algorithms for fare calculations

What I did want to demonstrate is the project layout, a testing structure in place and code separation 

Where I was going with the TransportTypes is to create a reliably consistent vocabulary of types which didn't rely on typing 'Bus' or 'Tube' across multiple javascript files and I'm not sure I quite achieved what I set out to do here 

My end objective was to create an interface to represent journey start, barrier entry, barrier leave (as many times as necessary) and journey end to yield not only the calculated fare but also the credit on the oyster card

*Feedback on the test... 
As I'm working away with my current contract I didn't have the time to do this test in one sitting so it doesn't represent my full attention however I really enjoyed the challenge the test posed and the freedoms given to use whatever technolofies I saw fit