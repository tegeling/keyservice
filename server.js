var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Serve home content
app.get("/", (req, res) => {
  res.send("This is a sample key service. Service endpoint is /kid");
});

// Serve wrong kid content
app.get("/kidwrong", (req, res) => {
  res.send(
    '{"kid" : "kidwrong","jwe" : "XXJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00iLCJraWQiOiJraWQifQ.I2trjxWWGXYrUaWIAXAJ6hu80Gn0e6iRNlDTTZPlFZ4p-XPTfag3RxhKh-JmRwN6I1W0pClX6LpxSrOCvuULVEM9i-Fu8sHR4lVea8KNUIcq7yQwebTCliAm7dFYYeQfz2O4U1Wna_E2WptWoA71LfBlizUbJv1hk93OF35fbrkdMWgJrw9yjOO_Z9FtZh_9pwCJMxfsUeynNn3yTjOnTsMDuoHLV9a4n8jrSLcE_eGAg0hTEdn5IOB72gmVKn0CVeP-QwMKtQ1UoWXRWeiHkHBISdX1I26Ac1grC-q2Ul28jlBUbnY1jeh6LM3pHmSjpcxJpleEOl_xatSubK6ZV0uSky73CUcZgtnyLyTQVbZmHm-ewSQZrVNWUc9npYtfimQY3p8b4Kxh_1BOk_eXkDXy25UezQ8q9_7466XGtgdtYdHkGJq5PQmHBOrF1vm9TaqeO2JNYGOep2bobgWguC7VkjMFU67G1_FruAiDuw-xcDNd00Kjl-Dx9ErsOGlYVAy8EtyzZOWaFJp0dWAGg9ZB-o2eKYzSrM2IfngXkjp6XajL__A1r5RAJzfsEvay2FiLbFYDJ2wjl3TA5Ng8tHu_o21LpKEWIL-8ltgWu0Gy-NoauKMvGIc8BWS0RNGPWDkb9xnIjE_Ktfv3dcev6Aq43WtkXdvrSSxmdBa68aI.CB2yFT72mGc62HmD.hiGnCN1L7XcERvohTjk8EES7ZMkSVaF_BExNZEjWGXg.EVlAZJ5dhvEImVagYxSpNQ"}'
  );
});

// Serve kid content
app.get("/kid", (req, res) => {
  res.send(
    '{"kid" : "kid","jwe" : "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00iLCJraWQiOiJraWQifQ.I2trjxWWGXYrUaWIAXAJ6hu80Gn0e6iRNlDTTZPlFZ4p-XPTfag3RxhKh-JmRwN6I1W0pClX6LpxSrOCvuULVEM9i-Fu8sHR4lVea8KNUIcq7yQwebTCliAm7dFYYeQfz2O4U1Wna_E2WptWoA71LfBlizUbJv1hk93OF35fbrkdMWgJrw9yjOO_Z9FtZh_9pwCJMxfsUeynNn3yTjOnTsMDuoHLV9a4n8jrSLcE_eGAg0hTEdn5IOB72gmVKn0CVeP-QwMKtQ1UoWXRWeiHkHBISdX1I26Ac1grC-q2Ul28jlBUbnY1jeh6LM3pHmSjpcxJpleEOl_xatSubK6ZV0uSky73CUcZgtnyLyTQVbZmHm-ewSQZrVNWUc9npYtfimQY3p8b4Kxh_1BOk_eXkDXy25UezQ8q9_7466XGtgdtYdHkGJq5PQmHBOrF1vm9TaqeO2JNYGOep2bobgWguC7VkjMFU67G1_FruAiDuw-xcDNd00Kjl-Dx9ErsOGlYVAy8EtyzZOWaFJp0dWAGg9ZB-o2eKYzSrM2IfngXkjp6XajL__A1r5RAJzfsEvay2FiLbFYDJ2wjl3TA5Ng8tHu_o21LpKEWIL-8ltgWu0Gy-NoauKMvGIc8BWS0RNGPWDkb9xnIjE_Ktfv3dcev6Aq43WtkXdvrSSxmdBa68aI.CB2yFT72mGc62HmD.hiGnCN1L7XcERvohTjk8EES7ZMkSVaF_BExNZEjWGXg.EVlAZJ5dhvEImVagYxSpNQ"}'
  );
});

// Serve your app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
