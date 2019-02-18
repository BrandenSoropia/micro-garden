# Dev Notes

Documenting progress, thoughts, lessons, shortcomings etc...

### Feb 18, 2019

**Note to self: Maybe write a better "lessons learned" post about this!**

I'm actually really thankful for giving TypeScript a shot! Even though it was a lot of bashing my head against the wall, it exposed me to the state management necessary for tracking plant state! I realized I knew what data was needed but never thought how the data would be accessed or updated!

I was able to decide on a simple structure for a plant registry that _hopefully_ makes it clear on what's in the state as well as flagging down where all this data lives! (Docs and code in `plants.constants.js`).

🏫 Putting my degree to work:

Now that I've got the basic structure down, I'm realizing that using classes would really be helpful! It would give a clearer blueprint of the "plant" object as well as provide easy access to getters/setters and any other useful functions I'd like to have! Why do I bring this up? Well my initial idea was to have helper functions handle things like incrementing plant development progress, but having the blueprint in one file and then the updating functions in another, I felt it would complicate the connection these two share! On top of that, my plant registry can become a huge dictionary with similar templates between plants. Implementing plant classes, I would be able to create a simple boiler-plate for new plants that would make it easy to create new plant types. In addition, if I were to add any new fields/methods, it would automatically be available to all instances for free! Lastly, a more specific example: how would I get plant sprites once a plant's data is passed to a component? I could write a helper function in the UI code to extract that info based on the plant's current progress and thresholds, but it doesn't make sense to root that in UI logic. It would be better off packaged with a plant class!

### Feb 16, 2019

I wanted to learn TypeScript, which seemed to have gone smoothly up until all my dependencies needed to also support it. It became too frustrating and complicated to define types for things like `createStructoredSelector` from `reselect` and `combineReducers` from `redux`. So in order to get this project up off the floor, I decided to cut TypeScript out and decrease the goals of this side project.

Here's what I'm deciding to do this time:

1. Build a game
2. Practice problem solving and architecting
3. Optional: Learn a new technology. A maybe easy contender is React Hooks?

I feel now that with reduced overhead I can now start working towards my goal!
