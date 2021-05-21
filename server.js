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

app.get("/kidsearch", (req, res) => {
  res.send(
    '{"kid" : "kidsearch","jwe" : "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00iLCJraWQiOiJraWRzZWFyY2gifQ.Q1U5cPRkNMXxEeiMJs6zPbsGfw4X7GUixMqXLj_skl9e2sdCYXY0tPZ_PzN6aN7DDwwIG9grre3T6agivPvoG5wGjqWbHP4lr3RHWxOw06N5tgvcmaJbckMxa_LL-AaDVnuqNuLJse4YilZxPqr5PoPVyzLXhCtiwXHFzEN4buowbCodFqCfvkzWieZFv5LO2kDNPjCC2qhi9xdiDppj_EHm5tS933clRlKlyOfeGEPN7NTuWcUkR-Sp7DbntcUl7Im-NpZG4FElujOMZGlzg4z8zPyOQ2Do-IMHIKAFcs0oGAFJTq7SD7hHeBA26E_ELx6LgvHW-WeYMDGNuq-J5bH6xcoG9ndSeqDOzbjuOwl42UDNRmFvCxF7P9Sj4Y9bjw-SBtj4NxTVjRAttKTKQJleCudFbztmc2dLO8fAGb7gKaU_MfrKzfqnvK1jxVIVxwaUinlDumq1cko_w24UUev3eq3g84O1pEEvMs_DYi-kjpol9sMudMBta2RI6bsdwtvsr1l8xXxfwa4EDnZj5mxzL8DyFwqWC2kKUcoDjjds6mfLUCtepqN1QMpyvcMQpNCO2L93mfRs660tO_9V48y2nCdL6InJOlmeUISOq_X_QXbtBf9vdmiWKDWE28ZytxSbVQO2FgwXgkx9oA2-KeCe6WGzHn3178J2Ui0EP0o.tgoLE5fV27xj7VCU.kPash6rCYZ5lkIPCm4zuVGJ9oD3sUAF_Uoumy650M1U.Lx33NcPOrAd2xVI5wZpCww"}'
  );
});

// Serve your app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
