
import org.parosproxy.paros.network.HttpMessage
import org.zaproxy.zap.extension.script.HttpSenderScriptHelper


fun proxyRequest(msg:HttpMessage, initiator: Int, helper: HttpSenderScriptHelper) {
 println('proxyRequest called for url=' + msg.getRequestHeader().getURI().toString())
 // Remove the '(?i)' for a case exact match
 val req_str_to_change = "Questions"
 val req_str_to_replace = "Hacked"
 msg.setRequestBody(msg.getRequestBody().toString().replaceAll(req_str_to_change, req_str_to_replace))
 // Update the content length in the header as this may have been changed
 msg.getRequestHeader().setContentLength(msg.getRequestBody().length());

 return true
}


fun proxyResponse(msg:HttpMessage, initiator: Int, helper: HttpSenderScriptHelper){
 println('proxyResponse called for url=' + msg.getRequestHeader().getURI().toString())
 // Remove the '(?i)' for a case exact match
 val req_str_to_change = "Questions"
 val req_str_to_replace = "Hacked"
 msg.setResponseBody(msg.getResponseBody().toString().replaceAll(req_str_to_change, req_str_to_replace))
 // Update the content length in the header as this may have been changed
 msg.getResponseHeader().setContentLength(msg.getResponseBody().length());

 return true
}