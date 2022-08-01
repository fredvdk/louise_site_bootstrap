import { calendar_v3, google } from "googleapis";


const GOOGLE_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNEQKclqcYp5ty\nTRLZRJXt06JSjHftD1nbZ7p0fMZ7T9y+yIlx/a8sC2MUvQE9PAIGB1QOzK+6wRpC\nYySH9fLOMN++zmaE6QxiF4OqVaqaP8KRHi/nXld2rE62w00sLEPbY/mWgcJZOQXt\ngFcvjCqblWTwPC5CRBmKOkHmRiwf6TZGGjv/idwoMlY02GRO5O315Hd6ScwRA0B3\n+hj17FDSdKI+Wtyzrfvkp8S69xXCPMBnpRFdZGDcGREGXWBKvc1lmYbHagcv/rst\n2a3r+bXSI9ygTObPBDKErjVEr8cXjSBIMq8fxnM3gzPXWEusibUPKvv8JiKlI18t\nL/Wy/eaXAgMBAAECggEAXg4eP4oNzA4cCxn0ujht9+4otmn9G3r+ANcbuw/7zVU8\n7zh1ahYsASyb3kguSFK8rt0vnbYeJ68oBykH+WBCZHYgOZjbhryJVHhqiHbQT/1M\nlVjeKeWogiLX25XKUKdg3ECHmpObe2bfJCbIVmOYq1GjQVio8vXfLPo5fY/T7zIp\n56wa8OdTYyWOBqEYY17CgI5VEQnigpWxt35yO/cWUcFMuVuT8Z2kcjmncHmzrMve\n0HXeCNz6evvKnyzht3bYqcMbltTHYFVQADPlanfSBCHb/3kMYGxBwHZMral9Gxtf\nLN5JUFE8IJiXpHxFTB0+sq8ikyBbynLcZ9suMTtXEQKBgQD8k8YhnS7ii+qR1dAw\njCL69TdUgK7oid5VtOi0RPLJ44O8jI6hVoj53q30O+EN0AezSW3zr+2ARjXDfu+B\nXkL6ZFgkVJOuQu2NTgs/S2S6A4v9jBaeHFBTVS89iG1CLBhEx+ld/GaCqK/QxT43\nyzlkUa6by0uhdyVsbUVahY2LaQKBgQDP2Gojhb1QRW2/49JTfVZyCrXTpf1YJmcQ\nElA49IRafsOIqYrqZ07xaskpfDBwj0HFEswZ0DhuRrcl0QRGS4utbt2k083SDEZG\n+gv+Rf0yam5Gedk7qeZMCdOhP/NKmgRO8P2t+xhczh1nEHeo5Dr1GAS/5eHy5Qzn\nlA0QWFuh/wKBgCUn9Aiz39bR8HL9uj+6DddPRZF30MNCrON81pLWZcUPZCzTnJPd\ncA8aFAsO1/+5L7jPP46OveiV64jT3pXwcPf21QSbMJJ9JAcaiQsJo0q+BNUKy7T8\nw1BPAsERlckbRYKwygLag5YLDLowmgOJMOsyHPasRHb/WREHTiGP7g+pAoGBAKTC\n+eCO9DPd1dJ31xM4GH7u3pSY0OxABRNIcS+1JfZW5so/HFAU9Q+Lh0vLltqjtY90\nBzevSAyjIixoNOtEl8U0TZ+MB2yrLkq1jSxUbxK4LBLSJNKXLGi6oXkCKOrKjP/H\nKlHw6q8m9UfuVe0cf2ArWhiFM0hJKqGpS3HZmUohAoGAduekFG9f8Xv0s7cufmAl\nffU5Gpkjxf8SVftunt0RRRprt0q8gEEIaaDQ3DhZIb7oeJMR4CiA6u1jBYM60buQ\nZA8mLzzMT51Lgc4ITmzHGzbgbtaSn6a+Se+4G3RW7PYLRfLDPIo8vZ5A6RfVl7lf\n1yra3CFdvcrZ/sy4nNz+mUk=\n-----END PRIVATE KEY-----\n';
const GOOGLE_CLIENT_EMAIL = 'datesapi@datesfirebase-ca17c.iam.gserviceaccount.com';
const GOOGLE_PROJECT_NUMBER = 'datesfirebase-ca17c';
const GOOGLE_CALENDAR_ID = '6l35r799pm4fnb8a3i45v10n44@group.calendar.google.com';
const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const JWTclient = new google.auth.JWT(GOOGLE_CLIENT_EMAIL, '', GOOGLE_PRIVATE_KEY,SCOPES);

var eventList: calendar_v3.Schema$Event[] | undefined = [];

const options: calendar_v3.Options = {
    version: "v3",
}
const calendar = google.calendar(options);

const auth = new google.auth.GoogleAuth({
    keyFile: "./keys.json",
    scopes: SCOPES,
  });

  const getEventList = async () => {
    auth.getClient().then((auth) => {
        calendar.events.list(
          {
            auth: auth,
            calendarId: GOOGLE_CALENDAR_ID,
            timeMin: (new Date('Jul 2 2022')).toISOString(),
            timeMax: (new Date('Jul 12 2022')).toISOString(),
            singleEvents: true  //every event of recurrent event is shown
          },
          function (error, response) {
            if (error) {
              console.log("Something went wrong: " + error); // If there is an error, log it to the console
              return;
            }
            if (response != null)
           // console.log("List details: ", response.data.items); 
            eventList = response.data.items;
            console.log(eventList);
          }
        );
      });   
}


export default getEventList;
