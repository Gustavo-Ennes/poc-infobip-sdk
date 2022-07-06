const createTagObjectIfNotExists = ({ infobipScriptEndpoint, tag }) =>
  window[tag] || {
    init: function (document) {
      window[tag].apiKey = document;
    },
    setPerson: function (document, infobipScriptEndpoint) {
      window[tag].person = document;
      window[tag].personTtl = infobipScriptEndpoint;
    },
    forgetPerson: function () {
      window[tag].toForgetPerson = true;
    },
    track: function () {
      (window[tag].q = window[tag].q || []).push([
        document,
        window,
        infobipInitialization,
        tag,
      ]);
    },
    updatePerson: function (document) {
      window[tag].personToUpdate = { person: document };
    },
    appendToList: function (document, infobipScriptEndpoint) {
      window[tag].attributeToAppend = {
        attributeName: document,
        attribute: infobipScriptEndpoint,
      };
    },
  };

const setUpScriptElement = (infobipScriptEndpoint) => {
  const scriptElement = document.createElement("script");
  const firstScriptInHtmlDocument = document.getElementsByTagName("script")[0];

  scriptElement.async = 1;
  scriptElement.src = infobipScriptEndpoint;
  firstScriptInHtmlDocument.parentNode.insertBefore(
    scriptElement,
    firstScriptInHtmlDocument
  );
};

const setUpInfobip = ({ infobipScriptEndpoint, tag }) => {
  window.PeopleEventsObject = tag;
  window[tag] = createTagObjectIfNotExists({ infobipScriptEndpoint, tag });
  setUpScriptElement(infobipScriptEndpoint);
};

export const infobipInitialization = (apiKey) => {
  setUpInfobip({
    infobipScriptEndpoint:
      "https://s3.eu-central-1.amazonaws.com/portal-cdn-production/people-events-sdk/pe.latest-2.js",
    tag: "infobip",
  });

  infobip.init(apiKey);
};
