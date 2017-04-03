import socket
import ssl
import itertools

def getUsername(username):
    username = username + ' '
    return username

def getPassword(password):
    password = password + '\r\n'
    return password

def getMailId(mailId):
    return mailId

def imapSession(popService, port, username, password, mailId):
    imapSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    imapSocket.connect((popService, port))

    imapSocket = ssl.wrap_socket(imapSocket)
    #print((imapSocket.recv(1024)).decode())

    imapSocket.send(("tag LOGIN " + getUsername(username) + getPassword(password)).encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag SELECT INBOX\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag FETCH 4156 BODY[HEADER]\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag FETCH " +getMailId(mailId) + " BODY[TEXT]\r\n").encode())
    print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag LOGOUT\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    while True:
        data = imapSocket.recv(1024).decode()
        print (data)
        if not data: break

    #imapSocket.send(("tag LIST '' *\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 1:* (FLAGS)\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 4155 BODY[HEADER]\r\n").encode())
    #print(imapSocket.recv(1024).decode())
imapSession('imap.gmail.com', 993, 'grgrdavtyan@gmail.com', 'password', '4106')
