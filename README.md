# code.Project

code.Project is a resource allocation tool for project planning purpose specifically for software developers.

Users may Add Private and Public Projects depending whether collaborators will be involved.

Users may add Overviews, Technologies Used, the ERD for the project, wireframes, as well as supplemental notes, code snippets, and images. A basic Project board is also provided. PDF Export capabilites are also supported, so a user may export all the details of a project, and share as a PDF.

Users may invite others to be collaborators of the app, who have similar CRUD capailites so they may add and edit details as planning progresses.

## Install Instructions

Clone the repo down.

```
git@github.com:shanemiller89/codeProject-client.git
```

cd into the newly created directory and run:

```
npm install
```
To set up images support, set up a [firebase](https://firebase.google.com/) account and create the following files

```
src/confif/firebase.js
```

From the side menu, click the ***Storage*** menu item, and create file bucket. Once created, click the Rules tab and change the config to the following:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```

Then click the gear icon in the side Menu and look for ***Firebase SDK Snippet***. Cick the Config Radio Button and copy the cofig below. Should look something like this:

```
const firebaseConfig = {
  apiKey: "{ Your Key }",
  authDomain: "app.firebaseapp.com",
  databaseURL: "https://app.firebaseio.com",
  projectId: "app-client",
  storageBucket: "app-client.appspot.com",
  messagingSenderId: "{ Your Id }",
  appId: "{ Your Id }"
};
```


Paste this into the firebase.js file you created above.

Download the associated API [here](https://github.com/shanemiller89/codeProject-API), and follow install instructions.

Now just run:

```
npm start
```

And your ready to go!

## Entity Relationship Diagram

![alt text](https://firebasestorage.googleapis.com/v0/b/codeproject-client.appspot.com/o/app_resources%2FcodeProject-ERD%20(1).png?alt=media&token=0d88e89c-ba62-4459-b83c-db9f070bc65e "ERD")

## Technologies Used

## Author

Shane Miller

