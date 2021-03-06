w08-tiny-react-apps

When learning a new technology, especially frameworks, beginners often fall in the trap of trying to bit more than they can chew. To learn React, instead of writing one fully-featured application, we propose building several tiny applications that implement simple ideas. The component-based nature of React plays really well with this approach, tiny applications can be as small as a single component or they can later become part of a bigger application. Either way, you'll get tons of practice by being exposed to different problems and patterns.

Tiny applications should be achievable goals, small projects that you can start and finish in a matter of days and you can potentially improve or scale later. Finishing a project, no matter how small, will give you momentum and the boost of confidence that you need to keep developing your skills.

Another great benefit of building several tiny apps is that you get to show future employers a wider range of skills by choosing to use different libraries and approaches.

Day 1

Start by building an Emoji Search app that renders a list of emojis and allows you to search and filter by name and keywords. Use the provided JSON file as your source of data.

Hint: The key to the filter functionality lies on the onChange event handler for the input element.

Day 2

Build a Calculator app that replicates the functionality and looks of your operating system's calculator. It should be able to at least perform the 4 basic mathematical operations but you could go build a scientific calculator if you feel up to the challenge.

Since you are going to have to render a lot of buttons, this is a great application to practice writing reusable components.

Spend some time playing with the actual calculator you are trying to copy and try to reverse engineer how it manages its state.

More ideas for apps

Constrain yourself to just 1 or 2 features. Only think about extending your app after implementing the core idea. Think of a common problem that you face daily or an app on your phone that you don't quite like how it works. What could you do better?

Dictionary app: use a JSON file as your source of data (like the one from here)

Grocery list app: like a To Do list but with support for grouping items by recipe and different quantities (with different units!). You could add features like reusing lists. This is a good app to learn about localStorage to stor application data without a server.

Personal budget tool: import bank transactions from your bank (probably as a .csv file) parse it to JSON and then write an app that lets you search, sort and filter them.

Noughts and Croses game

Basic calendar app

Image gallery app

Recipe search app

Hangman game

Steps

Clone the starter repo
Remove the origin remote and add a new origin that points to a repository on your GitHub profile.
git remote remove origin
git remote add origin <url to your repo>
Install dependencies
Run the start NPM script
Build your app by following the steps on CHECKLIST.md

