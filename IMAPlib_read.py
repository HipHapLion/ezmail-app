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

    #imapSocket.send(("tag FETCH 4156 BODY[HEADER]\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag FETCH " +getMailId(mailId) + " BODY[TEXT]\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag LOGOUT\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    # while True:
    #     data = imapSocket.recv(1024).decode()
    #     print (data)
    #     if not data: break

    total_data = []
    while True:
        data = imapSocket.recv(1024).decode()
        total_data.append(data)
        if not data: break
    del total_data[:3]
    #total_data.remove('tag OK Success\r\n')
    #total_data = [s.split('}\r\n') for s in total_data]
    #fat = total_data[1]
    total_data = [s.replace("FETCH (BODY[TEXT]", '') for s in total_data]
    total_data = [s.replace("\r\n", '') for s in total_data]
    #total_data = [s.split(')') for s in total_data]
    fat = total_data[0]
    fat = fat.split("}", 1)[1]
    fat = fat[:-1]
    #my_string = "hello python world , i'm a beginner "
    #print (my_string.split("world", 1)[1])
    print (fat)
    #imapSocket.send(("tag LIST '' *\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 1:* (FLAGS)\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 4155 BODY[HEADER]\r\n").encode())
    #print(imapSocket.recv(1024).decode())
    imapSocket.close()
# imapSession('imap.gmail.com', 993, 'grgrdavtyan@gmail.com', 'password', '4178')