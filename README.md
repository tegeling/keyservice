# Salesforce Shield Platform Encryption Key Service

This repository contains a sample Salesforce Shield Platform Encryption Key Service for a Heroku based deployment to easily reproduce the setup and configuration steps.

See details about Salesforce Shield Platform Encryption Cache-Only Key Service at https://help.salesforce.com/articleView?id=security_pe_byok_cache.htm&type=0

## Setup Instructions

### 1. Generate and download a self-signed certificate in Salesforce

In your Salesforce Setup under **Certificate and Key Management** create a new self signed certificate with the following settings:
Select the Use Platform Encryption checkbox, choose the 4096-bit key size, and deselect the Exportable Private Key option.

![Self Signed Certificate setup](/assets/certificate.png)

After save you must download the certificate to generate the key material in the next step 2.

### 2. Generate your key material

Use the tool and instructions provided in https://github.com/forcedotcom/CacheOnlyKeyWrapper to generate the JSON containing the key material.
Use your self signed certificate from steps 1 as an input parameter for this CLI tool:

`WrapEncryptionKey -c Keyservice_Cert.crt -i myKID`

Copy your Key Identifier (like myKID in this example or use the default UUID option), because it is needed in step 5 when configuring your cache-only key.

Keys are wrapped in an encrypted JSON format. For example here is a valid response:

```javascript
{
  "kid": "myKID",
  "jwe": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00iLCJraWQiOiI5ODJjMzc1Yi1mNDZiLTQ0MjMtOGMyZC00ZDFhNjkxNTJhMGIifQ.NsXFnbM6uis-XB4CnRQLZH7odoUucTD9bTKHh4YiEN__KqNZCSfXsic1kYf6HRiM3gtZJQkN_xcVcUQtkXP9Yo0qC9FCNyA0mg3yuNVnD2Qhjh7J1Waox3xQoVLQz-Zn4L0-kYJqNL_BWgZAp-KCGW1oO-W2BYdxmFuv5lE3wQj-ESJRLoMtujhrvPnMPOaq9pRixYdQnlZiOqvKNGdC6QyadINeKO4ZnuxIkjDM7XBq_RVxZZDcs0KX7tePhMqbg9GbsETdzTfypalUykSs_5bUxXE271lD-EInt5_K1SUC6etVukLb3Xr-dLUcz2cygnIOdhcVFhUkQiLP14ofzrJcLsTxcnghV4dtfu4Cwgb4gW73eP2akcxWC36jqGnUoYezSafen5Px7ow0vMVsnYmhmaANaORfHW6sP_03t6kcrry0-qOBoSi53AOBWPNxLp15ZGtdNOAJGv_lMXD9j3J0ipMTkjS7mH_8pWOn7Zxiamn2VxwdAj_4t6KrrE2Wvi3y84il6vgWUfdFAP2N62FqsePkOrIVOZ9dF6ZrsD7pN6Zk7g0sCOI2gFGve_2bTOXe880U_Saj2vw8TgdmgQ2Pera6_vaYJ5Xq4uXWVFbdVM9sNrtkB_Pz1y7uKFSUFVJQ2OKMSHdTyWbqjW_jFcQ7wet504fEvUT8ObePB6k.UActtRs7Vgs8nJ41.vRCeIECmk5FOcq9kUxCbxC_d6e9msaWRRruBsrVQGMg.4yAG_BeaHCIyLpv22hZLTA"
}
```

### 3. Deploy the key service to Heroku

Clone this repository and modify the `server.js` file.
Replace the static JSON response with your generated JSON from step 2.
Create a new Heroku app and deploy your modified key service code.

### 4. Setup Named Credentials in your Salesforce Developer Org

In your Salesforce Setup under **Named Credentials** create for demo purposes a new Named Credential without user authentication. Simply add the URL of your deployed Heroku app from step 3, like https://tegeling-keyservice.herokuapp.com/

See this screenshot for a sample configuration:
![Named Credential setup](/assets/named-credentials.png)

### 5. Configure a Shield Platform Encryption Cache-Only Key

In your Salesforce Setup under **Key Management** choose your Tenant Secret Type like **Data in Salesforce**, then select the option **Bring Your Own Key** and select the following options:

- Select your certificate from step 1
- Select the option **Use a Cache-Only Key** and enter the KID (like myKID) from step 2
- Select your Named Credential from step 4

Save your settings.

![Cache Only Key](/assets/cache-only-key.png)

## Validate your Setup

After you have successfully completed the previous steps, you can validate your setup by checking the **Details** of your new key material.
It should show Status "Active" and Key Material Source as "Fetched".
As described in https://help.salesforce.com/articleView?id=security_pe_byok_cache_check.htm&type=0 you can validate the connection to your new key service like in this screen:

![Validate Key Service Connection](/assets/validate.png)
