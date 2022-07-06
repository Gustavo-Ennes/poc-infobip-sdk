import { setPerson } from "./example/index.js";
import { updatePerson } from "./example/index.js";
import { infobipInitialization } from "./init.js";

const infobipRoutine = ({ apiKey, type }) => {
  try {
    const personFunction = type === "update" ? updatePerson : setPerson;

    infobipInitialization(apiKey);
    personFunction();
    infobip.forgetPerson();
  } catch (err) {
    console.log("infobip error: ", err);
  } finally {
    console.log("infobip object: ", infobip);
  }
};

infobipRoutine({
  // apiKey: "your-api-key",
  // type: "set or update"
});
