
## Infobip People SDK example

  

> This is a proof of concept and part of AN-130 discovery taks.

  

### General

  

The People Web SDK is designed and developed so you can easily integrate your website with Infobip People. Here you will find an overview, a quick example on how to connect to Infobip platform via Web SDK, personalize and update profiles.

  

The main script function provided by [infobip documentation](https://github.com/infobip/people-web-sdk) were modified in a way to make the code more readble and understandable. The documentation above also gives examples on `setPerson` and `updatePerson`; the methods that we're focusing based on our goal; and some others.

  ### Atributes

The attributes that we can use in both `setPerson` or `updatePerson` methods are these:

<a href="https://drive.google.com/uc?export=view&id=10u_IMvI8khM1pE_6FmCvAlzCgw57w1hw"><img src="https://drive.google.com/uc?export=view&id=10u_IMvI8khM1pE_6FmCvAlzCgw57w1hw" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>
  

Remebering that `phone` and `email` props are different: they are an array of objects with just one key(`number` for `phone` and `address` for `email`) inside a parent prop `contactInformation` like below:

```json

"contactInformation": {	
	"phone": [
		{
			"number": "5541793026727"
		}
	],
	"email": [
		{
			"address": "janewilliams@acme.com"
		}
	],
} 

```

  
  ### Run
  

> WARNING: the data stored in infobip by these methods are from real people. 

This project show how to create a `Person` when the user sign up and how to update it when user is updated, for example. 
- First, clone the project and install the dependencies. 
- After, modify the payload objects at `public/infobip/payload`. The fields in `contactInformation`, `phone`, `email` and the optional ones should be filled with your real information to avoid fake informations in a production database.
- Uncomment `setPersonExample` or `updatePersonExample` method in `public/infobip/index.js`, depending on which one you want to test.
- Also in `index.js`, put your infobip api key in the parameter object to the `infobipRoutine` function and the operation type(`set` or `update`).
- Execute `npm start`.
- Go to `localhost:8080`. Don't worry about the blank screen; the browser console should show an infobip object. If you're testing `setPerson` the object should contain a `person` prop, otherwise, it will contain `personToUpdate` prop.
- Go to Infobip Person Dashboard and find the person that you created/updated to check if the parameters sent updated infobip database.
