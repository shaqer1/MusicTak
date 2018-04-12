In general, follow directions [here](https://medium.com/codingthesmartway-com-blog/hosting-angular-2-applications-on-firebase-f194688c978d)

Do the following steps to set up hosting on your machine:
1. `ng build --prod`
2. `npm install -g firebase-tools`
3. `firebase login`
4. `firebase init`
   * Make sure you run this in the MusikTalk directory
   * Only select the **"Hosting"** option
   * Use the *dist* folder for deployment (made with step 1)
   * Select *yes* when asked if this is a single-page app
   * **DO NOT** overwrite index.html
5. `firebase deploy`

Do the following to redeploy to firebase:
1. `ng build --prod`
2. `firebase deploy`
   
