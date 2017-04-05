import socket
import ssl
import base64

endmsg = "\r\n.\r\n"


def getSenderMail(sender):
    sender = sender + '\r\n'
    return sender

def getRcptMail(rcpt):
    rcpt = rcpt + '\r\n'
    return rcpt

def getSubject(subject):
    subject = subject + '\r\n'
    return subject

def message(msg):
    msg = '\r\n' + msg
    return msg

def getUsername(username):
    return username

def getPassword(password):
     return password

def smtpSession(sender, rcpt, subject, msg, emailService, port, username, password):
    smtpSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    smtpSocket.connect((emailService, port))

    connection = smtpSocket.recv(1024)
    connection = connection.decode()
    print("Connection Message:" + connection)

    helo = "HELO " + emailService + "\r\n"
    smtpSocket.send(helo.encode())
    resHelo = smtpSocket.recv(1024)
    resHelo = resHelo.decode()
    print(resHelo)

    smtpSocket.send(("STARTTLS\r\n").encode())
    ttls = smtpSocket.recv(1024)
    ttls = ttls.decode()
    print(ttls)

    smtpSocket = ssl.wrap_socket(smtpSocket, ssl_version=ssl.PROTOCOL_SSLv23)

    smtpSocket.send(("AUTH LOGIN\r\n").encode())
    username = getUsername(username).encode()
    password = getPassword(password).encode()
    smtpSocket.send(base64.b64encode(username) + '\r\n'.encode())
    smtpSocket.send(base64.b64encode(password) + '\r\n'.encode())

    authres = smtpSocket.recv(1024)
    authres = authres.decode()
    print(authres)

    smtpSocket.send(("MAIL FROM:" + getSenderMail(sender)).encode())
    response = smtpSocket.recv(1024)
    response = response.decode()
    print(response)

    smtpSocket.send(("RCPT TO:" + getRcptMail(rcpt)).encode())
    response1 = smtpSocket.recv(1024)
    response1 = response1.decode()
    print(response1)

    smtpSocket.send(("DATA\r\n").encode())
    response2 = smtpSocket.recv(1024)
    response2 = response2.decode()
    print(response2)

    smtpSocket.send(("Subject: " + getSubject(subject)).encode())
    smtpSocket.send(message(msg).encode())
    smtpSocket.send(endmsg.encode())

    response5 = smtpSocket.recv(1024)
    response5 = response5.decode()
    print(response5)

    smtpSocket.send(("QUIT\r\n").encode())
    response6 = smtpSocket.recv(1024)
    response6 = response6.decode()
    print(response6)

    smtpSocket.close()