/**
 * This function allows interaction with proxy requests (i.e.: outbound from the browser/client to the server).
 * 

* @param msg - the HTTP request being proxied. This is an HttpMessage object.
*/
function proxyRequest(msg) {
 print('proxyRequest called for url=' + msg.getRequestHeader().getURI().toString())
 // Remove the '(?i)' for a case exact match
 var req_str_to_change = "(?i)change from this"
 var req_str_to_replace = "changed to this"
 msg.setRequestBody(msg.getRequestBody().toString().replaceAll(req_str_to_change, req_str_to_replace))
 // Update the content length in the header as this may have been changed
 msg.getRequestHeader().setContentLength(msg.getRequestBody().length());

 return true
}

/**
* This function allows interaction with proxy responses (i.e.: inbound from the server to the browser/client).
* 
* @param msg - the HTTP response being proxied. This is an HttpMessage object.
*/
function proxyResponse(msg) {
 print('proxyResponse called for url=' + msg.getRequestHeader().getURI().toString())
 // Remove the '(?i)' for a case exact match
 var req_str_to_change = "(?i)change from this"
 var req_str_to_replace = "changed to this"
 msg.setResponseBody(msg.getResponseBody().toString().replaceAll(req_str_to_change, req_str_to_replace))
 // Update the content length in the header as this may have been changed
 msg.getResponseHeader().setContentLength(msg.getResponseBody().length());

 return true
}