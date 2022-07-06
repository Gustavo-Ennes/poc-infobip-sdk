import setPayloadExample from "../payload/setPayloadExample.js";
import updatePayloadExample from "../payload/updatePayloadExample.js";

export const setPerson = () => infobip.setPerson(setPayloadExample, 2000);

export const updatePerson = () => {
  infobip.setPerson({
    email: updatePayloadExample.contactInformation.email[0].address,
  });
  infobip.updatePerson(updatePayloadExample);
};
