This ReadMe is currently only instructions for group members building this app.

*Step 1:*
Do intial git pull

*Step 2:*
a) In order to insure that you have all of the necessary packages installed, while you are in the btinder directory, do a yarn install or npm install. This will download all of the needed node_modules that the package.json requires for the server side.

b) Now we will install all of the node_modules needed for the client side. Switch to the cient directory. Again, do a yarn install or npm install and this will install all of the packages required by the package.json for the client side.

*Step 3*
Switch back to head btinder directory. You can run the server and client concurrently with the command npm run dev. This will run the server first and then at the same time run the react client side. If there are any issues it could be because some packages may have not been installed, like concurrently for example. If you need to manual download a package do so with this example... 

npm install concurrently --save

!!!!!!!



