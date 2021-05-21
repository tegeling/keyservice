var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Serve home content
app.get("/", (req, res) => {
  res.send("This is a sample key service. Service endpoint is /kid");
});

// Serve kid content
app.get("/kid", (req, res) => {
  res.send(
    '{\n"kid":"982c375b-f46b-4423-8c2d-4d1a69152a0b",\n"jwe":"eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00iLCJraWQiOiI5ODJjMzc1Yi1mNDZiLTQ0MjMtOGMyZC00ZDFhNjkxNTJhMGIifQ.NsXFnbM6uis-XB4CnRQLZH7odoUucTD9bTKHh4YiEN__KqNZCSfXsic1kYf6HRiM3gtZJQkN_xcVcUQtkXP9Yo0qC9FCNyA0mg3yuNVnD2Qhjh7J1Waox3xQoVLQz-Zn4L0-kYJqNL_BWgZAp-KCGW1oO-W2BYdxmFuv5lE3wQj-ESJRLoMtujhrvPnMPOaq9pRixYdQnlZiOqvKNGdC6QyadINeKO4ZnuxIkjDM7XBq_RVxZZDcs0KX7tePhMqbg9GbsETdzTfypalUykSs_5bUxXE271lD-EInt5_K1SUC6etVukLb3Xr-dLUcz2cygnIOdhcVFhUkQiLP14ofzrJcLsTxcnghV4dtfu4Cwgb4gW73eP2akcxWC36jqGnUoYezSafen5Px7ow0vMVsnYmhmaANaORfHW6sP_03t6kcrry0-qOBoSi53AOBWPNxLp15ZGtdNOAJGv_lMXD9j3J0ipMTkjS7mH_8pWOn7Zxiamn2VxwdAj_4t6KrrE2Wvi3y84il6vgWUfdFAP2N62FqsePkOrIVOZ9dF6ZrsD7pN6Zk7g0sCOI2gFGve_2bTOXe880U_Saj2vw8TgdmgQ2Pera6_vaYJ5Xq4uXWVFbdVM9sNrtkB_Pz1y7uKFSUFVJQ2OKMSHdTyWbqjW_jFcQ7wet504fEvUT8ObePB6k.UActtRs7Vgs8nJ41.vRCeIECmk5FOcq9kUxCbxC_d6e9msaWRRruBsrVQGMg.4yAG_BeaHCIyLpv22hZLTA"\n}'
  );
});

// Serve your app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
