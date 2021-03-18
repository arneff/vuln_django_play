OLD_STRING = "User-Agent"
NEW_STRING = "Hacked-Agent"

def sendingRequest(msg, initiator, helper): 
    global OLD_STRING
    global NEW_STRING

    body = msg.getRequestBody().toString()
    newbody = body.replace(OLD_STRING, NEW_STRING)
    msg.setRequestBody(newbody)
    msg.getRequestHeader().setContentLength(msg.getRequestBody().length())



def responseReceived(msg, initiator, helper): 
    pass
