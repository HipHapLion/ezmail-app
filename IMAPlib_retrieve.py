import socket
import ssl
import itertools

def getUsername(username):
    username = username + ' '
    return username

def getPassword(password):
    password = password + '\r\n'
    return password

def imapSession(popService, port, username, password):
    imapSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    imapSocket.connect((popService, port))

    imapSocket = ssl.wrap_socket(imapSocket)
    #print((imapSocket.recv(1024)).decode())

    imapSocket.send(("tag LOGIN " + getUsername(username) + getPassword(password)).encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag SELECT INBOX\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag LIST '' *\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 1:* (FLAGS)\r\n").encode())
    #print(imapSocket.recv(1024).decode())
    email_list = []

    #print(email_list)
    imapSocket.send(("tag FETCH 1:* (BODY.PEEK[HEADER.FIELDS (SUBJECT)])\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 4155 BODY[HEADER]\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    #imapSocket.send(("tag FETCH 4154 BODY[TEXT]\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    imapSocket.send(("tag LOGOUT\r\n").encode())
    #print(imapSocket.recv(1024).decode())

    total_data = []
    while True:
        data = imapSocket.recv(1024).decode()
        if not data: break
        total_data.append(data)
    del total_data[:3]

    total_data = [s.replace("\r\n", '') for s in total_data]
    total_data = [s.replace("FETCH (BODY[HEADER.FIELDS (SUBJECT)]", '') for s in total_data]
    #total_data = [s.replace(")", '') for s in total_data]
    total_data = [s.split(')') for s in total_data]
    total_data = [item for sublist in total_data for item in sublist]
    total_data = [''.join(total_data)]
    total_data = [s.split('*') for s in total_data]
    total_data = [item for sublist in total_data for item in sublist]
    total_data = list(filter(None, total_data))  # fastest
    total_data = [s.replace("FETCH (BODY[HEADER.FIELDS (SUBJECT]", '') for s in total_data]
    del total_data[-1]
    #print(total_data)
    print('\n'.join(total_data))
imapSession('imap.gmail.com', 993, 'grgrdavtyan@gmail.com', 'password')

